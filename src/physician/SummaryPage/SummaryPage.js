import React, { useState } from "react";
import "./style.css";
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendEmailComponent from './SendEmailComponent'; // Import SendEmailComponent
import { NavBar } from 'components'

const SummaryPage = (props) => {

  const [flagVariant, setFlagVariant] = useState('text');

  const handleFlagClick = () => {
    setFlagVariant(flagVariant === 'text' ? 'contained' : 'text');
  };

  const handlePrintClick = () => {
    window.print();
  };

  const selectPatient = (folder) => {
      const patientEmail = folder.split('/')[0];
      axios({
        method:"POST",
        url: props.proxy + "/select_patient",
        data:{
          folder: folder,
        },
        headers: {
          Authorization: 'Bearer ' + props.token
        }
      })
      .then((response) => {
        props.setToken(response.data.access_token);
        alert('Scheduling email sent successfully!');
      }).catch((error)=>{
        if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  };

  console.log(props.patientEmail)

  return (
    <div className="summary">
      <div className="overlap-group-wrapper">
        
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="buttons-2">
              
            <div className="div-wrapper">
              <div className="text-3">
                <p className="flag-patient-as-high-2">
                  <Button variant={flagVariant} onClick={handleFlagClick}>
                      Flag patient as high-risk
                  </Button>
                </p>
                <div className="danger-sign-2" />
              </div>
            </div>

            <div className="message-patient-2">
              <div className="text-4">
                <img className="img-2" alt="Sms tracking" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/sms-tracking-3@2x.png" />
                  <div className="message-patient-3">
                    <SendEmailComponent token={props.token} patientEmail={props.patientEmail} />
                  </div>
              </div>
            </div>

              <div className="group-wrapper">
                <div className="group-2">
                  <p className="span-wrapper-4">
                    {/* Button to trigger printing */}
                    <Button variant="text" onClick={handlePrintClick}>
                      Print PDF
                    </Button>
                  </p>
                  <img className="folder-add-2" alt="Folder add" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/folder-add-1@2x.png" />
                </div>
              </div>

            </div>


            <div className="summary-text-2">

              <div className="frame-8">
                <p className="span-wrapper-5">
                  <span className="text-wrapper-9">Demographics</span>
                </p>
                <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                {/* <p className="div-3">

                  <span className="text-wrapper-10">
                    Taylor Swift, female, 5’11’’, 130 lbs, 12/13/1989, 33 yo, patient has history of high blood pressure
                    and abnormal heart rhythms
                    <br />
                  </span>

                  <span className="text-wrapper-11">Notes:</span>

                </p> */}
                <textarea className="text-area-3" defaultValue="Taylor Swift, female, 5’11’’, 130 lbs, 12/13/1989, 33 yo, patient has history of high blood pressure and abnormal heart rhythms">
                </textarea>
                <span className="text-wrapper-11">Notes:</span>
              </div>


              <div className="frame-9">
                <p className="span-wrapper-5">
                  <span className="text-wrapper-9">General</span>
                </p>
                <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                {/* <p className="div-3"> */}
                  {/* <span className="text-wrapper-10">
                    Cyanosis: 0, Pallor: +1, Yellowing in eyes: 0, CRT: 3sec
                    <br />
                  </span>

                  <span className="text-wrapper-11">Notes:</span> */}

                  <textarea className="text-area-3" defaultValue="Cyanosis: 0, Pallor: +1, Yellowing in eyes: 0, CRT: 3sec">
                  </textarea>
                  <span className="text-wrapper-11">Notes:</span>
                {/* </p> */}
              </div>


              <div className="frame-10">
                <p className="span-wrapper-5">
                  <span className="text-wrapper-9">Lungs</span>
                </p>
                <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                {/* <p className="div-3">
                  <span className="text-wrapper-10">
                    Breathing rate: 30 breaths/min, Labored breathing? moderate, Posterior POV: left lower lobe abnormal
                    <br />
                  </span>

                  <span className="text-wrapper-11">
                    Notes: Based on the phonocardiogram graph and the lung sounds, the patient seems to have pneumonia.
                  </span>
                </p> */}

                <textarea className="text-area-3" defaultValue="Breathing rate: 30 breaths/min, Labored breathing? moderate, Posterior POV: left lower lobe abnormal">
                  </textarea>
                <span className="text-wrapper-11">Notes: Based on the phonocardiogram graph and the lung sounds, the patient seems to have pneumonia.</span>
              </div>


              <div className="frame-11">
                <p className="span-wrapper-5">
                  <span className="text-wrapper-9">Pulses</span>
                </p>
                <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                {/* <p className="div-3">
                  <span className="text-wrapper-10">
                    Radial: +2, Brachial: +1, Carotid: +2, Dorsalis pedis: 0, BP: 120/80, Heart rate: 88bpm, JVP:
                    normal, Carotid auscultation: abnormal
                    <br />
                  </span>
                  <span className="text-wrapper-11">
                    Notes: Blood pressure normal. Carotid artery auscultation might indicate carotid stenosis. Patient
                    needs to obtain a carotid ultrasound asap.
                  </span>
                </p> */}
                
                <textarea className="text-area-3" defaultValue="Radial: +2, Brachial: +1, Carotid: +2, Dorsalis pedis: 0, BP: 120/80, Heart rate: 88bpm, JVP:
                    normal, Carotid auscultation: abnormal">
                  </textarea>
                <span className="text-wrapper-11">Notes: Blood pressure normal. Carotid artery auscultation might indicate carotid stenosis. Patient
                    needs to obtain a carotid ultrasound asap.</span>
              </div>
              
              
              <div className="frame-12">
                <p className="span-wrapper-5">
                  <span className="text-wrapper-9">Abdomen</span>
                </p>
                <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                {/* <p className="div-3">
                  <span className="text-wrapper-10">
                    Top row, left to right: 3, 2, 1; Middle row, left to right: 2, 0, 0; Bottom row, left to right: 0,
                    0, 0<br />
                  </span>
                  <span className="text-wrapper-11">
                    Notes: Due to high tenderness in liver region, liver is likely enlarged and could indicate
                    congestive heart failure. Patient must undergo __ dietary changes and begin taking&nbsp;&nbsp;__
                    medications.
                  </span>
                </p> */}
                
                <textarea className="text-area-3" defaultValue="Top row, left to right: 3, 2, 1; Middle row, left to right: 2, 0, 0; Bottom row, left to right: 0,
                    0, 0">
                  </textarea>
                <span className="text-wrapper-11">Notes: Due to high tenderness in liver region, liver is likely enlarged and could indicate
                    congestive heart failure. Patient must undergo __ dietary changes and begin taking&nbsp;&nbsp;__
                    medications.</span>
              </div>


              <div className="frame-13">
                <div className="frame-14">
                  <p className="span-wrapper-5">
                    <span className="text-wrapper-9">Heart</span>
                  </p>
                  <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                  {/* <p className="div-3">
                    <span className="text-wrapper-10">
                      Parasternal heave: yes, Tricuspid/mitral thrill: no, Pulmonary/tricuspid thrill: yes,
                      Aortic/pulmonary thrill: no
                      <br />
                      HEART AUSCULTATION -- DIAPHRAGM - A: abnormal, P: normal, T: normal, M: normal -- BELL - A:
                      normal, P: anormal, T: normal, M: normal
                      <br />
                      ECG: abnormal
                      <br />
                    </span>
                    <span className="text-wrapper-11">
                      Notes: Patient having atrial fibrillation, needs to go to ER asap.
                    </span>
                  </p> */}

                  <textarea className="text-area-3" defaultValue="Parasternal heave: yes, Tricuspid/mitral thrill: no, Pulmonary/tricuspid thrill: yes, Aortic/pulmonary thrill: no HEART AUSCULTATION -- DIAPHRAGM - A: abnormal, P: normal, T: normal, M: normal -- BELL - A: normal, P: anormal, T: normal, M: normal ECG: abnormal">
                  </textarea>
                <span className="text-wrapper-11">Notes: Patient having atrial fibrillation, needs to go to ER asap.</span>
                </div>
              </div>
              
              
              <div className="frame-15">
                <p className="span-wrapper-5">
                  <span className="text-wrapper-9">Legs</span>
                </p>
                <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
                {/* <p className="div-3">
                  <span className="text-wrapper-10">
                    Pitting edema - Right calve: +3, Left calve: 0<br />
                  </span>
                  <span className="text-wrapper-11">Notes:</span>
                </p> */}
                <textarea className="text-area-3" defaultValue="Pitting edema - Right calve: +3, Left calve: 0">
                  </textarea>
                <span className="text-wrapper-11">Notes:</span>
              </div>
            </div>
          </div>
          
          
          <div className="tabs-2">
            
            <div className="frame-16">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">Demographics</span>
              </a>
            </div>

            <div className="frame-17">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">General</span>
              </a>
            </div>

            <div className="frame-18">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">Lungs</span>
              </a>
            </div>

            <div className="frame-19">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">Pulses</span>
              </a>
            </div>

            <div className="frame-20">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">Abdomen</span>
              </a>
            </div>

            <div className="frame-21">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">Heart</span>
              </a>
            </div>

            <div className="frame-22">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Legs</span>
              </p> */}
                <a href="/legs" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-12">Legs</span>
                </a>
            </div>
            
            <div className="frame-23">
              {/* <p className="span-wrapper-6">
                <span className="text-wrapper-12">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-6" style={{ textDecoration: 'none' }}>
                <span className="text-wrapper-12">Summary</span>
              </a>
            </div>

          </div>



          {/* NAVBAR */}
          <NavBar proxy={props.proxy} token={props.token} />



        </div>
      </div>
    </div>
  );
};

export default SummaryPage;