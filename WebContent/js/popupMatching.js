$(document).ready(function() {
    $('#calendar').fullCalendar({
        /*header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },*/
        defaultDate: '2018-03-12',//기준날짜
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
            url:'/ajax/test.json',//ajax 넣는 부분
            dataType:"json",
            error:function () {
                //alert("삐뽀");
            }
            
        },
        eventClick: function(event) {

            $("#popupCalendarProfile>img").attr("src","img/"+event.profile);
            $(".popup_calendar_nickname").text(event.title);
            $(".popup_calendar_talent").text(event.talent);
            $(".popup_calendar_day").html(moment(event.start).format('YYYY년 MM월 DD일'));
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