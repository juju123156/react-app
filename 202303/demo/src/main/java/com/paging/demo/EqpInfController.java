package com.paging.demo;

import com.paging.demo.common.DisplayPage;
import com.paging.demo.dto.EqpDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MainController {

    private final EqpService eqpService;

    public MainController(EqpService eqpService) {
        this.eqpService = eqpService;
    }


    @ModelAttribute("displayPageNum")
    public List<DisplayPage> selectDisplayPage() {
        List<DisplayPage> displayPageArr = new ArrayList<>();
        displayPageArr.add(new DisplayPage("10",10));
        displayPageArr.add(new DisplayPage("20",20));
        displayPageArr.add(new DisplayPage("50",50));
        return displayPageArr;
    }

    // 페이지 맵핑 쿼리
    @GetMapping("/main")
    public String mainPage(){

        return "index";
    }

    // 페이지 맵핑 쿼리
    @GetMapping("/main2")
    public String mainPage2(){

        return "index2";
    }

    // 리스트 받아오기
    @ResponseBody
    @GetMapping("/eqpList")
    public List<EqpDto> getEqpInfListPaging(@RequestParam(required=false)Integer page, @RequestParam(required=false)Integer perPageNum){

        System.out.println("****************perPageNum : "+perPageNum);

        if(perPageNum == null){
            perPageNum=10;
            page=1;
        }

        List<EqpDto> eqpList = eqpService.getEqpInfListPaging(page,perPageNum);

        System.out.println("리스트 사이즈 : " + eqpList.size());
        System.out.println("리스트 : " + eqpList.toString());
        return eqpList;
    }





}
