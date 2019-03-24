<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS-unes_detail</title>
	<c:import url="/WEB-INF/template/link.jsp" />
	<link rel="stylesheet" href="/css/tui-date-picker.css"/>
    <link rel="stylesheet" href="/css/tui-time-picker.css"/> 
    <!-- 팝업용 -->
    <link rel="stylesheet" href="/css/fullcalendar.css">
    <link href='/css/fullcalendar.min.css' rel='stylesheet' />
    <link href='/css/fullcalendar.print.min.css' rel='stylesheet' media='print' />
    <link rel="stylesheet" href="/css/popupMatching.css">
    <link rel="stylesheet" href="/css/unes_detail.css">   
    <link rel="stylesheet" href="/css/paginate.css">   
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp" />
    <h2 class="screen_out">히어로 이미지</h2>
    <div id="heroWrap">
       <img src="/img/upload/cafe4.jpg" width="100%" height="450"/>
    </div>
    <div id="contents">
        <div class="aux">
            <div id="titleBox">
                <h2 id="topTitle">${unesInfo.title }</h2>
                <div id="btnBox">
                <c:if test="${loginUser != null }">
                   <c:choose>
                   		<c:when test="${loginUser.no == unesInfo.userNo }">
                   			
                   				<c:if test="${matchedCount>0}">
                        		<button id="deleteBtn" class="detail_btn">삭제</button>
                        		</c:if>
                        		<button id="updateBtn" class="detail_btn">수정</button> 		
                     		
                   		</c:when>
                   		<c:otherwise>
                        		<button id="insertFromBtn" class="detail_btn">신청하기</button>
                        		<!-- <button id="insertCanselBtn" class="detail_btn">신고하기</button> -->
                   		</c:otherwise>
                   </c:choose>
                </c:if>
                </div> <!-- #btnBox end -->	       
            </div><!-- #titleBox end -->

            <h3 class="screen_out">카페정보</h3>
            <div id="cafeWrap">
                <div id="cafeDetailBox">
                    <div id="cafeTitleBox">
                        <a href=""><img id="cafeProfile" src="/img/upload/${unesInfo.profile}" width="80" height="80"/></a>
                        <span id="cafeName">${unesInfo.cafeName }</span>
                        <!-- <i class="far fa-bookmark"></i> -->
                    </div>
                    <ul id="cafeDetailList">
                        <li><i class="fas fa-phone"></i>${unesInfo.phone }</li>
                        <li><i class="far fa-clock"></i>${unesInfo.open } ~ ${unesInfo.close } | ${unesInfo.restDate }</li>
                        <li><i class="fas fa-map-marker-alt"></i>${unesInfo.addressNew }</li>
                        <li><i class="fas fa-coffee"></i> 아메리카노 가격 : ${unesInfo.americano } 원</li>
                        <li id="cafeConditionsBox">
                            <i class="fas fa-home conditions_`view"></i>
                            <c:forEach items="${cafeConditions }" var="condition">
                            	<div class="cafe_conditions">${condition.name }</div>
                            </c:forEach>
                        </li>
                        <li id="cafeText"><i class="far fa-file-alt"></i>${unesInfo.intro }</li>
                    </ul>
                </div><!-- #cafeTitleBox end -->
                <div id="mapBox">
                	<input type="hidden" id="cafeLatitude" value="${unesInfo.latitude }"/>
                	<input type="hidden" id="cafeLongitude" value="${unesInfo.longitude }"/>
                    <div id="map" style="width:300px; height:300px;"></div>
                    <p id="mapText"><i class="fas fa-caret-up"></i> 찾아오는 길</p>
                </div>


            </div><!-- #cafeWrap end -->

            <h3 class="screen_out">UNES정보</h3>
            <div id="unesWrap">
                <h4 id="unesTitle">UNES 조건</h4>
                <div id="unesTalent">
                    <c:choose>
                        	<c:when test="${unesInfo.talentName }=='음악'">
                        		<i class="fas fa-guitar"></i> 음악
                        	</c:when>
                        	<c:when test="${unesInfo.talentName }=='미술'">
                        		<i class="fas fa-palette"></i> 미술
                        	</c:when>
                        	<c:when test="${unesInfo.talentName }=='마술'">
                        		<i class="fas fa-hat-wizard"></i> 마술
                        	</c:when>
                        	<c:otherwise>
                        		<i class="fas fa-vector-square"></i> 전시
                        	</c:otherwise>
                        </c:choose>
                </div>
                <div id="unesConditionBox">
                    <ul class="unes_condition_List">
                     <li><i class="far fa-calendar-alt"></i>
                        	<fmt:formatDate value="${unesInfo.startDate }" pattern="yyyy.MM.dd"/> ~
                        	<fmt:formatDate value="${unesInfo.endDate }" pattern="yyyy.MM.dd"/>
                        </li>
                        <li><i class="fas fa-headphones-alt"></i>
                        	<c:choose>
                        	<c:when test="${unesInfo.noise==1}">
                        		소음발생하지 않음
                        	</c:when>
                        	<c:when test="${unesInfo.noise==2}">
                        		일반대화 수준
                        	</c:when>
                        	<c:when test="${unesInfo.noise==3}">
                        		카페 음악 스프리밍 볼륨 수준
                        	</c:when>
                        	<c:when test="${unesInfo.noise==4}">
                        		앰프 사용하지 않는 악기 연주 수준
                        	</c:when>
                        	<c:otherwise>
                        		앰프를 사용하는 악기 연주 수준
                        	</c:otherwise>
                        	</c:choose>
                        	</li>
                        <li><i class="fas fa-ruler-combined"></i>${unesInfo.area } 평</li>
                    </ul>
                    <ul id="unesConditionList" class="unes_condition_List">
                        <li><i class="far fa-clock"></i>
                        	<fmt:formatDate value="${unesInfo.startDate }" pattern="HH:mm"/> ~
                        	<fmt:formatDate value="${unesInfo.endDate }" pattern="HH:mm"/>
                        </li>
                        <li><i class="fas fa-chair"></i>${unesInfo.chairs }석</li>
                        <li>
                        	<i class="far fa-credit-card"></i>
                        	<c:choose>
                        		<c:when test="${unesInfo.fareType }">
                        			<span class="unes deal">시간 당 ${unesInfo.fare }원을 ${unesInfo.getStringdeal() }</span>
                        		</c:when>
                        		<c:otherwise>
                        			<span class="unes deal">수익의 ${unesInfo.fare }%를 ${unesInfo.getStringdeal() }</span>
                        		</c:otherwise>
                        	</c:choose>
                        </li>
                        <input id="detailNo" type="hidden" value="${unesInfo.no }"/>
                        <c:forEach items="${artists }" var="artist">
	                    	<c:if test="${artist.userNo == loginUser.no || loginUser.no == unesInfo.userNo }">
		                        <li><i class="fas fa-comments"></i><a class="kakao_talk" href ="${unesInfo.kakao }">${unesInfo.kakao }</a></li>                    	
	                    	</c:if>                    	
                        </c:forEach>
                    </ul>
                </div><!-- #unesConditionBox end -->
            </div><!-- #unesWrap end -->

            <h3 class="screen_out">공유공간 사진 리스트</h3>
            <div id="shareSpaceWrap">
                <h4 id="shareSpaceTitle">공유공간</h4>
                <ul id="shareSpaceImgBix">                
                	<c:forEach items="${unesImages }" var="unesImage">
                    	<li><img src="/img/${unesImage.name }" width="250" height="150"/></li>                	
                	</c:forEach>
                </ul>
            </div><!-- #shareSpaceWrap end -->

            <h3 class="screen_out">아티스트 리스트</h3>
            <div id="artistsWrap">
                <div id="artistsTitle">공연 아티스트 목록</div>
                <div id="artistsMatchedBox">
                    <div id="artistsListBox">
                        <ul id="artistsList">
                        	<script type="text/template" id="artistTmp">
							<@ _.each(artists,function(artist){@>
                        		<li class="artists_box">
                                	<a href="/user/<@=artist.userNo @>"><img class="artists_profile"  src="/img/profile/<@=artist.profile @>" width="120" height="120"/></a>
                                	<span class="artists_text"><@=artist.nickname @></span>
                                	<span class="artists_text">마술</span>
                                		<c:choose>
                                			<c:when test="${artist.startEvent == artist.endEvent }">
                                				<span class="artists_text event_date"><@=moment(artist.startEvent).format("YYYY년 MM월 DD일") @></span>
                                			</c:when>
                                			<c:otherwise>
                                				<span class="artists_text event_date"><@=artist.startEvent @> ~ <@=artist.endEven @></span>
                                			</c:otherwise>
                                		</c:choose>
                                	<span class="artists_text event_time">
                                			<@=moment(artist.startEvent).format("YYYY-MM-DD hh mm") @> ~ <@=moment(artist.startEvent).format("YYYY-MM-DD hh mm") @>
                                	</span>
                            	</li>
							<@ })@>
                    		</script>
                        </ul>
                    </div>
                    <div id="leftBtn" class="artists_box_btn"><i class="fas fa-chevron-left left_btn"></i></div>
                    <div id="rightBtn" class="artists_box_btn"><i class="fas fa-chevron-right right_btn"></i></div>
                </div>
                <input type="hidden" id="userTureType1" value="${loginUser.no }"/>
				<input type="hidden" id="userTureType2" value="${unesInfo.userNo }"/>
				<c:if test="${loginUser.no == unesInfo.userNo }">
                <div id="artistsMatchingBox">
                    <ul id="artistsMatchingList">
                    <script type="text/template" id="artistMatchingTmp">
					<@ _.each(artistList,function(artist){ @>
						<li class="artists_matching_box">
                            <div class="artists_profileimg_box">
                                <a href=""><img class="artists_profileimg" src="/img/profile/<@=artist.profile @>" width="120" height="120"/></a>
                            </div>
                            <div class="artists_detail_box">
                                <div class="artists_detail_date_box">
                                    <span class="artists_detail_nickname" title="<@=artist.nickname @>"><@=artist.nickname @></span>
                                    <span class="artists_detail_ragdate"><@=moment(artist.ragdate).format("YYYY년 MM월 DD일") @></span>
                                    <div class="artists_detail_time">
                                        <span class="artists_detail_start_time"><@=artist.startEvent @></span> ~ <span class="artists_detail_end_time"><@=artist.startEvent @></span>
                                    </div>
                                </div>
                                <p class="artists_detail_text test"><@=artist.title @></p>
                            </div>
                            <div class="artists_btn_box">
                                <button class="artists_accept artists_btn" value="<@=artist.no @>">수락</button>
                                <button class="artists_cancel artists_btn" value="<@=artist.no @>">거절</button>
                            </div>
                        </li
						<@ })@>
                    	</script>
                    </ul>
                    <div id="paginateWrap"></div>
                </div><!-- #artistsMatchingBox end -->
                </c:if>
                
            </div><!-- #artistsWrap end -->
        </div><!--aux end-->
    </div><!--contents end-->
    
