package com.paging.demo;

import java.util.List;

import org.springframework.stereotype.Service;

import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;
import com.paging.demo.mapper.EqpInfMapper;

@Service
public class EqpInfService {

    private final EqpInfMapper eqpInfMapper;

    public EqpInfService(EqpInfMapper eqpInfMapper) {
        this.eqpInfMapper = eqpInfMapper;
    }

    // 조직원 전체 조회
    public List<EqpInfDto> getEqpInfListPaging(FilterDto filterDto) {

        return eqpInfMapper.getEqpInfListPaging(filterDto);
    }


    // insert data
    public int insEqpInf(EqpInfDto eqpDto) {
        return eqpInfMapper.insEqpInf(eqpDto);
    }


}
