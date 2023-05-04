import React, { useCallback, useRef, useState }  from "react";

import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGrid = (props) => {
    //row click 데이터
    // const { selectedRowData, setSelectedRowData } = useState([]);
    // 체크박스 데이터
    const [selectedCheckboxData, setSelectedCheckboxData] = useState([]);
  
    const gridOptions = {
      // onRowSelected:(e) => {
      //   setSelectedRowData(e.api.getSelectedRows());
      // },
  
      onSelectionChanged: (e) => {
        // setSelectedCheckboxData(e.api.getSelectedNodes().map((node) => node.data));
        const selectedNodes = e.api.getSelectedNodes();
        const selectedData = selectedNodes.map((node) => node.data);
        setSelectedCheckboxData(selectedData);
        console.log("checkbox data : ", selectedData);
      },
    };
  

  
  const gridRef = useRef();


  // 더블 클릭시 팝업창 띄우기
  function onRowDoubleClicked(e) {
    const rowData = e.data;

    axios
      .get("/api/getEqpInfListPaging", {
        params: {
          page: 1,
          perPageNum: 10,
          eqpId : rowData.eqpId
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

  
  // const onSelectionChanged = useCallback(() => {

  //   const selectedRowsApi = gridRef.current.api.getSelectedRows();
  //   let selectedRows =  Object.values(Object.fromEntries(Object.entries(selectedRowsApi[0]).filter(([key])=> key.includes('eqpId'))));
   
  //   selectedRows = selectedRows.toString();
  //   if(selectedRows !== null && selectedRows !== ''){
  //     axios
  //     .get("/api/getEqpInfListPaging", {
  //       params: {
  //         page: 1,
  //         perPageNum: 10,
  //         eqpId : selectedRows
  //       },
  //       method: "get",
  //       baseURL: "http://localhost:3000",
  //       headers: {
  //         "Content-Type": `application/json;charset=UTF-8`,
  //         Accept: "application/json",
  
  //         // 추가
  //         "Access-Control-Allow-Origin": `http://localhost:8080`,
  //         "Access-Control-Allow-Credentials": "true",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       props.updateRowDataHandler(res.data);
  //       props.rowClickPopupHandler();

  //     });
      
  //   }
    
  // }, []);



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
          rowSelection={'multiple'}
          // onSelectionChanged={onSelectionChanged}
          gridOptions={gridOptions}
          // suppressRowClickSelection={true}
          onRowDoubleClicked={onRowDoubleClicked}
        >
        </AgGridReact>
      </div>
    </div>
  );
};

export default AgGrid;
