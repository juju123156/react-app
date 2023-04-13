package com.paging.demo;

import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.mapper.EqpInfMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EqpInfService {

    private final EqpInfMapper eqpInfMapper;

    public EqpInfService(EqpInfMapper eqpInfMapper) {
        this.eqpInfMapper = eqpInfMapper;
    }

    // 조직원 전체 조회
    public List<EqpInfDto> getEqpInfListPaging(int page, int perPageNum) {
//        final List<EqpDto> eqpList = eqpMapper.findOrg(cri);

        return eqpInfMapper.getEqpInfListPaging(page,perPageNum);
    }

}
