<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
    <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS - ${owner.nickname }님의 페이지</title>
    <c:import url="/WEB-INF/template/link.jsp"></c:import>
    <link rel="stylesheet" href="/css/user_header.css" />
    <link rel="stylesheet" href="/css/userpage.css" />
    <link rel="stylesheet" href="/css/fullcalendar.css">
    <link href='/css/fullcalendar.min.css' rel='stylesheet' />
    <link href='/css/fullcalendar.print.min.css' rel='stylesheet' media='print' />
    <style>
        #hiddenProfile {
        	background-image: url("/img/upload/${owner.profile}");
        }
    </style>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
            <div id="masterInfo">
                <h3 class="screen_out">${userType} 소개</h3>
                <dl>
                <c:if test="${userType == '카페'}">
                    <dt class="screen_out">카페 이름</dt>
                    <dd class="cafe_name"><strong>${user.cafeName }</strong></dd>
                </c:if>
                <c:if test="${userType != '카페'}">
                    <dt class="screen_out">닉네임</dt>
                    <dd class="cafe_name"><strong>${user.nickname }</strong></dd>
                </c:if>
                    <dt class="screen_out">북마크</dt>
                        <dd class="bookmark_form">
                            <form id="followForm" action="" method="">
                                <label for="bookmark" class="btn" title="북마크 하기">
                                    <i class="far fa-bookmark"></i>
                                    <span class="screen_out">북마크</span> <span class="screen_out">하기</span>
                                </label>
                                <input class="screen_out" type="checkbox" id="bookmark"/>
                                <input type="hidden" name="_method" value="delete" />
                            </form><!--//#followForm-->
                        </dd>
                        <c:if test="${userType == '카페'}">
                    <dt class="cafe_phone">
                        <i class="fas fa-phone" title="매장 전화번호"></i>
                        <span class="screen_out">매장 전화번호</span>
                    </dt>
                        <dd class="cafe_phone">${user.phone }</dd>
                    <dt class="open_time">
                        <i class="far fa-clock" title="영업시간 및 휴무일"></i>
                        <span class="screen_out">영업시간 및 휴무일</span>
                    </dt>
                        <dd class="open_time">${user.open } ~ ${user.close } <span class="ver_bar"></span></dd>
                        <dd class="rest_time">${user.restDate }</dd>
                    <dt class="facilities">
                        <i class="fas fa-wifi" title="부대시설"></i>
                        <span class="screen_out">부대시설</span>
                    </dt>
                        <dd class="facilities">
                        <c:forEach items="${conditions }" var="condition">
                            <span class="condition">${condition.name }</span>
                        </c:forEach>
                        </dd>
                    </c:if>
                    <c:if test="${userType != '카페'}">
                    	<dt class="facilities">
	                        <i class="fas fa-guitar" title="가진 재능"></i>
	                        <span class="screen_out">가진 재능</span>
                    	</dt>
                    	<dd class="facilities">
                        <c:forEach items="${talents }" var="talent">
                            <span class="condition">${talent.name }</span>
                        </c:forEach>
                        </dd>
                    </c:if>
                    <dt class="intro">소개글</dt>
                        <dd class="intro">${user.intro }</dd>
                        <c:if test="${userType == '카페'}">
                    <dt class="come"><strong>찾아오시는 길</strong></dt>
                        <dd class="come">
                            <h4 class="screen_out">카페 주소</h4>
                            <dl>
                                <dt class="addr_new">
                                    <i class="fas fa-map-marker-alt" title="도로명 주소(지번주소)"></i>
                                    <span class="screen_out">도로명 주소</span>
                                </dt>
                                    <dd class="addr_new">${user.addressNew }</dd>
                                <dt class="screen_out">지번 주소</dt>
                                    <dd class="addr_old">(${user.addressOld })</dd>
                            </dl>
                        </dd>
                        <input type="hidden" id="cafeLatitude" value="${user.latitude }"/>
                		<input type="hidden" id="cafeLongitude" value="${user.longitude }"/>
                        <dd id="map">
                        </dd>
                        </c:if>
                    <dt class="rep_imgs"><strong>대표사진</strong></dt>
                <c:choose>
                	<c:when test="${representImages==null }">
                        <dd class="no_image">
                        <c:choose>
                        <c:when test="${loginUser.no == whosePage}">
                            <p class="add_image_btn"><i class="far fa-images"></i></p>
                            <p><span>대표사진을 등록해주세요.(최대 3장)</span></p>
                        </c:when>
                        <c:otherwise>
                            <p><i class="fas fa-exclamation"></i></p>
                            <p><span>등록 된 대표사진이 없습니다.</span></p>
                        </c:otherwise>
                        </c:choose>
                        </dd>
                   	</c:when>
                    <c:otherwise>
                        <dd class="rep_imgs">
                        <c:forEach items="${representImages }" var="image">
                        	<img src="/img/upload/${image.name }" alt="${user.cafeName} 대표사진" width="340" height="255"/>
                        </c:forEach>
                        
                        <c:if test="${fn:length(representImages) lt 3}">
                            <span class="add_image_btn">
                                <p><i class="far fa-image"></i></p>
                                <p>대표사진 추가</p>
                            </span>
                        </c:if>
                        </dd>
                    </c:otherwise>
                    </c:choose>
                </dl>
            </div><!--//#masterInfo-->
            <div id="masterSchedule">
                <h3>${userType } 세부 일정</h3>
                <div id="calendar"></div>
            </div><!--//#masterSchedule-->
            <div id="commentArea">
                <h3 id="commentTitle">댓글</h3>
                <div class="reply_cnt"><span class="ver_bar"></span>총 <span class="reply_num">00</span>개</div>
                <form class="comment_form original" action="/ajax/comment/${whosePage}" method="post">
                    <fieldset>
                        <legend class="screen_out">댓글 입력 폼</legend>
                        <input class="real_content" type="hidden" name="content" value="" />
                        <input class="prompter" placeholder="댓글 추가" autocomplete="off" />
                        <button class="submit_btn btn">등록</button>
                    </fieldset>
                </form>
                <ul id="tmpWrap"></ul>
            </div><!--//#commentArea-->
        </div><!--//.aux-->
    </div><!--//#content-->
