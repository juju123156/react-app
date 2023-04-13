var l2component = {	
	
	setBranch:function(){
		$.ajax({
			url         : "/l2/getBranchName.json",
			type        : "POST",
			data : {},
			//dataType: 'application/json; charset=utf-8',
			success: function(result){
				setCombo($(".mu-selectbox.bunbu").find('ul'), result.result);
			}
//			error:function(request,status,error){
//                alert("code:  "+request.status+"\n"+"message:  "+request.responseText+"\n"+"error:  "+error);
//            }
		});
		
	},
	setTeam:function(list_id) {
		var data = {};
		data.list_id = list_id;
		$.ajax({
			url         : "/l2/getTeamName.json",
			//dataType	: "application/json; charset=utf-8",
			type        : "POST",
			data : data,
			success: function(result){
				//console.log(result);
				setCombo($(".mu-selectbox.team").find('ul'), result.result);

			},
			failure: function(){
				alert("호출 실패");
			}
		});
		
	},
	setONSTeam:function(list_id) {
		$.ajax({
			url         : "/l2/getONSTeamName.json",
			type        : "POST",
			data : {list_id: list_id},
			success: function(result){
				//console.log(result);
				setCombo($(".mu-selectbox.onsteam").find('ul'), result.result);

			},
			failure: function(){
				alert("호출 실패");
			}
		});
		
	},
	setConfig:function(type, name) {
		$.ajax({
			url         : "/l2/getConfig.json",
			type        : "POST",
			data : {type: type},
			success: function(result){
				//console.log(result);
				setComboConfig($(".mu-selectbox."+name).find('ul'), result.result);

			},
			failure: function(){
				alert("호출 실패");
			}
		});
	},
	getDeviceModelCbList:function(model) {
		$.ajax({
			url         : "/l2/getDeviceModelCbList.json",
			type        : "POST",
			data : {model: model},
			success: function(result){
				//console.log(result);
				setComboConfig($(".mu-selectbox.model").find('ul'), result.result);

			},
			failure: function(){
				alert("호출 실패");
			}
		});
	},
	getState : function() {
		setComboState($(".mu-selectbox.state").find('ul'));
	},
	searchL2Component: function() {
		console.log($('.mu-selectbox.tlineBizNm ul > li.selected').val());
		var data = getData();
		console.log(data);
		
		alert($(".mu-grid-body").height());

		$('#jqGridL2').jqGrid({
			datatype: "json"
			, url:"/l2/getL2SwitchList.json"
			, mtype: "POST"
			, postData : data
			//,ajaxGridOptions:{ contentType: "application/json; charset=utf-8"}
			,loadError:function(){alert("Error~!!");}
			,colNames:['본부','팀', 'ONS팀','전송로유형','망사업자','IP 지역','IP','MAC','시리얼넘버','장비명','연결AP개수','상태','Trap 수신 시간','L2 제조사','L2 모델명','S/W 버전','H/W 버전', 'L2 상세위치','특이사항','우편번호','도로명주소','상세주소']
			,colModel: [
				{ name: 'GROUP_1_NAME', index: 'GROUP_1_NAME', width: 75 },
				{ name: 'GROUP_2_NAME', index: 'GROUP_2_NAME', width: 150 },
				{ name: 'GROUP_3_NAME', index: 'GROUP_3_NAME', width: 150 },
				{ name: 'TRANS_TYPE_STR', index: 'TRANS_TYPE_STR', width: 80 },
				{ name: 'TLINE_BIZ_NM_STR', index: 'TLINE_BIZ_NM_STR', width: 80 },
				{ name: 'L2IP_LOC', index: 'L2IP_LOC', width: 80 , align: 'center'},
				{ name: 'EXTERNALIPADDRESS', index: 'EXTERNALIPADDRESS', width: 150 , align: 'center'},
				{ name: 'SERIALNUMBER', index: 'SERIALNUMBER', width: 150, align: 'center' },
				{ name: 'SPECVERSION', index: 'SPECVERSION', width: 150 },
				{ name: 'SISUL_NAME', index: 'SISUL_NAME', width: 150 },
				{ name: 'AP_CNT', index: 'AP_CNT', width: 80 , align: 'right'},
				{ name: 'ALARMSTATE', index: 'ALARMSTATE', width: 50, align: 'center' },
				{ name: 'UPDATEDATE_STR', index: 'UPDATEDATE_STR', width: 150, align: 'center' },
				{ name: 'MANUFACTURER_NM', index: 'MANUFACTURER_NM', width: 150 },
				{ name: 'DEVICE_MODEL_NAME_NM', index: 'DEVICE_MODEL_NAME_NM', width: 150 },
				{ name: 'SOFTWAREVERSION', index: 'SOFTWAREVERSION', width: 150 },
				{ name: 'HARDWAREVERSION', index: 'HARDWAREVERSION', width: 150 },
				{ name: 'DETAIL_ADDRESS2', index: 'DETAIL_ADDRESS2', width: 150 },
				{ name: 'EXTRA_DESC', index: 'EXTRA_DESC', width: 150 },
				{ name: 'POST', index: 'POST', width: 150, hidden :true },
				{ name: 'DETAIL_ADDRESS', index: 'DETAIL_ADDRESS', width: 150, hidden :true },
				{ name: 'LOC_DETAIL', index: 'LOC_DETAIL', width: 150, hidden :true }
			]
			,pager : false
			//,loadonce: true
			//,navOptions: { reloadGridOptions: { fromServer: true } }
			,multiselect: true
			//,autowidth: true
			,loadComplete : function(result){  
				
				//alert($("#jqGridL2").getGridParam('page'));
	               // 페이지 셋팅
				$("#totCnt").html(result.result.totalCnt);
		        initPage("jqGridL2", "paginate", true, "TOT", result.result );
	       }
		   ,viewrecords: true
		   ,rowNum :50
		   //,height: "100%"
		   //,height: $(".mu-grid").height()
		   //,height: "700"
		   //,height: "auto"
		   ,height: "calc(100% - 26px)"
		   //,height: $(".mu-grid-body").height()
		   //,height: $("#jqGridL2").height()
		   //,width: $("#jqGridL2").width()
		   //,width :"1865"
		   //,width : "100%"
		   //,width : $(".mu-grid-body").width()
		   //,shrinkToFit: true
		   ,scroll: 1
		   ,gridview: false
		   ,hidegrid: false
		   ,jsonReader: {
		         root: function (obj) {
		        	 return obj.result.result; 
		         },
		         repeatitems : false
		    }
		});

		var jqgridHeight = $('.ui-jqgrid').height() - $('.ui-jqgrid-hdiv').height();
		$('.ui-jqgrid-bdiv').height(jqgridHeight);
		alert($('.ui-jqgrid-bdiv').height());

		resizeJqGridWidth('jqGrid', 'mu-grid-body', $('.mu-grid-body').width(), true); //사이즈 조정 함수 . 아래 첨부
		/*
	  * @param string grid_id 사이즈를 변경할 그리드의 아이디
	  * @param string div_id 그리드의 사이즈의 기준을 제시할 div 의 아이디
	  * @param string width 그리드의 초기화 width 사이즈
	   * @param boolean tf 그리드의 리사이즈 여부(true/false)
	  */

	  function resizeJqGridWidth(grid_id, div_id, width, tf){
	     // window에 resize 이벤트를 바인딩 한다. 
	     $(window).bind('resize', function() {

		     var resizeWidth = $('.mu-grid-body').width(); //jQuery-ui의 padding 설정 및 border-width값때문에 넘치는 걸 빼줌.

	         // 그리드의 width 초기화
	         $('#' + grid_id).setGridWidth( width, tf);

	         // 그리드의 width를 div 에 맞춰서 적용
	         $('#' + grid_id).setGridWidth( resizeWidth , tf); //Resized to new width as per window. 

	      }).trigger('resize');
	  }
	},
	searchL2Component2: function() {
		
		//console.log( $('.mu-selectbox.state ul > li.selected').val()  );
		//console.log( $('.mu-selectbox.state button').html()  );
		
		var data = getData();
		
		console.log(data);
		
		$("#jqGridL2").jqGrid("clearGridData", true);
		$("#jqGridL2").jqGrid('setGridParam', {
			page: 1,
			url : "/l2/getL2SwitchList.json", //데이터를 받아오는 주소 위치
			datatype : 'json', //그리드에 매칭될 수 있는 반환 타입
			mtype : 'post', //ajax 호출방법
			postData : data,//검색조건 폼
			success : function(data) {
				console.log(data);
			},//조건 폼값 전송
			jsonReader: {
		         root: function (obj) {
		        	 return obj.result.result; 
		         },
		         repeatitems : false
		    }
		}).trigger('reloadGrid');
	},
	deleteL2Componet: function() {
		
		var selRowIds = $('#jqGridL2').jqGrid('getGridParam', 'selarrrow');
		//alert ('The number of selected rows: ' + selRowIds.length);
		if(selRowIds.length == 0) {
			CommonAlert2.showAlert("삭제할 장비를 선택하지 않았습니다.","확인");
			return;
		}
		
//		var rowid  = $("#jqGridL2").jqGrid("getGridParam", "selrow" );			// 선택한 열의 아이디값
//		
//		console.log(rowid);
//		var serialnumber = $("#jqGridL2").jqGrid("getRowData", rowid).SERIALNUMBER;
//		var specversion = $("#jqGridL2").jqGrid("getRowData", rowid).SPECVERSION;
		var serialnumberArray = "";
		var selRowIds = $('#jqGridL2').jqGrid('getGridParam', 'selarrrow');
		$.each( selRowIds, function( key, value ) {
			// alert( key + ": " + value );
			var serialnumber = $('#jqGridL2').jqGrid('getRowData', value).SERIALNUMBER;
			console.log(serialnumber);
			//serialnumberArray.push(serialnumber);
			if(key==0) {
				serialnumberArray += serialnumber;
			} else {
				serialnumberArray += ("," + serialnumber)
			}
		});
//		var rowids = $('#jqGridL2').jqGrid('getRowData', selRowIds);
//		console.log(rowids);
//		
//		var rowid  = $("#jqGridL2").jqGrid("getGridParam", "selrow" );
//		var serialnumber = $("#jqGridL2").jqGrid("getRowData", rowid).SERIALNUMBER;
//		console.log(serialnumber);
		
		
		CommonAlert.showConfirm("선택한 " + selRowIds.length +" 개의 장비를 삭제 하시겠습니까?", "예", "아니오", "confirmRemoveList" ,  serialnumberArray );
		
	},
	exceldownloadL2Componet:function() {
		$("#excelHeader").val( "group1Name,group2Name,group3Name,transTypeStr,tlineBizNmStr,l2ipLoc,externalipaddress,serialnumber,specversion,sisulName,apCnt,alarmstate,updatedateStr,manufacturerNm,deviceModelNameNm,softwareversion,hardwareversion,detailAddress2,extraDesc" );
		$("#excelName").val("l2component.xlsx");
		$("#excelQueryId").val("com.mobigen.tms.l2.L2MapperDao.getL2SwitchListExceldownload");
		
		var data = getData();
		
		//data.isPaging = 'false';
		$("#excelParam").val( JSON.stringify(data) );
		
		// submit
		$("#excelForm").submit();
	}
};

