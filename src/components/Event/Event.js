import React from "react";

function Event({ description }) {
  // Parse the combined date/time string into a Date object
  const startDate = new Date(description.start.dateTime);
  const endDate = new Date(description.end.dateTime);

  // Format the date and time components separately
  const startTimeString = startDate.toLocaleTimeString();
  const endTimeString = endDate.toLocaleTimeString();

  // Define a style object for the event title paragraph
  const eventTitleStyle = {
    wordWrap: "break-word", // Allow the text to wrap to the next line
    whiteSpace: "normal", // Allow wrapping of long words
    marginBottom: "5px", // Add some space between the event title and other details
    textAlign: "left", // Ensure left alignment
    fontSize: "8px", // Adjust the font size as needed
    lineHeight: "1", // Add line height for spacing between paragraphs
  };

  // Define a style object for the time range paragraph
  const timeRangeStyle = {
    textAlign: "center", // Ensure center alignment
    fontSize: "8px", // Adjust the font size as needed
    lineHeight: "1", // Add line height for spacing between paragraphs
  };

  return (
    <div>
      <br />
      <p style={eventTitleStyle}>{description.summary}</p>
      <br />
      <p style={timeRangeStyle}>{startTimeString} - {endTimeString}</p>
    </div>
  );
}

export default Event;

