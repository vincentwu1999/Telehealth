import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Webcam from "react-webcam";
import { Img, Input, Text} from "../components";
const VideoPage = (props) => {
    const location = useLocation();
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const isInitialMount = React.useRef(true);
    const [showCamera, setShowCamera] = useState(true);

    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
        console.log(location);
      } else {
        if (!capturing) {
          handleDownload();
        }
      }
    }, [recordedChunks])

    const handleStartCaptureClick = React.useCallback(() => {
      setShowCamera(true);
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/mp4"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
      
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

        const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/mp4"
        });
        const url = URL.createObjectURL(blob);
        const video = document.getElementById("video-replay");
        video.src = url;
        setShowCamera(false)
      }
    }, [recordedChunks]);

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
        <Webcam audio={false} ref={webcamRef} className={showCamera ? '' : 'hidden'} videoConstraints={{facingMode:"environment"}}/>
        <video id="video-replay" controls className={showCamera ? 'hidden' : ''}></video>
    <footer className="absolute bottom-[-150px] w-full">
    <div className="flex flex-col gap-[10px] justify-center items-center w-full">
        {capturing ? (
            <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[200px] md:w-full h-[50px] rounded-[20px]"
            onClick={handleStopCaptureClick}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Stop Capture</Text></button>
        ) : (
            <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[200px] md:w-full h-[50px] rounded-[20px]"
            onClick={handleStartCaptureClick}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Start Capture</Text></button>
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
export default VideoPage;