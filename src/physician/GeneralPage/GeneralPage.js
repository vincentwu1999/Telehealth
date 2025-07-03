import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./style.css";
import { NavBar } from 'components'

export const GeneralPage = (props) => {

  const [saveVariant, setSaveVariant] = useState('outlined');

  const handleSaveClick = () => {
    setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
  };

  return (
    <div className="general-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="notes">
              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  {/* <span className="text-wrapper">
                    [specialty physician notes on general inspection measurements go here]
                  </span> */}
                  <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on general inspection measurements go here"></textarea>
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


            <div className="capillary-refill">
              <div className="overlap-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                />
                {/* <p className="element"> */}
                  <input
                    type="text"
                    className="rectangle"
                    placeholder="1" //CHANGE THIS LATER
                    // style={{ position: 'left', width: '80%', height: '80%', border: 'none', textAlign: 'center' }}
                  />
                {/* </p> */}
              </div>
              <p className="sec">
                <span className="span">sec</span>
              </p>
              <p className="p">
                <span className="span">Capillary Refill Time:</span>
              </p>
            </div>


            <div className="yellowing">
              <div className="overlap-3">
                <div className="gradient-line">
                  <div className="rectangle-2" />
                  <img
                    className="union"
                    alt="Union"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/union-1@2x.png"
                  />
                </div>
                <div className="text-scale">
                  <p className="bad">
                    <span className="text-wrapper-4">Bad</span>
                  </p>
                  <p className="good">
                    <span className="text-wrapper-4">Good</span>
                  </p>
                </div>
              </div>
              <p className="pallor-severity">
                <span className="span">Jaundice severity:</span>
              </p>
              <div className="group">
                <img
                  className="tick-circle"
                  alt="Tick circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tick-circle-5@2x.png"
                />
                <img
                  className="close-circle"
                  alt="Close circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/close-circle-5@2x.png"
                />
                <p className="span-wrapper-2">
                  <span className="span">Jaundice (eyes):</span>
                </p>
              </div>
            </div>
            <div className="pallor">
              <div className="overlap-4">
                <div className="gradient-line">
                  <div className="rectangle-2" />
                  <img
                    className="img"
                    alt="Union"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/union-2@2x.png"
                  />
                </div>
                <div className="text-scale">
                  <p className="bad">
                    <span className="text-wrapper-4">Bad</span>
                  </p>
                  <p className="good">
                    <span className="text-wrapper-4">Good</span>
                  </p>
                </div>
              </div>
              
              <p className="pallor-severity-2">
                <span className="span">Pallor severity:</span>
              </p>
              <div className="group-2">
                <img
                  className="tick-circle-2"
                  alt="Tick circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tick-circle-9@2x.png"
                />
                <img
                  className="close-circle-2"
                  alt="Close circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/close-circle-8@2x.png"
                />
                <p className="span-wrapper-2">
                  <span className="span">Pallor:</span>
                </p>
              </div>
            </div>
            <div className="cyanosis">
              <div className="overlap-5">
                <div className="gradient-line">
                  <div className="rectangle-2" />
                  <img
                    className="union-2"
                    alt="Union"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/union-3@2x.png"
                  />
                </div>
                <div className="text-scale">
                  <p className="bad">
                    <span className="text-wrapper-4">Bad</span>
                  </p>
                  <p className="good">
                    <span className="text-wrapper-4">Good</span>
                  </p>
                </div>
              </div>
              <p className="pallor-severity-3">
                <span className="span">Cyanosis severity:</span>
              </p>
              <div className="group-3">
                <img
                  className="tick-circle-3"
                  alt="Tick circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tick-circle-5@2x.png"
                />
                <img
                  className="close-circle-3"
                  alt="Close circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/close-circle-9@2x.png"
                />
                <p className="span-wrapper-2">
                  <span className="span">Cyanosis:</span>
                </p>
              </div>
            </div>
          </div>
          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}
          
        </div>
      </div>
    </div>
  );
};
