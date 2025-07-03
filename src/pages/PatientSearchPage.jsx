import axios from 'axios';
import React, { useState} from "react";
import { Link, Navigate } from 'react-router-dom';
import { Img, Input, Text, NavBar} from "../components";
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
import DataTable from 'react-data-table-component';

const PatientSearchPage = (props) => {
    const [newUser, setNewUser] = useState({email: '', date: '', name:''});
    const [navigate, setNavigate] = useState();
    const [error, setError] = useState();
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [data, setData] = useState([]  );
    const columns = [ { name: 'Email',
                        selector: row => row.email,
                        cell: (d) => <span>{d.email}</span>,},
                      { name: 'Name',
                        selector: row => row.name,
                        cell: (d) => <span>{d.name}</span>},
                      { name: 'Date',
                        selector: row => row.date,
                        cell: (d) => <span>{d.date}</span>},     
                      { name: "Action",
                      sortable: false,
                      cell: (d) => <button onClick={selectPatient.bind(this, d.folder)} style= {{border: 'none'}}>
                                      Select
                                  </button>},
                    ];

    const handleDateChange = (date) => {
      // Update the state with the selected date
      setSelectedDate(date);
      // Log the selected date
      console.log("Selected date:", date.format('YYYY-MM-DD'));
      setNewUser({
        ...newUser,
        ['date']: date.format('YYYY-MM-DD'),
      });
    };

    const selectPatient = (folder) => {
      console.log(`Select Patient: ${folder}`);
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
      .then((response)=>{
        props.setToken(response.data.access_token)
        setNavigate('/demographics')
      }).catch((error)=>{
        if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          setError(error.response)
        }
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios({
        method:"POST",
        url: props.proxy + "/search_patient",
        data:{
          email: newUser.email,
          name: newUser.name,
          date: newUser.date
        },
        headers: {
          Authorization: 'Bearer ' + props.token
        }
      })
      .then((response)=>{
        console.log(response.data)
        setData(response.data)
        // props.setToken(response.data.access_token)
      }).catch((error)=>{
        if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          setError(error.response)
        }
      })
      setNewUser({email: '', date: '', name:''});
      setSelectedDate(dayjs());
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
          ...newUser,
          [name]: value,
        });
    };

    return (
    <>
    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-screen">
    <NavBar  proxy={props.proxy} token={props.token}></NavBar>
    <div className="bg-gray-50 flex flex-col justify-start pb-[125px] w-full">
          <div className="bg-blue-50 flex flex-col font-cairo items-start justify-start mt-11 mx-auto md:px-5 rounded-[20px] shadow-bs2 w-[55%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-start justify-start md:ml-[0] w-[93%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start w-[52%] rounded-l-[20px] md:w-full" >
              <Img
                className="h-[607px] md:h-auto mb-[3px] object-cover w-[89%]"
                src="images/img_untitleddesign.png"
                alt="untitleddesign"
              />
            </div>
            <div className="flex flex-col md:gap-10 items-center justify-start md:mt-0 mt-[22px] w-[41%] md:w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text className="font-bold sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center">
                  Patient Search
                </Text>
                <div className="flex flex-col font-helvetica relative w-full">
                {error? <p>{error.data["msg"]}</p> : null}
                  <div className="flex flex-col gap-[15px] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                      <Text className="font-bold text-base text-black-900">Name</Text>
                      <Input
                        className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                        wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                        value={newUser.name} 
                        onChange={(e) => handleInputChange(e)}
                        type="text" 
                        placeholder="John Doe" 
                        id="name" 
                        name="name" 
                        autoComplete="off" 
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                        <Text className="font-bold text-base text-black-900">Email</Text>
                        <Input
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          value={newUser.email} 
                          onChange={(e) => handleInputChange(e)} 
                          type="email"
                          placeholder="youremail@gmail.com"
                          id="email" 
                          name="email" 
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                        <Text className="font-bold text-base text-black-900">Date</Text>
                        {/* <Input
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          value={newUser.email} 
                          onChange={(e) => handleInputChange(e)} 
                          type="email"
                          placeholder="youremail@gmail.com"
                          id="email" 
                          name="email" 
                        ></Input> */}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className="bg-white-A700 rounded-[20px] border border-gray-400 border-solid w-full items-start justify-start ">
                          <DatePicker
                            name="date"
                            className="w-full"
                            defaultValue={dayjs()}
                            onChange={handleDateChange}
                            InputProps={{ 
                              disableUnderline: true 
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  }}
                          />

                          </div>
                      </LocalizationProvider>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
              <button className="bg-indigo-A200 flex flex-col h-[50px] mt-[20px] items-center justify-start md:px-10 sm:px-5 px-[93px] rounded-[20px] w-full"
                      onClick={handleSubmit}>
                <Text className="flex flex-row font-bold items-center justify-center leading-[20.00px] mt-2.5 text-center text-white-A700 text-xl w-full">
                  Search
                </Text>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-[80%] rounded-l-[20px] md:w-full" >
        <div className="font-cairo ml-20 w-3/5">  
                <DataTable title= "ALL USERS" columns={columns} data={data}/>
        </div>
        </div>
        {navigate ? (<Navigate replace to= {navigate} />) : null}
    </div>
  </>
    );
}

export default PatientSearchPage

