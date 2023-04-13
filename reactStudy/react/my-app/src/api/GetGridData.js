import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const GetGridData = ({rowData}) => {

    const GetDataFn = () => {
        let currentPage = 10;
        let perPageNum = 10;
      
        // setVisible(!visible);
      
        console.log("Clicked");
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
              // "Authorization": "Bearer "+token,
      
              // 추가
              "Access-Control-Allow-Origin": `http://localhost:8080`,
              "Access-Control-Allow-Credentials": "true",
            },
          })
          .then((response) => {
            // setRowData(response.data);
            console.log(response.data);
            rowData(response.data);
          });

    }
  
  

  return (
    <button onClick={GetDataFn}>데이터가져오기</button>
  );
}

export default GetGridData;
