package com.paging.demo.dto;

import  lombok.*;

@Getter
@Setter
@Data
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class EqpInfDto {

    private String  EQP_ID;
    private String  EQP_NM;
    private String  EQP_CL_CD;
    private String  EQP_OP_STAT_CD;
    private String  JRDT_HDOFC_CD;
    private String  RDT_TEAM_ORG_CD;
    private String  EQP_SRNO;
    private String  MST_IP;
    private float   LAT_CODN;
    private float   LNG_CODN;
    private String  OP_CHRR_ID;
    private String  REGRT_DT;
    private String  REGRT_ID;
    private String  UDT_DT;
    private String  UDT_ID;

    private int page;
    private int totalCnt;

}
