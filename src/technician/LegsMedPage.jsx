import React from "react";

import { Button, Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const LegsMedPage = (props) => {


  return (
    <>
    <NavBar proxy={props.proxy} token={props.token} />
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
        <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
          <TabNav tab="legs"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                        
                   <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      
      
      <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1000px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">


         <div className="md:h-[1277px] sm:h-[3072px] h-[925px] relative w-[84%] md:w-full">
           <div className="absolute bottom-[3%] h-[38px] right-[0] w-[10%]">
             <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto shadow-bs w-full"></div>
             <Text
               className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
               size="txtCairoRegular20WhiteA700"
             >
               Save
             </Text>

             
           </div>
           <div className="absolute md:h-[1277px] sm:h-[3072px] h-[925px] inset-[0] justify-center m-auto w-[98%] md:w-full">
             <div className="absolute flex flex-col items-center justify-start left-[1%] top-[0] w-[92%]">
               <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                 <div className="flex md:flex-1 flex-col md:gap-10 gap-[292px] items-end justify-start w-[79%] md:w-full">
                   <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                     <div className="flex flex-col items-center justify-start md:mt-0 mt-[9px]">
                       {/*<Text
                         className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                         size="txtCairoBold24"
                       >
                         Feel for tenderness and input grading for each region:{" "}
  </Text>*/}
                       

                     </div>
              
                     <Img
                       className="h-[43px] w-[43px]"
                       src="images/img_profile_black_900.svg"
                       alt="profile"
                     />
                   </div>
                   <Img
                     className="h-[43px] w-[43px]"
                     src="images/img_profile_black_900.svg"
                     alt="profile_One"
                   />
                 </div>
                 <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                   <Text
                     className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                     size="txtCairoBold24"
                   >
                     {" "}
                     {" "}
                   </Text>
                   <Text
                     className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                     size="txtCairoBold24"
                   >
                     {" "}
                     {" "}
                   </Text>
                 </div>
               </div>
             </div>
             <Img
               className="absolute h-[270px] object-cover right-[3%] top-[6%] w-[25%]"
               src="images/pedemascore.png"
               alt="screenshot20231"
             />
             <Img
               className="absolute bottom-[10%] h-[465px] object-cover left-[73.5%] w-[31%]"
               src="images/edema.png"
               alt="screenshot20231_One"
             />
             {/*  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[47%]">*/}
              {/*   <div className="flex flex-col items-center justify-start w-full">*/}
                  {/* <div className="flex flex-col items-center justify-end w-full">*/}
                   {/* <div className="flex flex-col items-end justify-end pb-[38px] sm:pl-5 pl-[38px] w-full">*/}
                    {/* <div className="flex sm:flex-col flex-row sm:gap-10 gap-[85px] items-start justify-end w-[99%] md:w-full">*/}
                       {/*<div className="flex flex-col gap-[47px] items-center justify-start sm:mt-0 mt-10 w-4/5 sm:w-full">*/}
                        
                       <div style={{paddingLeft: '150px', }} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       Legs Inspection
                      </Text>
        <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold', fontSize: '19px'}}>
            {" "}
            Check for pitting edema and classify severity for each region: {" "}
            
         </h4>
         {/*i. Right calve */}
         <FormControl>
         <FormLabel style={{paddingBottom: '10px', paddingTop: '15px', color: 'black', fontSize: '20px'}} id="demo-row-radio-buttons-group-label">i. Right calve</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
        <FormControlLabel value="zero" labelPlacement="bottom" control={<Radio />} label="0" />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        <FormControlLabel value="three" labelPlacement="bottom" control={<Radio />} label="3" />
        
  <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
      </RadioGroup>
    </FormControl>
      
       {/*ii. Left calve */}
       <FormControl>
         <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black', fontSize: '20px'}} id="demo-row-radio-buttons-group-label">ii. Left calve</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
        <FormControlLabel value="zero" labelPlacement="bottom" control={<Radio />} label="0" />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        <FormControlLabel value="three" labelPlacement="bottom" control={<Radio />} label="3" />
        
  <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
      </RadioGroup>
    </FormControl>

         {/* </div>*/}
    {/* </div>*/}
                         
                        {/* </div>*/}
                      
                      
                     {/* </div>*/}
                    {/*</div>*/}
                {/*</div>*/}
               </div>
             </div>
           </div>
         </div>
       </div>

       
      </div>
      
    </div>
    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegsMedPage;