function getData() {
	var data = {};
	data.BRANCH_ID = $('.mu-selectbox.bunbu ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.bunbu ul > li.selected').val() ;				// 본부
	data.OPTEAM_ID = $('.mu-selectbox.team ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.team ul > li.selected').val() ;				// 팀
	data.MACOMPANY_ID = $('.mu-selectbox.onsteam ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.onsteam ul > li.selected').val();			// ONS팀
	data.TRANS_TYPE = $('.mu-selectbox.transType ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.transType ul > li.selected').val();			// 전송로
	data.TLINE_BIZ_NM = $('.mu-selectbox.tlineBizNm ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.tlineBizNm ul > li.selected').val();			// 망사업자
	data.MANUFACTURER = $('.mu-selectbox.manufacturer ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.manufacturer ul > li.selected').val();		// 제조사
	data.MODEL_NAME = $('.mu-selectbox.model ul > li.selected').val() == 0 ? "" : $('.mu-selectbox.model ul > li.selected').val();				// model
	data.SERIALNUMBER = $('#mac').val();									// L2 MAC
	data.IPADDR = $('#ip').val();											// IP
	data.SISUL_NAME = $('#equipment').val();								// 장비명
	data.STATE = $('.mu-selectbox.state ul > li.selected').val() == undefined || $('.mu-selectbox.state button').html() == "ALL" ? "" : $('.mu-selectbox.state ul > li.selected').val() ;				// 상태
	data.AP_MAC = $('#apmac').val();										// L2 MAC
	data.AP_IP = $('#apip').val();											// IP
	data.AP_NAME = $('#apequipment').val();									// 장비명
	data.SISUL_NAME = $('#apmac').val();									// AP MAC
	data.LOCATION = $('#loc').val();										// 설치위치
	data.UP_LINK_DEVICE_NAME = $('#uplinkdevice').val();    				// 상위장비명
	data.UP_LINK_PORT_NUMBER = $('#uplinknum').val();    					// 업링크포트
	
	return data;
	
}

