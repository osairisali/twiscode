import { useState } from "react";

const SelectionInput = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const onChange = (e) => {
    setSelectedCountry(e.target.value);
    props.onSelect(e);
  };

  return (
    <div>
      {props.name}
      <select
        name={props.name}
        id={props.name}
        value={selectedCountry}
        onChange={onChange}
      >
        {props.selections
          .filter(({ name }) => name !== "")
          .map(({ name }, ind) => (
            <option key={ind} value={name}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectionInput;
