package com.paging.demo.common;

// 게시판 하단의 페이징
public class Paging {

    private int totalCount; // 게시판 전체 데이터 개수
    private int displayPageNum = 10; // 게시판 화면에서 한번에 보여질 페이지 번호의 개수
    private int startPage; // 화면의 시작 번호
    private int endPage;  // 화면의 끝 번호
    private int firstPage = 1;  // 화면의 시작 번호
    private int lastPage;       // 화면의 끝 번호

    private int perPageNum;     //한번에 보여줄 데이터 로우 수

    private int page;           // 현재 페이지
    private boolean prev; // 페이징 이전 버튼 활성화 여부
    private boolean next; // 페이징 다음 버튼 활성화 여부

    private Criteria cri;


    public Paging() {
        // 기본 생성자 : 최초 게시판에 진입시 필요한 기본값
        this.page = 1;
        this.perPageNum = 10;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;

        pagingData();
    }

    private void pagingData() {

        endPage = (int) (Math.ceil(cri.getPage() / (double) displayPageNum) * displayPageNum);
        // endPage = (현재 페이지 번호 / 화면에 보여질 페이지 번호의 개수) * 화면에 보여질 페이지 번호의 개수
        startPage = (endPage - displayPageNum) + 1;
        // startPage = (끝 페이지 번호 - 화면에 보여질 페이지 번호의 개수) + 1

        int tempEndPage = (int) (Math.ceil(totalCount / (double) cri.getPerPageNum()));
        if(endPage > tempEndPage) {
            endPage = tempEndPage;
        }
        // 마지막 페이지 번호 = 총 게시글 수 / 한 페이지당 보여줄 게시글의개수

        prev = startPage == 1 ? false : true;
        // 이전 버튼 생성 여부 = 시작 페이지 번호가 1과 같으면 false, 아니면 true
        next = endPage * cri.getPerPageNum() >= totalCount ? false : true;
        // 다음 버튼 생성 여부 = 끝 페이지 번호 * 한 페이지당 보여줄 게시글의 개수가 총 게시글의 수보다
        // 크거나 같으면 false, 아니면 true


    }

    // 마지막 페이지로 이동
    private void moveLastPage(){
        lastPage = (int) (Math.ceil(totalCount / cri.getPerPageNum()));
    }

    public int getDisplayPageNum() {
        return displayPageNum;
    }

    public void setDisplayPageNum(int displayPageNum) {
        this.displayPageNum = displayPageNum;
    }

    public int getStartPage() {
        return startPage;
    }

    public void setStartPage(int startPage) {
        this.startPage = startPage;
    }

    public int getEndPage() {
        return endPage;
    }

    public void setEndPage(int endPage) {
        this.endPage = endPage;
    }

    public int getFirstPage() {
        return firstPage;
    }

    public void setFirstPage(int firstPage) {
        this.firstPage = firstPage;
    }

    public int getLastPage() {
        return lastPage;
    }

    public void setLastPage(int totalCount, int displayPageNum) {
        this.lastPage = lastPage;
        moveLastPage();
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPerPageNum() {
        return perPageNum;
    }

    public void setPerPageNum(int perPageNum) {
        this.perPageNum = perPageNum;
    }

    public boolean isPrev() {
        return prev;
    }

    public void setPrev(boolean prev) {
        this.prev = prev;
    }

    public boolean isNext() {
        return next;
    }

    public void setNext(boolean next) {
        this.next = next;
    }

    public Criteria getCri() {
        return cri;
    }

    public void setCri(Criteria cri) {
        this.cri = cri;
    }


    @Override
    public String toString() {
        return "Paging{" +
                "totalCount=" + totalCount +
                ", displayPageNum=" + displayPageNum +
                ", startPage=" + startPage +
                ", endPage=" + endPage +
                ", firstPage=" + firstPage +
                ", lastPage=" + lastPage +
                ", prev=" + prev +
                ", next=" + next +
                ", cri=" + cri +
                '}';
    }
}
