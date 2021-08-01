import "./App.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import Country from "./components/Country";
import SelectionInput from "./components/SelectionInput";
import DateSelection from "./components/DateSelection";
import SwitchButton from "./components/SwitchButton";

Modal.setAppElement('#root');

function App() {
  const [title, setTitle] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [sms, setSms] = useState(false);
  const [emailing, setEmailing] = useState(false);
  const [mailing, setMailing] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(title);
  console.log(lastName);
  console.log(firstName);
  console.log(phoneCode);
  console.log(phoneNumber);
  console.log(address);
  console.log(country);
  console.log(date);
  console.log(month);
  console.log(year);
  console.log(sms);
  console.log(confirmation);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onPhoneCodeSelect = (e) => {
    setPhoneCode(e.target.value);
  };

  const onPhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const onCountrySelect = (e) => {
    setCountry(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const onYearChange = (e) => {
    setYear(e.target.value);
  };

  const onSmsChange = (e) => {
    setSms(!sms);
  };

  const onEmailingChange = (e) => {
    setEmailing(!emailing);
  };

  const onMailingChange = (e) => {
    setMailing(!mailing);
  };

  const onConfirmationChange = (e) => {
    setConfirmation(!confirmation);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all", {
        method: "GET",
      });

      const countries = await response.json();
      // console.log(countries);
      setCountries(
        countries.map(({ name, callingCodes }) => {
          return { name, callingCodes };
        })
      );
    };

    fetchCountries();
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // submit to server
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div>
          <div id="title">
            <label>Title</label>

            <CheckBox name="Mrs" onTitleChange={onTitleChange}></CheckBox>
            <CheckBox name="Ms" onTitleChange={onTitleChange}></CheckBox>
            <CheckBox name="Mdm" onTitleChange={onTitleChange}></CheckBox>
            <CheckBox name="Mr" onTitleChange={onTitleChange}></CheckBox>
            <CheckBox name="Dr" onTitleChange={onTitleChange}></CheckBox>
          </div>

          <Input
            name="Last Name"
            onChange={onLastNameChange}
            value={lastName}
          ></Input>

          <Input
            name="First Name"
            onChange={onFirstNameChange}
            value={firstName}
          ></Input>

          <Country onSelect={onPhoneCodeSelect} countries={countries}></Country>

          <Input
            name=""
            value={phoneNumber}
            onChange={onPhoneNumberChange}
          ></Input>

          <h1>Address</h1>

          <Input
            name="Address"
            value={address}
            onChange={onAddressChange}
          ></Input>

          <SelectionInput
            selections={countries}
            onSelect={onCountrySelect}
            name="Country/Location *"
          ></SelectionInput>

          <SelectionInput
            onSelect={(e) => {
              setProvince(e.target.value);
            }}
            name="Province/District"
            selections={[
              { name: "Jawa Barat" },
              { name: "Jawa Tengah" },
              { name: "Jawa Timur" },
            ]}
            value={province}
          ></SelectionInput>

          <h1>Contacts</h1>

          <Input
            name="Email Address *"
            onChange={onEmailChange}
            value={email}
          ></Input>

          <DateSelection
            name="Date"
            selections={[...Array(31).keys()]}
            onSelect={onDateChange}
            value={date}
          ></DateSelection>

          <Input name="Month" onChange={onMonthChange} value={month}></Input>

          <Input name="Year" onChange={onYearChange} value={year}></Input>

          <h1>Standard Privacy Note</h1>
          <p>bla bla bla</p>

          <SwitchButton
            name="SMS & Mobile Call"
            onChange={onSmsChange}
          ></SwitchButton>

          <SwitchButton
            name="Emailing"
            onChange={onEmailingChange}
          ></SwitchButton>

          <SwitchButton
            name="Mailing"
            onChange={onMailingChange}
          ></SwitchButton>

          {sms || emailing || mailing ? "HideInfo" : "Info"}

          <CheckBox
            confirmation="I have read and understood..."
            value={confirmation}
            name="confirmation"
            onTitleChange={onConfirmationChange}
          ></CheckBox>
        </div>

        <button
          onClick={(e) => {
            setIsOpen(!modalIsOpen);
          }}
        >
          CREATE CUSTOMER
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>{title}</p>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{title}</p>
      </Modal>
    </div>
  );
}

export default App;
