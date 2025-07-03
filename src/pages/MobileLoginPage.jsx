import axios from 'axios';
import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Img, Input, Text} from "../components";
import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';

const MobileLoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    // useEffect(() => {
    //     // Prevent scrolling when the component mounts
    //     document.body.style.overflow = 'hidden';
    //     // Re-enable scrolling when the component unmounts
    //     return () => {
    //       document.body.style.overflow = 'visible';
    //     };
    //   }, []);

    const handleToggle = () => {
      setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method:"POST",
          url: props.proxy + "/token",
          data:{
            email: email,
            password: password
          }
        })
        .then((response)=>{
          console.log(response.data)
          props.setToken(response.data.access_token)
        }).catch((error)=>{
          if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            setError(error.response)
          }
        })
        setEmail('');
        setPassword('');
        setError(null);
    }

    return (
      <>
      <div className="flex flex-col h-screen">
      <header >
        <div className = "flex flex-row gap-5 items-center justify-center w-full bg-white-A700 h-[80px]">
          <Img
            className="h-[50px] w-[50px] "
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="text-3xl sm:text-[50px] md:text-[28px] text-black-900"
            size="txtDMSansMedium30"
            style={{ whiteSpace: 'nowrap' }}
          >
            Virtual Physical
          </Text>
        </div>
      </header>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-screen">
        <div className="bg-gray-50 flex flex-col justify-center items-center w-full pb-[50px]">
          <div className="bg-blue-50 flex flex-col font-cairo items-start justify-start mt-[50px] mx-auto rounded-[20px] shadow-bs2 pb-[50px] w-[85%]">
            <div className="flex flex-row items-center justify-center w-[100%] ">
              <div className="flex flex-col md:gap-10 items-center justify-center md:mt-0 mt-[22px] w-[95%] ml-[50px] mr-[50px]">
                <div className="flex flex-col items-center justify-center w-full">
                  <Text className="font-bold text-[50px] text-black-900 text-center">
                    Login
                  </Text>
                  <div className="flex flex-col font-helvetica relative w-full items-center">
                  {error? <p>{error.data["msg"]}</p> : null}
                    <div className="flex flex-col gap-[20px] items-center justify-center mx-auto w-full">
                      <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                        <Text className="font-bold text-[25px] text-black-900">Email</Text>
                        <Input
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-[25px] text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          type="email" 
                          placeholder="youremail@gmail.com" 
                          id="email" 
                          name="email" 
                          autoComplete="off" 
                          required
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start pb-4 w-full">
                        <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                          <Text className="font-bold text-[25px] text-black-900">Password</Text>
                          <div className="relative w-full">
                          <Input
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-[25px] text-left w-full"
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
                          <button className= "border-none outline-none absolute top-[20%] right-[5%] bg-transparent" onClick={handleToggle} >
                          {showPassword? 
                          <EyeTwoTone style={{fontSize: '35px'}} twoToneColor='#8a8a8a'/> : 
                          <EyeInvisibleTwoTone style={{fontSize: '35px'}} twoToneColor='#8a8a8a'/> }
                          </button>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                  {/* <Link to="/forgot_password"><button className='text-[20px] border-none bg-none text-blue-500 underline pb-12'>Forgot your password?</button></Link> */}
                </div>
                <button className="bg-indigo-A200 flex flex-col h-[50px] w-[60%] items-center justify-start md:px-10 sm:px-5 px-[93px] rounded-[20px] w-full mt-[50px]"
                        onClick={handleSubmit}>
                  <Text className="flex flex-row font-bold items-center justify-center leading-[20.00px] mt-2.5 text-center text-white-A700 text-[30px] w-full">
                    Login
                  </Text>
                </button>
                {/* <Link to="/register"><button className='border-none text-[20px] bg-none text-blue-500 underline pt-4'>Don't have an account? Register here</button></Link> */}
              </div>
            </div>
          </div>
          <Img
                  className="h-[600px] md:h-auto object-cover w-auto mt-[-55px]"
                  src="images/img_untitleddesign.png"
                  alt="untitleddesign"
                />
        </div>
      </div>
      </div>
    </>
    );
}

export default MobileLoginPage
