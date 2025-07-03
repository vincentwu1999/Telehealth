import json
import os
from flask import Flask, request, jsonify, url_for, send_from_directory, redirect
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager, decode_token
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import boto3
from boto3helper import get_unique_folders, delete_items_in_folder, find_objects_with_prefix
from itsdangerous import URLSafeTimedSerializer
from flask import Flask, redirect, request
import requests
import base64
import uuid
from urllib.parse import urlparse
from datetime import date

api = Flask(__name__)
# OAuth client credentials

with open('credentials.json', 'r') as file:
    # Load the JSON data into a Python dictionary
    data = json.load(file)

CLIENT_ID = data['CLIENT_ID']
CLIENT_SECRET = data['CLIENT_SECRET']
TOKEN_URL = 'https://oauth2.googleapis.com/token'
SCOPE = 'https://www.googleapis.com/auth/gmail.send'  
ACCESS_TOKEN = None

# Redirect URI for receiving authorization code
REDIRECT_URI = 'http://localhost:5000/oauth2callback'

# Route for initiating OAuth flow
@api.route('/authorize')
def authorize():
    # Construct the authorization URL
    auth_url = (
        'https://accounts.google.com/o/oauth2/auth?'
        'client_id={}&redirect_uri={}&response_type=code&scope={}'
    ).format(CLIENT_ID, REDIRECT_URI, SCOPE)
    # Redirect the user to the authorization URL
    return redirect(auth_url)

# Route for handling OAuth callback
@api.route('/oauth2callback')
def oauth2callback():
    global ACCESS_TOKEN
    # Exchange authorization code for access token
    code = request.args.get('code')
    token_params = {
        'code': code,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'redirect_uri': REDIRECT_URI,
        'grant_type': 'authorization_code'
    }
    response = requests.post(TOKEN_URL, data=token_params)
    token_data = response.json()
    ACCESS_TOKEN = token_data['access_token']
    with open("token.json", "w") as token:
      token.write(json.dumps(token_data))
    return "Success"

def send_email(subject, body, recipient):
    global ACCESS_TOKEN

    if not ACCESS_TOKEN:
        return "Not Authorized"

    # Construct email message
    email_message = f"From: sender@example.com\r\nTo: {recipient}\r\nSubject: {subject}\r\n\r\n{body}"
    encoded_message = base64.urlsafe_b64encode(email_message.encode()).decode()
    message = {
        'raw': encoded_message
    }

    # Send email using Gmail API
    gmail_response = requests.post(
        'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
        headers={'Authorization': 'Bearer ' + ACCESS_TOKEN, 'Content-Type': 'application/json'},
        data=json.dumps(message)
    )

    # Process Gmail API response
    return gmail_response.text

if __name__ == '__main__':
    api.run(debug=True)

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'wav'}
REACT_APP_BASE_URL = "http://localhost:3000"

s3 = boto3.client('s3')
USER_BUCKET = 'user-info-0dd3917d-36b1-4a11-93e9-38bede536480'
PATIENT_BUCKET = 'patient-info-f1b3f8e4-0d52-4cd4-9d41-d134b35ca1a2'

user = {'name':'',
        'password': '',
        'type': ''}
    
CORS(api)
api.config["SECRET_KEY"] = str(uuid.uuid4())
api.config["JWT_SECRET_KEY"] = str(uuid.uuid4())
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if (email not in get_unique_folders(USER_BUCKET,s3)):
        return {"msg": "Email not registered"}, 401
    else:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        response = json.loads(response['Body'].read().decode('utf-8'))
        if (not response['is_confirmed']):
            return {"msg": "Email not confirmed"}, 401
        elif (check_password_hash(response['password'],password)):
            access_token = create_access_token(identity=email, additional_claims={"type":response['type']})
            response = {"access_token":access_token}
            return response
        else:
            response = {"msg": "Wrong password"}
            return response, 401

@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity(),additional_claims = get_jwt().get("additional_claims", {}))
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response
    
@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    if (email in get_unique_folders(USER_BUCKET,s3=s3)):
        return {"msg": "Email already registered"}, 400
    else:
        user = {}
        user['name'] = request.json.get("name",None)
        user['workplace']= ''
        user['timezone']= ''
        user['zoomlink']= ''
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/details.json')
        user = {}
        user['password'] = generate_password_hash(request.json.get("password", None))
        user['is_confirmed'] = False
        user['type'] = request.json.get("accountType", None)
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/password.json')
        response = jsonify({"msg": "registered new user"})
        # access_token = create_access_token(identity=email)
        # response = {"access_token":access_token}
        return response
        
