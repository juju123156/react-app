package com.paging.demo.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;

@Repository
@Mapper
public interface EqpInfMapper {
    // 페이징 처리된 리스트 가져오기
    public List<EqpInfDto> getEqpInfListPaging(FilterDto filterDto);
    // 데이터 삽입하기
    public int insEqpInf(EqpInfDto eqpDto);
    // 데이터 업데이트 하기
    public int udtEqpInf(EqpInfDto eqpDto, String EQP_ID);
};
