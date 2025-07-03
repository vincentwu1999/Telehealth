import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./style.css";
import { NavBar } from 'components'
import Grade from "./Grade.png"
import Popover from '@mui/material/Popover';


export const AbdomenPage = (props) => {

  const [saveVariant, setSaveVariant] = useState('outlined');

  const handleSaveClick = () => {
    setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
  };

  // For Question Mark Popover
  const [questionMarkAnchorEl, setQuestionMarkAnchorEl] = useState(null);

  const handleQuestionMarkPopoverOpen = (event) => {
    setQuestionMarkAnchorEl(event.currentTarget);
  };

  const handleQuestionMarkPopoverClose = () => {
    setQuestionMarkAnchorEl(null);
  };

  const questionMarkOpen = Boolean(questionMarkAnchorEl);

  return (
    <div className="abdomen-tab-question">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="notes">
              
              <div className="due-to-high-wrapper">
                <p className="due-to-high">
                  <textarea className="specialty-physician-textarea" placeholder="Due to high tenderness in liver region, liver is likely enlarged and could indicate congestive heart
                    failure. Patient must undergo __ dietary changes and begin taking&nbsp;&nbsp;__ medications."></textarea>
                </p>
              </div>

              <p className="span-wrapper">
                <span className="span">Notes:</span>
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

            <div className="pulse">
              <p className="abdominal-palpation">
                <span className="text-wrapper-3">Abdominal Palpation</span>
              </p>
            </div>

            <div className="overlap-2">
              <div className="region">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="region-2">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="region-3">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="region-4">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="region-5">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="region-6">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">0</span>
                  </p>
                </div>
              </div>
              <div className="region-7">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  <p className="element">
                    <span className="text-wrapper-4">3</span>
                  </p>
                </div>
              </div>
            </div>


            <div>
              <img
                className="mdi-question-mark"
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


          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Summary</span>
              </a>
            </div>
          </div>

          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>
    </div>
  );
};
