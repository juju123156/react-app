<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>

<div id="trainMap" draggable="true" >
	<div style="position: absolute;overflow: hidden;" >
 		<img id="line1" src="<c:url value='../../views/subway/svg/1line_line.svg'/>" > 
<%-- 		<object id="line1" type="image/svg+xml" data="<c:url value='../../views/subway/svg/1line_line.svg'/>"></object> --%>
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text1" src="<c:url value='../../views/subway/svg/1line_text.svg'/>" > --%>
		<object id="text1" type="image/svg+xml" data="<c:url value='../../views/subway/svg/1line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line2" src="<c:url value='../../views/subway/svg/2line_line.svg'/>" >
<%-- 		<object id="line2" type="image/svg+xml" data="<c:url value='../../views/subway/svg/2line_line.svg'/>"></object> --%>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<!-- <img id="text2" src="<c:url value='../../views/subway/svg/2line_text.svg'/>" > -->
		<object id="text2" type="image/svg+xml" data="<c:url value='../../views/subway/svg/2line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line3" src="<c:url value='../../views/subway/svg/3line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text3" src="<c:url value='../../views/subway/svg/3line_text.svg'/>" > --%>
		<object id="text3" type="image/svg+xml" data="<c:url value='../../views/subway/svg/3line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line4" src="<c:url value='../../views/subway/svg/4line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text4" src="<c:url value='../../views/subway/svg/4line_text.svg'/>" > --%>
		<object id="text4" type="image/svg+xml" data="<c:url value='../../views/subway/svg/4line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line5" src="<c:url value='../../views/subway/svg/5line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text5" src="<c:url value='../../views/subway/svg/5line_text.svg'/>" > --%>
		<object id="text5" type="image/svg+xml" data="<c:url value='../../views/subway/svg/5line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line6" src="<c:url value='../../views/subway/svg/6line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text6" src="<c:url value='../../views/subway/svg/6line_text.svg'/>" > --%>
		<object id="text6" type="image/svg+xml" data="<c:url value='../../views/subway/svg/6line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line7" src="<c:url value='../../views/subway/svg/7line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text7" src="<c:url value='../../views/subway/svg/7line_text.svg'/>" > --%>
		<object id="text7" type="image/svg+xml" data="<c:url value='../../views/subway/svg/7line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line8" src="<c:url value='../../views/subway/svg/8line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text8" src="<c:url value='../../views/subway/svg/8line_text.svg'/>" > --%>
		<object id="text8" type="image/svg+xml" data="<c:url value='../../views/subway/svg/8line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="line9" src="<c:url value='../../views/subway/svg/9line_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="text9" src="<c:url value='../../views/subway/svg/9line_text.svg'/>" > --%>
		<object id="text9" type="image/svg+xml" data="<c:url value='../../views/subway/svg/9line_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="linegeoggang" src="<c:url value='../../views/subway/svg/geoggang_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textgeoggang" src="<c:url value='../../views/subway/svg/geoggang_text.svg'/>" > --%>
		<object id="textgeoggang" type="image/svg+xml" data="<c:url value='../../views/subway/svg/geoggang_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="linegyeongui" src="<c:url value='../../views/subway/svg/gyeongui_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textgyeongui" src="<c:url value='../../views/subway/svg/gyeongui_text.svg'/>" > --%>
		<object id="textgyeongui" type="image/svg+xml" data="<c:url value='../../views/subway/svg/gyeongui_text.svg'/>"></object>
	</div>
	<div style="position: absolute;overflow: hidden;" >
		<img id="linegyeongchun" src="<c:url value='../../views/subway/svg/gyeongchun_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textgyeongchun" src="<c:url value='../../views/subway/svg/gyeongchun_text.svg'/>" > --%>
		<object id="textgyeongchun" type="image/svg+xml" data="<c:url value='../../views/subway/svg/gyeongchun_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="linegonghang" src="<c:url value='../../views/subway/svg/gonghang_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textgonghang" src="<c:url value='../../views/subway/svg/gonghang_text.svg'/>" > --%>
		<object id="textgonghang" type="image/svg+xml" data="<c:url value='../../views/subway/svg/gonghang_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="linebundang" src="<c:url value='../../views/subway/svg/bundang_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textbundang" src="<c:url value='../../views/subway/svg/bundang_text.svg'/>" > --%>
		<object id="textbundang" type="image/svg+xml" data="<c:url value='../../views/subway/svg/bundang_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="linesuin" src="<c:url value='../../views/subway/svg/suin_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textsuin" src="<c:url value='../../views/subway/svg/suin_text.svg'/>" > --%>
		<object id="textsuin" type="image/svg+xml" data="<c:url value='../../views/subway/svg/suin_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="linesinbundang" src="<c:url value='../../views/subway/svg/sinbundang_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textsinbundang" src="<c:url value='../../views/subway/svg/sinbundang_text.svg'/>" > --%>
		<object id="textsinbundang" type="image/svg+xml" data="<c:url value='../../views/subway/svg/sinbundang_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="lineyongin" src="<c:url value='../../views/subway/svg/yongin_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textyongin" src="<c:url value='../../views/subway/svg/yongin_text.svg'/>" > --%>
		<object id="textyongin" type="image/svg+xml" data="<c:url value='../../views/subway/svg/yongin_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="lineui" src="<c:url value='../../views/subway/svg/ui_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textui" src="<c:url value='../../views/subway/svg/ui_text.svg'/>" > --%>
		<object id="textui" type="image/svg+xml" data="<c:url value='../../views/subway/svg/ui_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="lineuijeongbu" src="<c:url value='../../views/subway/svg/uijeongbu_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textuijeongbu" src="<c:url value='../../views/subway/svg/uijeongbu_text.svg'/>" > --%>
		<object id="textuijeongbu" type="image/svg+xml" data="<c:url value='../../views/subway/svg/uijeongbu_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="lineincheon1" src="<c:url value='../../views/subway/svg/incheon1_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textincheon1" src="<c:url value='../../views/subway/svg/incheon1_text.svg'/>" > --%>
		<object id="textincheon1" type="image/svg+xml" data="<c:url value='../../views/subway/svg/incheon1_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="lineincheon2" src="<c:url value='../../views/subway/svg/incheon2_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textincheon2" src="<c:url value='../../views/subway/svg/incheon2_text.svg'/>" > --%>
		<object id="textincheon2" type="image/svg+xml" data="<c:url value='../../views/subway/svg/incheon2_text.svg'/>"></object>
	</div>
	
	<div style="position: absolute;overflow: hidden;" >
		<img id="linejagibusang" src="<c:url value='../../views/subway/svg/jagibusang_line.svg'/>" >
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%-- 		<img id="textjagibusang" src="<c:url value='../../views/subway/svg/jagibusang_text.svg'/>" > --%>
		<object id="textjagibusang" type="image/svg+xml" data="<c:url value='../../views/subway/svg/jagibusang_text.svg'/>"></object>
	</div>
	
	<div id="objdiv1" style="position: absolute;overflow: hidden;" >
 		<img src="<c:url value='../../views/subway/svg/subway_all_line.svg'/>" style="opacity: 0.1;" > 
	</div>
	<div style="position: absolute;overflow: hidden;" >
<%--  		<img src="<c:url value='../../views/subway/svg/subway_all_text.svg'/>" style="opacity: 0.1;" >  --%>
		<object type="image/svg+xml" data="<c:url value='../../views/subway/svg/subway_all_text.svg'/>" style="opacity: 0.1;"></object>
	</div>
</div>
<script src="<c:url value='../../resources/tms/subway/allline.js'/>"></script> 