@api.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route("/delete", methods=["POST"])
@jwt_required()
def delete_user():
    token = get_jwt()
    print(token)
    print(token['type'])
    if token:
        if (token['type'] == 'admin'):
            email = request.json.get("email", None)
        else:
            email = get_jwt_identity()
            unset_jwt_cookies()
        delete_items_in_folder(USER_BUCKET,email+"/",s3)
        response = jsonify({"msg": "Account deletion successful"})
        return response
    return {"msg": "Account not found"}, 400

@api.route("/update_password", methods=["POST"])
@jwt_required()
def update_password():
    pw_hash = generate_password_hash(request.json.get("password", None))
    email = get_jwt_identity()
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        user['password'] = pw_hash
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/password.json')
        return {"msg": "Password updated"}
    else:
        return {"msg": "User does not exist"}, 400

@api.route("/update_profile", methods=["POST"])
@jwt_required()
def update_profile():
    email = get_jwt_identity()
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/details.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        for key, value in request.json.items():
            if value:
                user[key] = value
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/details.json')
        user['email'] = email
        return {"msg": "Profile updated", "data": user}
    else:
        unset_jwt_cookies()
        return {"msg": "User does not exist"}, 400

@api.route('/update_profile_pic', methods=["POST"])
@jwt_required()
def update_profile_pic():
    email = get_jwt_identity()
    if email:
        image_file = request.files['image']
        filename = secure_filename(image_file.filename)
        extension = os.path.splitext(filename)[1]
        s3.upload_fileobj(Fileobj=image_file, Bucket= USER_BUCKET, Key= email + f'/picture{extension}')
        presigned_url = s3.generate_presigned_url('get_object',
                                                      Params={'Bucket': USER_BUCKET, 'Key': email + f'/picture{extension}'},
                                                      ExpiresIn=60)
        return {"msg": "Profile updated", "data": presigned_url}
    else:
        unset_jwt_cookies()
        return {"msg": "User does not exist"}, 400
    
@api.route('/profile')
@jwt_required()
def get_profile():
    email = get_jwt_identity()
    if (email not in get_unique_folders(USER_BUCKET,s3=s3)):
        unset_jwt_cookies()
        return {"msg": "Not a registered user"}, 400
    response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/details.json')
    profile = json.loads(response['Body'].read().decode('utf-8'))
    profile['email']=email
    pic_key = find_objects_with_prefix(USER_BUCKET,s3, email + '/picture')
    if pic_key:
        presigned_url = s3.generate_presigned_url('get_object',
                                                      Params={'Bucket': USER_BUCKET, 'Key': pic_key[0]},
                                                      ExpiresIn=60)  # URL expiration time in seconds
    else:
        presigned_url = ''
    return {'data': profile, 'pic':presigned_url}

@api.route('/reset_password_link', methods=['POST'])
def request_reset_password():
    email = request.json.get("email", None)
    print(email)
    if (email in get_unique_folders(USER_BUCKET,s3=s3)):
        # Generate a token
        s = URLSafeTimedSerializer(api.config['SECRET_KEY'])
        token = s.dumps(email, salt='reset-password')
        reset_url = urlparse(REACT_APP_BASE_URL)
        reset_url = reset_url._replace(path='reset_password',query=f"token={token}")
        reset_url = reset_url.geturl()
        print(reset_url)
        msg = f"Click the link to reset your password: \n {reset_url}"
        res = send_email("Virtual Physical: Password Reset", msg, email)
        print(res)
        return {"msg": "Reset email sent"}
    return {"error": "Email not registered"}, 400

@api.route('/reset_password', methods=['POST'])
def reset_password():
    token = request.json.get("token", None)
    print(token)
    # Validate the token
    s = URLSafeTimedSerializer(api.config['SECRET_KEY'])
    try:
        email = s.loads(token, salt='reset-password', max_age=3600)
        print(email)
    except Exception as e:
        return {"error": "Email not found"}, 400
    pw_hash = generate_password_hash(request.json.get("password", None))
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        user['password'] = pw_hash
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/password.json')
        return {"msg": "Password updated"}
    else:
        return {"msg": "User does not exist"}, 400

