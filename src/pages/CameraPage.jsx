import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Webcam from "react-webcam";
import {Camera} from "react-camera-pro";
import {Input, Text, Img} from "../components";
const CameraPage = (props) => {
  const location = useLocation();
  const webcamRef = React.useRef(null);
  const [showCamera, setShowCamera] = useState(true);
  const [image, setImage] = useState(null)

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      setShowCamera(false);
    },
    [webcamRef]
  );

  const handleSubmit = () => {
      const video = document.getElementById("video-replay");
      console.log(video.src);
    };
  

  return (
      <div className=" relative flex flex-col">
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
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className={showCamera ? '' : 'hidden'} videoConstraints={{facingMode:"environment"}}/>
      <Img src={image} alt="No Image" className={showCamera ? 'hidden' : ''}></Img>
  <footer className="absolute bottom-[-150px] w-full">
  <div className="flex flex-col gap-[10px] justify-center items-center w-full">
      {showCamera ? (
          <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[200px] md:w-full h-[50px] rounded-[20px]"
          onClick={() => capture()}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Take Photo</Text></button>
      ) : (
          <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[200px] md:w-full h-[50px] rounded-[20px]"
          onClick={() => setShowCamera(true)}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Retake Photo</Text></button>
      )}
      {!showCamera && (
        <div>
           <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[200px] md:w-full h-[50px] rounded-[20px]"
          onClick={handleSubmit}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Submit</Text></button>
        </div>
      )}      
      </div>
      </footer>
    </div>
  );
}
export default CameraPage;