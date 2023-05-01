package com.paging.demo.dto;

import lombok.AllArgsConstructor;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class OrgCdInfDto {
    
    public	String	orgCd;	        // 조직코드
    public	String	orgCdNm	;	    // 조직코드이름
    public	String	upperOrgCd;	    // 조직상위코드
    public	String	upperOrgCdNm;	// 조직상위코드이름
    public  int     level;            // 조직 계층 구분
    public	String	regrtDt;	    // 등록일자
    public	String	regrtId;	    // 등록자 ID
    public	String	udtDt;	        // 수정일자
    public	String	udtId;	        // 수정한사람 ID
}
