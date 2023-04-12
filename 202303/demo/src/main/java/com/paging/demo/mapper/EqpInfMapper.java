package com.paging.demo.mapper;

import com.paging.demo.common.Criteria;
import com.paging.demo.dto.EqpDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface EqpMapper {
    public List<EqpDto> getEqpInfListPaging(int page, int perPageNum);

}
