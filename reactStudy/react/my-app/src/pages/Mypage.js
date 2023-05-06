import React, { useState, useEffect } from "react";

import { Fragment } from "react";
import axios from "axios";

import Popup from "../UI/Popup";
import AgGrid from "../component/AgGrid";

import styles from "./Mypage.module.css";

const Mypage = (props) => {

  // 관할본부 셀렉트 박스 상태
  const [jrdtSelectVal, setJrdtSelectVal] = useState();
  // 관할팀 셀렉트 박스 상태
  const [rdtTeamSelectVal, setRdtTeamSelectVal] = useState();
  // 셀렉트 박스 상태
  const [selectValues, setSelectValues] = useState(["", "", "", "", ""]);


  //input창 (장비명) 상태
  const [inputEpqNm, setInputEpqNm] = useState("");

  // 업데이트인지 아닌지 체크 유무
  const [rowClickPopup, setRowClickPopup] = useState(false);
  // 삭제 버튼 클릭여부
  const [isDelClicked, setIsDelClicked] = useState(false);

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
      field:"checkbox",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 50,
    },
    {
      headerName: "장비아이디",
      field: "eqpId",
      width: 100,
      cellStyle: { textAlign: "center" },
      
    },
    {
      headerName: "장비명",
      field: "eqpNm",
      width: 80,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "장비분류",
      field: "eqpClCdNm",
      width: 100,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "장비운용상태",
      field: "eqpOpStatCdNm",
      width: 140,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "시리얼 넘버",
      field: "eqpSrno",
      width: 180,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "관할본부 조직",
      field: "jrdtHdofcCdNm",
      width: 130,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "관할팀 조직",
      field: "rdtTeamOrgCdNm",
      width: 130,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "위도",
      field: "latCodn",
      width: 110,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "경도",
      field: "lngCodn",
      width: 110,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "마스터IP",
      field: "mstIp",
      width: 150,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "운용담당자 아이디",
      field: "opChrrId",
      width: 120,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "등록일자",
      field: "regrtDt",
      width: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "등록자 ID",
      field: "regrtId",
      width: 100,
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "수정일자",
      field: "udtDt",
      width: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "수정한사람 ID",
      field: "udtId",
      width: 130,
      cellStyle: { textAlign: "left" },
    },
  ]);

  // 더블 클릭시 팝업창 띄우기
  // const onRowDoubleClicked = (e) => {
    
  //   const rowData = e.data;
  //   console.log("double clicked : ", rowData.eqpId)
  //   // axios
  //   //   .get("/api/getEqpInfListPaging", {
  //   //     params: {
  //   //       page: 1,
  //   //       perPageNum: 10,
  //   //       eqpId : rowData.eqpId
  //   //     },
  //   //     method: "get",
  //   //     baseURL: "http://localhost:3000",
  //   //     headers: {
  //   //       "Content-Type": `application/json;charset=UTF-8`,
  //   //       Accept: "application/json",
  
  //   //       // 추가
  //   //       "Access-Control-Allow-Origin": `http://localhost:8080`,
  //   //       "Access-Control-Allow-Credentials": "true",
  //   //     },
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   //     props.updateRowDataHandler(res.data);
  //   //     props.rowClickPopupHandler();

  //   //   });
      
  //   }

  // 체크박스 데이터
  const [selectedCheckboxData, setSelectedCheckboxData] = useState([]);

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

  // 관할본부 셀렉트 박스 옵션
  const jrdtSelectOpt = () => {
    axios
      .get("/api/getJrdtHdofcCdList", {
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
      });
  };

  const onChangeJrdtSelBox = (e) => {
    setJrdtSelectVal(e.currentTarget.value);
  };

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
  const updateOnHandler = () => {
    setUpdateClicked(true);
  };

  const updateOffHandler = () => {
    setUpdateClicked(false);
  };

  // 변경된 input값을 업데이트하기
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setInputEpqNm({
      ...inputEpqNm, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정해서 새로운 값으로 설정 (key:value json 형태로 만들어 axios 통신을 위해)
    });
  };

  // const searchHandler = (selectValues) => {
  //   // console.log("params : " + JSON.stringify(selectValues), inputEpqNm);
  //   console.log("params : " + JSON.stringify(selectValues), inputEpqNm);
  // };


  //  데이터 삭제하기
  const deleteHandler = () => {
    axios
    .post("/api/delEqpInf", {
      eqpIdList : selectedCheckboxData,
    }, {
      method: "post",
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
      console.log(res.data, '개 데이터 삭제 완료');
      loadRowData();
    });
  }

  return (
    <Fragment>
      <h3>장비관리</h3>
      <div className={styles.searchArea}>
        <div className={styles.searchGrid}>
          <div className={styles.searchGrid_sm}>
            <label htmlFor="eqpClCd" className={styles.searchLabel}>
              장비분류
            </label>
            <label htmlFor="eqpNm" className={styles.searchLabel}>
              장비명
            </label>
            <input
              name="eqpNm"
              className={styles.searchInput}
              onChange={(e) => onChangeInput(e)}
            />
          </div>
          <div className={styles.searchGrid_sm}>
            <label htmlFor="eqpOpStatCd" className={styles.searchLabel}>
              장비운용상태
            </label>
          </div>
          <div className={styles.searchGrid_sm}>
            <label htmlFor="jrdtHdofcCd" className={styles.searchLabel}>
              관할본부조직
            </label>
            <label htmlFor="rdtTeamOrgCd" className={styles.searchLabel}>
              {/* <select onChange={onChangeJrdtSelBox} value={jrdtSelectVal}>
                {jrdtSelectOpt.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select> */}
              관할팀조직
            </label>
          </div>
        </div>
      </div>
      <div className={styles.searchButton}>
        {/* <button onClick={() => searchHandler(selectValues)}>조회</button> */}
        <button onClick={()=> popupHandler(false)}>등록하기</button>
        <button onClick={deleteHandler}>삭제하기</button>
      </div>
      {popupOpen && (
        <Popup
          clickedRowData={clickedRowData}
          loadRowData={loadRowData}
          popupHandler={popupHandler}
          rowClickPopupHandler={rowClickPopupHandler}
          rowClickPopup={rowClickPopup}
          resetUpdateRowDataHandler={resetUpdateRowDataHandler}
          updateOnHandler={updateOnHandler}
          updateOffHandler={updateOffHandler}
          updateClicked={updateClicked}
          value={clickedRowData.eqpId}
        ></Popup>
      )}
      <div style={{ width: "100%", textAlign: "center" }}>
        <AgGrid
          rowData={rowData}
          columnDefs={columnDefs}
          updateRowDataHandler={updateRowDataHandler}
          rowClickPopupHandler={rowClickPopupHandler}
          updateOnHandler={updateOnHandler}
          updateOffHandler={updateOffHandler}
          updateClicked={updateClicked}
          setSelectedCheckboxData={setSelectedCheckboxData}
          deleteHandler={deleteHandler}
        />
      </div>
    </Fragment>
  );
};

export default Mypage;