function confirmRemoveList(serialnumber) {
	//console.log(serialnumber);
	//var data = JSON.stringify(serialnumber);
	//console.log(data);
	$.ajax({
		url         : "/l2/deletel2Component.json",
		type        : "POST",
		data : {serialnumber : serialnumber},
		//contentType : "application/json; charset=utf-8",
		success: function(result){
			alert("삭제되었습니다.");
			
			//l2component.searchL2Component();
			menu.goMenu();
		},
		failure: function(){
			alert("호출 실패");
		}
	});
}

var popup = {	
		registerL2Componet:function(){
			
			var rowid  = $("#jqGridL2").jqGrid("getGridParam", "selrow" );
			//console.log(rowid);
			
			if(rowid == null) {
			
				$('<div id="l2componentpopup">').dialog({
		            modal: true,
		            open: function (e)
		            {
		            	console.log($(this));
		            	$(".ui-dialog.ui-widget.ui-widget-content").css('position','static').removeClass();
		            	$(".ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix.ui-draggable-handle").css('display','none');
		            	$(".ui-dialog-content.ui-widget-content").css('height','0px');
		            	$(this).load('/views/l2/popup/l2componentpopup.jsp', function(){ 
		            		$("#savestate").val("R");
		            	});
		            },         
		            height: 830,
		            width: 540
		        });
			} else {
				
				var selRowIds = $('#jqGridL2').jqGrid('getGridParam', 'selarrrow');
				//alert ('The number of selected rows: ' + selRowIds.length);
				if(selRowIds.length > 1 || selRowIds.length == 0) {
					CommonAlert2.showAlert("수정할 장비를 선택하지 않았거나 여러개 선택했습니다. 하나의 장비만 선택하세요.","확인");
					return;
				}
				
				var group_1_name = $("#jqGridL2").jqGrid("getRowData", rowid).GROUP_1_NAME;
				var group_2_name = $("#jqGridL2").jqGrid("getRowData", rowid).GROUP_2_NAME;
				var group_3_name = $("#jqGridL2").jqGrid("getRowData", rowid).GROUP_3_NAME;
				
				var trans_type_str = $("#jqGridL2").jqGrid("getRowData", rowid).TRANS_TYPE_STR;
				var tline_biz_nm_str = $("#jqGridL2").jqGrid("getRowData", rowid).TLINE_BIZ_NM_StR;
				
				var manufacturer_nm = $("#jqGridL2").jqGrid("getRowData", rowid).MANUFACTURER_NM;		//L2 제조사
				var device_model_name_nm = $("#jqGridL2").jqGrid("getRowData", rowid).DEVICE_MODEL_NAME_NM;	//L2 모델명
				
				var zipcode = $("#jqGridL2").jqGrid("getRowData", rowid).POST;
				var serialnumber = $("#jqGridL2").jqGrid("getRowData", rowid).SERIALNUMBER;
				var externalipaddress = $("#jqGridL2").jqGrid("getRowData", rowid).EXTERNALIPADDRESS;
				var sisul_name = $("#jqGridL2").jqGrid("getRowData", rowid).SISUL_NAME;
				var up_link_port_number = $("#jqGridL2").jqGrid("getRowData", rowid).UP_LINK_PORT_NUMBER;
				var up_link_device_name = $("#jqGridL2").jqGrid("getRowData", rowid).UP_LINK_DEVICE_NAME;
				
				var loc_detail = $("#jqGridL2").jqGrid("getRowData", rowid).LOC_DETAIL;
				var detail_address = $("#jqGridL2").jqGrid("getRowData", rowid).DETAIL_ADDRESS;

            	console.log(device_model_name_nm);
            	//console.log(serialnumber);
				
				$('<div id="l2componentpopup">').dialog({
		            modal: true,
		            open: function (e)
		            {
		            	//console.log($(this));
		            	$(".ui-dialog.ui-widget.ui-widget-content").css('position','static').removeClass();
		            	$(".ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix.ui-draggable-handle").css('display','none');
		            	$(".ui-dialog-content.ui-widget-content").css('height','0px');
		            	$(this).load('/views/l2/popup/l2componentpopup.jsp', function(){ 
		            		$("#l2mac").val(serialnumber);
		            		$("#l2ip").val(externalipaddress);
		            		$("#l2name").val(sisul_name);
		            		$("#zipcode").val(zipcode);
		            		$("#basicaddress").val(detail_address);
		            		
		            		$("#uplinkportnum").val(up_link_port_number);
		            		$("#uplinkdevicename").val(up_link_device_name);
		            		
		            		$("#detailaddress").val(loc_detail);
		            		
		            		$(".mu-selectbox.bunbupop").find('button').html(group_1_name);
		            		$(".mu-selectbox.teampop").find('button').html(group_2_name);
		            		$(".mu-selectbox.onsteampop").find('button').html(group_3_name);

		            		$(".mu-selectbox.manufacturerpop").find('button').html(manufacturer_nm);
		            		$(".mu-selectbox.modelpop").find('button').html(device_model_name_nm);
		            		
		            		$(".mu-selectbox.transTypepop").find('button').html(trans_type_str);
		            		$(".mu-selectbox.tlineBizNmpop").find('button').html(tline_biz_nm_str);
		            		
		            		$("#savestate").val("U");
		            	});

		            },         
		            height: 830,
		            width: 540
		        });
			}
			
		}
};


