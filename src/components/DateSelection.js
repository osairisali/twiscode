import { useState } from "react";

const DateSelection = (props) => {
  const [date, setDate] = useState("");

  const onChange = (e) => {
    setDate(e.target.value);
    props.onSelect(e);
  };

  return (
    <div>
      {props.name}
      <select
        name={props.name}
        id={props.name}
        value={date}
        onChange={onChange}
      >
        {props.selections
          .map((date, ind) => (
            <option key={ind} value={date}>
              {date}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DateSelection;
