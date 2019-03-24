<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0">
	<c:choose>
        	<c:when test="${type=='unes' }">
        		<title>UNES</title>
        	</c:when>
        	<c:otherwise>
        		<title>INES</title>
        	</c:otherwise>
    </c:choose>
    <c:import url="/WEB-INF/template/link.jsp"></c:import>
    <link rel="stylesheet" href="/css/tui-date-picker.css"/>
    <link rel="stylesheet" href="/css/tui-time-picker.css"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/css/needList.css"/>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
<div id="content">
    <div class="aux">
        <div id="topWrap">
        	<input type="hidden" id="type" value="${type }"/>
	        <c:choose>
	        	<c:when test="${type=='unes' }">
	        		<h2>쉐어링 하는 카페 찾기</h2>
	        	</c:when>
	        	<c:otherwise>
	        		<h2>재능 있는 인재 찾기</h2>
	        	</c:otherwise>
	        </c:choose>
	        <c:choose>
		        <c:when test="${type=='unes'&&loginUser!=null && loginUser.license!=null }">
	            	<a id="registerBtn" href="/unes/register">등록하기</a>
	            </c:when>
	            <c:when test="${type=='ines'&&loginUser!=null && loginUser.license==null }">
	            	<a id="registerBtn" href="/ines/register">등록하기</a>
	            </c:when>
	        </c:choose>
        </div>
        <div id="filterWrap">
            <form>
                <fieldset>
                    <legend class="screen_out">필터</legend>
                    <div id="filterBox">
                        <div class="wrapper" id="regionWrap">
                            <h3 class="input_title">선호지역</h3>
                            <input id="region" name="region" onclick="DaumPostcode()" readonly/><!--
                    --><button id="searchRegionBtn" type="button" onclick="DaumPostcode()">검색</button>
                        </div><!--regionWrap end-->
                        <div class="wrapper" id="talentWrap">
                            <h3 class="input_title">재능</h3>
                            <label for="music" class="icon_talent"><input class="screen_out" id="music" type="checkbox" name="talent" value="음악"/><i class="fas fa-guitar"></i>음악</label>
                            <label for="art" class="icon_talent"><input class="screen_out" id="art" type="checkbox" name="talent" value="미술"/><i class="fas fa-palette"></i>미술</label>
                            <label for="magic" class="icon_talent"><input class="screen_out" id="magic" type="checkbox" name="talent" value="마술"/><i class="fas fa-hat-wizard"></i>마술</label>
                            <label for="exhibition" class="icon_talent"><input class="screen_out" id="exhibition" type="checkbox" name="talent" value="전시"/><i class="fas fa-vector-square"></i>전시</label>
                            <!-- <label for="other" class="icon_talent"><input class="screen_out" id="other" type="checkbox" name="talent" value="기타"/><i class="fas fa-plus"></i>기타</label> -->
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
                            <label for="hourly" class="left standard">시간당(원/시간)
                                <input class="screen_out fare_type" id="hourly" type="radio" name="standard" value="hourly"/>
                            </label>
                            <label for="commission" class="right standard">수수료로(수익의 %)
                                <input class="screen_out fare_type" id="commission" type="radio" name="standard" value="commission"/>
                            </label>
                            <div id="hourlyBox">
                                <div class="slider hourly"></div>
                                <span>0원</span>
                                <span class="range_last">100,000원</span>
                                <input id="costHourlyInput" class="range_input cost" value="0" readonly/>원을
                            </div>
                            <div id="commissionBox">
                                <div class="slider commission"></div>
                                <span>0%</span>
                                <span class="range_last">100%</span>
                                <input id="costCommissionInput" class="range_input cost" value="0" readonly/>%를
                            </div>
                            <label for="give" class="left method">주기를 원합니다.
                                <input class="screen_out fare_dir" id="give" type="radio" name="method" value="out"/>
                            </label>
                            <label for="take" class="right method">받기를 원합니다.
                                <input class="screen_out fare_dir" id="take" type="radio" value="give" name="method"/>
                            </label>
                        </div><!--costWrap end-->
                        <div class="wrapper" id="areaWrap">
                            <h3 class="input_title">쉐어
	                            <c:choose>
	                            	<c:when test="${type=='unes' }">가능</c:when>
						        	<c:otherwise>필요</c:otherwise>
	                            </c:choose>	                            
                            면적</h3>
                            <div class="slider area"></div>
                            <span>0평</span>
                            <span class="range_last">15평</span>
                            <input id="areaInput" class="range_input" value="0" readonly/>평
                        </div><!--areaWrap end-->
                    </div>
                </fieldset>
            </form>
            <div id="foldBox">
                <div>
                    <ul id="selectFilterList"></ul>
                </div>
                <label class="btn_fold" for="foldBtn"><i class="fas fa-angle-up"></i><input id="foldBtn" class="screen_out" type="checkbox"/></label>
            </div>
        </div>
        <div id="listWrap"></div>
    </div>
