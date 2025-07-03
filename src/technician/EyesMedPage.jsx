import React from "react";

import { Button, Img, Line, List, Text, TabNav, NavBar } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';



const EyesMedPage = (props) => {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
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
          <TabNav tab="eyes"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                        
                   <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      
      
      <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1000px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">


         <div className="md:h-[1277px] sm:h-[3072px] h-[925px] relative w-[84%] md:w-full">
          {/* <div className="absolute bottom-[3%] h-[38px] right-[0] w-[10%]">
             <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto shadow-bs w-full"></div>
             <Text
               className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
               size="txtCairoRegular20WhiteA700"
             >
               Save
             </Text>

             
           </div>*/}
           <div className="absolute md:h-[1277px] sm:h-[3072px] h-[925px] inset-[0] justify-center m-auto w-[98%] md:w-full">
             <div className="absolute flex flex-col items-center justify-start left-[1%] top-[0] w-[92%]">
               <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                 <div className="flex md:flex-1 flex-col md:gap-10 gap-[292px] items-end justify-start w-[79%] md:w-full">
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
              
                     <Img onMouseEnter={() => setIsHoveredOne(true)}
                      onMouseLeave={() => setIsHoveredOne(false)}
                       className="h-[43px] w-[43px]"
                       src="images/img_profile_black_900.svg"
                       alt="profile"
                     />
                     
                   </div>
                   
                   <Img onMouseEnter={() => setIsHoveredTwo(true)}
                    onMouseLeave={() => setIsHoveredTwo(false)}
                     className="h-[43px] w-[43px]"
                     src="images/img_profile_black_900.svg"
                     alt="profile_One"
                   />
                 </div>
                 <Img onMouseEnter={() => setIsHoveredThree(true)}
                     onMouseLeave={() => setIsHoveredThree(false)}
                     className="h-[43px] w-[43px]"
                     src="images/img_profile_black_900.svg"
                     alt="profile_One"
                   />
                   </div>
                 <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                  
                 </div>
               </div>
             </div>
             <Img
        style={{
          opacity: isHoveredOne ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: "355px",
          height: "250px",
        }}
        className="absolute h-[300px] object-cover left-[77%] w-[27%]"
        src="images/noyellowing.png"
        alt="screenshot20231"
      />

      <Img
        style={{
          opacity: isHoveredTwo ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: "350px",
          height: "245px",
        }}
        className="absolute bottom-[17%] h-[364px] object-cover bottom-[35%] left-[77%] w-[35%]"
        src="images/mildyellowing.png"
        alt="screenshot20231_One"
      />

      <Img
        style={{
          opacity: isHoveredThree ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: "365px",
          height: "265px",
        }}
        className="absolute bottom-[17%] h-[364px] object-cover top-[75%] left-[77%] w-[31%]"
        src="images/severeyellowing.png"
        alt="screenshot20231_One"
      />

             {/*  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[47%]">*/}
              {/*   <div className="flex flex-col items-center justify-start w-full">*/}
                  {/* <div className="flex flex-col items-center justify-end w-full">*/}
                   {/* <div className="flex flex-col items-end justify-end pb-[38px] sm:pl-5 pl-[38px] w-full">*/}
                    {/* <div className="flex sm:flex-col flex-row sm:gap-10 gap-[85px] items-start justify-end w-[99%] md:w-full">*/}
                       {/*<div className="flex flex-col gap-[47px] items-center justify-start sm:mt-0 mt-10 w-4/5 sm:w-full">*/}
                        
                       <div style={{paddingLeft: '150px', }} className="flex w-full min-h-screen p-12">
      <div className="w-full max-w-md">
      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       Eyes Inspection
                      </Text>
        <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '22px'}}>
            {" "}
            Check for yellowing in the eyes on a 0-2 scale: {" "}
            
         </h4>
         {/*Yellowing of eye severity scale */}
         <FormControl>
         <FormLabel style={{paddingBottom: '25px', paddingTop: '5px', fontSize: '17px', color: 'black' }} id="demo-row-radio-buttons-group-label">Symptoms may include: jaundice (liver disease), opisthotonos (dramatic abnormal posture) or poor feeding</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
        <FormControlLabel value="zero" labelPlacement="bottom" control={<Radio />} label="0" />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        
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

export default EyesMedPage;
