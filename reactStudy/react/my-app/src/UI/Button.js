import React from "react";

const Button = (props) => {
  // isClicked = true;
  return (
    <div>
      <button onClick={() => { props.clickHandler()}}>{props.name}</button>
    </div>
  );
};

export default Button;
