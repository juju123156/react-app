import React, { useState } from "react";

import AgGrid from "./AgGrid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Component = (props) => {

  const [isContent, setIsContent] = useState(false);
  const sendData = (rowData, columnDefs) => {};

  const clickRender =()=>{
    // console.log(content);
    setIsContent(!isContent)
  };
 
  if(isContent) {
    return  <AgGrid sendData={sendData} />
  } 
  
  return <button onClick={clickRender}>표 보여주기</button>

};

export default Component;

