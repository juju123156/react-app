import React, { useState, useEffect } from "react";

import { Fragment } from "react";
import axios from "axios";
import SelectBox from "../UI/SelectBox";
import Button from "../UI/Button";
import Popup from "../UI/Popup";
import AgGrid from "../component/AgGrid";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const OPTION_PAGENUM = [
  { value: 10, name: "10" },
  { value: 100, name: "100" },
  { value: 500, name: "500" },
  { value: 1000, name: "1000" },
];

const OPTION_EQP_CL_CD = [
  { value: "", name: "전체" },
  { value: "01", name: "DU" },
  { value: "02", name: "RU" },
  { value: "03", name: "DUH" },
  { value: "04", name: "DUL" },
  { value: "05", name: "NODEB" },
];

const OPTION_EQP_OP_STAT = [
  { value: "", name: "전체" },
  { value: 3, name: "대기" },
  { value: 4, name: "운용" },
  { value: 9, name: "미운용" },
];

const OPTION_JRDT_HDOFC_CD = [
  { value: "", name: "전체" },
  { value: "04", name: "연구소" },
  { value: "11", name: "영업그룹" },
  { value: "17", name: "NI개발그룹" },
  { value: "21", name: "NX개발그룹" },
  { value: "26", name: "DX개발그룹" },
  { value: "31", name: "DV개발그룹" },
  { value: "34", name: "IOP개발그룹" },
  { value: "39", name: "Corporate Center" },
];

const OPTION_RDT_TEAM_ORG_CD = [
  { value: "", name: "전체" },
  { value: "05", name: "플랫폼연구팀" },
  { value: "06", name: "UI솔루션연구팀" },
  { value: "07", name: "AI플랫폼연구팀" },
  { value: "08", name: "AI응용연구팀" },
  { value: "09", name: "기술기획팀" },
  { value: "10", name: "운용기술연구팀" },
  { value: "12", name: "텔코솔루션영업부" },
  { value: "13", name: "빅데이터솔루션 영업1부" },
  { value: "14", name: "빅데이터솔루션 영업2부" },
  { value: "15", name: "컨설팅사업팀" },
  { value: "16", name: "사업개발팀" },
  { value: "18", name: "NI개발1팀" },
  { value: "19", name: "NI개발2팀" },
  { value: "22", name: "NX개발1팀" },
  { value: "23", name: "NX개발2팀" },
  { value: "24", name: "NX개발3팀" },
  { value: "25", name: "NX개발4팀" },
  { value: "27", name: "DP개발팀" },
  { value: "28", name: "DX개발1팀" },
  { value: "29", name: "DX개발2팀" },
  { value: "30", name: "DX개발3팀" },
  { value: "32", name: "DV개발1팀" },
  { value: "33", name: "DV개발2팀" },
  { value: "35", name: "OT개발팀" },
  { value: "36", name: "OI개발팀" },
  { value: "37", name: "OX개발팀" },
  { value: "40", name: "경영기획팀" },
  { value: "41", name: "인사총무팀" },
  { value: "42", name: "UX팀" },
];

