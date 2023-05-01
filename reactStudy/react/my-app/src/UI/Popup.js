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
      // upate 데이터 받아오기
      let rowDataStr = JSON.stringify(clickedRowData);
      let jData = JSON.parse(rowDataStr);
      let jDataVal = "";
      for (let i = 0; i < jData.length; i++) {
        jDataVal = jData[i];
      }
      // const udtInputsHandler = () => {
      //   setUdtInputs();
      // }
   

  // update input
  const [udtInputs, setUdtInputs] = useState({
    eqpId: jDataVal.eqpId,
    eqpNm: jDataVal.eqpNm,
    eqpClCd: jDataVal.eqpClCd,
    eqpOpStatCd: jDataVal.eqpOpStatCd,
    jrdtHdofcCd: jDataVal.jrdtHdofcCd,
    rdtTeamOrgCd: jDataVal.rdtTeamOrgCd,
    eqpSrno: jDataVal.eqpSrno,
    mstIp: jDataVal.mstIp,
    latCodn: jDataVal.latCodn,
    lngCodn: jDataVal.lngCodn,
    opChrrId: jDataVal.opChrrId,
    regrtId: jDataVal.regrtId,
    udtId: jDataVal.udtId
  });


  // 변경된 update input값을 default value 포함하여 업데이트하기
  const onChangeUdt = (e) => {
    const { name, value } = e.target;
    setUdtInputs({...udtInputs, // 기존의 input 객체를 복사한 뒤
    [name]: value,
    });
  };

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
    const udtData = (inputs) => {
  
      axios({
        params: udtInputs,
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
        <div className={styles.popupHeader}>
          <span className={styles.popupHeaderSpan}>장비 데이터</span>
        </div>
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
            시리얼 넘버
          </label>
          <span>{jDataVal.eqpSrno}</span>
          <label htmlFor="mstIp" className={styles.popupLabel}>
            마스터 IP
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
          <div className={styles.popupHeader}>
            <span className={styles.popupHeaderSpan}>데이터 수정</span>
          </div>
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
              defaultValue={udtInputs.eqpNm}
              onChange={onChangeUdt}
            />
            <label htmlFor="eqpClCd" className={styles.popupLabel}>
              장비분류
            </label>
            <input
              type="text"
              name="eqpClCd"
              defaultValue={udtInputs.eqpClCd}
              onChange={onChangeUdt}
            />
            <label htmlFor="eqpOpStatCd" className={styles.popupLabel}>
              장비운용상태
            </label>
            <input
              type="text"
              name="eqpOpStatCd"
              defaultValue={udtInputs.eqpOpStatCd}
              onChange={onChangeUdt}
            />
            <label htmlFor="jrdtHdofcCd" className={styles.popupLabel}>
              관할본부조직
            </label>
            <input
              type="text"
              name="jrdtHdofcCd"
              defaultValue={udtInputs.jrdtHdofcCd}
              onChange={onChangeUdt}
            />
            <label htmlFor="rdtTeamOrgCd" className={styles.popupLabel}>
              관할팀조직
            </label>
            <input
              type="text"
              name="rdtTeamOrgCd"
              defaultValue={udtInputs.rdtTeamOrgCd}
              onChange={onChangeUdt}
            />
            <label htmlFor="eqpSrno" className={styles.popupLabel}>
              SERIAL NUMBER   
            </label>
            <input
              type="text"
              name="eqpSrno"
              defaultValue={udtInputs.eqpSrno}
              onChange={onChangeUdt}
            />
            <label htmlFor="mstIp" className={styles.popupLabel}>
              MASTER IP
            </label>
            <input
              type="text"
              name="mstIp"
              defaultValue={udtInputs.mstIp}
              onChange={onChangeUdt}
            />
            <label htmlFor="latCodn" className={styles.popupLabel}>
              위도
            </label>
            <input
              type="number"
              name="latCodn"
              defaultValue={udtInputs.latCodn}
              onChange={onChangeUdt}
            />
            <label htmlFor="lngCodn" className={styles.popupLabel}>
              경도
            </label>
            <input
              type="number"
              name="lngCodn"
              defaultValue={udtInputs.lngCodn}
              onChange={onChangeUdt}
            />
            <label htmlFor="opChrrId" className={styles.popupLabel}>
              운용 담당자 ID
            </label>
            <input
              type="text"
              name="opChrrId"
              defaultValue={udtInputs.opChrrId}
              onChange={onChangeUdt}
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
              defaultValue={udtInputs.regrtId}
              onChange={onChangeUdt}
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
              defaultValue={udtInputs.udtId}
              onChange={onChangeUdt}
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
                props.popupHandler(true);
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
          <Fragment>
          <div className={styles.popupHeader}>
            <span className={styles.popupHeaderSpan}>데이터 추가</span>
          </div>
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
              시리얼 넘버  
            </label>
            <input
              type="text"
              id="eqpSrno"
              name="eqpSrno"
              className={styles.popupInput}
              onChange={onChange}
            />

            <label htmlFor="mstIp" className={styles.popupLabel}>
              마스터 IP
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
          </Fragment>
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
