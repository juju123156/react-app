package com.paging.demo.mapper;

import com.paging.demo.dto.EqpInfDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface EqpInfMapper {
    public List<EqpInfDto> getEqpInfListPaging(int page, int perPageNum);

}
