import React from "react";
import "./style.css";
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavBar } from 'components'
import CarotidPopover from "components/CarotidPopover/CarotidPopover.jsx"


export const PulsesPage = (props) => {
  // State for the radial pulse value and whether it's out of range
  // const [radialPulseValue, setRadialPulseValue] = useState('');
  // const [isRadialOutOfRange, setIsRadialOutOfRange] = useState('');
  const [radialPulseValue, setRadialPulseValue] = useState('');
  const [radialStatus, setRadialStatus] = useState('');
  const [brachialPulseValue, setBrachialPulseValue] = useState('');
  const [brachialStatus, setBrachialStatus] = useState('');
  const [carotidPulseValue, setCarotidPulseValue] = useState('');
  const [carotidStatus, setCarotidStatus] = useState('');
  const [dorsalisPulseValue, setDorsalisPulseValue] = useState('');
  const [dorsalisStatus, setDorsalisStatus] = useState('');

  const [systolicPulseValue, setSystolicPulseValue] = useState('');
  const [systolicStatus, setSystolicStatus] = useState('');
  const [diastolicPulseValue, setDiastolicPulseValue] = useState('');
  const [diastolicStatus, setDiastolicStatus] = useState('');


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'image-popover' : undefined;

  const [saveVariant, setSaveVariant] = useState('outlined');

  const handleSaveClick = () => {
    setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
  };



  // const [carotidPulseValue, setcarotidPulseValue] = useState('');
  // const [iscarotidOutOfRange, setIscarotidOutOfRange] = useState(false);

  // // Handler for radial pulse input changes
  // const handlecarotidChange = (e) => {
  //   const value = e.target.value;
  //   setcarotidPulseValue(value);

  //   // Check if the numeric value is out of the -3 to +3 range
  //   const numericValue = parseInt(value, 10);
  //   if (numericValue < 0 || numericValue > 4) {
  //     setIscarotidOutOfRange(true);
  //   } else {
  //     setIscarotidOutOfRange(false);
  //   }
  // }
  const handleRadialChange = (e) => {
    const value = e.target.value;
    setRadialPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setRadialStatus(status);
  };

  const handleCarotidChange = (e) => {
    const value = e.target.value;
    setCarotidPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setCarotidStatus(status);
  };

  const handleBrachialChange = (e) => {
    const value = e.target.value;
    setBrachialPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setBrachialStatus(status);
  };

  const handleDorsalisChange = (e) => {
    const value = e.target.value;
    setDorsalisPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setDorsalisStatus(status);
  };

  const handleSystolicChange = (e) => {
    const value = e.target.value;
    setSystolicPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    // let status = '';
    // switch (numericValue) {
    //   case 0:
    //     status = 'absent';
    //     break;
    //   case 1:
    //     status = 'weak';
    //     break;
    //   case 2:
    //     status = 'normal';
    //     break;
    //   case 3:
    //     status = 'increased';
    //     break;
    //   case 4:
    //     status = 'bounding';
    //     break;
    //   // default:
    //   //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
    // }
    let status = '';

  // Check if the input value is not empty
  if (value.trim() !== '') {
    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Ensure the conversion to a number was successful (i.e., the result is not NaN)
    if (!isNaN(numericValue)) {
      if (numericValue <= 89) {
        status = 'Abnormal (low blood pressure)';
      // } else if (numericValue >= 90 && numericValue <= 120) {
      //   status = 'Normal';
      } else if (numericValue >= 121 && numericValue <= 140) {
        status = 'Slightly abnormal';
      } else if (numericValue > 140) {
        status = 'Abnormal (high blood pressure)';
      }
    } else {
      // Handle non-numeric input gracefully
      status = 'Invalid input';
    }
  }
    setSystolicStatus(status);
  };


  const handleDiastolicChange = (e) => {
    const value = e.target.value;
    setDiastolicPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    // let status = '';
    // switch (numericValue) {
    //   case 0:
    //     status = 'absent';
    //     break;
    //   case 1:
    //     status = 'weak';
    //     break;
    //   case 2:
    //     status = 'normal';
    //     break;
    //   case 3:
    //     status = 'increased';
    //     break;
    //   case 4:
    //     status = 'bounding';
    //     break;
    //   // default:
    //   //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
    // }
    if (value.trim() !== '') {
      let status = '';
      // Check if the value is numeric
      if (!isNaN(numericValue)) {
        if (numericValue <= 59) {
          status = 'Abnormal (low blood pressure)';
        // } else if (numericValue >= 60 && numericValue <= 80) {
        //   status = 'Normal';
        } else if (numericValue >= 81 && numericValue <= 89) {
          status = 'Slightly abnormal';
        } else if (numericValue >= 90) {
          status = 'Abnormal (high blood pressure)';
        }
        setDiastolicStatus(status);
      } else {
        // The input is non-numeric
        setDiastolicStatus('Invalid input');
      }
    } else {
      // The textbox is blank, reset the status or take no action
      setDiastolicStatus(''); // Resetting the status for blank input
    }
  };



  // Handler for radial pulse input changes
  // const handleRadialChange = (e) => {
  //   const value = e.target.value;
  //   setRadialPulseValue(value);

  //   // Check if the numeric value is out of the -3 to +3 range
  //   const numericValue = parseInt(value, 10);
  //   if (numericValue < 0 || numericValue > 4) {
  //     setIsRadialOutOfRange(true);
  //   } else {
  //     setIsRadialOutOfRange(false);
  //   }
  // };


  return (
    <div className="pulses-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="blood-pressure">
              
              <div className="systolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Systolic:</span>
                </p>
                <div className="div">
                  {/* <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  /> */}
                  {/* <p className="element">
                    <span className="span">120</span>
                  </p> */}


                  {/* <input type="text" className="textbox-43" defaultValue="120" />
                </div>
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p> */}

                <input
                    type="text"
                    className={`textbox-43 ${systolicStatus && systolicStatus !== 'normal' ? 'input-error' : ''}`}
                    value={systolicPulseValue}
                    onChange={handleSystolicChange}
                    placeholder="135"
                  />
                  {systolicStatus && systolicStatus !== 'normal' && (
                    <div className="error-popup">Abnormal systolic value: {systolicStatus}</div>
                  )}
                </div>
          
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p>
              {/* </div> */}
              </div>
              
              <div className="diastolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Diastolic:</span>
                </p>
                <div className="overlap-2">
                  {/* <input type="text" className="textbox-43" defaultValue="80" />
                </div>
                <p className="mm-hg-2">
                  <span className="span">mmHg</span>
                </p> */}
                <input
                    type="text"
                    className={`textbox-43 ${diastolicStatus && diastolicStatus !== 'normal' ? 'input-error' : ''}`}
                    value={diastolicPulseValue}
                    onChange={handleDiastolicChange}
                    placeholder="87"
                  />
                  {diastolicStatus && diastolicStatus !== 'normal' && (
                    <div className="error-popup">Abnormal diastolic value: {diastolicStatus}</div>
                  )}
                </div>
          
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p>

              </div>
              <div className="bpm">
                <p className="span-wrapper">
                  <span className="text-wrapper">Heart Rate:</span>
                </p>
                <div className="overlap-3">
                  <input type="text" className="textbox-43" placeholder="80" />
                </div>
                <p className="bpm-2">
                  <span className="span">bpm</span>
                </p>
              </div>
            </div>




            <div className="popover">

              <div className="carotidpopover">
                <CarotidPopover></CarotidPopover>
              </div>                      

            </div>



            <img
              className="carotid-img"
              alt="carotidimg"
              src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/carotid-img-1@2x.png"
            />





            <p className="carotid-auscultation">
              <span className="text-wrapper-2">Carotid Auscultation</span>
            </p>
            <div className="pulse">
              <p className="pulses">
                <span className="text-wrapper-2">Pulses</span>
              </p>


              <div className="radial">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <input
                    type="text"
                    className={`textbox-42 ${radialStatus && radialStatus !== 'normal' ? 'input-error' : ''}`}
                    value={radialPulseValue}
                    onChange={handleRadialChange}
                    placeholder="1"
                  />
                  {radialStatus && radialStatus !== 'normal' && (
                    <div className="error-popup">Abnormal radial pulse status: {radialStatus}</div>
                  )}


                </div>
                <p className="span-wrapper-2">
                  <span className="text-wrapper">Radial pulse:</span>
                </p>
              </div>
              

              <div className="brachial">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  {/* <input type="text" className="textbox-42" defaultValue="+1" />
                </div>
                <p className="brachial-pulse">
                  <span className="text-wrapper">Brachial pulse:</span>
                </p>
                <input type="text" className="textbox-42" defaultValue="+1" /> */}
                <input
                    type="text"
                    className={`textbox-42 ${carotidStatus && carotidStatus !== 'normal' ? 'input-error' : ''}`}
                    value={brachialPulseValue}
                    onChange={handleBrachialChange}
                    placeholder="1"
                  />
                  {brachialStatus && brachialStatus !== 'normal' && (
                    <div className="error-popup">Abnormal posterior tibial status: {brachialStatus}</div>
                  )}
                </div>
          
                <p className="span-wrapper">
                  <span className="text-wrapper">Posterior tibial pulse:</span>
                </p>
              </div>

              <div className="carotid">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <input
                    type="text"
                    className={`textbox-42 ${carotidStatus && carotidStatus !== 'normal' ? 'input-error' : ''}`}
                    value={carotidPulseValue}
                    onChange={handleCarotidChange}
                    placeholder="2"
                  />
                  {carotidStatus && carotidStatus !== 'normal' && (
                    <div className="error-popup">Abnormal carotid pulse status: {carotidStatus}</div>
                  )}
                </div>
                

                <p className="span-wrapper">
                  <span className="text-wrapper">Carotid pulse:</span>
                </p>
              </div>
              
              <div className="dorsalis-pedis">
                <div className="group">
                  <div className="overlap-4">
                    <img
                      className="textbox-42"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                    />
                    {/* <input type="text" className="textbox-42" defaultValue="0" />
                  </div>

                  <p className="span-wrapper-2">
                    <span className="text-wrapper">Dorsalis pedis pulse:</span>
                  </p> */}

                  <input
                    type="text"
                    className={`textbox-42 ${dorsalisStatus && dorsalisStatus !== 'normal' ? 'input-error' : ''}`}
                    value={dorsalisPulseValue}
                    onChange={handleDorsalisChange}
                    placeholder="1"
                  />
                  {dorsalisStatus && dorsalisStatus !== 'normal' && (
                    <div className="error-popup">Abnormal dorsalis pedis pulse status: {dorsalisStatus}</div>
                  )}
                </div>
                

                <p className="span-wrapper">
                  <span className="text-wrapper">Dorsalis pedis pulse:</span>
                </p>

                </div>
              </div>
            </div>
            
            <div className="JVP">
              <p className="abnormal">
                <span className="span">normal</span>
              </p>


              <p className="jugular-venous">
                <span className="text-wrapper">Jugular Venous Pressure (JVP) Evaluation:</span>
              </p>
            </div>

            <div className="notes">
              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  {/* <span className="text-wrapper-3">[specialty physician notes on pulse mesasurements go here]</span> */}
                
                <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on pulse mesasurements go here"></textarea>
                </p>
              </div>
              <p className="notes-2">
                <span className="text-wrapper-4">Notes:</span>
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
          </div>

          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>
    </div>
  );
};
