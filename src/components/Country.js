import { useState } from "react";

const Country = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const onChange = (e) => {
    setSelectedCountry(e.target.value);
    props.onSelect(e);
  };

  return (
    <div>
      <select
        name="country"
        id="country"
        value={selectedCountry}
        onChange={onChange}
      >
        {props.countries
          .filter(({callingCodes}) => callingCodes !== "")
          .map(({callingCodes}, ind) => (
            <option key={ind} value={callingCodes}>
              {callingCodes}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Country;