const Mypage = (props) => {
  // 버튼 클릭 on off
  const [isClicked, setIsClicked] = useState(false);
  // 팝업창 노출 여부
  const [popupOpen, setPopupOpen] = useState(false);
  // 그리드 노출 여부
  const [isContent, setIsContent] = useState(true);
  // 그리드 데이터 상태체크
  const [rowData, setRowData] = useState([]);
  // 그리드 컬럼 데이터
  const [columnDefs] = useState([
    {
      headerName: "장비아이디",
      field: "eqp_ID",
      width: 100,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "장비명",
      field: "eqp_NM",
      width: 80,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "장비분류",
      field: "eqp_CL_CD_NM",
      width: 100,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "장비운용상태",
      field: "eqp_OP_STAT_CD_NM",
      width: 140,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "시리얼 넘버",
      field: "eqp_SRNO",
      width: 180,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "관할본부 조직",
      field: "jrdt_HDOFC_CD_NM",
      width: 130,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "관할팀 조직",
      field: "rdt_TEAM_ORG_CD_NM",
      width: 130,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "위도",
      field: "lat_CODN",
      width: 110,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "경도",
      field: "lng_CODN",
      width: 110,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "마스터IP",
      field: "mst_IP",
      width: 150,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "운용담당자 아이디",
      field: "op_CHRR_ID",
      width: 120,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "등록일자",
      field: "regrt_DT",
      width: 200,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "등록자 ID",
      field: "regrt_ID",
      width: 100,
      cellStyle: { "text-align": "left" },
    },
    {
      headerName: "수정일자",
      field: "udt_DT",
      width: 200,
      cellStyle: { "text-align": "center" },
    },
    {
      headerName: "수정한사람 ID",
      field: "udt_ID",
      width: 130,
      cellStyle: { "text-align": "left" },
    },
  ]);



// 표 보여주기 버튼 클릭시 AgGrid에 Axio 비동기로 데이터 전송
  useEffect(() => {
    axios
      .get("/api/getEqpInfListPaging", {
        params: {
          page: 238,
          perPageNum: 10,
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
        setRowData(res.data);
        console.log(res.data);
      });
  }, []);


  const clickRender = () => {
    // console.log(content);
    setIsContent(!isContent);
  };

  const clickHandler = (isClicked) => {
    console.log(isClicked);
    setIsClicked((isClicked) => !isClicked); // on off
    // addData();
  };

  // 팝업창 컨트롤러
  const popupHandler = (popupOpen) => {
    setPopupOpen((popupOpen) => !popupOpen);
  };

  // 팝업창에서 axios로 data insert
  const addData = (inputs) => {

    console.log(inputs);
    
    axios({
      params: inputs,
      method: "post",
      url: "/api/insEqpInf",
      // header에서 JSON 타입의 데이터라는 것을 명시
      headers: { "Content-type": "application/json" },
      // 추가
      "Access-Control-Allow-Origin": `http://localhost:8080`,
      "Access-Control-Allow-Credentials": "true",
    })
      .then((res) => {
        alert("성공");
        // setRowData(inputs);
        // updateRowData(inputs);
        // API로 부터 받은 데이터 출력
        updateRowData(inputs);
        console.log("this is key "+Object.keys(inputs));
        console.log("this is values "+Object.values(inputs));
        // updateRowData(Object.entries(inputs));
        // console.log("this is input "+Object.entries(inputs));

      })
      .catch((error) => {
        console.log("실패");
        console.log(error);
        console.log("this is key "+Object.keys(inputs));
        console.log("this is values "+Object.values(inputs));

        const testSpread = [...rowData, inputs];
        // console.log("test: "+test);
        console.log("testSpread : "+testSpread);
        console.log("testSpread : "+Object.entries(testSpread));
        console.log("inputs: "+inputs);
        console.log("inputs: "+Object.entries(inputs));
        console.log("rowData: "+rowData);
        console.log("rowData: "+Object.entries(rowData));
      });
  };

  // useCallback으로 함수 재용하기> setRowData를 재사용하는듯
  const updateRowData = (inputs)=> {

    axios
      .get("/api/getEqpInfListPaging", {
        params: {
          page: 238,
          perPageNum: 10,
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
        setRowData(res.data);
        console.log(res.data);
      });
  }

  return (
    <Fragment>
      <h1>Mypage</h1>
      <div className="searchGrid">
        <SelectBox options={OPTION_PAGENUM}></SelectBox>
        <SelectBox options={OPTION_EQP_CL_CD} defaultValue=""></SelectBox>
        <SelectBox options={OPTION_EQP_OP_STAT} defaultValue=""></SelectBox>
        <SelectBox options={OPTION_JRDT_HDOFC_CD} defaultValue=""></SelectBox>
        <SelectBox options={OPTION_RDT_TEAM_ORG_CD} defaultValue=""></SelectBox>
        <Button
          name="조회"
          isClicked={isClicked}
          clickHandler={clickHandler}
        ></Button>
        <button onClick={popupHandler}>등록하기</button>
      </div>
      {popupOpen && <Popup popupHandler={popupHandler} addData={addData}/>}
      <div style={{ width: "100%", textAlign: "center" }}>
      {!isContent && <button onClick={clickRender}>표 보여주기</button>}
      {isContent && <AgGrid rowData={rowData} columnDefs={columnDefs} />}
      </div>
    </Fragment>
  );
};

export default Mypage;
