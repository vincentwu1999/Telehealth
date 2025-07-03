import React from "react";

import { Button, Img, Line, List, Text, NavBar, TabNav } from "components";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Link } from 'react-router-dom';

const gender = [
  {
    value: 'female',
    label: 'female',
  },
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'other',
    label: 'other',
  },

];


const DemographicMedPage = (props) => {
  return (
    <>
    <NavBar proxy={props.proxy} token={props.token}/>
      <div
        className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <TabNav tab="demographic"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" style={{
    paddingTop: '175px',
  }}>
              <div className="flex flex-col gap-[41px] justify-start mb-60 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="md:h-[560px] h-[580px] relative w-[37%] md:w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[37px] md:ml-[0] ml-[230px] w-[49%]"
                          orientation="vertical"
                        >      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       Demographic 
                      </Text>
                          <div className="flex flex-row gap-[13px] items-center justify-between w-full" >
                    
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              First Name:
                            </Text>
                            <TextField required id="outlined-basic" label="required" variant="outlined" />
                           
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Last Name:
                            </Text>
                          
                             
                              <TextField required id="outlined-basic" label="required" variant="outlined" />
                           
                          </div>
                        </List>
                        <div className="flex flex-row items-start justify-between w-[90%] md:w-full">
                          <Text
                            className="mb-9 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoRegular24"
                          >
                            Taylor Swift
                          </Text>
                       
                          <div style={{
    paddingLeft: '70px' }} className="flex flex-row items-center justify-between mt-9 w-[70%] ">
                    <div>
                             <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Gender:
                            </Text>
                            </div>
                          <TextField 
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your gender"
        > 
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[230px] mt-[41px] w-3/5 md:w-full">
                          <List
                            className="flex flex-col gap-[35px] w-[65%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                             
                              <Text
                                className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                Height:
                              </Text>
                              <div className="h-[45px] md:h-[50px] mb-[5px] relative w-[43%]">
                                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">ft</InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        </div>
        </Box>
                              </div>
                              
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                Weight:
                              </Text>
                                               
                            </div>
                          </List>
                          <div className="flex flex-row items-center justify-between mt-[45px] w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Date of Birth:{" "}
                            </Text>
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" defaultValue={dayjs('1989-04-17')} />
      </DemoContainer>
    </LocalizationProvider>
                          </div>
                          <div className="flex flex-row gap-3 items-start justify-start mt-[39px] w-[49%] md:w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Age:
                            </Text>
                            <TextField required id="outlined-basic" label="required" variant="outlined" />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-[130px] items-center justify-start left-[0] top-[0] w-[130px]">
                      <Img
                        className="h-[130px] md:h-auto rounded-[50%] w-[130px]"
                        src="images/img_screenshot20231206.png"
                        alt="screenshot20231"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[27%] md:w-full">
                    {/*<Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[45%] sm:w-full"
                      size="txtCairoBold24"
                    >
                      Notes:
          </Text>*/}
                    {/* <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-center justify-start p-[15px] rounded-[20px] w-full">
                      <Text
                        className="my-0.5 text-black-900 text-xl w-full"
                        size="txtCairoRegular20"
                      >
                        [specialty physician notes on patient demographics go
                        here]
                      </Text>
                    </div>*/}
                   
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[212px] w-[41%] md:w-full">
                  <Text style={{
    paddingBottom: '20px', paddingTop: '80px',  paddingLeft: '15px', 
  }}
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    Patient History:
                  </Text>
                  <TextField fullWidth sx={{ m: 1 }}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
         <div className="h-[38px] md:h-[65px] md:ml-[0] ml-[138px] mt-[27px] relative w-[31%]">
                      <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto rounded-[17px] shadow-bs w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                        size="txtCairoRegular20WhiteA700"
                      >
                        Save
                      </Text>
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

export default DemographicMedPage;
