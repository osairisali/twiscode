const Input = (props) => {
  return (
    <div>
      <label>{`${props.name} `}</label>
      <input
        id={props.name}
        value={props.value}
        placeholder={props.name}
        onChange={(e) => props.onChange(e)}
      ></input>
    </div>
  );
};
export default Input;
