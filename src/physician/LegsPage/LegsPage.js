import React from "react";
import "./style.css";
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavBar } from 'components'
import Grade from "./Grade.png"

export const LegsPage = (props) => {
  const [L_pittingValue, setL_pittingValue] = useState('');
  const [L_pittingStatus, setL_pittingStatus] = useState('');
  const [R_pittingValue, setR_pittingValue] = useState('');
  const [R_pittingStatus, setR_pittingStatus] = useState('');

  const [saveVariant, setSaveVariant] = useState('outlined');

  const handleSaveClick = () => {
    setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
  };

  // For Image Popover
  const [imageAnchorEl, setImageAnchorEl] = React.useState(null);
  const handleImageClick = (event) => {
    setImageAnchorEl(event.currentTarget);
  };
  const handleImageClose = () => {
    setImageAnchorEl(null);
  };
  const imagePopoverOpen = Boolean(imageAnchorEl);
  const imageId = imagePopoverOpen ? 'image-popover' : undefined;

  // For Question Mark Popover
  const [questionMarkAnchorEl, setQuestionMarkAnchorEl] = useState(null);

  const handleQuestionMarkPopoverOpen = (event) => {
    setQuestionMarkAnchorEl(event.currentTarget);
  };

  const handleQuestionMarkPopoverClose = () => {
    setQuestionMarkAnchorEl(null);
  };

  const questionMarkOpen = Boolean(questionMarkAnchorEl);


  const handleL_pittingChange = (e) => {
    const value = e.target.value;
    setL_pittingValue(value);

  
    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);
  
    // Determine the pitting edema status based on the specified criteria
    let status = '';
    if (numericValue >= 0 && numericValue <= 1) {
      status = 'normal';
    } else if (numericValue >= 2) {
      status = 'abnormal';
    }
  
    setL_pittingStatus(status);
  };

  const handleR_pittingChange = (e) => {
    const value = e.target.value;
    setR_pittingValue(value);
  
    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);
  
    // Determine the pitting edema status based on the specified criteria
    let status = '';
    if (numericValue >= 0 && numericValue <= 1) {
      status = 'normal';
    } else if (numericValue >= 2) {
      status = 'abnormal';
    }
  
    setR_pittingStatus(status);
  };


  return (
    <div className="legs-tab">
      <div className="overlap-wrapper-3">
        <div className="overlap-15">
        
          <div className="overlap-16">

            <div className="notes-5">
              <div className="overlap-17">
                <p className="specialty-physician">
                <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on legs go here"></textarea>
                </p>
              </div>
              <p className="notes-6">
                <span className="text-wrapper-39">Notes:</span>
              </p>

              <button className="save-button">
                <div className="overlap-group-2">
                  <div className="background" />
                    <Button variant={saveVariant} onClick={handleSaveClick}>
                      {saveVariant === 'outlined' ? 'Save' : 'Saved'}
                    </Button>
                </div>
              </button>

            </div>

            <p className="pitting-edema-3">
              <span className="text-wrapper-41">Pitting Edema</span>
            </p>
            <p className="right-calve-3">
              <span className="text-wrapper-39">Right calve:</span>
            </p>
            <p className="left-calve-3">
              <span className="text-wrapper-39">Left calve:</span>
            </p>


            <div className="overlap-18">
              <img className="textbox-42" alt="Rectangle" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png" />
              {/* <p className="element-13">
                <span className="text-wrapper-42">+3</span>
              </p> */}
              {/* <input type="text" className="textbox-42" defaultValue="+3" /> */}
              <input
                    type="text"
                    className={`textbox-42 ${R_pittingStatus && R_pittingStatus !== 'normal' ? 'input-error' : ''}`}
                    value={R_pittingValue}
                    onChange={handleR_pittingChange}
                    placeholder="0" //CHANGE THIS LATER
                  />
                  {R_pittingStatus && R_pittingStatus !== 'normal' && (
                    <div className="error-popup">Abnormal pitting edema value: {R_pittingStatus}</div>
                  )}

            </div>
            <div className="overlap-19">
              <img className="textbox-42" alt="Rectangle" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png" />
              <input
                    type="text"
                    className={`textbox-42 ${L_pittingStatus && L_pittingStatus !== 'normal' ? 'input-error' : ''}`}
                    value={L_pittingValue}
                    onChange={handleL_pittingChange}
                    placeholder="0" //CHANGE THIS LATER
                  />
                  {L_pittingStatus && L_pittingStatus !== 'normal' && (
                    <div className="error-popup">Abnormal pitting edema value: {L_pittingStatus}</div>
                  )}
            </div>



            <div>
            <img
              className="mdi-question-mark-3"
              alt="Mdi question mark"
              src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/mdi-question-mark-circle-outline-1@2x.png"
              onMouseEnter={handleQuestionMarkPopoverOpen}
              onMouseLeave={handleQuestionMarkPopoverClose}
            />
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={questionMarkOpen}
              anchorEl={questionMarkAnchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleQuestionMarkPopoverClose}
              disableRestoreFocus
            >
              <img
                src={Grade}
                alt="Grade"
                style={{ width: '50%', height: '50%' }}
              />
            </Popover>
          </div>




          </div>



          <div className="tabs-5">
            <div className="frame-40">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Demographics</span>
              </a>
            </div>
            <div className="frame-41">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">General</span>
              </a>
            </div>
            <div className="frame-42">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Lungs</span>
              </a>
            </div>
            <div className="frame-43">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Pulses</span>
              </a>
            </div>
            <div className="frame-44">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Abdomen</span>
              </a>
            </div>
            <div className="frame-45">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Heart</span>
              </a>
            </div>
            <div className="frame-46">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Legs</span>
              </a>
            </div>
            <div className="frame-47">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>
    </div>
  );
};
