import axios from 'axios';
import React, { useState, useEffect} from "react";
import {Input, Text} from "../components";
import NavBar from "../components/NavBar";
import DataTable from 'react-data-table-component';
import { DeleteFilled, EyeInvisibleTwoTone, EyeTwoTone, CloseCircleTwoTone,CheckCircleTwoTone } from '@ant-design/icons';
const AdminHomePage = (props) => {
  const token = props.token
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState([{'name':"name", 'email':"email", "type":"type", "is_confirmed":false}]  );
  const columns = [ { name: 'Email',
                      selector: row => row.email,
                      cell: (d) => <span>{d.email}</span>,},
                    { name: 'Type',
                      selector: row => row.type,
                      cell: (d) => <span>{d.type}</span>}, 
                    { name: 'Name',
                      selector: row => row.name,
                      cell: (d) => <span>{d.name}</span>},    
                    { name: "Confirmed",
                      sortable: false,
                      // selector: "null",
                      cell: (d) => <button onClick={sendAuthenticationEmail.bind(this, d.email)} style= {{border: 'none'}} disabled={d.is_confirmed ? true : false}>
                                      {d.is_confirmed?<CheckCircleTwoTone style={{fontSize: '32px'}} twoToneColor='#008000'/>: 
                                                      <CloseCircleTwoTone style={{fontSize: '32px'}} twoToneColor='	#FF0000'/> }
                                   </button>},
                    { name: "Delete",
                    sortable: false,
                    // selector: "null",
                    cell: (d) => <button onClick={deleteAccount.bind(this, d.email)} style= {{border: 'none'}}>
                                    <DeleteFilled style={{fontSize: '32px'}}/>
                                </button>},
                  ];

  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "/all_users",
        headers: {
        Authorization: 'Bearer ' + token
        }
    })
    .then((response) => {
        const res = response.data
        console.log(res)
        setData(res)
    }).catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    })
  }, [token, props.proxy]);

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    axios({
        method:"POST",
        url: props.proxy +"/update_password",
        data:{
          password: newPassword
        },
        headers: {
            Authorization: 'Bearer ' + token
        }
      })
      .then((response)=>{
      }).catch((error)=>{
        if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
      setNewPassword('');
  };

  function logOut() {
    axios({
        method: "POST",
        url: props.proxy + "/logout",
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })
    .then(() => {
        props.removeToken()
    }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
    })
  };

  function deleteAccount(email) {
    console.log(`Delete button clicked for id: ${email}`);
    console.log("DELETE")
    axios({
        method: "POST",
        url: props.proxy +"/delete",
        data: {
          email: email
        },
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })
    .then(() => {
    }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
    })
  };
  function sendAuthenticationEmail(email) {
    console.log(`Authenticate button clicked for id: ${email}`);
    console.log("AUTHENTICATE")
    axios({
      method: "POST",
      url: props.proxy +"/confirm",
      data: {
        email: email
      },
      headers: {
          Authorization: 'Bearer ' + props.token
      }
  })
  .then(() => {
  }).catch((error) => {
     if (error.response) {
       console.log(error.response)
       console.log(error.response.status)
       console.log(error.response.headers)
       }
  })
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
      <NavBar  proxy={props.proxy} token={props.token}></NavBar>
        <div className="bg-gray-50 flex flex-col items-center justify-start pb-[728px] w-full">
          <div className="flex flex-col justify-start w-full">
            <Text className="font-cairo font-semibold md:ml-[0] ml-[97px] mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900">
              Manage Users
            </Text>
            <div className="font-cairo ml-20 w-3/5">  
                <DataTable title= "ALL USERS" columns={columns} data={data}/>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 w-full">
              </div>
              <Text className="font-cairo font-semibold md:ml-[0] ml-[97px] mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900">
              Settings
              </Text>
              <div className="flex md:flex-1 flex-col gap-5 ml-[97px] items-start justify-start w-2/5 md:w-full">
              <div className="flex flex-col items-start justify-start w-full mt-6 w-3/5">
                  <Text className="font-bold text-xl text-black-900">Update Password</Text>
                  <div className="relative w-full">
                  <Input
                    className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    type={showPassword? "text": "password"} 
                    placeholder="New password"
                    id="password" 
                    name="password" 
                    required
                  ></Input>
                  <button className= "border-none outline-none absolute top-[20%] right-[5%] bg-transparent" 
                  onClick={() => setShowPassword(!showPassword)} >
                  {showPassword? 
                    <EyeTwoTone style={{fontSize: '32px'}} twoToneColor='#8a8a8a'/> : 
                    <EyeInvisibleTwoTone style={{fontSize: '32px'}} twoToneColor='#8a8a8a'/> }
                  </button>
                  </div>
                  <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
                  onClick={(e) => handlePasswordUpdate(e)}>
                  <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Update</Text>
                  </button>
                  <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
                        onClick={() => logOut()}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Log out</Text>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
