package com.paging.demo.dto;

import  lombok.*;

@Getter
@Setter
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class EqpInfDto extends FilterDto {

    private	String	eqpId;
    private	String	eqpNm;
    private	String	eqpClCd;
    private	String	eqpOpStatCd;
    private	String	jrdtHdofcCd;
    private	String	rdtTeamOrgCd;
    private	String	eqpClCdNm;
    private	String	eqpOpStatCdNm;
    private	String	jrdtHdofcCdNm;
    private	String	rdtTeamOrgCdNm;
    private	String	eqpSrno;
    private	String	mstIp;
    private	float	latCodn;
    private	float	lngCodn;
    private	String	opChrrId;
    private	String	regrtDt;
    private	String	regrtId;
    private	String	udtDt;
    private	String	udtId;
}
