<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>

	<div class="mu-search-group" >
		<div class="mu-search-item">
			<table>
				<tbody>
					<tr>
						<th><label>본부</label></th>
						<td>
							<div class="mu-selectbox bunbu">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>팀</label></th>
						<td>
							<div class="mu-selectbox team">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>ONS팀</label></th>
						<td>
							<div class="mu-selectbox onsteam">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>전송로</label></th>
						<td>
							<div class="mu-selectbox transType">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>망사업자</label></th>
						<td>
							<div class="mu-selectbox tlineBizNm">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>연동상태</label></th>
						<td>
							<div class="mu-selectbox state">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<th><label>제조사</label></th>
						<td>
							<div class="mu-selectbox manufacturer">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>모델명</label></th>
						<td>
							<div class="mu-selectbox model">
								<button class="mu-value"></button>
								<ul class="mu-list">
								</ul>
							</div>
						</td>
						<th><label>MAC</label></th>
						<td>
							<input type="text" class="mu-input" id="mac">
						</td>
						<th><label>IP</label></th>
						<td>
							<input type="text" class="mu-input" id="ip">
						</td>
						<th><label>장비명</label></th>
						<td>
							<input type="text" class="mu-input" id="equipment" >
						</td>
						<th><label>설치위치</label></th>
						<td>
							<input type="text" class="mu-input" id="loc">
						</td>
					</tr>
					<tr>
						<th><label>상위 장비명</label></th>
						<td>
							<input type="text" class="mu-input" id="uplinkdevice">
						</td>
						<th><label>업링크포트</label></th>
						<td>
							<input type="text" class="mu-input" id="uplinknum">
						</td>
						<th><label>AP MAC</label></th>
						<td>
							<input type="text" class="mu-input" id="apmac">
						</td>
						<th><label>AP IP</label></th>
						<td>
							<input type="text" class="mu-input" id="apip">
						</td>
						<th><label>AP 장비명</label></th>
						<td>
							<input type="text" class="mu-input" id="apequipment">
						</td>
						<th></th>
						<td colspan="3"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mu-search-btn">
			<button type="button" class="mu-btn mu-btn-icon" onClick="l2component.searchL2Component2();"><i class="mu-icon-img search"></i><span>조회</span></button>
		</div>
	</div>
	<div class="mu-grid-wrap">
		<div class="mu-grid-top">
			<div class="result">조회결과 : <span id="totCnt"></span>건</div>
			<div class="mu-grid-top-btn">
				<button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img detail"></i><span>상세조회</span></button>
				<button type="button" class="mu-btn mu-btn-icon" onClick="popup.registerL2Componet();"><i class="mu-icon-img manage"></i><span>관리</span></button>
				<button type="button" class="mu-btn mu-btn-icon" onClick="l2component.deleteL2Componet();"><i class="mu-icon-img trash"></i><span>삭제</span></button>
				<button type="button" class="mu-btn mu-btn-icon" onClick="l2component.exceldownloadL2Componet();"><i class="mu-icon-img download"></i><span>엑셀</span></button>
			</div>
		</div>
		<div class="mu-grid-body">
			<!-- <div class="mu-grid" style="width:100%;height:calc(100% - 26px);">
				<table id="jqGridL2" style="height:100%;"></table>
			</div> -->
			<table id="jqGridL2" style="width:100%;height:calc(100% - 26px);"></table>
			<div id="paginate"></div>
		</div>
	</div>
	
	<script src="<c:url value='../../resources/tms/l2/l2componet.js'/>"></script> 