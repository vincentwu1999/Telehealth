import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./style.css";
import Typography from '@mui/material/Typography';
import { NavBar } from 'components'

import AtrialPopover from 'components/AtrialPopover/AtrialPopover.js'
import MitralPopover from 'components/MitralPopover/MitralPopover.js'
import TricuspidPopover from 'components/TricuspidPopover/TricuspidPopover.jsx'
import PulmonaryPopover from 'components/PulmonaryPopover/PulmonaryPopover.jsx'

import CheckandXButtons from "components/CheckandXButtons";
import ECG from "./ECG.png"

export const HeartPage = (props) => {
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

  return (
    <div className="heart-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            
            <div className="div">

              <div className="atrialpopover">
                <AtrialPopover></AtrialPopover>
              </div>

              <div className="pulmonarypopover">
                <PulmonaryPopover></PulmonaryPopover>
              </div>

              <div className="tricuspidpopover">
                <TricuspidPopover></TricuspidPopover>
              </div>

              <div className="mitralpopover">
                <MitralPopover></MitralPopover>
              </div>                            

            </div>


            <div className="heart-ausc">
              <p className="heart-auscultation">
                <span className="text-wrapper">Heart Auscultation </span>
                <span className="span">(anterior only)</span>
              </p>
            </div>
            <div className="thrill">
              <p className="normal">
                {/* <span className="text-wrapper-2">normal</span> */}
                <input
                  className="taylor"
                  type="text"
                  placeholder="Normal"
              />
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Aortic/pulmonary thrill:</span>
              </p>
            </div>
            <div className="thrill-2">
              <p className="abnormal">
                {/* <span className="text-wrapper-2">abnormal</span> */}
                <input
                  className="taylor"
                  type="text"
                  placeholder="Abnormal"
              />
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Pulmonary/tricuspid thrill:</span>
              </p>
            </div>
            <div className="thrill-3">
              <p className="p">
                {/* <span className="text-wrapper-2">normal</span> */}
                <input
                  className="taylor"
                  type="text"
                  placeholder="Normal"
              />
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Tricuspid/mitral thrill:</span>
              </p>
            </div>
            <div className="parasternal-heave">
              <p className="abnormal-2">
                {/* <span className="text-wrapper-2">abnormal</span> */}
                <input
                  className="taylor"
                  type="text"
                  placeholder="Abnormal"
              />
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Parasternal heave:</span>
              </p>

            </div>
            <div className="notes">

              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on heart measurements go here"></textarea>
                </p>
              </div>

              <p className="notes-2">
                <span className="text-wrapper-5">Notes:</span>
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



            <p className="normal-2">
              <span className="text-wrapper-7">Normal?</span>
            </p>

            <span className="tick-circle">
              <div>
                <CheckandXButtons />
              </div>            
            </span>



          </div>


          {/* TABS */}
          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-8">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>


    <p className="single-lead-ECG">
      <span className="text-wrapper">Single-Lead ECG Recording</span>
    </p>

    <div className="ecg-picture">
      <img src={ECG} alt="ECG" />
    </div>

    </div>
  );
};