$(document).mouseup(function (e) {
	//console.log(e);console.log(e.target.tagName);
	if(e.target.tagName != "LI") {
		$(".mu-selectbox.bunbu").removeClass("on");
		$(".mu-selectbox.team").removeClass("on");
		$(".mu-selectbox.onsteam").removeClass("on");
		$(".mu-selectbox.manufacturer").removeClass("on");
		$(".mu-selectbox.model").removeClass("on");
		$(".mu-selectbox.state").removeClass("on");
		$(".mu-selectbox.transType").removeClass("on");
		$(".mu-selectbox.tlineBizNm").removeClass("on");
	} 
}); 

$(document).ready(function() {
	var searchHeight = $(".mu-search-group").height();
	$(".mu-grid-wrap").css('height','calc(100% - '+ searchHeight +'px)');
	
	l2component.setBranch();
	l2component.setConfig("L2_MANU", "manufacturer");
	l2component.setConfig("TRANS_TYPE", "transType");
	l2component.setConfig("TLINE_TYPE", "tlineBizNm");
	l2component.getState();
	// 본부
	$(".mu-selectbox.bunbu").click(function(){
		  $(this).toggleClass("on");
	});
	// 팀
	$(".mu-selectbox.team").click(function(){
		  $(this).toggleClass("on");
	});
	// ONS팀
	$(".mu-selectbox.onsteam").click(function(){
		  $(this).toggleClass("on");
	});
	//전송로
	$(".mu-selectbox.transType").click(function(){
		  $(this).toggleClass("on");
	});
	//망사업자
	$(".mu-selectbox.tlineBizNm").click(function(){
		  $(this).toggleClass("on");
	});
	//L2 제조사
	$(".mu-selectbox.manufacturer").click(function(){
		  $(this).toggleClass("on");
		  console.log( $('.mu-selectbox.manufacturer ul > li.selected').val() );
		  //l2component.getDeviceModelCbList( , "model")
	});
	//L2 모델
	$(".mu-selectbox.model").click(function(){
		  $(this).toggleClass("on");
		  console.log( $('.mu-selectbox.model ul > li.selected').val() );
		  //l2component.getDeviceModelCbList( , "model")
	});
	// 상태
	$(".mu-selectbox.state").click(function(){
		  $(this).toggleClass("on");
		  //l2component.getDeviceModelCbList( , "model")
	});
	
	$('.mu-selectbox.bunbu').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		console.log($(this).attr('value'));
		$('.mu-selectbox.bunbu').find('button').html($(this).text());
		
		l2component.setTeam($(this).attr('value'));
		l2component.setONSTeam($(this).attr('value'));
	});
	
	$('.mu-selectbox.team').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.team').find('button').html($(this).text());
	});
	
	$('.mu-selectbox.onsteam').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.onsteam').find('button').html($(this).text());
	});
	
	$('.mu-selectbox.manufacturer').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.manufacturer').find('button').html($(this).text());
		l2component.getDeviceModelCbList($(this).attr('value'));
	});
	
	$('.mu-selectbox.model').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.model').find('button').html($(this).text());
	});
	
	$('.mu-selectbox.transType').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.transType').find('button').html($(this).text());
	});
	
	$('.mu-selectbox.tlineBizNm').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.tlineBizNm').find('button').html($(this).text());
	});
	
	$('.mu-selectbox.state').on("click", "li", function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.mu-selectbox.state').find('button').html($(this).text());
	});
	
	setTimeout(function(){
		l2component.searchL2Component();
	},5000);
});



