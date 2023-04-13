import React, { useState } from "react";
import Button from "../UI/Button";
import AgGrid from "./AgGrid";
import Test2 from "../test2";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Component = (props) => {
  // const [rowData,setRowData] = useState(null);
  // const [columnDefs, setColumnDefs] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const sendData = (rowData, columnDefs) => {
     
  }

  // button on off체크 함수 
  const loadData = () =>{
    setIsLoad(!isLoad);
  }

  return (

    <div>
      <button onClick={loadData}>표 불러오기</button>
      {isLoad && <AgGrid sendData={sendData}/>}
    </div>
  );
};

export default Component;
