import React from "react";
import "./style.css";
import { NavBar } from 'components'

export const MessagesPage = (props) => {
  return (
    <div className="page">
      <div className="overlap-wrapper">
        <div className="overlap">
          
        <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


          <div className="overlap-2">
            <div className="message-tab">
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-1-4@2x.png"
              />
              <div className="rectangle" />
            </div>
            <div className="message-background" />
            <p className="dear-taylor-swift">

              <textarea className="text-area-3" defaultValue="Dear Taylor Swift,
          
          After reviewing your cardiology physical exam chart, I have detected some abnormalities in your exam
          that warrant an Emergency Room visit. Please head to your nearest ER now.
      
          Best wishes, 
    
          Dr. David Ochoa

          Cardiologist">
              </textarea>

            {/* <input type="text" className="text-wrapper-3" defaultValue="
              Dear Taylor Swift,
          
              After reviewing your cardiology physical exam chart, I have detected some abnormalities in your exam
              that warrant an Emergency Room visit. Please head to your nearest ER now.
          
              Best wishes, 
        
              Dr. David Ochoa
   
              Cardiologist"
            /> */}

              // {/* <span className="text-wrapper-3">
              //   Dear Taylor Swift,
              //   <br />
              //   <br />
              //   After reviewing your cardiology physical exam chart, I have detected some abnormalities in your exam
              //   that warrant an Emergency Room visit. Please head to your nearest ER now.
              //   <br />
              //   <br />
              //   Best wishes, <br />
              //   <br />
              //   Dr. David Ochoa
              //   <br />
              //   Cardiologist"
              // </span> */}

            </p>
            <div className="frame">
              <div className="contact">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Taylor Swift</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Today | 5:30 PM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
              <div className="contact-2">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Bad Bunny</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Today | 12:30 PM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
              <div className="contact-3">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Michelle Obama</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Yesterday | 2:30 PM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
              <div className="contact-4">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Justin Beiber</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Yesterday | 10:30 AM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
              <div className="contact-5">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Venus Williams</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Dec 9, 2023 | 5:30 PM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
              <div className="contact-6">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Usain Bolt</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Dec 8, 2023 | 1:30 PM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
              <div className="contact-7">
                <img
                  className="vuesax-linear"
                  alt="Vuesax linear"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vuesax-linear-profile-circle-3@2x.png"
                />
                <p className="span-wrapper">
                  <span className="text-wrapper-3">Lady Gaga</span>
                </p>
                <p className="p">
                  <span className="text-wrapper-4">Dec 7, 2023 | 10:30 AM</span>
                </p>
                <img
                  className="clock"
                  alt="Clock"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/clock-1@2x.png"
                />
              </div>
            </div>
            <div className="sender-info">
              <p className="urgent-need-to-visit">
                <span className="text-wrapper-3">[Urgent]&nbsp;&nbsp;Need to visit ER</span>
              </p>
              <p className="dr-david-ochoa-gmail">
                <span className="text-wrapper-3">dr.david.ochoa@gmail.com</span>
              </p>
              <p className="taylor-swift-gmail">
                <span className="text-wrapper-3">taylor.swift@gmail.com</span>
              </p>
              <p className="subject">
                <span className="text-wrapper-3">Subject:</span>
              </p>
              <p className="from">
                <span className="text-wrapper-3">From:</span>
              </p>
              <img
                className="line-2"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-2-5@2x.png"
              />
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-2-5@2x.png"
              />
              <img
                className="line-4"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-2-5@2x.png"
              />
              <p className="to">
                <span className="text-wrapper-3">To:</span>
              </p>
            </div>
            <button className="send-button">
              <div className="overlap-3">
                <p className="send">
                  <span className="text-wrapper-5">Send</span>
                </p>
                <img
                  className="send-2"
                  alt="Send"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/send-2-1@2x.png"
                />
              </div>
            </button>
            <div className="attachment-buttons">
              <img
                className="paperclip"
                alt="Paperclip"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/paperclip-2-1@2x.png"
              />
              <img
                className="link"
                alt="Link"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/link-1@2x.png"
              />
              <img
                className="gallery-add"
                alt="Gallery add"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/gallery-add-1@2x.png"
              />
            </div>
          </div>
          <p className="messages">
            <span className="text-wrapper-6">Messages</span>
          </p>
        </div>
      </div>
    </div>
  );
};