function setCombo ( div, data )
{
	div.empty();
	div.parent().find('button').html('ALL');
	div.append ( '<li class="selected" value=""  >ALL</li>' );
	$(data).each(function(idx, result){
		div.append('<li value="'+result.LIST_ID+'">' +result.LIST_NAME+'</li>');
	});
	
}

function setComboConfig ( div, data )
{
	div.empty();
	div.parent().find('button').html('ALL');
	div.append ( '<li class="selected" value=""  >ALL</li>' );
	$(data).each(function(idx, result){
		div.append('<li value="'+result.COLUMN_VALUE+'">' +result.COLUMN_NAME+'</li>');
	});
	
	if(div.selector == ".mu-selectbox.model ul") {
		div.append ( '<li value="999"  >기타</li>' );
	}
}

function setComboState ( div )
{
	
	div.empty();
	div.parent().find('button').html('ALL');
	div.append ('<li value="" class="selected" >ALL</li>' );
	div.append('<li value="0">O</li>');
	div.append('<li value="4">X</li>');
	
}


var customPageInfo = ""; // 페이지 정보를 나타낼 것인지 / boolean / 생략시 false
var customPageInfoType = ""; // 페이지 정보의 종류
var pageCount = 10; // 한 페이지에 보여줄 페이지 수 (ex:1 2 3 4 5)
var totalSize = 0;
 
