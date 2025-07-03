import React, { useEffect, useState } from "react";
import "./Appointments.css";
import axios from 'axios';
import Calendar from './calendar.js';
import { NavBar } from 'components'

console.log("AppointmentsPage.js file is being executed");


export default function AppointmentsPage(props) { // Define props here
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://virtualphysical.pythonanywhere.com/get_calendar",
    })
      .then((response) => {
        console.log("API Response:", response.data); // Log the entire response object
        const events = response.data.items;
        console.log("Items:", events); // Log the items data
        setEvents(events);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);
    

  return (
    <div>
      <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}
      
      <div className="App py-8 flex flex-col justify-center">
        <h1>Patient Appointments</h1>
        <Calendar events={events} /> 
      </div>
    </div>
  );
}