</div>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script type="text/template" id="cardTmpl">
<h2 class="screen_out">INES LIST</h2>
<ul id="listBox">
<@ _.each(needList,function(need) { @>	
	<li class="item_ines">
		<a class="card_ines" href="/${type}/detail/<@=need.no@>">
			<div class="card" style="background-image:url(/img/upload/<@= need.profile @>)">
				<div class="box_detail">
					<p class="location">
						<i class="fas fa-map-marked-alt"></i>
						<span><@= need.region @></span>
					</p>
					<p class="event_date">
				    	<i class="fas fa-calendar-alt"></i>
				    	<span>
				        	<@= moment(need.startDate).format("YYYY년 MM월 DD일") @> ~
							<@= moment(need.endDate).format("YYYY년 MM월 DD일") @>
				        </span>
					</p>
					<p class="event_time">
						<i class="far fa-clock"></i>
					    <span>
					    	<@= moment(need.startDate).format("HH시 mm분") @> ~
							<@= moment(need.endDate).format("HH시 mm분") @>
						</span>
				   	</p>
				    <p class="noise">
						<i class="fas fa-microphone-alt"></i>
						<span>
							<@ if(need.noise==1) { @> 소음이 발생하지 않음 <@ } @>
							<@ if(need.noise==2) { @> 일반 대화 수준 <@ } @>
							<@ if(need.noise==3) { @> 카페 음악 스트리밍 수준 <@ } @>
							<@ if(need.noise==4) { @> 앰프를 사용하지 않는 연주 수준 <@ } @>
							<@ if(need.noise==5) { @> 앰프를 사용하는 연주 수준 <@ } @>
						</span>
					</p>
				</div>
				<div class="box_info">
					<p class="title"><@= need.title @></p>
					<img class="profile" src="/img/upload/<@= need.profile @>"/>
				    <span class="nickname"><@= need.nickname @></span>
					<span class="status"><@= need.status @></span>
				</div>
			</div>
		</a>
	</li>
<@ }) @>
</ul>
<div id="paginateWrap"><@= paginate @></div>
</script>
<script type="text/template" id="selectedFilterTmpl">
<li class="item_filter <@=type@>" data-category="<@=category@>">
	<span class="selected_filter"><@=value@></span>
	<button class="deleteBtn" type="button"><i class="fas fa-times"></i></button>
