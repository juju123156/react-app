package com.paging.demo;
import com.paging.demo.dto.EqpInfDto;
import com.paging.demo.dto.FilterDto;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class EqpInfController {

    private final EqpInfService eqpInfService;

    public EqpInfController(EqpInfService eqpInfService) {
        this.eqpInfService = eqpInfService;
    }


    // 리스트 받아오기
    @GetMapping("/api/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPaging(FilterDto filterDto){
        
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
    @PostMapping("/api/getEqpInfListPaging")
    public List<EqpInfDto> getEqpInfListPagingPost(FilterDto filterDto){

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
    @PostMapping("/api/insEqpInf")
    public int insEqpInf(EqpInfDto eqpDto) {
        System.out.println("*************"+ eqpDto.toString());


        int test = eqpInfService.insEqpInf(eqpDto);

        return test;
    }

}
