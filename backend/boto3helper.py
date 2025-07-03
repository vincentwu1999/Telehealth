def create_bucket_name(bucket_prefix):
    return ''.join([bucket_prefix, str(uuid.uuid4())])

def create_bucket(bucket_prefix, s3):
    bucket_name = create_bucket_name(bucket_prefix)
    bucket_response = s3.create_bucket(
        Bucket=bucket_name
    )
    return bucket_name, bucket_response

def create_file_name(file_name):
    return ''.join([str(uuid.uuid4().hex[:6]), file_name])

def get_unique_folders(bucket_name,s3,prefix=''):
    # List objects within the specified prefix
    response = s3.list_objects_v2(Bucket=bucket_name, Prefix=prefix, Delimiter='/')
    # Extract unique folders (common prefixes)
    folders = [common_prefix.get('Prefix')[:-1] for common_prefix in response.get('CommonPrefixes', [])]
    return folders

# Function to find objects with a specific prefix in the bucket
def find_objects_with_prefix(bucket_name,s3, prefix):
    # List objects in the bucket with the specified prefix
    response = s3.list_objects_v2(Bucket=bucket_name, Prefix=prefix)
    # Check if objects are found
    if 'Contents' in response:
        # Extract the keys of the objects found
        keys = [obj['Key'] for obj in response['Contents']]
        return keys
    # Return None if no objects are found with the specified prefix
    return None

def delete_items_in_folder(bucket_name, folder_prefix,s3):
    # List objects within the specified prefix
    response = s3.list_objects_v2(Bucket=bucket_name, Prefix=folder_prefix)
    # Extract keys (object names) from the response
    keys_to_delete = [obj['Key'] for obj in response.get('Contents', [])]
    # Delete each object
    for key in keys_to_delete:
        s3.delete_object(Bucket=bucket_name, Key=key)