/**
 * 그리드 페이징 
 * 
 * @param gridId
 * @param pagerId
 * @param pI : 페이지 정보를 나타낼 것인지 / boolean / 생략시 false
 * @param pit : 페이지 정보의 종류 (pI : true 일때) : <br/>
 *   TOT = 총 페이지수 / 갯수 (현재 페이지의 시작 레코드 ~ 현재 페이지의 마지막 레코드) <=== 기본값 <br/>
 *  TOTP = 총 페이지수 / 갯수 <br/>
 *  PSE = (현재 페이지의 시작 레코드 ~ 현재 페이지의 마지막 레코드) <br/>
 */
function initPage(gridId, pagerId, pI, pit, data){
 if(pI == null || pI == ""){ 
  customPageInfo = false; 
 }else{
  customPageInfo = true;
 }
 
 if(pit != "TOTP" && pit != "PSE"){
  customPageInfoType = "TOT";
 }else{
  customPageInfoType = pit;
 }
 
 // 현재 페이지
 var currentPage = $('#'+gridId).getGridParam('page');
 // 전체 리스트 수
 
 //var totalSize = $('#'+gridId).getGridParam('records');
 totalSize = data.totalCnt;
 // 그리드 데이터 전체의 페이지 수 
 var totalPage = Math.ceil(totalSize/$('#'+gridId).getGridParam('rowNum'));
 // 전체 페이지 수를 한화면에 보여줄 페이지로 나눈다.
 var totalPageList = Math.ceil(totalPage/pageCount);
 // 페이지 리스트가 몇번째 리스트인지
 var pageList=Math.ceil(currentPage/pageCount);
 //alert("currentPage="+currentPage+"/ totalPage="+totalSize);
 //alert("pageCount="+pageCount+"/ pageList="+pageList);
 
 
 
 // 페이지 리스트가 1보다 작으면 1로 초기화
 if(pageList<1) pageList=1;
 // 페이지 리스트가 총 페이지 리스트보다 커지면 총 페이지 리스트로 설정
 if(pageList>totalPageList) pageList = totalPageList;
 // 시작 페이지
 var startPageList=((pageList-1)*pageCount)+1;
 // 끝 페이지
 var endPageList=startPageList+pageCount-1;
 
 //alert("startPageList="+startPageList+"/ endPageList="+endPageList);
 
 // 시작 페이지와 끝페이지가 1보다 작으면 1로 설정
 // 끝 페이지가 마지막 페이지보다 클 경우 마지막 페이지값으로 설정
 if(startPageList<1) startPageList=1;
 if(endPageList>totalPage) endPageList=totalPage;
 if(endPageList<1) endPageList=1;
 
 // 페이징 DIV에 넣어줄 태그 생성변수 
 var pageInner="";
 
 // 페이지 리스트가 1이나 데이터가 없을 경우 (링크 빼고 흐린 이미지로 변경)
 if(pageList<2){
  pageInner+="<button type='button' class='mu-first' disabled='disabled'><span></span></button>";
  pageInner+="<button type='button' class='mu-prev' disabled='disabled'><span></span></button>";
 }
 // 이전 페이지 리스트가 있을 경우 (링크넣고 뚜렷한 이미지로 변경)
 if(pageList>1){
  var titleFirstPage = "첫 페이지로 이동";
  var titlePrePage = (startPageList-10) + "페이지에서 " + (endPageList-10) + "페이지까지 이동";
  
  //pageInner+="<span class='customPageMoveBtn'><a class='first' href='javascript:firstPage(\""+ gridId +"\");' title='"+ titleFirstPage +"'><i class='fa fa-fast-backward faPointer'></i></a></span>";
  //pageInner+="<span class='customPageMoveBtn'><a class='pre' href='javascript:prePage(\""+ gridId +"\");' title='"+ titlePrePage +"'><i class='fa fa-step-backward faPointer'></i></a></span>";
  pageInner+="<button type='button' class='mu-first' onClick='javascript:firstPage(\""+ gridId +"\");'><span></span></button>";
  pageInner+="<button type='button' class='mu-prev' onClick='javascript:prePage(\""+ gridId +"\");'><span></span></button>";
 }
 
 pageInner += "<ul>";
 // 페이지 숫자를 찍으며 태그생성 (현재페이지는 강조태그) 
 for(var i=startPageList; i<=endPageList; i++){
  var titleGoPage = i + "페이지로 이동";
  
  if(i==currentPage){
   pageInner = pageInner +"<li class='active'><a href='javascript:goPage(\""+ gridId +"\", "+(i)+");' id='"+(i)+"' title='"+ titleGoPage +"'>"+(i)+"</a></li>";
  }else{
   pageInner = pageInner +"<li><a href='javascript:goPage(\""+ gridId +"\", "+(i)+");' id='"+(i)+"' title='"+ titleGoPage +"'>"+(i)+"</a></li>";
  }
  
 }
 pageInner += "</ul>";
 //alert("총페이지 갯수"+totalPageList);
 //alert("현재페이지리스트 번호"+pageList);
 
 // 다음 페이지 리스트가 있을 경우
 if(totalPageList>pageList){
  var titleNextPage = (startPageList+10) + "페이지에서 " + (endPageList+10) + "페이지까지 이동";
  var titleLastPage = "마지막 페이지로 이동";
  
  //pageInner+="<span class='customPageMoveBtn'><a class='next' href='javascript:nextPage(\""+ gridId +"\");' title='"+ titleNextPage +"'><i class='fa fa-step-forward faPointer'></i></a></span>";
  //pageInner+="<span class='customPageMoveBtn'><a class='last' href='javascript:lastPage(\""+ gridId +"\");' title='"+ titleLastPage +"'><i class='fa fa-fast-forward faPointer'></i></a></span>";
   pageInner+="<button type='button' class='mu-next' onClick='javascript:nextPage(\""+ gridId +"\");'><span></span></button>";
   pageInner+="<button type='button' class='mu-last' onClick='javascript:lastPage(\""+ gridId +"\");'><span></span></button>";
 }
 
 // 현재 페이지리스트가 마지막 페이지 리스트일 경우
 if(totalPageList==pageList){
  //pageInner+="<span class='customPageMoveBtn'><i class='fa fa-step-forward'></i></span>";
  //pageInner+="<span class='customPageMoveBtn'><i class='fa fa-fast-forward'></i></span>";
	pageInner+="<button type='button' class='mu-next' disabled='disabled'><span></span></button>";
	pageInner+="<button type='button' class='mu-last' disabled='disabled'><span></span></button>";
 }   
 //alert(pageInner);
 
 // 페이지 정보 셋팅
 var pageInfoText = ""; // 페이지 정보를 담을 변수
 if(customPageInfo){
  //////////////////////////////////////////////////////////////////////////////////////////
  var base = parseInt($('#'+gridId).getGridParam('page'),10)-1 ;
  if(base < 0) { base = 0; }
  base = base*parseInt($('#'+gridId).getGridParam('rowNum'),10);
  var from = base+1;
  var to = base + $('#'+gridId).getGridParam('reccount') ;
  //////////////////////////////////////////////////////////////////////////////////////////
  
  if(totalSize == 0){
   pageInfoText = "표시할 데이터가 없습니다";
  }else{
   var totpTxt = "총 " + commify(totalPage) + " 페이지" + " / " + commify(totalSize) + " 개";
   var pseTxt = "( " + commify(from) + " ~ " + commify(to) + " )";
   var totTxt = totpTxt+ " 중 " + pseTxt;
   if(customPageInfoType == "TOTP"){
    pageInfoText = totpTxt;
   }else if(customPageInfoType == "PSE"){
    pageInfoText = pseTxt;
   }else{
    pageInfoText = totTxt;
   }
  }
 }
 
/* 
 var table = "";
 table+= "<table width='100%'>";
 table+= "<tr>";
 table+= "<td width='29%'>";
 table+= "</td>";
 table+= "<td align='center'>";
 table+= pageInner;
 table+= "</td>";
 table+= "<td width='29%' align='right'>";
 table += customPageInfo ? pageInfoText + " " : "" ;
 table+= "</td>";
 table+= "</tr>";
 table+= "</table>";
*/  
 var table = pageInner;
 //console.log(table);
 
 // 페이징할 DIV태그에 우선 내용을 비우고 페이징 태그삽입
 $("#"+pagerId).html("");
 // 너비 조정
 //var w = $('#'+gridId).width()+18;
 //$("#"+pagerId).width(w);
 // 페이징 html 추가
 $("#"+pagerId).append(table);
 // 페이징 클래스 추가
 $("#"+pagerId).addClass("mu-pagination");
 
 
// console.log("totalPage: " + totalPage);
// console.log("totalSize: " + totalSize);
// console.log("base: " + base);
// console.log("to: " + to);
// console.log("from: " + from);
// console.log("rowNum: " + $('#'+gridId).getGridParam('rowNum'));
}
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function commify() {
	
}
 