<c:import url="/WEB-INF/template/footer.jsp" />
    
    <!-- 신청하기 팝업 -->
    <div id="popupMatchingWrap">
        <div id="popupMatching">
            <h3>신청하기</h3>
            <h4>신청된 일정</h4>
            <div id="calendar"></div>
            <h4>신청 날짜</h4>
            <form class="input_time" action="/unes/detail/${unesInfo.no }/popup" method="POST">
                <input type="hidden" name="userNo"  value="${loginUser.no } "/>
                <input type="hidden" name="needNo"  value="${unesInfo.no } "/>
                <fieldset style="width: 500px; height: auto;">
                    <div id="popDateBox">
                       <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
                            <input id="startpicker-input" type="text" aria-label="Date" autocomplete="off">
                            <span class="tui-ico-date"></span>
                            <div id="startpicker-container" style="margin-left: -1px;"></div>
                        </div>
                        <span class="wave">~</span>
                        <div class="tui-datepicker-input tui-datetime-input tui-has-focus" id="datepicker-endbox">
                            <input id="endpicker-input" type="text" aria-label="Date" autocomplete="off">
                            <span class="tui-ico-date"></span>
                            <div id="endpicker-container" style="margin-left: -1px;"></div>
                        </div>
                    </div>
                    <div id="timeBox">
                        <div id="timepicker-startbox" class="timepicker"></div>
                        <span class="wave2">~</span>
                        <div id="timepicker-endbox" class="timepicker"></div>
                    </div>
                    <input type="hidden" id="startDate" name="startEvent"/>
                    <input type="hidden" id="endDate" name="endEvent"/>
                    <textarea id="matchingTextarea" rows="5" cols="60" name="intro" style="resize: none" placeholder="상세 내용을 적어주세요."></textarea>
                    <div class="input_time_btn">
                        <button id="cancelBtn" type="button">취소</button>
                        <button type="submit">완료</button>
                    </div>
                </fieldset>
            </form><!-- form end -->
        </div><!-- #popupMatching end -->
    </div><!-- #popupMatchingWrap end -->
    
    <!-- 켈린더 팝업 -->
    <div id="popupCalendarDetailBox" style="display: none">
        <p id="popupCalendarDetailCloseBtn"><i class="fas fa-times"></i></p>
        <a href="" id="popupCalendarProfile"><img src="/img/unes_detail/메라1.gif" width="120" height="120"/></a>
        <p class="popup_calendar_date popup_calendar_nickname">XXX 아티스트</p>
        <p class="popup_calendar_date popup_calendar_talent">test</p>
        <p class="popup_calendar_date popup_calendar_day">2018년 12월 12일</p>
        <div  class="popup_calendar_date">
            <span class="popup_calendar_start_time">AM 10:30</span> ~ <span class="popup_calendar_end_time">PM 12:30</span>
        </div>
    </div>
    
    <div id="popup"></div>

    <!-- 팝업용 -->
