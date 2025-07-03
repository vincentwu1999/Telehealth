import axios from 'axios';
import React, { useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Img, Input, Text} from "../components";
import DataTable from 'react-data-table-component';
import { DeleteFilled, CloseCircleTwoTone, CheckCircleTwoTone, CameraOutlined, VideoCameraOutlined, FileAddOutlined } from '@ant-design/icons';
const MobilePromptsPage = (props) => {
  const token = props.token
  const navigate = useNavigate();
  const [data, setData] = useState([{'filename': 'name/date/tab/file','tab':"demographic", 'file':"file", 'type':"image"},
                                    {'filename': 'name/date/tab/file1','tab':"demographic", 'file':"file1", 'type':"video"},
                                    {'filename': 'name/date/tab/file2','tab':"demographic", 'file':"file2", 'type':"pdf"}]  );
  const columns = [ { name: 'Tab',
                      selector: row => row.tab,
                      cell: (d) => <span>{d.tab}</span>,},
                    { name: 'File',
                      selector: row => row.file,
                      cell: (d) => <span>{d.file}</span>},                
                    { name: "Upload File",
                    sortable: false,
                    cell: (d) => <button onClick={uploadFile.bind(this, d.filename)} style= {{border: 'none'}}>
                                    <FileAddOutlined style={{fontSize: '32px'}}/>
                                </button>},
                    { name: "Action",
                    sortable: false,
                    cell: (d) => (
                      d.type === "image" ? (
                        <button onClick={goToPhoto.bind(this, d.filename)} style= {{border: 'none'}}>
                                    <CameraOutlined style={{fontSize: '32px'}}/>
                        </button>
                      ) : ( d.type === "video" ?
                        <button onClick={goToVideo.bind(this, d.filename)} style= {{border: 'none'}}>
                                    <VideoCameraOutlined style={{fontSize: '32px'}}/>
                        </button>:
                        <div>None</div>
                      )
                    )
                  }
                    ,  
                  ];

  function goToPhoto(file){
    console.log(file);
    console.log("GO TO PHOTO");
    navigate('/camera',{state:{folder:file}})
    // setNavigate('/camera', { state: { key: file } });
  }
  function goToVideo(file){
    console.log(file);
    console.log("GO TO VIDEO");
    navigate('/video',{state:{folder:file}})
    // setNavigate('/camera', { state: { key: file } });
  }
  function uploadFile(file) {
    console.log(file)
    console.log("UPLOAD FILE")
  };
  // useEffect(() => {
  //   axios({
  //       method: "GET",
  //       url: props.proxy + "/all_prompts",
  //       headers: {
  //       Authorization: 'Bearer ' + token
  //       }
  //   })
  //   .then((response) => {
  //       const res = response.data
  //       setData(res)
  //   }).catch((error) => {
  //       console.log(error.response)
  //       console.log(error.response.status)
  //       console.log(error.response.headers)
  //   })
  // }, [token, props.proxy]);

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
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
      <header >
        <div className = "flex flex-row gap-5 items-center justify-center w-full bg-white-A700 h-[80px]">
          <Img
            className="h-[50px] w-[50px] "
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="text-3xl sm:text-[50px] md:text-[28px] text-black-900"
            size="txtDMSansMedium30"
            style={{ whiteSpace: 'nowrap' }}
          >
            Virtual Physical
          </Text>
        </div>
      </header>
        <div className="bg-gray-50 flex flex-col items-center justify-start w-full h-[70rem]">
          <div className="flex flex-col gap-[50px] justify-start items-center w-full mt-[50px]">
            <div className="w-[90%]">  
                <DataTable columns={columns} data={data}
                        customStyles={{
                          title: {
                            style: {
                              textAlign: 'center', // Center the title
                              fontSize: '24px',   // Adjust font size if needed
                            },
                          },
                          head: {
                            style: {
                              fontSize: '20px', // Change the font size of column names here
                            },
                          },
                          rows: {
                            style: {
                              fontSize: '16px', // Change the font size here
                            },
                          }}}/>
            </div>
            <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[100px] w-[200px] md:w-full h-[50px] rounded-[20px]"
                        onClick={() => logOut()}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Log out</Text>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePromptsPage;