//그리드 첫페이지로 이동 
function firstPage(gridId){
 $("#"+gridId).jqGrid('setGridParam', {
      page:1,
 }).trigger("reloadGrid");
}
 
// 그리드 이전페이지 이동 
function prePage(gridId){
 var currentPage = $("#"+gridId).getGridParam('page');
 
 currentPage-=pageCount;
 pageList=Math.ceil(currentPage/pageCount);
 currentPage=(pageList-1)*pageCount+pageCount;
 
 /*
 $("#"+gridId).jqGrid('setGridParam', {
      page:currentPage,
     }).trigger("reloadGrid");
 */
 setPage(gridId, currentPage);
 $("#"+gridId).setGridParam({page: currentPage}).trigger('reloadGrid');
}
 
// 그리드 다음페이지 이동  
function nextPage(gridId){
 var currentPage = $("#"+gridId).getGridParam('page');
 
 currentPage+=pageCount;
 pageList=Math.ceil(currentPage/pageCount);
 currentPage=(pageList-1)*pageCount+1;
 
 //$("#"+gridId).jqGrid("GridUnload");
 //$.jgrid.gridUnload("#"+gridId); 
 
 /*
 $("#"+gridId).jqGrid('setGridParam', {
      page:currentPage,
  }).trigger("reloadGrid");
  */
  setPage(gridId, currentPage);
 //alert(currentPage);
 //$("#jqGridL2").jqGrid('setGridParam', [{ page: currentPage}]).trigger('reloadGrid');
  $("#"+gridId).setGridParam({page: currentPage}).trigger('reloadGrid');
 //$("#jqGridL2").trigger('reloadGrid');
 //$("#jqGridL2").trigger("reloadGrid",[{page:currentPage}]);
 
}
 
