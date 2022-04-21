import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

function DatePickerSelector(props) {
  //months are between 0-11
  const [startDate, setStartDate] = useState();

  const setDateFunc = (date) => {
    setStartDate(date);
    const isoDate = date.toISOString().substring(0, 10); // ISO format date: yyyy-MM-dd
    props.onChange(isoDate); // manda la fecha en formate str al padre
  };

  return (
    <DatePicker
      /* autoComplete={false} */
      selected={startDate}
      placeholderText="Select a date"
      dateFormat="yyyy/MM/dd"
      onChange={(date) => setDateFunc(date)}
      minDate={new Date()}
      className="date-picker"
    />
  );
}

export default DatePickerSelector;
