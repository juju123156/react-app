import React, { Fragment, useState } from "react";

import axios from "axios";
import styles from "./Popup.module.css";

const Popup = (props) => {
  // 구조분해 할당으로 가져옴
  const { clickedRowData } = props;
  const [updateSubmit, setUpdateSubmit] = useState(false);
  // Popup input값 초기화
  const [inputs, setInputs] = useState({
    EQP_NM: "",
    EQP_CL_CD: "",
    EQP_OP_STAT_CD: "",
    JRDT_HDOFC_CD: "",
    RDT_TEAM_ORG_CD: "",
    EQP_SRNO: "",
    MST_IP: "",
    LAT_CODN: "",
    LNG_CODN: "",
    OP_CHRR_ID: "",
    REGRT_DT: "",
    REGRT_ID: "",
    UDT_DT: "",
    UDT_ID: "",
  });

  // 변경된 input값을 업데이트하기
  const onChange = (e) => {
    // const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    const { name, value } = e.target;
    console.log(e.target.value);
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정해서 새로운 값으로 설정 (key:value json 형태로 만들어 axios 통신을 위해)
    });
  };

  // data insert logic
  const addData = (inputs) => {
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
        // Aggrid reload 여부
        let reloadFlag = true;
        props.popupHandler(reloadFlag);
      })
      .catch((error) => {
        console.log("실패");
        console.log(error);
      });
  };

  // data update logic
  const udtData = () => {};

  // 수정하기 버튼 클릭시 보여지는 popup
  function PopupBodyUpdate(props) {

    let eqp_ID = clickedRowData.eqp_ID;

    let rowDataStr = JSON.stringify(clickedRowData);
    let jData = JSON.parse(rowDataStr);
    let jDataVal = "";
    for (let i = 0; i < jData.length; i++) {
      jDataVal = jData[i];
    }
    return (
      <Fragment>
        <div className={styles.popupBody}>
          <label htmlFor="EQP_ID" className={styles.popupLabel}>
            EQP_ID
          </label>
          <span>{jDataVal.eqp_ID}</span>
          <label htmlFor="EQP_NM" className={styles.popupLabel}>
            EQP_NM
          </label>
          <input
            type="text"
            name="EQP_NM"
            value={jDataVal.eqp_NM}
            onChange={onChange}
          />
          <label htmlFor="EQP_CL_CD" className={styles.popupLabel}>
            EQP_CL_CD
          </label>
          <input
            type="text"
            name="EQP_CL_CD"
            value={jDataVal.eqp_CL_CD_NM}
            onChange={onChange}
          />
          <label htmlFor="EQP_OP_STAT_CD" className={styles.popupLabel}>
            EQP_OP_STAT_CD
          </label>
          <input
            type="text"
            name="EQP_OP_STAT_CD"
            value={jDataVal.eqp_OP_STAT_CD_NM}
            onChange={onChange}
          />
          <label htmlFor="JRDT_HDOFC_CD" className={styles.popupLabel}>
            JRDT_HDOFC_CD
          </label>
          <input
            type="text"
            name="JRDT_HDOFC_CD"
            value={jDataVal.jrdt_HDOFC_CD_NM}
            onChange={onChange}
          />
          <label htmlFor="RDT_TEAM_ORG_CD" className={styles.popupLabel}>
            RDT_TEAM_ORG_CD
          </label>
          <input
            type="text"
            name="RDT_TEAM_ORG_CD"
            value={jDataVal.rdt_TEAM_ORG_CD_NM}
            onChange={onChange}
          />
          <label htmlFor="EQP_SRNO" className={styles.popupLabel}>
            EQP_SRNO
          </label>
          <input
            type="text"
            name="EQP_SRNO"
            value={jDataVal.eqp_SRNO}
            onChange={onChange}
          />
          <label htmlFor="MST_IP" className={styles.popupLabel}>
            MST_IP
          </label>
          <input
            type="text"
            name="EQP_NM"
            value={jDataVal.mst_IP}
            onChange={onChange}
          />
          <label htmlFor="LAT_CODN" className={styles.popupLabel}>
            LAT_CODN
          </label>
          <input
            type="text"
            name="LAT_CODN"
            value={jDataVal.lat_CODN}
            onChange={onChange}
          />
          <label htmlFor="LNG_CODN" className={styles.popupLabel}>
            LNG_CODN
          </label>
          <input
            type="text"
            name="LNG_CODN"
            value={jDataVal.lng_CODN}
            onChange={onChange}
          />
          <label htmlFor="OP_CHRR_ID" className={styles.popupLabel}>
            OP_CHRR_ID
          </label>
          <input
            type="text"
            name="OP_CHRR_ID"
            value={jDataVal.op_CHRR_ID}
            onChange={onChange}
          />
          <label htmlFor="REGRT_DT" className={styles.popupLabel}>
            REGRT_ID
          </label>
          <span>{jDataVal.regrt_DT}</span>
          <label htmlFor="REGRT_ID" className={styles.popupLabel}>
            REGRT_DT
          </label>
          <input
            type="text"
            name="REGRT_ID"
            value={jDataVal.regrt_ID}
            onChange={onChange}
          />
          <label htmlFor="UDT_DT" className={styles.popupLabel}>
            UDT_DT
          </label>
          <span>{jDataVal.udt_DT} </span>
          <label htmlFor="UDT_ID" className={styles.popupLabel}>
            UDT_ID
          </label>
          <input
            type="text"
            name="UDT_ID"
            value={jDataVal.udt_ID}
            onChange={onChange}
          />
        </div>
      </Fragment>
    );
  }

  // row 클릭했을때 보여지는 popup
  function PopupRowData(props) {
    let eqp_ID = clickedRowData.eqp_ID;

    let rowDataStr = JSON.stringify(clickedRowData);
    let jData = JSON.parse(rowDataStr);
    let jDataVal = "";
    for (let i = 0; i < jData.length; i++) {
      jDataVal = jData[i];
    }
    return (
      <Fragment>
        <div className={styles.popupBody}>
          <label htmlFor="EQP_ID" className={styles.popupLabel}>
            EQP_ID
          </label>
          <span>{jDataVal.eqp_ID}</span>
          <label htmlFor="EQP_NM" className={styles.popupLabel}>
            EQP_NM
          </label>
          <span>{jDataVal.eqp_NM} </span>
          <label htmlFor="EQP_CL_CD" className={styles.popupLabel}>
            EQP_CL_CD
          </label>
          <span>{jDataVal.eqp_CL_CD_NM} </span>
          <label htmlFor="EQP_OP_STAT_CD" className={styles.popupLabel}>
            EQP_OP_STAT_CD
          </label>
          <span>{jDataVal.eqp_OP_STAT_CD_NM}</span>
          <label htmlFor="JRDT_HDOFC_CD" className={styles.popupLabel}>
            JRDT_HDOFC_CD
          </label>
          <span>{jDataVal.jrdt_HDOFC_CD_NM}</span>
          <label htmlFor="RDT_TEAM_ORG_CD" className={styles.popupLabel}>
            RDT_TEAM_ORG_CD
          </label>
          <span>{jDataVal.rdt_TEAM_ORG_CD_NM}</span>
          <label htmlFor="EQP_SRNO" className={styles.popupLabel}>
            EQP_SRNO
          </label>
          <span>{jDataVal.eqp_SRNO}</span>
          <label htmlFor="MST_IP" className={styles.popupLabel}>
            MST_IP
          </label>
          <span>{jDataVal.mst_IP}</span>
          <label htmlFor="LAT_CODN" className={styles.popupLabel}>
            LAT_CODN
          </label>
          <span>{jDataVal.lat_CODN}</span>
          <label htmlFor="LNG_CODN" className={styles.popupLabel}>
            LNG_CODN
          </label>
          <span>{jDataVal.lng_CODN}</span>
          <label htmlFor="OP_CHRR_ID" className={styles.popupLabel}>
            OP_CHRR_ID
          </label>
          <span>{jDataVal.op_CHRR_ID}</span>
          <label htmlFor="REGRT_DT" className={styles.popupLabel}>
            REGRT_ID
          </label>
          <span>{jDataVal.regrt_DT}</span>
          <label htmlFor="REGRT_ID" className={styles.popupLabel}>
            REGRT_DT
          </label>
          <span>{jDataVal.regrt_ID}</span>
          <label htmlFor="UDT_DT" className={styles.popupLabel}>
            UDT_DT
          </label>
          <span>{jDataVal.udt_DT} </span>
          <label htmlFor="UDT_ID" className={styles.popupLabel}>
            UDT_ID
          </label>
          <span>{jDataVal.udt_ID}</span>
        </div>
      </Fragment>
    );
  }

  // 등록하기 버튼 클릭시 보여지는 팝업
  function PopupInsert() {
    return (
      <div className={styles.popupBody}>
        <label htmlFor="EQP_NM" className={styles.popupLabel}>
          EQP_NM
        </label>
        <input
          type="text"
          id="EQP_NM"
          name="EQP_NM"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="EQP_CL_CD" className={styles.popupLabel}>
          EQP_CL_CD
        </label>
        <input
          type="text"
          id="EQP_CL_CD"
          name="EQP_CL_CD"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="EQP_OP_STAT_CD" className={styles.popupLabel}>
          EQP_OP_STAT_CD
        </label>
        <input
          type="text"
          id="EQP_OP_STAT_CD"
          name="EQP_OP_STAT_CD"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="JRDT_HDOFC_CD" className={styles.popupLabel}>
          JRDT_HDOFC_CD
        </label>
        <input
          type="text"
          id="JRDT_HDOFC_CD"
          name="JRDT_HDOFC_CD"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="RDT_TEAM_ORG_CD" className={styles.popupLabel}>
          RDT_TEAM_ORG_CD
        </label>
        <input
          type="text"
          id="RDT_TEAM_ORG_CD"
          name="RDT_TEAM_ORG_CD"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="EQP_SRNO" className={styles.popupLabel}>
          EQP_SRNO
        </label>
        <input
          type="text"
          id="EQP_SRNO"
          name="EQP_SRNO"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="MST_IP" className={styles.popupLabel}>
          MST_IP
        </label>
        <input
          type="text"
          id="MST_IP"
          name="MST_IP"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="LAT_CODN" className={styles.popupLabel}>
          LAT_CODN
        </label>
        <input
          type="number"
          id="LAT_CODN"
          name="LAT_CODN"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="LNG_CODN" className={styles.popupLabel}>
          LNG_CODN
        </label>
        <input
          type="number"
          id="LNG_CODN"
          name="LNG_CODN"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="OP_CHRR_ID" className={styles.popupLabel}>
          OP_CHRR_ID
        </label>
        <input
          type="text"
          id="OP_CHRR_ID"
          name="OP_CHRR_ID"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="REGRT_ID" className={styles.popupLabel}>
          REGRT_ID
        </label>
        <input
          type="text"
          id="REGRT_ID"
          name="REGRT_ID"
          className={styles.popupInput}
          onChange={onChange}
        />

        <label htmlFor="UDT_ID" className={styles.popupLabel}>
          UDT_ID
        </label>
        <input
          type="text"
          id="UDT_ID"
          name="UDT_ID"
          className={styles.popupInput}
          onChange={onChange}
        />
      </div>
    );
  }

  // 수정하기 페이지에서 데이터 업데이트
  const updateSubmitHandler = () => {
    setUpdateSubmit(true);
  };

  const UpdateBtn = (props) => {
    if (props.updateClicked) {
      return (
        <button
          className={styles.popupButtonSubmit}
          onClick={() => {
            props.popupHandler()
          }}
        >
          저장하기
        </button>
      );
    } else {
      return (
        <button
          className={styles.popupButtonSubmit}
            onClick={() => {props.updateHandler()}}
        >
          수정하기
        </button>
      );
    }

  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.popupHeader}>
          <span className={styles.popupHeaderSpan}>데이터 추가</span>
        </div>
        {props.rowClickPopup && !props.updateClicked && <PopupRowData />}
        {props.rowClickPopup && props.updateClicked && <PopupBodyUpdate />}
        {props.clickedRowData.length == 0 && <PopupInsert />}
        <div className={styles.popupFooter}>
          {props.clickedRowData.length == 0 &&  (
            <button
              className={styles.popupButtonSubmit}
              onClick={() => addData(inputs)}
            >
              등록하기
            </button>
          )}
          {props.rowClickPopup && <UpdateBtn updateHandler={props.updateHandler} updateClicked={props.updateClicked} popupHandler={props.popupHandler}/>}
          <button
            className={styles.popupButtonClose}
            onClick={() => {
              props.popupHandler(false);
              props.resetUpdateRowDataHandler();
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