<script type="text/template" id="commentCard">
	<@_.each(comments, function(comment) {
		var userNum = ${whosePage};
	<c:if test="${loginUser!=null}">
		var loginUser = ${loginUser.no};
	</c:if>
	@>
    <li class="<@=comment.commentType@>_card">
    	<div class="user_profile">
        	<img src="/img/upload/<@=comment.profile@>" width="50" height="50" alt="<@=comment.nickname@>의 프로필사진" />
    	</div>
    	<div class="comment_meta">
        	<span class="nickname"><@=comment.nickname@></span>
		<@if(userNum == comment.userNo) {@>        	
        	<span class="the_one">주인</span>
		<@}@>
        	<span class="regdate"><@=comment.regdate@></span>
    	</div>
    	<div class="comment_content"><@=comment.content@></div>
    	<div class="comment_feedback">
	<c:if test="${loginUser != null}">
        	<button class="like_btn fas fa-thumbs-up">
            	<span class="screen_out">추천</span>
        	</button> <span class="like_num"><@=comment.totalCount@></span>
        	<button class="rere_btn">대댓글 달기</button>
		<@ if(loginUser != comment.userNo) { @>
        	<button>신고</button>
       	<@ } @>
		<@ if(loginUser == comment.userNo) { @>
        	<button>수정</button>
        	<button>삭제</button>
		<@ } @>
	</c:if>
        	<form class="comment_form" action="/ajax/recomment/${whosePage}" method="post">
            	<fieldset>
                	<legend class="screen_out">대댓글 입력 폼</legend>
                	<input class="seq" type="hidden" name="seq" value="<@=comment.seq@>" />
                	<input class="real_content" type="hidden" name="content" value="" />
                	<input class="prompter" placeholder="댓글 추가" autocomplete="off" />
                	<button class="submit_btn btn">등록</button>
            	</fieldset>
        	</form>
    	</div>
	</li>
	<@ }) @>
