import React, { useState } from "react";

import { Fragment } from "react";
import axios from "axios";
import Component from "../component/Component";
import SelectBox from "../UI/SelectBox";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

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

const Mypage = () => {
  // 버튼 클릭 on off
  const [isClicked, setIsClicked] = useState(false);
  // 모달창 노출 여부
  const [modalOpen, setModalOpen] = useState(false);

  const clickHandler = (isClicked, e) => {
    console.log(isClicked);
    setIsClicked((isClicked) => !isClicked); // on off
    addData();
  };

  const showModal = () => {
    setModalOpen(true);
  };

  // axios post add data test
  const addData = () => {
    let addData = {
      EQP_ID: "test",
      EQP_NM: "test",
      EQP_CL_CD: "test",
      EQP_OP_STAT_CD: "test",
      JRDT_HDOFC_CD: "test",
      RDT_TEAM_ORG_CD: "test",
      EQP_SRNO: "test",
      MST_IP: "test",
      LAT_CODN: 123,
      LNG_CODN: 456,
      OP_CHRR_ID: "test",
      REGRT_DT: "2023-04-18 11:02:23",
      REGRT_ID: "testId",
      UDT_ID: "testId",
      UDT_DT: "2023-04-18 11:02:23",
    };

    axios({
      params: {
        // EQP_ID : "test_id",
        EQP_NM: "test",
        EQP_CL_CD: "t",
        EQP_OP_STAT_CD: "t",
        JRDT_HDOFC_CD: "t",
        RDT_TEAM_ORG_CD: "t",
        EQP_SRNO: "test",
        MST_IP: "test",
        LAT_CODN: 123,
        LNG_CODN: 456,
        OP_CHRR_ID: "test",
        REGRT_DT: "2023-04-18 11:02:23",
        REGRT_ID: "testId",
        UDT_ID: "testId",
        UDT_DT: "2023-04-18 11:02:23",
      },
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
    <Fragment>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <h1>Mypage</h1>
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
      <Component />
      <button onClick={showModal}>모달띄우기</button>
    </Fragment>
  );
};

export default Mypage;
