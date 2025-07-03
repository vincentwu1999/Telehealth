import React, { useState, useEffect} from "react";
import { jwtDecode } from 'jwt-decode';
import { Img, Line, Text } from "../";
import axios from 'axios';

const NavBar = (props) => {
  const token = props.token
  const [user, setUser] = useState({name:'                    ', email:'', workplace:'',timezone:'',zoomlink:''});
  const [profilePic, setProfilePic] = useState()
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "/profile",
        headers: {
        Authorization: 'Bearer ' + token
        }
    })
    .then((response) => {
        const res = response.data
        setUser(res.data)
        setProfilePic(res.pic)
    }).catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    })
  }, [token, props.proxy]);
  return (
    <>
      <header className={props.className}>
        <div className = "flex flex-row gap-5 items-start justify-start w-full bg-white-A700 h-[95px]">
        {/* <div className="flex flex-row gap-5 items-start justify-start mb-[22px] md:ml-[0] md:mt-0 mt-[30px] w-[14%] md:w-full"> */}
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
        {/* </div> */}
        <div className="flex flex row gap-5 items-center mb-[27px] md:ml-[0] ml-[900px] md:mt-0 mt-[37px]">
        {jwtDecode(token).type === "physician" &&         
            <a href="/appointment">
                <img
                  className="calendar-icon-2"
                  alt="Calendar icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/calendar-icon-21@2x.png"
                />
              </a>}
              <a href="/settings">
                <img
                  className="settings-icon-2"
                  alt="Settings icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/settings-icon-19@2x.png"
                />
              </a>
              <a href="/">
                <img
                  className="chart-icon-2"
                  alt="Chart icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chart-icon-20@2x.png"
                />
              </a>
              {jwtDecode(token).type === "physician" &&
              <a href="/messages">
                <img
                  className="message-icon-2"
                  alt="Message icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/message-icon-19@2x.png"
                />
              </a>}
              </div>
        <Line className="bg-blue_gray-100 md:h-0.5 h-14 mb-[15px] ml-12 md:ml-[0] md:mt-0 mt-[23px] rounded-[1px] w-0.5 md:w-full" />
        <div className="flex flex-row gap-6 items-center justify-center mb-[13px] ml-8 md:ml-[0] mr-[50px] md:mt-0 mt-[23px] w-[12%] md:w-full">
          <div className="flex flex-col h-[57px] items-center justify-start w-[57px]">
              <Img
              className="h-[60px] w-[60px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
              src= {profilePic}
              alt=""
              onLoad ={()=> setImageLoaded(true)}
              />
              <Img
              className="h-[60px] w-[60px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
              src= "images/img_defaultprofile.jpg"
              alt="image"
              style = {{display: imageLoaded? "none": "block"}}
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[64%]">
            <div className="flex flex-row gap-4 items-center justify-between w-full whitespace-nowrap">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-black-900"
                  size="txtCairoBold16"
                >
                  {user.name}
                </Text>
                <Text
                  className="text-gray-500 text-right text-sm"
                  size="txtCairoRegular14"
                >
                  {jwtDecode(token).type}
                </Text>
              </div>
              {/* <Img className="h-2" src="images/img_arrow.svg" alt="arrow" /> */}
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;