</script>
<script type="text/template" id="originalCommentCard">
	<@ var userNum = ${whosePage}; @>
    <li class="<@=comment.commentType@>_card">
    	<div class="user_profile">
        	<img src="/img/upload/<@=comment.profile@>" width="50" height="50" alt="<@=comment.nickname@>의 프로필사진" />
    	</div>
    	<div class="comment_meta">
        	<span class="nickname"><@=comment.nickname@></span>
		<@if(userNum == comment.userNo) {@>        	
        	<span class="the_one">주인</span>
		<@}@>
        	<span class="regdate"><@=comment.regdate@></span>
    	</div>
    	<div class="comment_content"><@=comment.content@></div>
    	<div class="comment_feedback">
        	<button class="like_btn fas fa-thumbs-up">
            	<span class="screen_out">추천</span>
        	</button> <span class="like_num"><@=comment.totalCount@></span>
        	<button class="rere_btn">대댓글 달기</button>
        	<button>신고</button>
        	
        	<button>수정</button>
        	<button>삭제</button>
        	<form class="comment_form" action="/ajax/recomment/${whosePage}" method="post">
            	<fieldset>
                	<legend class="screen_out">대댓글 입력 폼</legend>
                	<input class="seq" type="hidden" name="seq" value="<@=comment.seq@>" />
                	<input class="real_content" type="hidden" name="content" value="" />
                	<input class="prompter" placeholder="댓글 추가" autocomplete="off" />
                	<button class="submit_btn btn">등록</button>
            	</fieldset>
        	</form>
    	</div>
	</li>
</script>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script src="/js/jquery.js"></script>
<script src="/js/user_header.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="/js/moment-with-locales.js"></script>
<script src="/js/fullcalendar.min.js"></script>
<script src="/js/moment.min.js"></script>
<script src="/js/header.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4aa167a1572a6f69469c5b43f7f92bd5"></script>

<script>
var latitude = $("#cafeLatitude").val(), longitude = $("#cafeLongitude").val();
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


	var now = moment();
	var no = ${whosePage};
	
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
        }
    });


});

