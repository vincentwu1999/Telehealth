import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useLocation, Navigate } from 'react-router-dom';
import { Img, Input, Text} from "../components";
import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';

const ResetPasswordPage = (props) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const [navigate, setNavigate] = useState();

    useEffect(() => {
      if (!token){
        setNavigate("/")
      }
    }, []);

    const handleToggle = () => {
      setShowPassword(!showPassword);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method:"POST",
            url: props.proxy +"/reset_password",
            data:{
              password: password,
              token: token
            },
          })
          .then((response)=>{
            setNavigate('/')
          }).catch((error)=>{
            if(error.response){
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
          setPassword('');
    }

    return (
        <>
          <div className="flex flex-col h-screen">
      <header >
        <div className = "flex flex-row gap-5 items-start justify-start w-full bg-white-A700 h-[95px]">
          <Img
            className="h-[35px] w-[35px] mt-[30px] ml-[100px]"
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 mt-[30px]"
            size="txtDMSansMedium30"
            style={{ whiteSpace: 'nowrap' }}
          >
            Virtual Physical
          </Text>
        </div>
      </header>
        <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
          <div className="bg-gray-50 flex flex-col justify-start pb-[641px] w-full">
            <div className="bg-blue-50 flex flex-col font-cairo items-start justify-start mt-11 mx-auto pt-0.5 px-0.5 md:px-5 rounded-[20px] shadow-bs2 w-[55%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-start justify-start ml-0.5 md:ml-[0] w-[93%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-2 w-[52%] md:w-full">
                  <Img
                    className="h-[607px] md:h-auto mb-[3px] object-cover w-[89%]"
                    src="images/img_untitleddesign.png"
                    alt="untitleddesign"
                  />
                </div>
                <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start md:mt-0 mt-[22px] w-[41%] md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text className="font-bold sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center">
                      Reset Password
                    </Text>
                    <div className="flex flex-col font-helvetica relative w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                        <Text className="font-bold text-base text-black-900">Password</Text>
                          <div className="relative w-full">
                          <Input
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                            wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type={showPassword? "text": "password"} 
                            placeholder="********" 
                            id="password" 
                            name="password" 
                            required
                          ></Input>
                          <button class= "border-none outline-none absolute top-[20%] right-[5%] bg-transparent" onClick={handleToggle} >
                          {showPassword? 
                          <EyeTwoTone style={{fontSize: '32px'}} twoToneColor='#8a8a8a'/> : 
                          <EyeInvisibleTwoTone style={{fontSize: '32px'}} twoToneColor='#8a8a8a'/> }
                          </button>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                  <button className="bg-indigo-A200 flex flex-col h-[50px] items-center justify-start md:px-10 sm:px-5 px-[93px] rounded-[20px] w-full"
                          onClick={handleSubmit}>
                    <Text className="flex flex-row font-bold items-center justify-center leading-[20.00px] mt-2.5 text-center text-white-A700 text-xl w-full">
                      Update Password
                    </Text>
                  </button>
                  <Link to="/"><button className='border-none bg-none text-blue-500 underline'>Return to login</button></Link>
                  {navigate ? (<Navigate replace to= {navigate} />) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>

    );
}

export default ResetPasswordPage
