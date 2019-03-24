<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0">
    <c:choose>
    	<c:when test="${type=='unes' }">
    		<title>UNES 등록</title>
    	</c:when>
    	<c:otherwise>
    		<title>INES 등록</title>
    	</c:otherwise>
    </c:choose>
    <c:import url="/WEB-INF/template/link.jsp"></c:import>
    <link rel="stylesheet" href="/css/tui-date-picker.css"/>
    <link rel="stylesheet" href="/css/tui-time-picker.css"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/css/registerForm.css"/>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
<div id="content">
    <div class="aux">
        <c:choose>
	    	<c:when test="${type=='unes' }">
	    		<h2>UNES 등록하기</h2>
	    	</c:when>
	    	<c:otherwise>
	    		<h2>INES 등록하기</h2>
	    	</c:otherwise>
    	</c:choose>
        <form action="/${type }/register" method="post" id="insertForm">
            <fieldset>
                <legend class="screen_out">INES 등록 폼</legend>
                <input type="hidden" id="type" value="${type }"/>
                <input type="hidden" id="userNo" name="userNo" value="${loginUser.no }"/>
                <input type="hidden" name="type" value="${type }"/>
                <div class="wrapper" id="titleWrap">
                    <h3 class="input_title">제목</h3>
                    <input id="title" name="title" placeholder="제목을 입력해 주세요"/>
                </div><!--titleWrap end-->
                <c:choose>
                	<c:when test="${type=='ines' }">
	                	<div class="wrapper" id="regionWrap">
		                    <h3 class="input_title">선호지역</h3>
		                    <input id="region" name="region" onclick="DaumPostcode()" readonly/><!--
		                    --><button id="searchRegionBtn" type="button" onclick="DaumPostcode()">검색</button>
		                </div><!--regionWrap end-->
                	</c:when>
                	<c:otherwise>
                		<input type="hidden" id="region" name="region" value="${loginUser.addressOld }"/>
                	</c:otherwise>
                </c:choose>
                <div class="wrapper" id="talentWrap">
                    <h3 class="input_title">재능</h3>
                    <label for="music" class="icon_talent"><input class="screen_out" id="music" type="radio" name="talentNo" value="1"/><i class="fas fa-guitar"></i>음악</label>
                    <label for="art" class="icon_talent"><input class="screen_out" id="art" type="radio" name="talentNo" value="2"/><i class="fas fa-palette"></i>미술</label>
                    <label for="magic" class="icon_talent"><input class="screen_out" id="magic" type="radio" name="talentNo" value="3"/><i class="fas fa-hat-wizard"></i>마술</label>
                    <label for="exhibition" class="icon_talent"><input class="screen_out" id="exhibition" type="radio" name="talentNo" value="4"/><i class="fas fa-vector-square"></i>전시</label>
                    <label for="other" class="icon_talent"><input class="screen_out" id="other" type="radio" name="talentNo"/><i class="fas fa-plus"></i>기타</label>
                    <div id="inputBox">
                        <input/>
                        <span><i class="fas fa-question-circle"></i></span>
                    </div>
                    <div class="help" id="addTalentHelp">입력해주신 재능은 아이콘을 선정하여 추후 추가하도록 하겠습니다.</div>
                </div><!--talentWrap end-->
                <div class="wrapper" id="dateWrap">
                    <h3 class="input_title">활동 날짜 및 시간</h3>
                    <div id="dateBox">
                        <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
                            <input id="startpicker-input" type="text" aria-label="Date">
                            <span class="tui-ico-date"></span>
                            <div id="startpicker-container" style="margin-left: -1px;"></div>
                        </div>
                        <span class="wave">~</span>
                        <div class="tui-datepicker-input tui-datetime-input tui-has-focus" id="datepicker-endbox">
                            <input id="endpicker-input" type="text" aria-label="Date">
                            <span class="tui-ico-date"></span>
                            <div id="endpicker-container" style="margin-left: -1px;"></div>
                        </div>
                    </div>
                    <div id="timeBox">
                        <div id="timepicker-startbox" class="timepicker"></div>
                        <span class="wave">~</span>
                        <div id="timepicker-endbox" class="timepicker"></div>
                    </div>
                    <input type="hidden" id="startDate" name="startDate"/>
                    <input type="hidden" id="endDate" name="endDate"/>
                </div><!--dateWrap end-->
                <div class="wrapper" id="noiseWrap">
                    <h3 class="input_title">소음 
                    	<c:choose>
                        	<c:when test="${type=='unes' }">허용</c:when>
			        		<c:otherwise>발생</c:otherwise>
                        </c:choose>
                    정도</h3>
                    <label for="quiet"><input id="quiet" type="radio" name="noise" value="1"/>소음이 발생하지 않음</label>
                    <label for="chat"><input id="chat" type="radio" name="noise" value="2"/>일반 대화 수준</label>
                    <label for="streaming"><input id="streaming" type="radio" name="noise" value="3"/>카페 음악 스트리밍 볼륨 수준</label>
                    <label for="performance"><input id="performance" type="radio" name="noise" value="4"/>앰프를 사용하지 않는 악기 연주 수준</label>
                    <label for="amp"><input id="amp" type="radio" name="noise" value="5"/>앰프를 사용하는 악기 연주 수준</label>
                </div><!--noiseWrap end-->
                <div class="wrapper" id="costWrap">
                    <h3 class="input_title">희망 쉐어링 비용</h3>
                    <label for="hourly" class="left standard on">시간당(원/시간)
                        <input class="screen_out" id="hourly" type="radio" name="fareType" value="won" checked/>
                    </label>
                    <label for="commission" class="right standard">수수료로(수익의 %)
                        <input class="screen_out" id="commission" type="radio" name="fareType" value="percentage"/>
                    </label>
                    <div id="costBox">
                        <input name="fare" placeholder="금액을 입력해 주세요."/><span>원을</span>
                    </div>
                    <label for="give" class="left method on">주겠습니다.
                        <input class="screen_out" id="give" type="radio" name="fareDir" value="out" checked/>
                    </label>
                    <label for="take" class="right method">받겠습니다.
                        <input class="screen_out" id="take" type="radio" name="fareDir" value="in"/>   
                    </label>
                </div><!--costWrap end-->
                <div class="wrapper" id="scaleWrap">
                    <h3 class="input_title">카페 규모</h3>
                    <div class="slider scale"></div>
                    <span>0석</span>
                    <span class="range_last">250석</span>
                    <input id="scaleInput" class="range_input" name="chairs" value="0" readonly/>석
                </div><!--scaleWrap end-->
                <div class="wrapper" id="areaWrap">
                    <h3 class="input_title">쉐어 면적</h3>
                    <div class="slider area"></div>
                    <span>0평</span>
                    <span class="range_last">15평</span>
                    <input id="areaInput" class="range_input" name="area" value="0" readonly/>평
                </div><!--areaWrap end-->
                <div class="wrapper" id="openkakaoWrap">
                    <h3 class="input_title">오픈 카톡 방 주소</h3>
                    <span><i class="fas fa-question-circle"></i></span>
                    <div class="help" id="openkakaoHelp">카페 점주님과 직접 대화를 나눌 수 있는 오픈카톡방 주소를 작성해 주세요.</div>
                    <input name="kakao" placeholder="오픈 카톡 방 주소를 입력해 주세요."/>
                </div><!--openkakaoWrap end-->
                <div class="wrapper" id="imageWrap">
                    <h3 class="input_title">사진 추가</h3>
                    <button id="addImageBtn" type="button"></button>
                    <ul id="imageList"></ul>
                </div><!--imageWrap end-->
                <div class="wrapper" id="buttonWrap">
                    <button class="left" id="cancelBtn" type="button">취소</button>
                    <button class="right" id="registerBtn">등록</button>
                </div><!--buttonWrap end-->
            </fieldset>
        </form>
        <div id="popupBackground"></div>
        <div id="chooseMethodPopup">
            <button class="btn_close" type="button"><i class="fas fa-times"></i></button>
            <!-- <button class="btn_upload" id="haveImageBtn" type="button">기존 이미지에서 추가</button> -->
            <label class="btn_upload" for="addImage">내 컴퓨터에서 업로드</label>
            <input class="screen_out" id="addImage" type="file" multiple/>
        </div>
        <div id="chooseImagePopup">
            <div id="btnSelectBox">
                <button class="btn_close" type="button"><i class="fas fa-times"></i></button>
                <button class="btn_choose" type="button"><i class="fas fa-folder-plus"></i></button>
            </div>
            <ul id="imageIHaveList"></ul>
        </div>
    </div>
