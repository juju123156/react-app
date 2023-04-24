import React, { useState, useEffect } from "react";

import { Fragment } from "react";
import axios from "axios";
import SelectBox from "../UI/SelectBox";
import Popup from "../UI/Popup";
import AgGrid from "../component/AgGrid";

import styles from "./Mypage.module.css";

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
  // 셀렉트 박스에서 관할본부조직코드에 값에 따라 관할팀조직코드 노출
  const[selJrdtCd, setSelJrdtCd] = useState('');

  // 업데이트인지 아닌지 체크 유무
  const [rowClickPopup, setRowClickPopup] = useState(false);

  // row 클릭 여부
  const [clickedRowData, setClickedRowData] = useState(""); // 배열의 첫 번째 요소

  // 팝업창 노출 여부
  const [popupOpen, setPopupOpen] = useState(false);

  const [updateClicked, setUpdateClicked] = useState(false);

  // 그리드 데이터 상태체크
  const [rowData, setRowData] = useState([]);
  // 그리드 컬럼 데이터
  const [columnDefs] = useState([
    {
      headerName: "장비아이디",
      field: "eqp_ID",
      width: 100,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "장비명",
      field: "eqp_NM",
      width: 80,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "장비분류",
      field: "eqp_CL_CD_NM",
      width: 100,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "장비운용상태",
      field: "eqp_OP_STAT_CD_NM",
      width: 140,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "시리얼 넘버",
      field: "eqp_SRNO",
      width: 180,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "관할본부 조직",
      field: "jrdt_HDOFC_CD_NM",
      width: 130,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "관할팀 조직",
      field: "rdt_TEAM_ORG_CD_NM",
      width: 130,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "위도",
      field: "lat_CODN",
      width: 110,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "경도",
      field: "lng_CODN",
      width: 110,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "마스터IP",
      field: "mst_IP",
      width: 150,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "운용담당자 아이디",
      field: "op_CHRR_ID",
      width: 120,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "등록일자",
      field: "regrt_DT",
      width: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "등록자 ID",
      field: "regrt_ID",
      width: 100,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "수정일자",
      field: "udt_DT",
      width: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "수정한사람 ID",
      field: "udt_ID",
      width: 130,
      cellStyle: { textAlign: "left" },
    },
  ]);

  const edtTeamCd = {
    all_team: [{  '플랫폼연구팀':'05', 'UI솔루션연구팀':'06', 'AI플랫폼연구팀' : '07','AI응용연구팀':'08', '기술기획팀':'09', '운용기술연구팀':'10'
                , '텔코솔루션영업부':'12', '빅데이터솔루션 영업1부': '13', '빅데이터솔루션 영업2부':'14', '컨설팅사업팀':'15', '사업개발팀':'16'
                , 'NI개발1팀':'18', 'NI개발2팀':'19', 'NX개발1팀':'22', 'NX개발2팀':'23', 'NX개발3팀':'24', 'NX개발4팀':'25'
                , 'DP개발팀':'27', 'DX개발1팀':'28', 'DX개발2팀':'29', 'DX개발3팀':'30', 'DV개발1팀':'32','DV개발2팀':'33'
                , 'OT개발팀':'35', 'OI개발팀':'36', 'OX개발팀':'37', '경영기획팀':'40', '인사총무팀':'41', 'UX팀':'42'}]
  , jrdtCd_04: [{'플랫폼연구팀':'05','UI솔루션연구팀':'06', 'AI플랫폼연구팀' : '07','AI응용연구팀':'08', '기술기획팀':'09', '운용기술연구팀':'10'}]
  , jrdtCd_11: [{'텔코솔루션영업부':'12', '빅데이터솔루션 영업1부': '13', '빅데이터솔루션 영업2부':'14', '컨설팅사업팀':'15', '사업개발팀':'16'}]
  , jrdtCd_17: [{'NI개발1팀':'18', 'NI개발2팀':'19'}]
  , jrdtCd_21: [{'NX개발1팀':'22', 'NX개발2팀':'23', 'NX개발3팀':'24', 'NX개발4팀':'25'}]
  , jrdtCd_26: [{'DP개발팀':'27', 'DX개발1팀':'28', 'DX개발2팀':'29', 'DX개발3팀':'30'}]
  , jrdtCd_31: [{'DV개발1팀':'32','DV개발2팀':'33'}]
  , jrdtCd_34: [{'OT개발팀':'35', 'OI개발팀':'36', 'OX개발팀':'37'}]
  , jrdtCd_39: [{'경영기획팀':'40', '인사총무팀':'41', 'UX팀':'42'}]
  }

  // const changeSelectBoxHandler = (e, props) => {
  //   setSelJrdtCd(e.target.value);
  //   if(selJrdtCd ==='04'){
  //     return (<select value></select>);
  //   }
  // }

  // useCallback으로 함수 재용하기> setRowData를 재사용하는듯
  const loadRowData = () => {
    axios
      .get("/api/getEqpInfListPaging", {
        params: {
          page: 1,
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
  };
  // 표 보여주기 버튼 클릭시 AgGrid에 Axio 비동기로 데이터 전송
  useEffect(loadRowData, []);
  // 팝업창 컨트롤러
  // addData 성공시 reloadFlag 전송
  const popupHandler = (reloadFlag) => {
    setPopupOpen((popupOpen) => !popupOpen);
    if (reloadFlag) loadRowData();
    closePopupBody();
  };

  // AgGrid 셀 클릭시 데이터 Popup으로 보내기
  const updateRowDataHandler = (clickedRowData) => {
    if (clickedRowData) {
      setClickedRowData(clickedRowData);
      // 팝업창 열기
      popupHandler();
    }
  };

  const resetUpdateRowDataHandler = () => {
    setClickedRowData("");
  };

  useEffect(updateRowDataHandler, []);

  const rowClickPopupHandler = () => {
    setRowClickPopup(true);
  };

  const closePopupBody = () => {
    setRowClickPopup(false);
  };

  // Popup에서 update버튼 클릭 핸들러
  const updateHandler = () => {
    setUpdateClicked((popupOpen) => !popupOpen);
  };

  const searchHandler = () => {};

  return (
    <Fragment>
      <h3>장비관리</h3>
      <div className={styles.searchArea}>
        <div className={styles.searchGrid}>
          <div className={styles.searchGrid_sm}>
            <label
              htmlFor="OPTION_EQP_CL_CD_SELBOX"
              className={styles.searchLabel}
            >
              장비분류
            </label>
            <SelectBox
              id="OPTION_EQP_CL_CD_SELBOX"
              options={OPTION_EQP_CL_CD}
              defaultValue=""
            ></SelectBox>
            <label htmlFor="UDT_ID" className={styles.searchLabel}>
              장비명
            </label>
            <input id="SEARCH_EQP_NM" className={styles.searchInput} />
          </div>
          <div className={styles.searchGrid_sm}>
            <label
              htmlFor="OPTION_EQP_OP_STAT_SELBOX"
              className={styles.searchLabel}
            >
              장비운용상태
            </label>
            <SelectBox
              id="OPTION_EQP_OP_STAT_SELBOX"
              options={OPTION_EQP_OP_STAT}
              defaultValue=""
            ></SelectBox>
          </div>
          <div className={styles.searchGrid_sm}>
            <label
              htmlFor="OPTION_JRDT_HDOFC_CD_SELBOX"
              className={styles.searchLabel}
            >
              관할본부조직
            </label>
            <SelectBox
              id="OPTION_JRDT_HDOFC_CD_SELBOX"
              options={OPTION_JRDT_HDOFC_CD}
              defaultValue=""
            ></SelectBox>
            <label
              htmlFor="OPTION_RDT_TEAM_ORG_CD_SELBOX"
              className={styles.searchLabel}
            >
              관할팀조직
            </label>
            <SelectBox
              id="OPTION_RDT_TEAM_ORG_CD_SELBOX"
              options={OPTION_RDT_TEAM_ORG_CD}
              defaultValue=""
            ></SelectBox>
          </div>
        </div>
      </div>
      <div className={styles.searchButton}>
        <button onClick={searchHandler}>조회</button>
        <button onClick={popupHandler}>등록하기</button>
      </div>
      {popupOpen && (
        <Popup
          clickedRowData={clickedRowData}
          loadRowData={loadRowData}
          popupHandler={popupHandler}
          rowClickPopupHandler={rowClickPopupHandler}
          rowClickPopup={rowClickPopup}
          resetUpdateRowDataHandler={resetUpdateRowDataHandler}
          updateHandler={updateHandler}
          updateClicked={updateClicked}
          value={clickedRowData.eqp_ID}
        ></Popup>
      )}
      <div style={{ width: "100%", textAlign: "center" }}>
        <AgGrid
          rowData={rowData}
          columnDefs={columnDefs}
          updateRowDataHandler={updateRowDataHandler}
          rowClickPopupHandler={rowClickPopupHandler}
          updateHandler={updateHandler}
          updateClicked={updateClicked}
        />
      </div>
      <SelectBox options={OPTION_PAGENUM}></SelectBox>
    </Fragment>
  );
};

export default Mypage;
