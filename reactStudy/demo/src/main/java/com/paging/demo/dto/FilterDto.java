package com.paging.demo.dto;

import lombok.AllArgsConstructor;
import lombok.*;

@Getter
@Setter
@Data
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class FilterDto {

      private int page;            // 현재 페이지 위치
      private int perPageNum;      // 페이지당 보여줄 데이터 row 수
      private String eqpName;      // 장비이름
      private String eqpClCd;      // 장비분류코드
      private String eqpOpStat;    // 장비상태코드
      private String jrdtHdofcCd;  // 관할본부조직코드
      private String rdtTeamOrgCd; // 관할팀조직코드
      

}
