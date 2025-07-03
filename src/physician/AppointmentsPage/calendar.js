import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css'
import { ArrowForward, ArrowBack } from '@mui/icons-material';

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      currentDay: new Date(),
      events: [] // Initialize events array
    }
  }

  componentDidUpdate(prevProps) {
    // Check if the events prop has changed
    if (this.props.events !== prevProps.events) {
      // Update the events state with the new events
      this.setState({ events: this.props.events });
      console.log("Events prop:", this.props.events); // Log the events prop
    }
  }  

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  nextDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)) });
  }

  previousDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)) });
  }

  render() {
    console.log("Events:", this.state.events); // Log the events array

    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={this.previousDay}>
              <ArrowBack/>
            </button>
            <p>{this.months[this.state.currentDay.getMonth()].substring(0, 3)} {this.state.currentDay.getDate()}</p>
            <button onClick={this.nextDay}>
              <ArrowForward/>
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {this.weekdays.map((weekday, index) => (
              <div key={index} className="weekday"><p>{weekday}</p></div>
            ))}
          </div>
          <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} events={this.props.events} />

        </div>
      </div>
    )
  }
}
