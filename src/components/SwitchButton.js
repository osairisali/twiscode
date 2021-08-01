const SwitchButton = (props) => {
    return (
      <label className="switch">
        {props.name}
  
        <input
          value={props.value}
          type="checkbox"
          onChange={(e) => props.onChange(e)}
        ></input>
        <span className="slider round"></span>
      </label>
    );
  };
  
  export default SwitchButton;
  