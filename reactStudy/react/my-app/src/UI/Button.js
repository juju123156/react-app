import React, { useState } from "react";

const Button = ({ isClicked, clickHandler}) => {
    isClicked = true;
  return (
    <div><button onClick={(e) => { clickHandler(e, isClicked)}}>조회하기</button>
    </div>
  );
};

export default Button;
