import React from "react";

import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGrid = (props) => {

  const onRowDoubleClicked = (e) => {
    const clickedEqpId = e.data.eqpId;
    axios
      .get("/api/getEqpInfListPaging", {
        params: {
          page: 1,
          perPageNum: 10,
          eqpId: clickedEqpId,
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
  };

  const gridOptions = {
    onRowDoubleClicked: onRowDoubleClicked,
    onSelectionChanged: (e) => {
      const selectedNodes = e.api.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data.eqpId);
      props.setSelectedCheckboxData(selectedData);
      console.log("checkbox data : ", selectedData);
    },
  };

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={props.rowData}
          columnDefs={props.columnDefs}
          defaultColDef={{
            sortable: true,
            resizable: true,
            flex: true,
          }}
          rowSelection="multiple"
          checkboxSelection={true}
          gridOptions={gridOptions}
          suppressRowClickSelection={true} // row클릭시 체크박스 선택 방지
        ></AgGridReact>
      </div>
    </div>
  );
};

export default AgGrid;
