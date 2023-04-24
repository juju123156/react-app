import React, { useCallback, useRef }  from "react";

import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGrid = (props) => {

  const gridRef = useRef();

  const onSelectionChanged = useCallback(() => {
    const selectedRowsApi = gridRef.current.api.getSelectedRows();
    let selectedRows =  Object.values(Object.fromEntries(Object.entries(selectedRowsApi[0]).filter(([key])=> key.includes('eqp_ID'))));
   
    selectedRows = selectedRows.toString();
    if(selectedRows !== null && selectedRows !== ''){
      axios
      .get("/api/getEqpInfListPaging", {
        params: {
          page: 1,
          perPageNum: 10,
          EQP_ID : selectedRows
        },
        method: "get",
        baseURL: "http://localhost:3000",
        headers: {
          "Content-Type": `application/json;charset=UTF-8`,
          Accept: "application/json",
  
          // 추가
          "Access-Control-Allow-Origin": `http://localhost:8080`,
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((res) => {
        console.log(res.data);
        props.updateRowDataHandler(res.data);
        props.rowClickPopupHandler();

      });
      
    }
    
  }, []);



  return (
    <div>
      <span>

      </span>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData = {props.rowData}
          columnDefs = {props.columnDefs}
          defaultColDef = {{
            sortable: true,
            resizable: true,
            flex: true
          }}
          ref={gridRef}
          rowSelection={'single'}
          onSelectionChanged={onSelectionChanged}
          // clickedRowData = {clickedRowData}
        >
        </AgGridReact>
      </div>
    </div>
  );
};

export default AgGrid;
