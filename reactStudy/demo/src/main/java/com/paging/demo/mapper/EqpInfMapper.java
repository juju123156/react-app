package com.paging.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
// import org.apache.ibatis.annotations.SelectKey;
import org.springframework.stereotype.Repository;

import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;

@Repository
@Mapper
public interface EqpInfMapper {
    // get paging list
    public List<EqpInfDto> getEqpInfListPaging(FilterDto filterDto);
    // insert eqp data
    // @SelectKey(statement = "SELECT nextval('EQP_SEQ') FROM dual", keyProperty = "id", before=true, resultType = int.class)
    public int insEqpInf(EqpInfDto eqpDto);

};
