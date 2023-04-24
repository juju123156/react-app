import React from "react";

const SelectBox = (props) => {
  const handleChange = (e) => {
    // event handler
    // console.log(e.target.value);
  };

  return (
    <select onChange={(e)=>props.selectBoxOnChange(props.idx, e)}>
      {props.options.map((option) => (
        <option 
                key={option.value} 
                name={option.name}
                value={option.value}
                defaultValue={props.defaultValue} 
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
