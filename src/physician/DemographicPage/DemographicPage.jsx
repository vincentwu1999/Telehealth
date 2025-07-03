import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./style.css";
import { NavBar } from 'components'

export const DemographicPage = (props) => {

    const [saveVariant, setSaveVariant] = useState('outlined');

    const handleSaveClick = () => {
      setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
    };

  return (
    <div className="demographics-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="div">
              <div className="demographic-group">
                <div className="pounds">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    {/* <p className="element">
                      <span className="text-wrapper">130</span>
                    </p> */}
                    <input
                        className="supp"
                        type="text"
                        placeholder="130"
                    />
                  </div>
                  <p className="p">
                    <span className="span">lb</span>
                    <span className="text-wrapper-2">{""}</span>
                  </p>
                  <p className="span-wrapper">
                    <span className="span">Weight:</span>
                  </p>
                </div>
                <div className="height">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    {/* <p className="element">
                      <span className="text-wrapper">5’11</span>
                    </p> */}
                    <input
                        className="supp"
                        type="text"
                        placeholder="5'11'"
                    />
                  </div>
                  <p className="p">
                    <span className="span">ft</span>
                    <span className="text-wrapper-2">{""}</span>
                  </p>
                  <p className="height-2">
                    <span className="span">Height:</span>
                  </p>
                </div>
                <div className="age">
                  <div className="overlap-2">
                    <div className="rectangle-2" />
                    {/* <p className="element-2">
                      <span className="text-wrapper">33</span>
                    </p> */}
                    <input
                        className="supp"
                        type="text"
                        placeholder="33"
                    />
                  </div>
                  <p className="yrs">
                    <span className="span">yrs</span>
                  </p>
                  <p className="age-2">
                    <span className="span">Age:</span>
                  </p>
                </div>

                <div className="first-name">
                  <div className="overlap-3">
                    {/* <img
                      className="img"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-24@2x.png"
                    /> */}
                    {/* <p className="taylor">
                      <span className="text-wrapper">Taylor</span>
                    </p> */}
                    <input
                        className="taylor"
                        type="text"
                        placeholder="Taylor"
                    />
                  </div>
                  <p className="span-wrapper-2">
                    <span className="span">First Name:</span>
                  </p>
                </div>

                <div className="first-name-2">
                  <div className="overlap-3">
                    <div className="rectangle-3" />
                    {/* <p className="swift">
                      <span className="text-wrapper">Swift</span>
                    </p> */}
                    <input
                        className="taylor"
                        type="text"
                        placeholder="Swift"
                    />
                  </div>
                  <p className="span-wrapper-2">
                    <span className="span">Last Name:</span>
                  </p>
                </div>
                <div className="gender">
                  <p className="female">
                    {/* <span className="text-wrapper">female</span> */}
                    <input
                        className="sex"
                        type="text"
                        placeholder="Female"
                    />
                  </p>
                  <p className="span-wrapper">
                    <span className="span">Sex:</span>
                  </p>
                  {/* <p className="span-wrapper">
                  <input
                        className="taylor"
                        type="text"
                        placeholder="Sex"
                    />
                    </p> */}
                </div>
                <div className="gender-2">
                  {/* <p className="element-3">
                    <span className="text-wrapper">12</span>
                  </p>
                  <p className="element-4">
                    <span className="text-wrapper">/ 13</span>
                  </p>
                  <p className="element-5">
                    <span className="text-wrapper">/ 1989</span>
                  </p> */}
                  <input
                        className="date"
                        type="text"
                        placeholder="12/13/1989"
                    />
                  <p className="span-wrapper">
                    <span className="span">Date of Birth:</span>
                  </p>
                </div>
                <p className="taylor-swift">
                  {/* <span className="text-wrapper">Taylor Swift</span> */}
                  <input
                        className="pat_name"
                        type="text"
                        placeholder="Taylor Swift"
                    />
                </p>
              </div>
              <img
                className="mask-group"
                alt="Mask group"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/mask-group-1@2x.png"
              />
            </div>
            <div className="patient-history">
              <div className="patient-has-history-wrapper">
                <p className="patient-has-history">
                  {/* <span className="text-wrapper-3">
                    Patient has history of high blood pressure and abnormal heart rhythms
                  </span> */}
                  <input
                        className="supp-textbox"
                        type="text"
                        placeholder="Patient has history of high blood pressure and abnormal heart rhythms"
                    />
                </p>
              </div>
              <p className="span-wrapper">
                <span className="span">Patient History:</span>
              </p>
            </div>
            <div className="notes">
              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  {/* <span className="text-wrapper-3">[specialty physician notes on patient demographics go here]</span> */}
                  <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on patient demographics go here"></textarea>
                </p>
              </div>
              <p className="notes-2">
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
