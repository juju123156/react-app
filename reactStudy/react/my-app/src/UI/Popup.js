import React, { Fragment, useState, useEffect } from "react";

import axios from "axios";
import styles from "./Popup.module.css";

const Popup = (props) => {
  // 구조분해 할당으로 가져옴
  const { clickedRowData } = props;
  const [updateSubmit, setUpdateSubmit] = useState(false);
  // Popup input값 초기화
  const [inputs, setInputs] = useState({
    eqpNm: "",
    eqpClCd: "",
    eqpOpStatCd: "",
    jrdtHdofcCd: "",
    rdtTeamOrgCd: "",
    eqpSrno: "",
    mstIp: "",
    latCodn: "",
    lngCodn: "",
    opChrrId: "",
    regrtDt: "",
    regrtId: "",
    udtDt: "",
    udtId: "",
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

    // upate 데이터 받아오기
    let rowDataStr = JSON.stringify(clickedRowData);
    let jData = JSON.parse(rowDataStr);
    let jDataVal = "";
    for (let i = 0; i < jData.length; i++) {
      jDataVal = jData[i];
    }

    // data update logic
    const udtData = (inputs) => {
  
      axios({
        params: inputs,
        method: "post",
        url: "/api/udtEqpInf",
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
    
  

  const sendUpdateData = (inputs) => {};

  useEffect(sendUpdateData, []);

  // row 클릭했을때 보여지는 popup
  function PopupRowData(props) {

    let rowDataStr = JSON.stringify(clickedRowData);
    let jData = JSON.parse(rowDataStr);
    let jDataVal = "";
    for (let i = 0; i < jData.length; i++) {
      jDataVal = jData[i];
    }
    return (
      <Fragment>
        <div className={styles.popupBody}>
          <label htmlFor="eqpId" className={styles.popupLabel}>
            장비ID
          </label>
          <span>{jDataVal.eqpId}</span>
          <label htmlFor="eqpNm" className={styles.popupLabel}>
            장비명
          </label>
          <span>{jDataVal.eqpNm} </span>
          <label htmlFor="eqpClCd" className={styles.popupLabel}>
            장비분류
          </label>
          <span>{jDataVal.eqpClCd} </span>
          <label htmlFor="eqpOpStatCd" className={styles.popupLabel}>
            장비운용상태
          </label>
          <span>{jDataVal.eqpOpStatCd}</span>
          <label htmlFor="jrdtHdofcCd" className={styles.popupLabel}>
            관할본부조직
          </label>
          <span>{jDataVal.jrdtHdofcCd}</span>
          <label htmlFor="rdtTeamOrgCd" className={styles.popupLabel}>
            관할팀조직
          </label>
          <span>{jDataVal.rdtTeamOrgCd}</span>
          <label htmlFor="eqpSrno" className={styles.popupLabel}>
            SERIAL NUMBER
          </label>
          <span>{jDataVal.eqpSrno}</span>
          <label htmlFor="mstIp" className={styles.popupLabel}>
            MASTER IP
          </label>
          <span>{jDataVal.mstIp}</span>
          <label htmlFor="latCodn" className={styles.popupLabel}>
            위도
          </label>
          <span>{jDataVal.latCodn}</span>
          <label htmlFor="lngCodn" className={styles.popupLabel}>
            경도
          </label>
          <span>{jDataVal.lngCodn}</span>
          <label htmlFor="opChrrId" className={styles.popupLabel}>
            운용 담당자 ID
          </label>
          <span>{jDataVal.opChrrId}</span>
          <label htmlFor="REGRT_DT" className={styles.popupLabel}>
            등록일자
          </label>
          <span>{jDataVal.regrtDt}</span>
          <label htmlFor="regrtDt" className={styles.popupLabel}>
            등록자 ID
          </label>
          <span>{jDataVal.regrtId}</span>
          <label htmlFor="regrtId" className={styles.popupLabel}>
            수정일자
          </label>
          <span>{jDataVal.udtDt} </span>
          <label htmlFor="udtId" className={styles.popupLabel}>
            수정자 ID
          </label>
          <span>{jDataVal.udtId}</span>
        </div>
        <div className={styles.popupFooter}>
          <button
            className={styles.popupButtonSubmit}
            onClick={() => {
              props.updateOnHandler();
            }}
          >
            수정하기
          </button>
          <button
            className={styles.popupButtonClose}
            onClick={() => {
              props.popupHandler(false);
              props.resetUpdateRowDataHandler();
              props.updateOffHandler();
            }}
          >
            닫기
          </button>
        </div>
      </Fragment>
    );
  }

  // 수정하기 페이지에서 데이터 업데이트
  const updateSubmitHandler = () => {
    setUpdateSubmit(true);
  };

  const setInputHandler = (inputs) => {
    setInputs(inputs);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.popupHeader}>
          <span className={styles.popupHeaderSpan}>데이터 추가</span>
        </div>
        {props.rowClickPopup && !props.updateClicked && (
          <PopupRowData
            updateOnHandler={props.updateOnHandler}
            updateOffHandler={props.updateOffHandler}
            popupHandler={props.popupHandler}
            resetUpdateRowDataHandler={props.resetUpdateRowDataHandler}
          />
        )}
        {props.rowClickPopup && props.updateClicked && (
          <Fragment>
        <div className={styles.popupBody}>
          <label htmlFor="eqpId" className={styles.popupLabel}>
            장비ID
          </label>
          <span>{jDataVal.eqpId}</span>
          <label htmlFor="eqpNm" className={styles.popupLabel}>
            장비명
          </label>
          <input
            type="text"
            name="eqpNm"
            defaultValue={jDataVal.eqpNm}
            onChange={onChange}
          />
          <label htmlFor="eqpClCd" className={styles.popupLabel}>
            장비분류
          </label>
          <input
            type="text"
            name="eqpClCd"
            defaultValue={jDataVal.eqpClCd}
            onChange={onChange}
          />
          <label htmlFor="eqpOpStatCd" className={styles.popupLabel}>
            장비운용상태
          </label>
          <input
            type="text"
            name="eqpOpStatCd"
            defaultValue={jDataVal.eqpOpStatCd}
            onChange={onChange}
          />
          <label htmlFor="jrdtHdofcCd" className={styles.popupLabel}>
            관할본부조직
          </label>
          <input
            type="text"
            name="jrdtHdofcCd"
            defaultValue={jDataVal.jrdtHdofcCd}
            onChange={onChange}
          />
          <label htmlFor="rdtTeamOrgCd" className={styles.popupLabel}>
            관할팀조직
          </label>
          <input
            type="text"
            name="rdtTeamOrgCd"
            defaultValue={jDataVal.rdtTeamOrgCd}
            onChange={onChange}
          />
          <label htmlFor="eqpSrno" className={styles.popupLabel}>
            SERIAL NUMBER   
          </label>
          <input
            type="text"
            name="eqpSrno"
            defaultValue={jDataVal.eqpSrno}
            onChange={onChange}
          />
          <label htmlFor="mstIp" className={styles.popupLabel}>
            MASTER IP
          </label>
          <input
            type="text"
            name="mstIp"
            defaultValue={jDataVal.mstIp}
            onChange={onChange}
          />
          <label htmlFor="latCodn" className={styles.popupLabel}>
            위도
          </label>
          <input
            type="number"
            name="latCodn"
            defaultValue={jDataVal.latCodn}
            onChange={onChange}
          />
          <label htmlFor="lngCodn" className={styles.popupLabel}>
            경도
          </label>
          <input
            type="number"
            name="lngCodn"
            defaultValue={jDataVal.lngCodn}
            onChange={onChange}
          />
          <label htmlFor="opChrrId" className={styles.popupLabel}>
            운용 담당자 ID
          </label>
          <input
            type="text"
            name="opChrrId"
            defaultValue={jDataVal.opChrrId}
            onChange={onChange}
          />
          <label htmlFor="regrtDt" className={styles.popupLabel}>
            등록일자
          </label>
          <span>{jDataVal.regrtDt}</span>
          <label htmlFor="regrtId" className={styles.popupLabel}>
            등록자 ID
          </label>
          <input
            type="text"
            name="regrtId"
            defaultValue={jDataVal.regrtId}
            onChange={onChange}
          />
          <label htmlFor="UDT_DT" className={styles.popupLabel}>
            수정일자
          </label>
          <span>{jDataVal.udtDt} </span>
          <label htmlFor="udtId" className={styles.popupLabel}>
            수정자 ID
          </label>
          <input
            type="text"
            name="udtId"
            defaultValue={jDataVal.udtId}
            onChange={onChange}
          />
        </div>
        <div className={styles.popupFooter}>
          <button
            className={styles.popupButtonSubmit}
            onClick={() => {
              props.popupHandler();
              props.updateOffHandler();
              udtData(inputs);
            }}
          >
            저장하기
          </button>
          <button
            className={styles.popupButtonClose}
            onClick={() => {
              props.popupHandler(false);
              props.resetUpdateRowDataHandler();
              props.updateOffHandler();
            }}
          >
            닫기
          </button>
        </div>
      </Fragment>
        )}
        {props.clickedRowData.length == 0 && (
          <div className={styles.popupBody}>
            <label htmlFor="eqpNm" className={styles.popupLabel}>
              장비명
            </label>
            <input
              type="text"
              id="eqpNm"
              name="eqpNm"
              className={styles.popupInput}
              onChange={onChange}
            />
            <label htmlFor="eqpClCd" className={styles.popupLabel}>
              장비분류코드
            </label>
            <input
              type="text"
              id="eqpClCd"
              name="eqpClCd"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="eqpOpStatCd" className={styles.popupLabel}>
              장비운용상태
            </label>
            <input
              type="text"
              id="eqpOpStatCd"
              name="eqpOpStatCd"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="jrdtHdofcCd" className={styles.popupLabel}>
              관할본부조직
            </label>
            <input
              type="text"
              id="jrdtHdofcCd"
              name="jrdtHdofcCd"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="rdtTeamOrgCd" className={styles.popupLabel}>
              관할팀조직
            </label>
            <input
              type="text"
              id="rdtTeamOrgCd"
              name="rdtTeamOrgCd"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="eqpSrno" className={styles.popupLabel}>
              SERIAL NUMBER   
            </label>
            <input
              type="text"
              id="eqpSrno"
              name="eqpSrno"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="mstIp" className={styles.popupLabel}>
              MASTER IP
            </label>
            <input
              type="text"
              id="mstIp"
              name="mstIp"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="latCodn" className={styles.popupLabel}>
              위도
            </label>
            <input
              type="number"
              id="latCodn"
              name="latCodn"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="lngCodn" className={styles.popupLabel}>
              경도
            </label>
            <input
              type="number"
              id="lngCodn"
              name="lngCodn"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="opChrrId" className={styles.popupLabel}>
              운용 담당자 ID
            </label>
            <input
              type="text"
              id="opChrrId"
              name="opChrrId"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="regrtId" className={styles.popupLabel}>
              등록자 ID
            </label>
            <input
              type="text"
              id="regrtId"
              name="regrtId"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="udtId" className={styles.popupLabel}>
              수정자 ID
            </label>
            <input
              type="text"
              id="udtId"
              name="udtId"
              className={styles.popupInput}
              onChange={onChange}
            />
          </div>
        )}
        {props.clickedRowData.length == 0 && (
          <div className={styles.popupFooter}>
            <button
              className={styles.popupButtonSubmit}
              onClick={() => addData(inputs)}
            >
              등록하기
            </button>

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
        )}
      </div>
    </div>
  );
};

export default Popup;
