import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

function DatePickerSelector() {
  //months are between 0-11

  const [startDate, setStartDate] = useState();

  return (
    <DatePicker
      selected={startDate}
      placeholderText="Select a date"
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yy"
      minDate={new Date()}
      className="date-picker"
    />
  );
}

export default DatePickerSelector;
