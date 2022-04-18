import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

function DatePickerSelector() {
  //months are between 0-11

  const [startDate, setStartDate] = useState();
  const [startDateStr, setStartDateStr] = useState(); // Date with string format

  const setDateFunc = (date) => {
    setStartDate(date);
    const strDate = date.toLocaleDateString();
    setStartDateStr(strDate);
  };

  return (
    <DatePicker
      /* autoComplete={false} */
      selected={startDate}
      placeholderText="Select a date"
      onChange={(date) => setDateFunc(date)}
      dateFormat="dd/MM/yy"
      minDate={new Date()}
      className="date-picker"
    />
  );
}

export default DatePickerSelector;
