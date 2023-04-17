import React, { Children, useCallback, useState, useEf } from "react";

import { Fragment } from "react";
import Component from "../component/Component";
import SelectBox from "../UI/SelectBox";
import Button from "../UI/Button";
import AgGrid from "../component/AgGrid";


const OPTION_PAGENUM = [
  { value: 10, name: "10" },
  { value: 100, name: "100" },
  { value: 500, name: "500" },
  { value: 1000, name: "1000" },
];

const OPTION_EQP_CL_CD= [
  { value: "", name: "전체" },
  { value: "01", name: "DU" },
  { value: "02", name: "RU" },
  { value: "03", name: "DUH" },
  { value: "04", name: "DUL" },
  { value: "05", name: "NODEB" }
];

const OPTION_EQP_OP_STAT= [
  { value: "", name: "전체" },
  { value: 3, name: "대기" },
  { value: 4, name: "운용" },
  { value: 9, name: "미운용" },
];

const OPTION_JRDT_HDOFC_CD= [
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

const OPTION_RDT_TEAM_ORG_CD= [
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

const submitParam = () => {
  // alert("click");
}
const sendData = (rowData, columnDefs) => {};

const Mypage = () => {

  // 버튼 클릭 on off
  const [isClicked, setIsClicked] = useState(false);
  // button on off체크 함수 
//   const loadData = useCallback((e) =>{
//     alert("click loadData");
//     // const isLoad = this.props.isLoad;
//     // const isLoad = this.setState({isLoad : e.target.value});
//     // console.log(e.target.value);
//     setIsLoad(e.target.value);
//     console.log(isLoad);
// }, [isLoad]);
console.log(isClicked);
const clickHandler = (e,isClicked) => {
  e.preventDefault();

  console.log(isClicked);
  // alert("this is mypage")
  if(isClicked===true){
      alert(isClicked);


  }
 

}
const loadData = () => {
    alert("click");
    
}



  return (
    <Fragment>
      <h1>Mypage</h1>
      <div className="searchGrid">
        <SelectBox options={OPTION_PAGENUM}></SelectBox>
        <SelectBox options={OPTION_EQP_CL_CD} defaultValue=""></SelectBox>
        <SelectBox options={OPTION_JRDT_HDOFC_CD} defaultValue=""></SelectBox>
        <SelectBox options={OPTION_RDT_TEAM_ORG_CD} defaultValue=""></SelectBox>
        <Button isClicked={isClicked} clickHandler={clickHandler}></Button>
      </div>
      <div style={{width: '100%', textAlign:'center'}}>
        <Component />
      </div>
    </Fragment>
  );
};

export default Mypage;
