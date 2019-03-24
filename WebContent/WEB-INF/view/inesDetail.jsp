<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="UTF-8">
<head>
    <meta charset="UTF-8">
    <title>INES_detail2</title>
    <c:import url="/WEB-INF/template/link.jsp"></c:import>
    <link rel="stylesheet" href="css/Nanum_Myeongjo.css">
    <link rel="stylesheet" href="/css/fullcalendar.css">
    <link href='/css/fullcalendar.min.css' rel='stylesheet' />
    <link href='/css/fullcalendar.print.min.css' rel='stylesheet' media='print' />
    <link rel="stylesheet" href="css/popupMatching.css">
    <link rel="stylesheet" href="css/ines_detail.css">
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
<div id="contents">
    <div id="heroWrap">
        <img src="/img/ines_detail/마술.jpg">
    </div>
    <div class="aux">
        <div id="inesTitleBox">
            <div class="title_ines"><h2>${InesDetail.title}</h2></div>
            <!--페이지에 들어온 로그인 아이디가 글작성자 본인 아이디일때 수정, 삭제-->
           <!--아닐 때 신청하기 , 신고하기  -->
           <c:choose>
           <c:when test="${loginMember== InesDetail.no}"><!--로그인 한 유저와 글 작성자가 같을 때  -->
            <div class="boxs_inses_btn">
                <button class="ines_report_btn">신청하기</button>
                <button>신고하기</button>
           </div>
           </c:when>
           <c:otherwise>
                <div class="box_inses_btn">
                <button>삭제</button>
                <button>수정</button>
                </div>
           </c:otherwise>
             </c:choose>
        </div><!--title주제 -->
        <div id="inesContentBox">
            <div id="artistWrap">
                <h3 class="screen_out">아티스트 정보</h3>
                <div><a><img class="profile_artist_ines" src="img/ines_detail/채지안.jpg"/></a><span class="profile_name_ines">${InesDetail.nickName}</span><button class="bookmark_ines"><i class="far fa-bookmark"></i></button></div>
                <div class="comment_aritst_ines">${InesDetail.intro}</div>
            </div><!--artistWrap-->
            <div id="inesWrap">
                <h3>INES 조건</h3>
                <ul>
                    <div id="inesTalent1">
                        <li class="talent_artist_ines"><img src="img/ines_detail/KakaoTalk_20181228_165152152.png">${InesDetail.talentName}</li>
                        <!--<li><div class="line_artist_ines"><i class="far fa-calendar-alt"></i> 2018.12.11~2018.12.14</div>-->
                        <li><i class="far fa-clock"></i>${InesDetail.startTime}~ ${InesDetail.endTime}<li>
                        <!--<li><i class="far fa-headphones"></i>음악스트리밍 정도</li>-->
                        <li><i class="fas fa-street-view"></i>${InesDetail.area}</li>
                        <li><i class=	"fas fa-coins"></i>${InesDetail.fareDir}${InesDetail.fare}${InesDetail.fareType} </li>
                    </div>
                    <div id="inesTalent2">
                        <li><i class="far fa-calendar-alt"></i> ${InesDetail.startDate}~${InesDetail.endDate}</li>
                        <li><i class="fas fa-headphones-alt"></i>${InesDetail.noise}</li>
                        <li><i class="fas fa-chair"></i>${InesDetail.chairs}석</li>
                    </div>
                    <li><i class="fas fa-comment"></i>${InesDetail.kakao}</li>
                </ul>
            </div><!--//inesWrap-->
            <div id="inesImageBox">
                <h3>재능 사진</h3>
                <ul id="inesImages">
                    <li><img src="img/ines_detail/카드.png" width="250px" height="180px"></li>
                    <li><img src="img/ines_detail/카드%20마술.jpg" width="250px" height="180px"></li>
                    <li><img src="img/ines_detail/카드%20마술.jpg" width="250px" height="180px"></li>
                </ul>
            </div><!--//inesImage-->
        </div> <!-- -->
		<!--로그인한 유저와 같을 때 -->
        </div><!--cafelist-->
        <div id="cafesWrap">
            <h3 class="cafesTitle">매칭된 카페</h3>
            <div id="cafesMatchedBox">
                <div id="cafesListBox">
                    <ul id="cafesList">
                    	<%-- <c:forEach items="${list }" var="" > --%>
                        <li class="cafes_box">
                            <a href=""><img class="cafes_profile"  src="img/ines_detail/카페.jpg" width="120" height="120"/></a>
                            <span class="cafes_text strong_text">메라메라메라메라</span>
                            <span class="cafes_text">인천서구 송학로 446</span>
                            <span class="cafes_text">6석, 4.5평</span>
                            <span class="cafes_text">허용 소음 정도</span>
                            <span class="cafes_text">2018. 04.28 ~ 2018. 05.30</span>
                            <span class="cafes_text">PM 05:00 ~ PM 07:00</span>
                        </li>
                    <%--   </c:forEach> --%>
                    </ul>
                </div>
                <!--li가 4개이상 있을시 버튼 생성 -->
            <!--  -->   <%--  <c:if test=""> --%>
                <div id="leftBtn" class="cafes_box_btn"><i class="fas fa-chevron-left left_btn"></i></div>
                <div id="rightBtn" class="cafes_box_btn"><i class="fas fa-chevron-right right_btn"></i></div>
            <%-- 	</c:if> --%>
            </div><!-- #cafesMatchedBox end -->
        </div><!-- #cafesWrap end -->
   <c:if test="${loginMember== InesDetail.no}">
    <div id="cafelist">
        <h3 class="cafesTitle">신청한 카페 목록</h3>
        <div class="cafeSupport">
        <ul>
        <!--신청한 카페목록 list뽑아내기-->
        	<c:forEach items="" var="">
            <li>
                <div class="support_imgBox_cafe">
                    <a><img class="support_img_cafe" src="img/ines_detail/카페.jpg"></a>
                    <div class="support_title_cafe">커피볶는 남자</div>
                </div>
            </li>
            <li>
                <div class="support_content_cafe">
                    <span class="cafes_text2"><i class="far fa-calendar-alt"></i>인천서구 송학로 446</span>
                    <span class="cafes_text2"><i class="fas fa-chair"></i>6석<span><i class="fas fa-street-view"></i>4.8평</span></span>
                    <span class="cafes_text2"><i class="fas fa-headphones-alt"></i>허용 소음 정도</span>
                    <span class="cafes_text2"><i class="far fa-calendar-alt"></i>2018. 04.28 ~ 2018. 05.30 <span><i class="far fa-clock"></i>PM 05:00 ~ PM 07:00</span></span>
                    <span class="cafes_text2"><i class="far fa-file-alt"></i>매칭에서 직접 블랜딩하고 블랜딩 선별까지 거쳐서 저만의 커피색을 커피를 볶아서 항</span>
                </div>
            </li>
            <li>
                <div class="support_btn_cafe">
                    <div><button>수락</button></div>
                    <div><button>삭제</button></div>
                </div>
            </li>
            </c:forEach>
               </c:if>
        </ul>
    </div>
        </div><!--cafelist end  -->
        <div id="popupMatchingWrap">
            <div id="popupMatching">
                <h3>신청하기</h3>
                <h4>신청된 일정</h4>
                <div id="calendar"></div>
                <h4>신청 날짜</h4>
                <form class="input_time" action="" method="">
                    <fieldset style="width: 500px; height: auto;">
                        <div id="dateBox">
                            <input type="datetime-local" id="meeting-time"
                                   name="meeting-time" value="2018-12-29T10:00">
                         			  ~
                            <input type="datetime-local" id="meeting-time"
                                   name="meeting-time" value="2018-12-29T10:00">
                        </div>
                        <textarea id="matchingTextarea" rows="5" cols="60" name="contents" style="resize: none" placeholder="상세 내용을 적어주세요."></textarea>
                        <div class="input_time_btn">
                            <button class="cansle_btn">취소</button>
                            <button>완료</button>
                        </div>
                    </fieldset>
                </form><!-- form end -->
            </div><!-- #popupMatching end -->
        </div><!-- #popupMatchingWrap end -->
        <!-- 켈린더 팝업 -->
        <div id="popupCalendarDetailBox" style="display: none">
            <p id="popupCalendarDetailCloseBtn"><i class="fas fa-times"></i></p>
            <a href="" id="popupCalendarProfile"><img src="img/ines_detail/채지안.jpg" width="120" height="120"/></a>
            <p class="popup_calendar_date popup_calendar_nickname">XXX 아티스트</p>
            <p class="popup_calendar_date popup_calendar_talent">test</p>
            <p class="popup_calendar_date popup_calendar_day">2018년 12월 12일</p>
            <div  class="popup_calendar_date">
                <span class="popup_calendar_start_time">AM 10:30</span> ~ <span class="popup_calendar_end_time">PM 12:30</span>
            </div>
        </div>
        <div id="popup"></div>
    </div><!--//aux-->
