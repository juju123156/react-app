package com.paging.demo;

import com.paging.demo.common.DisplayPage;
import com.paging.demo.common.FilterField;
import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class EqpInfController {

    private final EqpInfService eqpInfService;

    public EqpInfController(EqpInfService eqpInfService) {
        this.eqpInfService = eqpInfService;
    }

    // 장비이름
    @ModelAttribute("filterParam_eqpNm")
    public List<FilterField> filterParam_eqpNm() {
        List<FilterField> filterList = new ArrayList<>();
        filterList.add(new FilterField("DU","01"));
        filterList.add(new FilterField("RU","02"));
        filterList.add(new FilterField("DUH","03"));
        filterList.add(new FilterField("DUL","04"));
        filterList.add(new FilterField("NODEB","05"));

        return filterList;
    }
    //
    @ModelAttribute("filterParam_eqpOpStat")
    public List<FilterField> filterParam_eqpOpStat() {
        List<FilterField> filterList = new ArrayList<>();
        filterList.add(new FilterField ("대기","3"));
        filterList.add(new FilterField ("운용","4"));
        filterList.add(new FilterField ("미운용","9"));

        return filterList;
    }

    // 페이지당 보여주는 데이터 수
    @ModelAttribute("displayPageNum")
    public List<DisplayPage> selectDisplayPage() {
        List<DisplayPage> displayPageArr = new ArrayList<>();
        displayPageArr.add(new DisplayPage("10",10));
        displayPageArr.add(new DisplayPage("20",20));
        displayPageArr.add(new DisplayPage("100",100));
        displayPageArr.add(new DisplayPage("500",500));
        displayPageArr.add(new DisplayPage("1000",1000));
        return displayPageArr;
    }

    // 페이지 맵핑 쿼리
    @GetMapping("/main")
    public String mainPage(){

        return "index";
    }


//    // 리스트 받아오기
    @ResponseBody
    @GetMapping("/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPaging(FilterDto filterDto){
        // 디폴트 세팅
        filterDto.setPerPageNum(10);
        filterDto.setPage(1);

        if(filterDto.getPerPageNum() == 0){
            filterDto.setPerPageNum(10);
            filterDto.setPage(1);
        }

        List<EqpInfDto> eqpList = eqpInfService.getEqpInfListPaging(filterDto);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());

        if (filterDto != null){
            System.out.println("*************************" +filterDto.toString());
        }

        return eqpList;
    }

    @ResponseBody
    @PostMapping("/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPagingPost(@RequestBody(required=false) FilterDto filterDto){
//        filterDto.setPerPageNum(10);
//        filterDto.setPage(1);
//        if(filterDto.getPerPageNum() == null){
//            filterDto.setPerPageNum(10);
//            filterDto.setPage(1);
//        }

        List<EqpInfDto> eqpList = eqpInfService.getEqpInfListPaging(filterDto);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());

        if (filterDto != null){
            System.out.println("*************************" +filterDto.toString());
        }

        return eqpList;
    }





}
