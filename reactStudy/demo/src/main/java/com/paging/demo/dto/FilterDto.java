package com.paging.demo.dto;

import lombok.AllArgsConstructor;
import lombok.*;

@Getter
@Setter
@Data
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class FilterDto {

      
      private Integer page;         // 현제페이지
      private Integer perPageNum;   // 페이지당 보여주는 row수
      private String eqpName;       // 장비이름
      private String eqpOpStat;     //장비분류코드
      private String jrdtHdofcCd;   // 관할본부조직코드
      private String rdtTeamOrgCd;  // 관할팀조직코드
      

}
