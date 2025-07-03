import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { Img, Input, Text, NavBar} from "../components";
import { Navigate } from 'react-router-dom';
import { EditOutlined, EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { jwtDecode } from 'jwt-decode';

const UserSettingsPage = (props) => {
  const token = props.token
  const [user, setUser] = useState({name:'', email:'', workplace:'',timezone:'',zoomlink:''});
  const [showPassword, setShowPassword] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [originalUser, setOriginalUser] = useState({name:'David Ochoa', email:'dr.david.ochoa@gmail.com', workplace:'Houston Methodist',timezone:'Central Standard Time (GMT-6)',zoomlink:'https://houstonmethodist.zoom.us/my/davidochoa'});
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState()
  const [imageLoaded, setImageLoaded] = useState(false);
  const [navigate, setNavigate] = useState(); 

  useEffect(() => {
    const handleTokenExpiration = () => {
      if (props.checkToken()) {
        props.removeToken();
        setNavigate("/")
      }
    };
    console.log(jwtDecode(props.token))
    axios({
        method: "GET",
        url: props.proxy + "/profile",
        headers: {
        Authorization: 'Bearer ' + token
        }
    })
    .then((response) => {
        const res = response.data
        setOriginalUser(res.data)
        setProfilePic(res.pic)
    }).catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    })
    handleTokenExpiration();
  }, [token, props]);

  const handleCancel = () => {
    setUser({name:'', email:'', workplace:'',timezone:'',zoomlink:'',password:''});
    setEdit(!edit);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      await axios({
        method:"POST",
        url: props.proxy + "/update_profile",
        data: user,
        headers: {
          Authorization: 'Bearer ' + token
          }
      }).then((response) => {
        const res =response.data
        setOriginalUser(res.data)
    })
      .catch((error)=>{
        if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
      setEdit(!edit)
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    axios({
        method:"POST",
        url: props.proxy +"/update_password",
        data:{
          password: newPassword
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
      setNewPassword('');
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
        console.error('No file selected.');
        return;
    }
    const formData = new FormData();
    formData.append('image', file, file.name);
    axios({
        method: "POST",
        url: props.proxy+"/update_profile_pic",
        data: formData,
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      const res = response.data
      setProfilePic(res.data)
    }).catch((error)=>{
        if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
    // e.preventDefault();
    // const file = e.target.files[0];
    // if (!file) {
    //     console.error('No file selected.');
    //     return;
    // }
    // const formData = new FormData();
    // formData.append('file', file, file.name);
    // formData.append('location', "/profile/image")
    // console.log(formData)
    // axios({
    //     method: "POST",
    //     url: props.proxy+"/upload_file",
    //     data: formData,
    //     headers: {
    //         Authorization: 'Bearer ' + props.token
    //     }
    // }).then((response) => {
    //   const res = response.data
    //   console.log(res)
    //   // setProfilePic(res.data)
    // }).catch((error)=>{
    //     if(error.response){
    //         console.log(error.response)
    //         console.log(error.response.status)
    //         console.log(error.response.headers)
    //     }
    // })
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  function logOut() {
    axios({
        method: "POST",
        url: props.proxy + "/logout",
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })
    .then(() => {
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
    .then(() => {
        props.removeToken()
    }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
    })
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-screen">
      <NavBar  proxy={props.proxy} token={props.token}></NavBar>
        <div className="bg-gray-50 flex flex-col items-center justify-start pb-[20px] w-full">
          <div className="flex flex-col justify-start w-full">
            <Text className="font-cairo font-semibold md:ml-[0] ml-[97px] mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900">
              User Profile
            </Text>
            <div className="flex md:flex-col flex-row font-cairo gap-[33px] items-end justify-start md:ml-[0] ml-[115px] mt-[23px] md:px-5 w-[49%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-3/5 md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                        <Text className="font-bold text-xl text-black-900">Email </Text>
                        <Text className="text-xl text-black-900">{originalUser.email}</Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <Text className="font-bold text-xl text-black-900">Name </Text>
                        {edit?
                        <Input
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          value={user.name} 
                          onChange={(e) => handleInputChange(e)}
                          type="text" 
                          placeholder={originalUser.name}
                          id="name" 
                          name="name" 
                          autoComplete="off" 
                          required></Input>:
                          <Text className="text-xl text-black-900">{originalUser.name}</Text>
                          }
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                          <Text className="font-bold text-xl text-black-900"> Workplace </Text>
                          {edit?
                          <Input
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                            wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                            value={user.workplace} 
                            onChange={(e) => handleInputChange(e)}
                            type="text" 
                            placeholder={originalUser.workplace}
                            id="workplace" 
                            name="workplace" 
                            autoComplete="off" 
                            required
                          ></Input>:
                          <Text className="text-xl text-black-900">{originalUser.workplace}</Text>
                          }
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                          <Text className="font-bold text-xl text-black-900">Time zone </Text>
                          {edit?
                          <Input
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                            wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                            value={user.timezone} 
                            onChange={(e) => handleInputChange(e)}
                            type="text" 
                            placeholder={originalUser.timezone}
                            // placeholder="Central Standard Time (GMT-6)" 
                            id="timezone" 
                            name="timezone" 
                            autoComplete="off" 
                            required
                          ></Input>:
                          <Text className="text-xl text-black-900">{originalUser.timezone}</Text>
                          }
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                          <Text className="font-bold text-xl text-black-900">Zoom link </Text>
                          {edit? 
                          <Input
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                            wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                            value={user.zoomlink} 
                            onChange={(e) => handleInputChange(e)}
                            type="text" 
                            placeholder={originalUser.zoomlink}
                            id="zoomlink" 
                            name="zoomlink" 
                            autoComplete="off" 
                            required
                          ></Input>:
                          <Text className="text-xl text-black-900">{originalUser.zoomlink}</Text>
                          }
                      </div>
                      {edit?
                      <div className="flex flex-row w-full">
                      <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
                      onClick={(e) => handleSubmit(e)}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Submit</Text>
                      </button>
                      <button className=" flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px] border-0"
                      onClick={() => handleCancel()}>
                        <Text className="font-semibold md:ml-[0] text-black-900 text-xl">Cancel</Text>
                      </button>
                      </div>:
                      <button className="flex md:flex-col flex-row md:gap-5 ml-5px items-start justify-center mt-2.5 w-[96%] md:w-full border-0"
                              onClick={() => setEdit(!edit)}>
                        <EditOutlined style={{ fontSize: '24px' }} />
                        <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Edit Profile</Text>
                      </button>}
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-1/4 md:w-full">
                    <Text className="font-bold text-black-900 text-xl">Profile Picture</Text>
                    <div className="flex flex-col items-center justify-start mt-1 w-full">
                        <Img
                        className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                        src= {profilePic}
                        alt=""
                        onLoad ={()=> setImageLoaded(true)}
                        // style = {{display: imageLoaded? "none": "block"}}
                        />
                        <Img
                        className="h-auto md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                        src= "images/img_defaultprofile.jpg"
                        alt="image"
                        style = {{display: imageLoaded? "none": "block"}}
                      />
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*" // Accept only image files
                      onChange={handleImageUpload}
                    />
                    <button className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-2.5 w-[96%] md:w-full border-0"
                            onClick = {handleUploadClick}>
                      <Img
                        className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Edit image</Text>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Text className="font-cairo font-semibold md:ml-[0] ml-[97px] mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900">
              User Settings
            </Text>
            <div className="flex md:flex-col flex-row font-cairo gap-[33px] items-end justify-start md:ml-[0] ml-[115px] mt-[23px] md:px-5 w-[49%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-3/5 md:w-full">               
                      <div className="flex flex-col items-start justify-start w-full mt-6">
                        <Text className="font-bold text-xl text-black-900">Update Password</Text>
                        <div className="relative w-full">
                        <Input
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          value={newPassword} 
                          onChange={(e) => setNewPassword(e.target.value)} 
                          type={showPassword? "text": "password"} 
                          placeholder="New password"
                          id="password" 
                          name="password" 
                          required
                        ></Input>
                        <button className= "border-none outline-none absolute top-[20%] right-[5%] bg-transparent" 
                        onClick={() => setShowPassword(!showPassword)} >
                        {showPassword? 
                          <EyeTwoTone style={{fontSize: '32px'}} twoToneColor='#8a8a8a'/> : 
                          <EyeInvisibleTwoTone style={{fontSize: '32px'}} twoToneColor='#8a8a8a'/> }
                        </button>
                        </div>
                        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
                        onClick={(e) => handlePasswordUpdate(e)}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Update</Text>
                      </button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full mt-6">
                        <Text className="font-bold text-xl text-black-900">Delete Account</Text>
                        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
                        onClick={() => deleteAccount()}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Delete</Text>
                      </button>
                      </div>
                      <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
                        onClick={() => logOut()}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Log out</Text>
                      </button>
                      {navigate ? (<Navigate replace to= {navigate} />) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettingsPage;
