package com.paging.demo.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@Data
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class EqpDto {

    private String EQP_ID;
    private String EQP_NM;
    private String EQP_CL_CD;
    private String EQP_OP_STAT_CD;
    private String JRDT_HDOFC_CD;
    private String RDT_TEAM_ORG_CD;
    private String EQP_SRNO;
    private String MST_IP;
    private  float LAT_CODN;
    private  float LNG_CODN;
    private String OP_CHRR_ID;
    private Date REGRT_DT;
    private String REGRT_ID;
    private Date UDT_DT;
    private String UDT_ID;

}
