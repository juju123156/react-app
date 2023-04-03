package com.paging.demo;

import com.paging.demo.common.Criteria;
import com.paging.demo.dto.EqpDto;
import com.paging.demo.mapper.EqpMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class EqpService {

    private final EqpMapper eqpMapper;

    public EqpService(EqpMapper eqpMapper) {
        this.eqpMapper = eqpMapper;
    }

    // 조직원 전체 조회
    public List<EqpDto> findOrg(Criteria cri) {
//        final List<EqpDto> eqpList = eqpMapper.findOrg(cri);

        return eqpMapper.findOrg(cri);
    }

    public int eqpListCnt() {
        return eqpMapper.eqpListCnt();
    }
}
