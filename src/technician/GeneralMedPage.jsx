import React from "react";

import { Button, Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

// Checkbox component
function Checkbox({ name, value = false, updateValue = () => {}, children }) {
  // handle checkbox change
  const handleChange = () => {
    updateValue(!value, name);
  };
  // render the checkbox
  return (
    <div className="py-2">
      <input type="checkbox" id={`${name}-checkbox`} name={name} checked={value} onChange={handleChange} />
      <label htmlFor={`${name}-checkbox`} className="ml-1 capitalize">{children}</label>
    </div>
  );
}

// List of checkbox options
const listOptions = ["Chest pain", "Discomfort", "Dyspnea", "Weakness", "Fatigue", "Palpitations", "Light-headedness", "Sense of impending faint", "Syncope"];


const GeneralMedPage = (props) => {

  const [selected, setSelected] = React.useState([]);

  // Function for updating state on checkbox change
  function handleSelect(value, name) {
    if (value) {
      setSelected([...selected, name]);
    } else {
      setSelected(selected.filter((item) => item !== name));
    }
  }
// Function for selecting/deselecting all checkboxes
function selectAll() {
  if (selected.length === listOptions.length) {
    // If all checkboxes are already selected, unselect all
    setSelected([]);
  } else {
    // Otherwise, select all checkboxes
    setSelected(listOptions);
  }
}

  return (
    <>
      <NavBar proxy={props.proxy} token={props.token}/>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
          <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
          <TabNav tab="general"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                        
                   <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       General 
                      </Text>
                      <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '20px'}}>
            {" "}
            Has the patient ever had any of these medical conditions? {" "}
            
         </h4>
       {/* <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '17px'}}>
            {" "}
            Is the patient currently experiencing any of these conditions? {" "}
            
         </h4>
        {listOptions.map((item) => (
          <Checkbox key={item} name={item} value={selected.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
        ))}
         <div className="-mx-5 px-5 py-0 rounded bg-gray-100 font-medium">
          <Checkbox name="all" value={selected.length === listOptions.length} updateValue={selectAll}>Select All</Checkbox>
        </div> */} 

        {listOptions.map((item) => (
          <Checkbox key={item} name={item} value={selected.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
        ))}
         <div className="-mx-5 px-5 py-0 rounded bg-gray-100 font-medium">
          <Checkbox name="all" value={selected.length === listOptions.length} updateValue={selectAll}>Select All</Checkbox>
        </div>
        <div style={{paddingTop: "2rem"}}>The all checked values are {selected.join(" , ")}</div>
        <div style={{paddingTop: "2rem"}}>
        <h4  style={{paddingBottom: "1rem", fontWeight: 'bold'}}>
            {" "}
            Adjust the head of the bed to a 45° angle, adequately expose the patient, ask if the patient has any pain before proceeding (if yes, input where) {" "}
            
         </h4>
        <TextField fullWidth 
          id="outlined-multiline-static"

          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        /> </div>
      </div>
    </div>
    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralMedPage;
