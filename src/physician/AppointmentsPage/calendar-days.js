import React from "react";
import Event from '../../components/Event/Event';

function CalendarDays(props) {
  const { events } = props;
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);

  // Initialize firstDayOfMonthCopy to the first day of the month
  let firstDayOfMonthCopy = new Date(firstDayOfMonth);

  // Calculate the number of days to subtract to get to the first day of the week (Sunday)
  const daysToSubtract = firstDayOfMonthCopy.getDay();

  // Subtract days to get to the first day of the week (Sunday)
  firstDayOfMonthCopy.setDate(firstDayOfMonthCopy.getDate() - daysToSubtract);

  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    const calendarDay = {
      currentMonth: (firstDayOfMonthCopy.getMonth() === props.day.getMonth()),
      date: new Date(firstDayOfMonthCopy),
      month: firstDayOfMonthCopy.getMonth(),
      number: firstDayOfMonthCopy.getDate(), // Assign the current date number
      selected: (firstDayOfMonthCopy.toDateString() === props.day.toDateString()),
      year: firstDayOfMonthCopy.getFullYear(),
      events: [] // Initialize events array for the day
    };

    // Check if there are events for the current day
    if (events) {
      const eventsForDay = events.filter(event => {
        const eventDate = new Date(event.start.dateTime);
        return (
          eventDate.getFullYear() === calendarDay.year &&
          eventDate.getMonth() === calendarDay.month &&
          eventDate.getDate() === calendarDay.number
        );
      });
      calendarDay.events = eventsForDay;
    }

    currentDays.push(calendarDay);

    // Move to the next day
    firstDayOfMonthCopy.setDate(firstDayOfMonthCopy.getDate() + 1);
  }

  return (
    <div className="table-content" style={{ overflowY: 'auto', height: '800px' }}>
      {currentDays.map((day, index) => (
        <div key={index} className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}>
          <p>{day.number}</p>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {day.events.map((event, eventIndex) => (
              <Event key={eventIndex} description={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;