@api.route('/all_users')
@jwt_required()
def get_all_users():
    emails =  get_unique_folders(USER_BUCKET,s3=s3)
    print(emails)
    users = []
    for email in emails:
        user = {}
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/details.json')
        response = json.loads(response['Body'].read().decode('utf-8'))
        user['name'] = response['name']
        user['email'] = email
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        response = json.loads(response['Body'].read().decode('utf-8'))
        user['type'] = response['type']
        user['is_confirmed'] = response['is_confirmed']
        if (response['type'] != 'admin'):
            users.append(user)
    print(users)
    return jsonify(users)

@api.route('/confirm', methods=["POST"])
@jwt_required()
def confirm_user_link():
    email = request.json.get("email", None)
    if (email in get_unique_folders(USER_BUCKET,s3=s3)):
        # Generate a token
        s = URLSafeTimedSerializer(api.config['SECRET_KEY'])
        token = s.dumps(email, salt='confirm-email')
        authorize_url = url_for("confirm_user", token=token, _external=True)
        print(authorize_url)
        msg = f"Click the link to confirm your email: \n {authorize_url}"
        res = send_email("Virtual Physical: Authorize Email", msg, email)
        print(res)
        return {"msg": "Authorize email sent"}
    return {"error": "Email not registered"}, 400

@api.route('/confirm/<token>')
def confirm_user(token):
    # Validate the token
    s = URLSafeTimedSerializer(api.config['SECRET_KEY'])
    try:
        email = s.loads(token, salt='confirm-email', max_age=3600)
        print(email)
    except Exception as e:
        return {"error": "Email not found"}, 400
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        user['is_confirmed'] = True
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/password.json')
        return redirect(REACT_APP_BASE_URL)
    else:
        return {"msg": "User does not exist"}, 400

@api.route('/select_patient', methods=["POST"])
@jwt_required()
def select_patient():
    token = get_jwt()
    email = request.json.get("email",None)
    name = request.json.get("name",None)
    if (token['type'] == 'medical-tech'):
        today = str(date.today())
    else:
        today = request.json.get("date", None)
    folder = email + "/" + name + "/" + today
    additional_claims = {}
    additional_claims['type'] = token['type']
    additional_claims['patient'] = folder
    access_token = create_access_token(identity=email, additional_claims=additional_claims)
    return {"access_token":access_token}

@api.route('/upload_json', methods=["POST"])
@jwt_required()
def upload_json():
    folder =  get_jwt().get("patient")
    filename = request.json.get('filename', None)
    data = request.json.get("data", None)
    s3.put_object(Body=json.dumps(data), Bucket= USER_BUCKET, Key= folder+filename)
    return {"msg": "Succesfully Uploaded!"}

@api.route('/upload_file', methods=["POST"])
@jwt_required()
def upload_file():
    folder =  get_jwt().get("patient")
    filename = request.json.get('filename', None)
    file = request.files['file']
    s3.upload_fileobj(Fileobj=file, Bucket= USER_BUCKET, Key= folder+filename)
    return {"msg": "Succesfully Uploaded!"}

@api.route('/download/<tab>')
@jwt_required()
def download_file(tab):
    folder = get_jwt().get("patient")
    folder = folder + tab
    all_files = find_objects_with_prefix(PATIENT_BUCKET,s3,folder)
    data = {}
    for file in all_files:
        if ".json" in file:
            response = s3.get_object(Bucket=PATIENT_BUCKET, Key = file)
            data[file] = json.loads(response["Body"]).read().decode('utf-8')
        else:
            data[file] = s3.generate_presigned_url('get_object',
                                                      Params={'Bucket': PATIENT_BUCKET, 'Key': file},
                                                      ExpiresIn=60)  # URL expiration time in seconds
    return data


@api.route('/send_message')
@jwt_required()
def send_message():
    email = request.json.get('email', None)
    msg = request.json.get('msg', None)
    send_email("Virtual Physical", msg, email)
    return {"msg": "Message sent"}
    
# with api.app_context():
#     # Making a default account
#     user['name'] = "Administrator"
#     user['workplace']= ''
#     user['timezone']= ''
#     user['zoomlink']= ''
#     email = 'virtualphysical23@gmail.com'
#     s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/details.json')
#     is_confirmed = True
#     s3.put_object(Body=json.dumps({'password':generate_password_hash("Senior*Design23"), 'is_confirmed': is_confirmed, 'type': "admin"}), Bucket= USER_BUCKET, Key= email + '/password.json')