</li>
</script>
<script src="/js/jquery.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="/js/tui-code-snippet.js"></script>
<script src="/js/tui-date-picker.js"></script>
<script src="/js/tui-time-picker.js"></script>
<script src="/js/moment-with-locales.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
	_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
	};
	
	var type=$("#type").val();
	
	var data = {
			"region":"",
			"talentNo":"",
			"noise":0,
			"fareType":"",
			"fare":0,
			"fareDir":"",
			"area":0
			};	
	
    var cardTmpl=_.template($("#cardTmpl").html());
    function getNeedList(pageNo){
    	data.talentNo="";
    	$(".icon_talent input:checked").each(function (){
    		data.talentNo+="\'"+$(this).val()+"\',";
    	});
    	data.talentNo=data.talentNo.substring(0,(data.talentNo.length)-1);
    	
    	$.ajax({
    		url:"/ajax/"+type+"/list/page/"+pageNo,
    		type:"get",
    		data:data,
    		dataType:"json",
    		error:function(){
    			alert("서버 점검중!");
    		},
    		success:function(data){
    			$("#listWrap").html(cardTmpl(data));
    		}
    	});
    }    
    getNeedList(1);
    
    $("#listWrap").on("click",".paginate a",function(evt){
		var href = $(this).attr("href");
		pageNo = href.substring(href.lastIndexOf("/")+1, href.length);
		evt.preventDefault();
		getNeedList(pageNo);
	});

    var selectedFilterTmpl=_.template($("#selectedFilterTmpl").html());

    function DaumPostcode() {
        new daum.Postcode({
            oncomplete: function(address) {
                var addr = address.sido+" "+address.sigungu+" "+address.bname; // 최종 주소 변수
                // 주소 정보를 해당 필드에 넣는다.
                document.getElementById("region").value = addr;
                $(".item_filter.region").remove();
                $("#selectFilterList").append(selectedFilterTmpl({value:addr,type:"region",category:"region"}));
                data.region=addr;
                getNeedList(1);
            },
            theme: {
                searchBgColor: "#fa7268", //검색창 배경색
                queryTextColor: "#FFFFFF" //검색창 글자색
            }
        }).open();
    }//주소 입력 api : 동까지만 값을 받아와서 넣는다, 도로명 주소여도 상관없음, 필터 밑부분에 텍스트로 추가

    $(".icon_talent input").change(function () {
        var id=$(this).attr("id");
        if($(this).is(":checked")){
            $(this).parent().addClass("on");
            var talent=$(this).val();
            $("#selectFilterList").append(selectedFilterTmpl({value:talent,type:id,category:"talent"}));
            getNeedList(1);
        }
        else{
            $(this).parent().removeClass("on");
            $(".item_filter ").each(function () {
               if($(this).hasClass(id)) {
                   $(this).remove();
               }
            });
            getNeedList(1);
        }        
    });//재능 라디오 선택시 label의 css변경 및 필터 밑부분에 텍스트로 추가

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
    
    function setDate(){
    	var startTime=tpSelectbox1.getHour()+":"+tpSelectbox1.getMinute()+":00.0";
        var endTime=tpSelectbox2.getHour()+":"+tpSelectbox2.getMinute()+":00.0";
        data.endDate=$("#endpicker-input").val()+" "+endTime;
        data.startDate=$("#startpicker-input").val()+" "+startTime;
    }
    
    function getDate(){
        var startDate=moment(picker.getStartDate()).format('YYYY-MM-DD');
        var endDate=moment(picker.getEndDate()).format('YYYY-MM-DD');
        var dateRange=startDate+"~"+endDate;
        $(".item_filter.date").remove();
        $("#selectFilterList").append(selectedFilterTmpl({value:dateRange,type:"date",category:"date"}));
    }//date-picker선택시 필터 밑부분에 텍스트로 추가하는 함수
    
    picker.on('change:end', function() {
        getDate();
        setDate();
        getNeedList(1);
    });//시작일 선택시 위 함수 호출
    picker.on('change:start', function() {
        getDate();
        setDate();
        getNeedList(1);
    });//끝일 선택시 위 함수 호출
    var tpSelectbox1 = new tui.TimePicker('#timepicker-startbox', {
        initialHour: 0,
        initialMinute: 0,
        inputType: 'selectbox',
        showMeridiem: false
    });//time-picker1 생성
    var tpSelectbox2 = new tui.TimePicker('#timepicker-endbox', {
        initialHour: 23,
        initialMinute: 59,
        inputType: 'selectbox',
        showMeridiem: false
    });//time-picker2 생성
    
    function getTime(){
        var startTime=tpSelectbox1.getHour()+":"+tpSelectbox1.getMinute();
        var endTime=tpSelectbox2.getHour()+":"+tpSelectbox2.getMinute();
        var timeRange=startTime+"~"+endTime;
        $(".item_filter.time").remove();
        $("#selectFilterList").append(selectedFilterTmpl({value:timeRange,type:"time",category:"time"}));
    }//time-picker선택시 필터 밑부분에 텍스트로 추가하는 함수
    
    tpSelectbox1.on('change',function () {
        getTime();
        setDate();
        getNeedList(1);
    });//시작 시간 선택시 위 함수 호출
    tpSelectbox2.on('change',function () {
        getTime();
        setDate();
        getNeedList(1);
    });//끝 시간 선택시 위 함수 호출
   
    $("#noiseWrap input").change(function () {
        $(".item_filter.noise").remove();
        $("#selectFilterList").append(selectedFilterTmpl({value:$(this).parent().text(),type:"noise",category:"noise"}));
        data.noise=$(this).val()
        getNeedList(1);
    });//소음 정도 선택시 필터 밑부분에 텍스트로 추가

    function getCost(){
        var standard=$(".standard.on").text();
        if($("#hourly").is(":checked")) {
            var value = $("#costHourlyInput").val()+"원";
            data.fareType="won";
            data.fare=$("#costHourlyInput").val();
        }else if($("#commission").is(":checked")){
            var value = $("#costCommissionInput").val()+"%";
            data.fareType="percentage";
            data.fare=$("#costCommissionInput").val();
        }
        var method=$(".method.on").text();

        if($("#give").is(":checked")){
        	data.fareDir="out";
            console.log(method);
        }else if($("#take").is(":checked")){
        	data.fareDir="in";
        }
        
        var cost=standard+" "+value+" "+method;
        $(".item_filter.cost").remove();
        $("#selectFilterList").append(selectedFilterTmpl({value:cost,type:"cost",category:"cost"}));
        getNeedList(1);

    }//금액 필터 밑부분에 텍스트로 추가하는 함수
    
    $(".standard input").change(function () {
        var val=$(this).val();
        if(val=="hourly"){
            $("#hourlyBox").show();
            $("#commissionBox").hide();
        }else{
            $("#hourlyBox").hide();
            $("#commissionBox").show();
        }
        $(".standard.on").removeClass("on");
        $(this).parent().addClass("on");
        getCost();
    });//금액 기준 선택시 css변경하고 위 함수 호출
    $(".method input").change(function () {
        $(".method.on").removeClass("on");
        $(this).parent().addClass("on");
        getCost();
    });//금액 지불 방법 선택시 css변경하고 위 함수 호출
    
    $( ".slider.hourly" ).slider({
        min: 0,
        max: 100000,
        step: 1000,
        slide: function(event,ui) {
            $("#costHourlyInput").val(ui.value);
            getCost();
        },
    });//시간별 금액 슬라이더 생성 및 필터 밑부분에 텍스트로 추가
    $( ".slider.commission" ).slider({
        min: 0,
        max: 100,
        step: 1,
        slide: function(event,ui) {
            $("#costCommissionInput").val(ui.value);
            getCost();
        },
    });//커미션 금액 슬라이더 생성 및 필터 밑부분에 텍스트로 추가

    $( ".slider.area").slider({
        min: 0,
        max: 15,
        slide: function(event,ui) {
            $("#areaInput").val(ui.value);
            $(".item_filter.area").remove();
            $("#selectFilterList").append(selectedFilterTmpl({value:ui.value+"평",type:"area",category:"area"}));
            data.area=$("#areaInput").val();
            getNeedList(1);
        },
    });//쉐어링 공간 슬라이더 생성 및 필터 밑부분에 텍스트로 추가

    $("#selectFilterList").on("click",".deleteBtn",function () {
        division=$(this).parent().attr("class");
        var category = $(this).parent().data("category");
        if(category=="talent") {
            var selector = "#"+division.substring(division.indexOf(" ")+1,division.length);
            $(selector).prop("checked", false).parent().removeClass("on");
            data.talentNo="";
        }else if(division=="item_filter region"){
            $("#region").val("");
            data.region="";
        }else if(division=="item_filter noise"){
            $("#noiseWrap input").prop('checked', false);
            data.noise=0;
        }else if(division=="item_filter cost"){
        	$(".fare_type").prop("checked", false).parent().removeClass("on");
        	$(".fare_dir").prop("checked", false).parent().removeClass("on");
        	data.fareType="";
        	data.fare=0;
        	data.fareDir="";
        }else if(division=="item_filter date"){
        	delete data.startDate;
			delete data.endDate;
        }else if(division=="item_filter area"){
        	data.area=0;
        }
        $(this).parent().remove();
        getNeedList(1);
    });//각 필터 밑부분 텍스트에 'x'버튼 클릭시 텍스트 제거하고 선택된 값 초기화
    
    $("#foldBtn").change(function () {
        if($(this).is(":checked")){
            $("#filterBox").hide();
            $(".btn_fold").children("i").attr("class","fas fa-angle-down");
        }else{
            $("#filterBox").show();
            $(".btn_fold").children("i").attr("class","fas fa-angle-up");
        }
    });//접기 버튼을 누르면 필터가 접힌다
    
    $("#listWrap").on("mouseenter",".card",function () {
        $(this).find(".box_detail").css("visibility","visible");
    });//ines카드에 마우스 오버시 상세정보 보여주기
    $("#listWrap").on("mouseleave",".card",function () {
        $(this).find(".box_detail").css("visibility","hidden");
    });//ines카드에서 마우스 나갈시 상세정보 숨기기
</script>
</body>
</html>