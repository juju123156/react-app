package com.paging.demo;

import com.paging.demo.common.Criteria;
import com.paging.demo.common.DisplayPage;
import com.paging.demo.common.Paging;
import com.paging.demo.dto.EqpDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/index")
    public String mainPage(Criteria cri, Model model){

        // 전체 글 개수
        int eqpListCnt = eqpService.eqpListCnt();

        // 페이징 객체
        Paging paging = new Paging();
        paging.setCri(cri);
        paging.setTotalCount(eqpListCnt);
        // 한 페이지에 보여주는 페이지 개수
        int displayPageNum = paging.getDisplayPageNum();
        paging.setLastPage(eqpListCnt, displayPageNum);

        System.out.println("eqpListCnt : "+eqpListCnt);
        System.out.println(paging.toString());
        List<EqpDto> eqpList = eqpService.findOrg(cri);
        model.addAttribute("eqpList", eqpList);
        model.addAttribute("paging", paging);

        return "index";
    }




}
