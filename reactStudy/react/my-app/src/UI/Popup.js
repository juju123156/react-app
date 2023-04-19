import React, { useState }  from "react";
import axios from "axios";
import styles from "./Popup.module.css";


function Popup({ setPopupOpen }) {
  // 모달창 닫기
  const closePopup = () => {
    setPopupOpen(false);
  };

  let nextInputs = {};
  // input값 초기화
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

  const {
     EQP_NM
    , EQP_CL_CD
    , EQP_OP_STAT_CD
    , JRDT_HDOFC_CD
    , RDT_TEAM_ORG_CD
    , EQP_SRNO
    , MST_IP
    , LAT_CODN
    , LNG_CODN
    , OP_CHRR_ID
    , REGRT_DT
    , REGRT_ID
    , UDT_DT
    , UDT_ID
  } = inputs;

  const onChange = (e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);

  const {name,value} = e.target;

   nextInputs = {
    //spread 문법. 현재 상태의 내용이 이 자리로 온다
    ...inputs,
    [name] : value,
   };
   //객체를 새로운 상태로 쓰겠다.
   setInputs(nextInputs);
   console.log(typeof nextInputs);

}


  // axios post add data test
  const addData = (e) => {
    
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
        // API로 부터 받은 데이터 출력
        console.log(res.data);
      })
      .catch((error) => {
        console.log("실패");
        console.log(addData);
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
              <input id='EQP_NM' name='EQP_NM' className={styles.popupInput} onChange={onChange}></input>


              <label htmlFor='EQP_CL_CD'className={styles.popupLabel}>EQP_CL_CD</label>
              <input id='EQP_CL_CD' name='EQP_CL_CD' className={styles.popupInput} onChange={onChange}></input>
         

              <label htmlFor='EQP_OP_STAT_CD'className={styles.popupLabel}>EQP_OP_STAT_CD</label>
              <input id='EQP_OP_STAT_CD' name='EQP_OP_STAT_CD' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='JRDT_HDOFC_CD'className={styles.popupLabel}>JRDT_HDOFC_CD</label>
              <input id='JRDT_HDOFC_CD' name='JRDT_HDOFC_CD' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='RDT_TEAM_ORG_CD'className={styles.popupLabel}>RDT_TEAM_ORG_CD</label>
              <input id='RDT_TEAM_ORG_CD' name='RDT_TEAM_ORG_CD' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='EQP_SRNO'className={styles.popupLabel}>EQP_SRNO</label>
              <input id='EQP_SRNO' name='EQP_SRNO' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='MST_IP'className={styles.popupLabel}>MST_IP</label>
              <input id='MST_IP' name="MST_IP" className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='LAT_CODN'className={styles.popupLabel}>LAT_CODN</label>
              <input id='LAT_CODN' name="LAT_CODN" className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='LNG_CODN'className={styles.popupLabel}>LNG_CODN</label>
              <input id='LNG_CODN' name='LNG_CODN' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='OP_CHRR_ID'className={styles.popupLabel}>OP_CHRR_ID</label>
              <input id='OP_CHRR_ID' name='OP_CHRR_ID' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='REGRT_ID'className={styles.popupLabel}>REGRT_ID</label>
              <input id='REGRT_ID' name='REGRT_ID' className={styles.popupInput} onChange={onChange}></input>

              <label htmlFor='UDT_ID'className={styles.popupLabel}>UDT_ID</label>
              <input id='UDT_ID' name='UDT_ID' className={styles.popupInput} onChange={onChange}></input>
          

        
          </div>
          <div className={styles.popupFooter}>
          <button className={styles.popupButtonSubmit} onClick={addData}>
              등록하기
            </button>
            <button className={styles.popupButtonClose} onClick={closePopup}>
              닫기
            </button>
          </div>
        </div>
      </div>
  );
}

export default Popup;