_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};
		
    var tmp = _.template($("#commentCard").html());
    moment.locale("ko");
		
    $("#commentArea").on('keydown','input',function (e) {
        if(e.keyCode==13) {
            e.preventDefault();
            var cnt = $(this).val();
            $("<div class='txt'>").text(cnt).insertBefore($(this));
            $(this).val("");
            $(this).removeAttr("placeholder");
        }//if end
        var flag = $(this).val().length;
        var flag2 = $(this).prev().hasClass("txt");
        if(e.keyCode==8 && flag==0 && flag2) {
            var tar = $(this).prev().text();
            $(this).val(tar);
            $(this).prev().remove();
        }//if end
        if(e.keyCode==8 && !flag2) {
            $(this).attr("placeholder","댓글 추가");
        }//if end
    });//input.keydown() end
    
    var tmp2 = _.template($("#originalCommentCard").html());
    
    $("#commentArea").on('submit','.comment_form',function (e) {
        e.preventDefault();
        if($(this).hasClass("original")) {
        	var realPrompterIdx = $(this).find(".prompter").index() - 2;
        }else {
        	var realPrompterIdx = $(this).find(".prompter").index() - 3;
        }
        if(realPrompterIdx == 0) {
            var cnt = $(this).find(".prompter").val();
            if(cnt.length==0) {
                alert("마지막 줄에 공백을 포함할 수 없습니다.");
                return false;
            }else {
                $(this).find(".real_content").attr("value",cnt);
            }//if~else end
        }else {
            var cnt = "";
            
            for(var i=0 ; i < realPrompterIdx ; i++) {
            	if($(this).hasClass("original")) {
                	var asd = $(this).children().children().eq(2+i).text();
            	}else {
                	var asd = $(this).children().children().eq(3+i).text();
            	}//if~else end
                cnt = cnt + asd + "<br>";
            }//for end

            if($(this).hasClass("original")) {
	            var prompCnt = $(this).children().children().eq(2+i).val();
        	}else {
	            var prompCnt = $(this).children().children().eq(3+i).val();
        	}//if~else end
            if(prompCnt.length!=0) {
                cnt = cnt + prompCnt;
            }//if end
            // console.log(cnt)
            $(this).find(".real_content").attr("value",cnt);
            
        }//if~else end
        
        var url = $(this).attr("action");
        var seq = $(this).find(".seq").attr("value");
        var $that = $(this).parent();
        
        var content = $(this).find(".real_content").attr("value");
        
        if($(this).hasClass("original")) {
	        $.ajax({
	        	"dataType": "json",
	        	"data": {"content": content},
	        	"url": url,
	        	"method": "post",
	        	error: function() {
	        		alert("서버에 장애가 발생하여 일시적으로 댓글 입력이 불가능합니다. 잠시 후 다시 시도해 주세요.");
	        	}, success: function(json) {
	        		//console.log(json)
	    			json.comment.regdate = moment(json.comment.regdate).format("YY.MM.DD HH:mm:ss");
	        		
	    			$("#tmpWrap").prepend(tmp2({"comment":json.comment}));
	    			$(".reply_num").text(json.totalNum);
	        	}//success() end
	        });//$.ajax() end
        }else {
	        $.ajax({
	        	"dataType": "json",
	        	"data": {
	        		"content": content,
	        		"seq":seq,
	        	},
	        	"url": url,
	        	"method": "post",
	        	error: function() {
	        		alert("서버에 장애가 발생하여 일시적으로 댓글 입력이 불가능합니다. 잠시 후 다시 시도해 주세요.");
	        	}, success: function(json) {
	        		//console.log(json)
	    			json.comment.regdate = moment(json.comment.regdate).format("YY.MM.DD HH:mm:ss");
	        		
	    			$that.before(tmp2({"comment":json.comment}));
	        		
	    			$(".reply_num").text(json.totalNum);
	        	}//success() end
	        });//$.ajax() end
        }//if~else end
        
    });//.commentForm.submit() end
    
    var scrollNo = 1;
    
    function getComments() {
    	var no = ${whosePage}
    	$.ajax({
    		dataType: "json",
    		data: {"scrollNo": scrollNo},
    		url: "/ajax/comment/"+no,
    		error: function() {
    			alert("시스템 점검중... 댓글을 불러올 수 없습니다.");
    		}, success: function(json) {
    			var comments = json.comments;
    			$(comments).each(function() {
    				this.regdate = moment(this.regdate).format("YY.MM.DD HH:mm:ss")
    			})
    			$("#tmpWrap").append(tmp({"comments":json.comments}));
    			$(".reply_num").text(json.totalNum);
    		}//success() end
    	});//$.ajax() end
    }//getComments() end
    getComments();
    
    $("#tmpWrap").on('click','.rere_btn',function () {
        var foldFlag = $(this).text();
        if(foldFlag == "대댓글 달기") {
            $(this).parent().find(".comment_form").show();
            $(this).text("대댓글 접기");
        }else {
            $(this).parent().find(".comment_form").hide();
            $(this).text("대댓글 달기");
        }//if~else end
    });//.rereBtn.click() end

    $("#tmpWrap").on('click',".like_btn",function () {
        var likeFlag = $(this).children("span").text();
        if(likeFlag == "추천") {
            $(this).children("span").text("추천 취소");
            $(this).addClass("liked");
            // $.ajax({
            // //좋아요 insert ajax
            // });//$.ajax() end
        }else {
            $(this).children("span").text("추천");
            $(this).removeClass("liked");
            // $.ajax({
            // // 좋아요 delete ajax
            // });//$.ajax() end
        }//if~else end
    });//.like_btn.click() end
    
    function displayBookmark() {
        var flag = $("#bookmark").prop("checked");
        if(flag) {
            $(".fa-bookmark").removeClass("far").addClass("fa");
            $("label.btn").attr("title","북마크 취소");
        }else {
            $(".fa-bookmark").addClass("far").removeClass("fa");
            $("label.btn").attr("title","북마크 하기");
        }//if~else end
    }//displayBookmark() end
    displayBookmark();
    $("#bookmark").click(displayBookmark);
    
    var $document = $(document);
    var $window = $(window);
    
    $window.scroll(function () {
        var docHeight = $document.height();
        var winHeight = $window.height();
        var scrollTop = $window.scrollTop();

        if(docHeight <= (scrollTop + winHeight) + 30 ) {
        	scrollNo++;
            getComments();

        }//if end
    });//$window.scroll() end

</script>
</body>
</html>