// 그리드 마지막페이지 이동 
function lastPage(gridId){
 //var totalSize = jQuery('#'+gridId).getGridParam('records'); 
 //alert(totalSize);
 var totalPage = Math.ceil(totalSize/$('#'+gridId).getGridParam('rowNum')); //alert(totalPage); 
 
 /*
 $("#"+gridId).jqGrid('setGridParam', {
      page:totalPage,
     }).trigger("reloadGrid");
 */
 	setPage(gridId, totalPage);
 	$("#"+gridId).setGridParam({page: totalPage}).trigger('reloadGrid');
}
 
// 그리드 페이지 이동 
function goPage(gridId, num){
// $("#"+gridId).jqGrid('setGridParam', {
//      page:num,
//     }).trigger("reloadGrid");
	setPage(gridId, num);
	$("#"+gridId).setGridParam({page: num}).trigger('reloadGrid');
  
}

function setPage(gridId, page) {
	var data = getData();							
	
	$("#"+gridId).jqGrid("clearGridData", true);
	$("#"+gridId).jqGrid('setGridParam', {
		url : "/l2/getL2SwitchList.json", //데이터를 받아오는 주소 위치
		datatype : 'json', //그리드에 매칭될 수 있는 반환 타입
		mtype : 'post', //ajax 호출방법
		postData : data,//검색조건 폼
		success : function(data) {
			console.log(data);
		},//조건 폼값 전송
		jsonReader: {
	         root: function (obj) {
	        	 return obj.result.result; 
	         },
	         repeatitems : false
	    },
	    page:page
	})
	$("#"+gridId).trigger('reloadGrid');
}
