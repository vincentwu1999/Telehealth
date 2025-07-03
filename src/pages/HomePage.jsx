import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconEye, IconEyeInvisible} from '../components';
import './pages.css';
import axios from 'axios';

const HomePage = (props) => {
    const [password, setPassword] = useState('');
    const [profileData, setProfileData] = useState(null)
    const token = props.token
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('');

    const handleToggle = () => {
      setShowPassword(!showPassword);
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: props.proxy + "/profile",
            headers: {
            Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            const res =response.data
            setProfileData(({profile_name: res.name}))
            setUserType(res.type)
            console.log(res.id)
        }).catch((error) => {
            if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    }, [token, props.proxy]);

    function logOut() {
        axios({
            method: "POST",
            url: props.proxy + "/logout",
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        })
        .then((response) => {
            props.removeToken()
        }).catch((error) => {
           if (error.response) {
             console.log(error.response)
             console.log(error.response.status)
             console.log(error.response.headers)
             }
        })
    };

    function deleteAccount() {
        axios({
            method: "POST",
            url: props.proxy +"/delete",
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        })
        .then((response) => {
            props.removeToken()
        }).catch((error) => {
           if (error.response) {
             console.log(error.response)
             console.log(error.response.status)
             console.log(error.response.headers)
             }
        })
    };

    const updatePassword = (e) => {
        e.preventDefault();
        axios({
            method:"POST",
            url: props.proxy +"/update_password",
            data:{
              password: password
            },
            headers: {
                Authorization: 'Bearer ' + token
            }
          })
          .then((response)=>{
          }).catch((error)=>{
            if(error.response){
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
          setPassword('');
    };

    return (
        <div className="home">
            <h1 className="main-title home-page-title">{profileData? "Welcome " + profileData.profile_name : "Loading..."}</h1>
            <button className="primary-button" onClick={logOut}><span>Log out</span></button>
            {userType === "administrator"? <Link to="/user_management"><button className='link-btn'>User Management</button></Link> :
                          <button className="primary-button" onClick={deleteAccount}><span>Delete account</span></button>}
            <form className="login-form" onSubmit={(e) => updatePassword(e)}>
                <label htmlFor="password"> New Password</label>
                {/* <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/> */}
                <div className = 'password-container'>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword? "text": "password"} placeholder="********" id="password" name="password" required/>
                    <button onClick={handleToggle} type="button">
                        {showPassword? <IconEye  width='32px' height='32px' color='darkgray'/> : <IconEyeInvisible width='32px' height='32px' color='darkgray'/> }
                    </button>
                </div>
                <button className='primary-button' id="reg_btn" type="submit"><span>Update password</span></button>
            </form>
            <Link to="/upload_files"><button className='link-btn'>Upload files</button></Link>
        </div>
        
    );
}

export default HomePage

