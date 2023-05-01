package com.paging.demo.dto;

import lombok.AllArgsConstructor;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor //전체 필드에 대한 생성자
@NoArgsConstructor  //기본생성자
public class FilterDto {

      private int totalCnt;
      private int page;            // 현재 페이지 위치
      private int perPageNum;      // 페이지당 보여줄 데이터 row 수
}
