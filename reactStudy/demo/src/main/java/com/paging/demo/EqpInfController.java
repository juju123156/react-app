package com.paging.demo;
import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;
import com.paging.demo.dto.OrgCdInfDto;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class EqpInfController {

    private final EqpInfService eqpInfService;

    public EqpInfController(EqpInfService eqpInfService) {
        this.eqpInfService = eqpInfService;
    }


    // 리스트 받아오기
    @GetMapping("/api/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPaging(EqpInfDto eqpInfDto){
        
        if(eqpInfDto.getPerPageNum() == 0){
            eqpInfDto.setPerPageNum(10);
            eqpInfDto.setPage(1);
        }

        List<EqpInfDto> eqpList = eqpInfService.getEqpInfListPaging(eqpInfDto);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());

        if (eqpInfDto != null){
            System.out.println("*************************" +eqpInfDto.toString());
        }

        return eqpList;
    }


    @ResponseBody
    @PostMapping("/api/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPagingPost(EqpInfDto eqpInfDto){

        if(eqpInfDto.getPerPageNum() == 0){
            eqpInfDto.setPerPageNum(10);
            eqpInfDto.setPage(1);
        }

        List<EqpInfDto> eqpList = eqpInfService.getEqpInfListPaging(eqpInfDto);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());

        if (eqpInfDto != null){
            System.out.println("*************************" +eqpInfDto.toString());
        }

        return eqpList;
    }
    
    // 데이터 삽입하기
    @ResponseBody
    @PostMapping("/api/insEqpInf")
    public int insEqpInf(EqpInfDto eqpInfDto) {
        System.out.println("*************"+ eqpInfDto.toString());


        int result = eqpInfService.insEqpInf(eqpInfDto);

        return result;
    }

    // 데이터 업데이트하기
    @ResponseBody
    @PostMapping("/api/udtEqpInf")
    public int udtEqpInf(EqpInfDto eqpInfDto) {
        System.out.println("*************"+ eqpInfDto.toString());
        int result = eqpInfService.udtEqpInf(eqpInfDto);


        return result;
    }

    // 관할본부코드 조회하기
    @GetMapping("/api/getJrdtHdofcCdList")
    public List<OrgCdInfDto> getJrdtHdofcCdList(OrgCdInfDto orgCdInf) {

        List<OrgCdInfDto> orgCdInfList = eqpInfService.getJrdtHdofcCdList(orgCdInf);

        return orgCdInfList;
    }

    // 관할팀코드 조회하기
    @GetMapping("/api/getRdtTeamOrgCdList")
    public List<OrgCdInfDto> getRdtTeamOrgCdList(OrgCdInfDto orgCdInf) {

        List<OrgCdInfDto> orgCdInfList = eqpInfService.getRdtTeamOrgCdList(orgCdInf);

        return orgCdInfList;
    }



    

}
