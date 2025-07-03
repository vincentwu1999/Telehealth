import axios from 'axios';
import React, { useState} from "react";
import { Link, Navigate } from 'react-router-dom';
import { Img, Input, Text, NavBar} from "../components";
import { jwtDecode } from 'jwt-decode';

const PatientSearchPage = (props) => {
    const [newUser, setNewUser] = useState({email: '', date: '', name:''});
    const [navigate, setNavigate] = useState();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method:"POST",
          url: props.proxy + "/select_patient",
          data:{
            email: newUser.email,
            name: newUser.name,
          },
          headers: {
            Authorization: 'Bearer ' + props.token
          }
        })
        .then((response)=>{
          props.setToken(response.data.access_token)
          setNavigate('/demographics')
        }).catch((error)=>{
          if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            setError(error.response)
          }
        })
        setNewUser({email: '', date: '', name:''});
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
          ...newUser,
          [name]: value,
        });
    };

    return (
    <>
    <div className="flex flex-col h-screen">
    <NavBar proxy={props.proxy} token={props.token}></NavBar>
    <div className="flex-1 bg-gray-50 flex flex-col items-center justify-start pb-[120px]">
    <div className="bg-blue-50 flex flex-col font-cairo items-start justify-start mt-11 mx-auto md:px-5 rounded-[20px] shadow-bs2 w-[55%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-start justify-start md:ml-[0] w-[93%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start w-[52%] rounded-l-[20px] md:w-full" >
              <Img
                className="h-[607px] md:h-auto mb-[3px] object-cover w-[89%]"
                src="images/img_untitleddesign.png"
                alt="untitleddesign"
              />
            </div>
            <div className="flex flex-col md:gap-10 items-center justify-start md:mt-0 mt-[22px] w-[41%] md:w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text className="font-bold sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center">
                  Create Patient Chart
                </Text>
                <div className="flex flex-col font-helvetica relative w-full">
                {error? <p>{error.data["msg"]}</p> : null}
                  <div className="flex flex-col gap-[15px] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                      <Text className="font-bold text-base text-black-900">Name</Text>
                      <Input
                        className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                        wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                        value={newUser.name} 
                        onChange={(e) => handleInputChange(e)}
                        type="text" 
                        placeholder="John Doe" 
                        id="name" 
                        name="name" 
                        autoComplete="off" 
                        required
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                        <Text className="font-bold text-base text-black-900">Email</Text>
                        <Input
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          value={newUser.email} 
                          onChange={(e) => handleInputChange(e)} 
                          type="email"
                          placeholder="youremail@gmail.com"
                          id="email" 
                          name="email" 
                          required
                        ></Input>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
              <button className="bg-indigo-A200 flex flex-col h-[50px] items-center justify-start md:px-10 sm:px-5 px-[93px] rounded-[20px] w-full mt-[20px]"
                      onClick={handleSubmit}>
                <Text className="flex flex-row font-bold items-center justify-center leading-[20.00px] mt-2.5 text-center text-white-A700 text-xl w-full">
                  Create Chart
                </Text>
              </button>
              {navigate ? (<Navigate replace to= {navigate} />) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    );
}

export default PatientSearchPage

