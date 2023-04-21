import React, { useState } from "react";

import axios from "axios";
import styles from "./Popup.module.css";

  
const Popup = (props) => {

  // Popup input값 초기화
  const [inputs, setInputs] = useState({
    EQP_NM : ''
   , EQP_CL_CD : ''
   , EQP_OP_STAT_CD : ''
   , JRDT_HDOFC_CD : ''
   , RDT_TEAM_ORG_CD : ''
   , EQP_SRNO : ''
   , MST_IP : ''
   , LAT_CODN : ''
   , LNG_CODN : ''
   , OP_CHRR_ID : ''
   , REGRT_DT : ''
   , REGRT_ID : ''
   , UDT_DT : ''
   , UDT_ID : ''
 });


// 변경된 input값을 업데이트하기
function onChange (e) {
  const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  const { name, value } = e.target;
  console.log(e.target.value);
  if(e.target.id != "LNG_CODN" || e.target.id != "LAT_CODN"){
    if(regex.test(e.target.value)){
      console.log("no")

    }else {
      console.log("yes")
      setInputs({
        ...inputs,      // 기존의 input 객체를 복사한 뒤
        [name] : value, // name 키를 가진 값을 value로 설정해서 새로운 값으로 설정 (key:value json 형태로 만들어 axios 통신을 위해)
      });
    }
  }


  setInputs({
    ...inputs,      // 기존의 input 객체를 복사한 뒤
    [name] : value, // name 키를 가진 값을 value로 설정해서 새로운 값으로 설정 (key:value json 형태로 만들어 axios 통신을 위해)
  });
}

 // 팝업창에서 axios로 data insert
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


  return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.popupHeader}>
             <span className={styles.popupHeaderSpan}>데이터 추가</span>
          </div>
          <div className={styles.popupBody}>

              <label htmlFor='EQP_NM'className={styles.popupLabel}>EQP_NM</label>
              <input type="text" id='EQP_NM' name='EQP_NM' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='EQP_CL_CD'className={styles.popupLabel}>EQP_CL_CD</label>
              <input type="text" id='EQP_CL_CD' name='EQP_CL_CD' className={styles.popupInput} onChange={onChange} />          

              <label htmlFor='EQP_OP_STAT_CD'className={styles.popupLabel}>EQP_OP_STAT_CD</label>
              <input type="text" id='EQP_OP_STAT_CD' name='EQP_OP_STAT_CD' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='JRDT_HDOFC_CD'className={styles.popupLabel}>JRDT_HDOFC_CD</label>
              <input type="text" id='JRDT_HDOFC_CD' name='JRDT_HDOFC_CD' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='RDT_TEAM_ORG_CD'className={styles.popupLabel}>RDT_TEAM_ORG_CD</label>
              <input type="text" id='RDT_TEAM_ORG_CD' name='RDT_TEAM_ORG_CD' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='EQP_SRNO'className={styles.popupLabel}>EQP_SRNO</label>
              <input type="text" id='EQP_SRNO' name='EQP_SRNO' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='MST_IP'className={styles.popupLabel}>MST_IP</label>
              <input type="text" id='MST_IP' name='MST_IP' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='LAT_CODN'className={styles.popupLabel}>LAT_CODN</label>
              <input type="number" id='LAT_CODN' name='LAT_CODN' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='LNG_CODN'className={styles.popupLabel}>LNG_CODN</label>
              <input type="number" id='LNG_CODN' name='LNG_CODN' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='OP_CHRR_ID'className={styles.popupLabel}>OP_CHRR_ID</label>
              <input type="text" id='OP_CHRR_ID' name='OP_CHRR_ID' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='REGRT_ID'className={styles.popupLabel}>REGRT_ID</label>
              <input type="text" id='REGRT_ID' name='REGRT_ID' className={styles.popupInput} onChange={onChange} /> 

              <label htmlFor='UDT_ID'className={styles.popupLabel}>UDT_ID</label>
              <input type="text" id='UDT_ID' name='UDT_ID' className={styles.popupInput} onChange={onChange} /> 
          </div>
          <div className={styles.popupFooter}>
          <button className={styles.popupButtonSubmit} onClick={() => addData(inputs)}>
              등록하기
            </button>
            <button className={styles.popupButtonClose} onClick={() => {props.popupHandler(false)}}>
              닫기
            </button>
          </div>
        </div>
      </div>
  );
}

export default Popup;