<script src="/js/jquery.js"></script>
<script src="/js/header.js"></script>
<script src="/js/gcal.min.js"></script>
<script src="/js/moment.min.js"></script>
<script src="/js/jquery.min.js"></script>
<script src="/js/fullcalendar.min.js"></script>
    <!-- 지도용 -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4aa167a1572a6f69469c5b43f7f92bd5"></script>
<script src="/js/underscore-min.js"></script>
<script src="/js/tui-code-snippet.js"></script>
<script src="/js/tui-date-picker.js"></script>
<script src="/js/tui-time-picker.js"></script>
<script>
		 _.templateSettings = {
			interpolate: /\<\@\=(.+?)\@\>/gim,
			evaluate: /\<\@([\s\S]+?)\@\>/gim,
			escape: /\<\@\-(.+?)\@\>/gim
			};
		
		var artistsTmp = _.template($("#artistTmp").html());
		
		var no = $("#detailNo").val();
		console.log("페이지 번호 : " + no);
		var pageNo = 1;
		
		function artistsList() {
			
			$("#artistsList").children().remove();
			$.ajax({
		        url:"/ajax/unes/detail/"+no,
		        type:"get",
		        dataType:"json",
		        error:function (request,status,error) {
		            alert(request+status+error);
		        },success:function (json) {
		        	//console.log(json);
		        	$("#artistsList").append(artistsTmp({"artists":json.list}));
		        }
			});
		}//artistsList() end
		artistsList();
		
		
		var t1 = $('#userTureType1').val();
		var t2 = $('#userTureType2').val();

		if(t1 == t2){
		//requests 템플릿
		var artistMatchingTmp = _.template($("#artistMatchingTmp").html());
	   
	    
	    function initCard() {
	    	$("#artistsMatchingList").children().remove();
			$.ajax({
		        url:"/ajax/unes/detail/"+no+"/page/"+pageNo,
		        type:"get",
		        dataType:"json",
		        error:function (request,status,error) {
		            alert(request+status+error);
		        },success:function (json) {
		        	//console.log(json);
		        	$("#artistsMatchingList").append(artistMatchingTmp({"artistList":json.list}));
		        	$("#paginateWrap").html(json.paginate);
		        }
	    	});
	    }//initCard() end

		
	    initCard();
		} //if end
	    
	    $('#paginateWrap').on('click','.paginate a',function(evt){
	    	evt.preventDefault();
	    	pageNo = $(this).text();
	    	initCard();
	    })
		

		var latitude = $("#cafeLatitude").val(), longitude = $("#cafeLongitude").val();
		
        //지도
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new daum.maps.LatLng(latitude, longitude), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        var markerPosition  = new daum.maps.LatLng(latitude, longitude);

        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        //지도 끝

    //버튼 클릭시
    var px =0;

    $(".left_btn").parent().click(function () {

        px += 800;

        var maxWidth = $(".artists_box").length;

        console.log("width의 최대값 : "+maxWidth);

        maxWidth = parseInt(maxWidth/4);

        console.log("4개씩 묶음 몇개? : "+maxWidth);

        if(px > 0) {
            px = -800*maxWidth;
        }// if end

        console.log(px);

        $(this).parent().find('#artistsListBox').find('#artistsList').css("left", px);
    });

    $(".right_btn").parent().click(function () {

        px -= 800;

        var maxWidth = $(".artists_box").length;

        console.log("li의 최대값 : "+maxWidth);

        maxWidth = parseInt(maxWidth/4);

        console.log("4개씩 묶음 몇개? : "+maxWidth);

        if(px < -800*maxWidth) {
            px = 0;
        }//if end

        console.log(px);

        $(this).parent().find('#artistsListBox').find('#artistsList').css("left", px);
    });
    
    //신청하기 클릭시
        $('#insertFromBtn').click(function () {
            //alert("test");
            console.log("신청하기 클릭");
            $('#popupMatchingWrap').css("visibility","visible");
        });
    
        $('#cancelBtn').click(function () {
        	$('#popupMatchingWrap').css("visibility","hidden");
        });
        
		//수락 업데이트
        function matchingUpdate() {

			$.ajax({
		        url:"/ajax/unes/detail/"+no+"/update/"+clickNum,
		        type:"post",
		        dataType:"json",
		        error:function (request,status,error) {
		            alert(request+status+error);
		        },success:function (json) {
		        		console.log(json);
		        		initCard();
		        		artistsList();
		        }
		    });	
		};//matchingUpdate() end
		
		//거절 업데이트
        function unMatchingUpdate() {

			$.ajax({
		        url:"/ajax/unes/detail/"+no+"/update/"+clickNum+"/cancel",
		        type:"post",
		        dataType:"json",
		        error:function (request,status,error) {
		            alert(request+status+error);
		        },success:function (json) {
		        		console.log(json);
		        		initCard();
		        		artistsList();
		        }
		    });	
		};//unMatchingUpdate() end
        
		var clickNum= 0;
        $('#artistsMatchingList').on('click','.artists_accept',function(evt){
        	evt.preventDefault();
        	
        	clickNum = $(this).val();
        	console.log("클릭한 영역의 숫자 : "+clickNum);
        	if(clickNum>0){
        		matchingUpdate();
        	}else{
        		alert("매칭할 수 없습니다. 관리자에게 문의해주세요.");
        	}
        	clickNum=0;
        });
        
         $('#artistsMatchingList').on('click','.artists_cancel',function(evt){
        	evt.preventDefault();
        	
        	clickNum = $(this).val();
        	console.log("클릭한 영역의 숫자 : "+clickNum);
        	if(clickNum>0){
        		unMatchingUpdate();
        	}else{
        		alert("거절할 수 없습니다. 관리자에게 문의해주세요.");
        	}
        	clickNum = 0;
        });


         
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
         
         function setDate(){
          	var startTime=tpSelectbox1.getHour()+":"+tpSelectbox1.getMinute()+":00.0";
              var endTime=tpSelectbox2.getHour()+":"+tpSelectbox2.getMinute()+":00.0";
              var startDate=$("#startpicker-input").val()+" "+startTime;
              var endDate=$("#endpicker-input").val()+" "+endTime;
              
              $("#startDate").val(startDate);
              $("#endDate").val(endDate);
              
              console.log($("#startDate").val());
              console.log($("#endDate").val());
          }
 		$(".input_time").submit(function() {
 			setDate();
 			initCard();
 			artistsList();
 		});
         
 		var now = moment();
 		
 		$(document).ready(function() {
    	    $('#calendar').fullCalendar({
    	        defaultDate: now.format("YYYY-MM-DD"),//기준날짜
    	        navLinks: false, // can click day/week names to navigate views 클릭했을경우 일정추가 란
    	        selectable: false, //문서 클릭 여부
    	        selectHelper: false,//사용자가 드래그하는 동안 "자리표시 자"이벤트를 그리는 지 여부
    	        editable: false,//글 편집 여부
    	        eventLimit: true, // 너무 많은 이벤트가있을 때 "more"링크로 영업 시간 표시
    	        handleWindowResize: true,//브라우저 창의 크기가 조정될 때 달력의 크기를 자동으로 조정할지 여부
    	        aspectRatio: 0.5,//달력의 폭과 높이의 종횡비를 설정
    	        showNonCurrentDates: false,//월별보기에서 이전 또는 다음 달의 날짜를 전혀 렌더링해야하는지 여부
    	        height: "auto",
    	        contentHeight: 300,
    	        events: {
                    url:"/ajax/unes/detail/"+no+"/calender",
                    dataType:"json",
                    error:function () {
                        alert("삐뽀");
                    }
                },
    	        eventClick: function(event) {

    	            $("#popupCalendarProfile>img").attr("src","img/profile/"+event.profile);
    	            $(".popup_calendar_nickname").text(event.nickname);
    	            $(".popup_calendar_talent").text(event.talent);
    	            $(".popup_calendar_day").html(moment(event.start).add(1, 'days').format('YYYY년 MM월 DD일'));
    	            $(".popup_calendar_strart_time").html(moment(event.start).format('A h:mm'));
    	            $(".popup_calendar_end_time").html(moment(event.end).format('A h:mm'));
    	            $('#popupCalendarDetailBox').show();
    	            $('#popup').show();
    	        }
    	    });


    	});

    	$('#popupCalendarDetailCloseBtn').click(function () {
    	    $('#popupCalendarDetailBox').css("display","none");
    	    $('#popup').css("display","none");
    	});
</script>


</body>
</html>