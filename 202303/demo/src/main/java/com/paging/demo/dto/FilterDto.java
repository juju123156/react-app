package com.paging.demo.common;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FilterDto {

      private String eqpName;     // 장비이름
      private String eqpOpStat;     //장비분류코드
      private String jrdtHdofcCd; // 관할본부조직코드
      private String rdtTeamOrgCd; // 관할팀조직코드


}
