const CheckBox = (props) => {
  return (
    <label>
      {props.name}

      <input
        value={props.name}
        type="checkbox"
        onChange={(e) => props.onTitleChange(e)}
      ></input>

      {props.confirmation ? props.confirmation : ''}
    </label>
  );
};

export default CheckBox;