</div>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script type="text/template" id="haveImageTmpl">
<@ _.each(imageList, function(image) { @>
    <li class="item" data-no="<@= image.no @>" data-name="<@= image.name @>">
        <label class="label_check">
			<img src="/img/upload/<@= image.name @>"/>
            <i class="far fa-check-circle"></i>
            <input class="screen_out image_check" type="checkbox"/>
        </label>
    </li>
<@ }) @>
</script>
<script type="text/template" id="addedImageTmpl">
    <li class="added_image">
        <img src="/img/43/<@= image @>"/>
		<input type="hidden" name="image" value="<@= image @>"/>
		<input type="hidden" name="no" value="0"/>
    </li>
</script>
<script src="/js/jquery.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="/js/tui-code-snippet.js"></script>
<script src="/js/tui-date-picker.js"></script>
<script src="/js/tui-time-picker.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
	_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
	};
	
    $("input").focus(function () {
        $(this).attr("autocomplete","off");
    });//인풋 자동완성 막기

    function DaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                var addr = data.sido+" "+data.sigungu+" "+data.bname; // 최종 주소 변수
                // 주소 정보를 해당 필드에 넣는다.
                document.getElementById("region").value = addr;
            },
            theme: {
                searchBgColor: "#fa7268", //검색창 배경색
                queryTextColor: "#FFFFFF" //검색창 글자색
            }
        }).open();
    }//주소 입력 api : 동까지만 값을 받아와서 넣는다, 도로명 주소여도 상관없음

    var $talentSpan=$("#inputBox span");
    var $openkakaoSpan=$("#openkakaoWrap span");
    var $costInput=$("#costBox input");

    $talentSpan.mouseenter(function () {
        $("#addTalentHelp").show();
    });
    $talentSpan.mouseleave(function () {
        $("#addTalentHelp").hide();
    });//도움말 span에 마우스 오버했을시 도움말 div가 보이게 한다

    $openkakaoSpan.mouseenter(function () {
        $("#openkakaoHelp").show();
    });
    $openkakaoSpan.mouseleave(function () {
        $("#openkakaoHelp").hide();
    });//오픈 카카오 도움말도 위와 마찬가지

    $(".icon_talent input").change(function () {
        $(".icon_talent.on").removeClass("on");
        $(this).parent().addClass("on");
        var id=$(this).attr("id");
        if(id=="other"){
            $("#inputBox").css("display","inline-block");
        }
        else{
            $("#inputBox").hide();
        }
    });//재능 라디오 선택시 label의 css변경하고 기타 선택시 입력란 보이게 한다

    var today = new Date();
    var picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#startpicker-input',
            container: '#startpicker-container'
        },
        endpicker: {
            date: today,
            input: '#endpicker-input',
            container: '#endpicker-container'
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        language: 'ko'
    });//date-picker생성
    
    var tpSelectbox1 = new tui.TimePicker('#timepicker-startbox', {
        initialHour: 0,
        initialMinute: 0,
        inputType: 'selectbox',
        showMeridiem: false
    });
    var tpSelectbox2 = new tui.TimePicker('#timepicker-endbox', {
        initialHour: 23,
        initialMinute: 59,
        inputType: 'selectbox',
        showMeridiem: false
    });//time-picker생성, 백엔드에서 사용하고자 할때는 변수의 이름만 변경하면 됨

    $(".standard input").change(function () {
        var val=$(this).val();
        if(val=="won"){
            $("#costBox input").attr("placeholder","금액을 입력해 주세요.");
            $("#costBox span").text("원을");
        }else{
            $("#costBox input").attr("placeholder","수수료를 입력해 주세요.");
            $("#costBox span").text("%를");
        }
        $(".standard.on").removeClass("on");
        $(this).parent().addClass("on");
    });//금액 지불 기준 변경, 선택시 금액 입력란도 변경된다.
    
    $(".method input").change(function () {
        $(".method.on").removeClass("on");
        $(this).parent().addClass("on");
    });//금액 지불 방법 변경

    $( ".slider.scale" ).slider({
        min: 0,
        max: 250,
        slide: function(event,ui) {
            $("#scaleInput").val(ui.value);
        },
    });//가게 규모 슬라이더 생성
    
    $( ".slider.area").slider({
        min: 0,
        max: 15,
        slide: function(event,ui) {
            $("#areaInput").val(ui.value);
        },
    });//쉐어할 면적 슬라이더 생성

    var $popupBg=$("#popupBackground");
    var $chooseMethod=$("#chooseMethodPopup");
    var $chooseImage=$("#chooseImagePopup");
    $("#addImageBtn").click(function () {
        $popupBg.show();
        $chooseMethod.show();
    });//사진 추가 버튼 클릭시 사진 추가 방법 선택하는 팝업이 뜸
    
    $("#haveImageBtn").click(function () {
        $chooseMethod.hide();
        $chooseImage.show();
    });//기존 이미지에서 추가 버튼 클릭시 기존 이미지를 선택할 수 있는 팝업이 뜸, ajax로 사진 불러옴
    
    $("#chooseMethodPopup .btn_close").click(function () {
        $popupBg.hide();
        $chooseMethod.hide();
        $chooseImage.hide();
    });//사진 추가 방법 선택하는 팝업에서 닫기 버튼 클릭시 팝업 닫힘
    
    $("#chooseImagePopup .btn_close").click(function () {
        $chooseMethod.show();
        $chooseImage.hide();
    });//기존 이미지에서 추가 팝업에서 닫기 버튼 클릭시 사진 추가 방법 선택하는 팝업으로 돌아감
    
    $("#chooseImagePopup .btn_choose").click(function () {
    	$popupBg.hide();
        $chooseMethod.hide();
        $chooseImage.hide();
    });
    
    $popupBg.click(function () {
        $popupBg.hide();
        $chooseMethod.hide();
        $chooseImage.hide();
    });//배경팝업 클릭시 모든 팝업 닫힘

    var pageNo=1;
    var userNo=$("#userNo").val();
    var type=$("#type").val();
    var haveImageTmpl=_.template($("#haveImageTmpl").html());
    function loadImage() {
        $.ajax({
        	url:"/ajax/"+type+"/register/"+userNo+"/page/"+pageNo,
        	error: function() {
        		alert("서버 점검중!");
        	},
        	success: function(json) {
        		$("#imageIHaveList").append(haveImageTmpl({"imageList":json}));
        	}
        });
    }//기존 이미지에서 추가 팝업에 템플릿으로 이미지 추가하는 함수
    
    loadImage();
    
    $("#chooseImagePopup").scroll(function () {
        var sTop=$(this).scrollTop();
        var wTop =$(this).height();
        var dTop=$("#chooseImagePopup ul").height();

        if(dTop-30<=wTop+sTop){
			pageNo++;
        	loadImage();
        }
    });//기존 이미지에서 추가 팝업 무한 스크롤링
    
    var cnt=0;
    $("#imageIHaveList").on("click",".label_check",function () {
        $(this).on("click",".image_check",function () {
            if($(this).is(":checked")){
                $(this).parent().css("color","#fa7268");
                cnt++;
            }
            else{
                $(this).parent().css("color","#000");
                cnt--;
            }
            if(cnt>3){
            	$(this).prop("disabled","true");
            }
        });
    });//기존 이미지에서 추가 팝업에서 사진 선택시 체크 버튼 css변경
    
    var $image=$("#addImage");
    var profileReg = /^image/;
    var addedImageTmpl=_.template($("#addedImageTmpl").html());
    $image.change(function() {
    	var image=$image.get(0);
    	var file=image.files[0];

		if(file==null || file.size <= 0) {
			alert("제대로 된 파일을 선택해주세요.");
			return;
		}//if() end
		if(!profileReg.test(file.type)){
			alert("이미지 파일을 선택해주세요.");
			return;
		}
		
		var form = new FormData();
		
		form.append("type","N");
		form.append("uploadImg",file,file.name);
		
		$.ajax({
			url : "/ajax/upload",
			dataType : "json",
			type : "POST",
			processData:false,
			contentType:false,
			data:form,
			error:function(){
				alert("서버 점검중!");
            },
            success:function(json){
            	$("#imageList").append(addedImageTmpl({"image":json.src}));
            }
		});
		
		$popupBg.hide();
        $chooseMethod.hide();
        $chooseImage.hide();
 
		if($(".added_image").length==2){
			$("#addImageBtn").attr("disabled", true).addClass("on");
		}
    });
	
    function setDate(){
    	var startTime=tpSelectbox1.getHour()+":"+tpSelectbox1.getMinute()+":00.0";
        var endTime=tpSelectbox2.getHour()+":"+tpSelectbox2.getMinute()+":00.0";
        var startDate=$("#startpicker-input").val()+" "+startTime;
        var endDate=$("#endpicker-input").val()+" "+endTime;
        
        $("#startDate").val(startDate);
        $("#endDate").val(endDate);
    }
    
    var costReg = /^[0-9]*$/
	$("#insertForm").submit(function (e){
       	var costVal=$costInput.val();
       	if($("#title").val().length==0||$("#region").val().length==0||$("#costBox input").val().length==0||$("#openkakaoWrap input").val().length==0||$("input:radio").is(":checked")==false){
            alert("*필수 입력 항목입니다.");
            return false;
        }
        if($("input:radio[id='other']").is(":checked")&&$("#inputBox input").val().length==0){
            alert("*필수 입력 항목입니다.");
            return false;
        }
        if(!costReg.test(costVal)){
            alert("쉐어링 비용엔 숫자만 입력해 주세요");
            return false;
        }
        setDate();
    });//입력란 비어있는지 검사하고 금액란엔 숫자만 입력하게 유효성 검사
</script>
</body>
</html>