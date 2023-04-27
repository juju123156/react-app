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
    public List<EqpInfDto> getEqpInfListPaging(EqpInfDto eqpInfDto) {

        return eqpInfMapper.getEqpInfListPaging(eqpInfDto);
    }


    // 데이터 삽입하기
    public int insEqpInf(EqpInfDto eqpInfDto) {
        return eqpInfMapper.insEqpInf(eqpInfDto);
    }

    // 데이터 업데이트하기
    public int udtEqpInf(EqpInfDto eqpInfDto) {

        return eqpInfMapper.udtEqpInf(eqpInfDto);
    }

}
