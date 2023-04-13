import React, { useState, useEffect } from "react";

import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGrid = ({ sendData }) => {
 
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { headerName: "장비아이디", field: "eqp_ID", width: 100 },
    { headerName: "장비명", field: "eqp_NM", width: 80 },
    { headerName: "장비분류", field: "eqp_CL_CD_NM", width: 100 },
    { headerName: "장비운용상태", field: "eqp_OP_Stat_CD_NM", width: 140 },
    { headerName: "시리얼 넘버", field: "eqp_SRNO", width: 180 },
    { headerName: "관할본부 조직", field: "jrdt_HDOFC_CD_NM", width: 130 },
    { headerName: "관할팀 조직", field: "rdt_TEAM_ORG_CD_NM", width: 130 },
    { headerName: "위도", field: "lat_CODN", width: 110 },
    { headerName: "경도", field: "lng_CODN", width: 110 },
    { headerName: "마스터IP", field: "mst_IP", width: 150 },
    { headerName: "운용담당자 아이디", field: "op_CHRR_ID", width: 120 },
    { headerName: "등록일자", field: "regrt_DT", width: 200 },
    { headerName: "등록자 ID", field: "regrt_ID", width: 100 },
    { headerName: "수정일자", field: "udt_DT", width: 200 },
    { headerName: "수정한사람 ID", field: "udt_ID", width: 130 },
  ]);

  useEffect(() => {

  
  axios
    .get("/api/getEqpInfListPaging", {
      params: {
        page: 10,
        perPageNum: 10,
      },

      // url: '/api/getEqpInfListPaging',
      // url: '/api/getEqpInfListPaging?page='+currentPage +'&perPageNum=' + perPageNum,
      // url: '/api/getEqpInfListPaging?page=10&perPageNum=10',
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
    .then((response) => {
    //   setRowData(response.data);
        setRowData(response.data);
        console.log(response.data);
    });
}, [])

  return (
    <div>
      {/* {visible && <div className="ag-theme-alpine" style={{height: 400, width: 600}}> */}
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            resizable: true,
            flex: true,
          }}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default AgGrid;