</div><!--//contents-->
<c:import url="/WEB-INF/template/footer.jsp"></c:import>

<script src="js/jquery.js"></script>
<script src='js/gcal.min.js'></script>
<script src='js/moment.min.js'></script>
<script src='js/jquery.min.js'></script>
<script src='js/fullcalendar.min.js'></script>
<script src="js/popupMatching.js"></script>
<script>
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2018-03-12',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            select: function(start, end) {
                var title = prompt('Event Title:');
                var eventData;
                if (title) {
                    eventData = {
                        title: title,
                        start: start,
                        end: end
                    };
                    $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                }
                $('#calendar').fullCalendar('unselect');
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: {
                url:'ajax/test.json',
                error:function () {
                    alert("삐뽀");
                }
            }
        });
    });

    //버튼 클릭시
    var px =0;

    $(".left_btn").parent().click(function () {

        px -= 800;

        var maxWidth = $(".cafes_box").length;

        console.log("width의 최대값 : "+maxWidth);

        maxWidth = maxWidth%4+1;

        console.log("4개씩 묶음 몇개? : "+maxWidth);

        if(px < -800*maxWidth) {
            px = 0;
        }//if end

        console.log(px);

        $(this).parent().find('#cafesListBox').find('#cafesList').css("left", px);
    });

    $(".right_btn").parent().click(function () {
        px += 800;

        var maxWidth = $(".cafes_box").length;

        console.log("width의 최대값 : "+maxWidth);

        maxWidth = maxWidth%4+1;

        console.log("4개씩 묶음 몇개? : "+maxWidth);

        if(px > 0) {
            px = -800*maxWidth;
        }// if end

        console.log(px);

        $(this).parent().find('#cafesListBox').find('#cafesList').css("left", px);
    });
    var $test=  $(".test");
    console.log($test.text().length);


    $(".ines_report_btn").click(function () {

        $("#popupMatchingWrap").css("visibility","visible");
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $(".cansle_btn").click(function () {
            $('html, body').css({'overflow': 'auto', 'height': '100%'});
        })
       
    });
   
</script>
</body>
</html>
