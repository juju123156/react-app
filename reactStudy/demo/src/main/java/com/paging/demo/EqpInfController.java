package com.paging.demo;

import com.paging.demo.common.DisplayPage;
import com.paging.demo.common.FilterField;
import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class EqpInfController {

    private final EqpInfService eqpInfService;

    public EqpInfController(EqpInfService eqpInfService) {
        this.eqpInfService = eqpInfService;
    }


    // 리스트 받아오기
    @GetMapping("/api/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPaging(@RequestParam(required=false)Integer page, @RequestParam(required=false) FilterDto filterDto){
        int perPageNum = 10;
        if(perPageNum == 0){
            perPageNum=10;
            page=1;
        }

        List<EqpInfDto> eqpList = eqpInfService.getEqpInfListPaging(page,perPageNum);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());

        if (filterDto != null){
            System.out.println("*************************" +filterDto.toString());
        }

        return eqpList;
    }

    @ResponseBody
    @PostMapping("/api/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPagingPost(@RequestParam(required=false)Integer page, @RequestParam(required=false)Integer perPageNum, @RequestBody(required=false) FilterDto filterDto){

        if(perPageNum == null){
            perPageNum=10;
            page=1;
        }

        List<EqpInfDto> eqpList = eqpInfService.getEqpInfListPaging(page,perPageNum);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());

        if (filterDto != null){
            System.out.println("*************************" +filterDto.toString());
        }

        return eqpList;
    }




}
