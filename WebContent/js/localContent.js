$(".arrow_to_top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop:0} , "slow");
})//$(".arrow_to_top").click() end


$(".arrow_to_bottom").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");

})//$(".arrow_to_bottom").click() end
var ENV = {};
ENV.domainProperty = {
    "mc2Domain" : "https://media.daum.net/proxy/api/mc2"
};
ENV.profiles = [];
var result = $(".result");
var slider = $(".slider");
slider.on('input', function() {
    result.html( "0원 부터 "+$(this).val()+"원 까지" );
    if($(".slider").val()===180000) {
        result.html( "0원 부터 "+$(this).val()+"+ 까지" );
    }
});
$("#roomBtn").click(function () {
    location.href="contentRoom.html";
});
$("#foodBtn").click(function () {
    location.href="contentFood.html";
});
$("#cultureBtn").click(function () {
    location.href="contentCulture.html";
});
$(document).ready(function () {
    $(".element").each(function () {
        $(this).mouseover(function () {
            $(this).addClass("opacity");
        });
        $(this).mouseout(function () {
            $(this).removeClass("opacity");
        });
    });
});
var $window = $(window),
    $document = $(document);

// alert(docHeight);

$window.scroll(function() {

    var docHeight = $document.height(),
        winHeight = $window.height();

    var sTop = $window.scrollTop();

    if(docHeight<=(sTop+winHeight)+40) {

        for(var i = 0 ; i < 10 ; i++) {

            var tmp = _.template($("#replayTmp").html());
            $("#content").append(tmp);
        }
    }
});
$(window).resize(setFixedPosition);

function setFixedPosition() {

    var wWidth = $(document).width();
    var right = (wWidth-1400)/2;

    $(".navigator").css("right",right);
}
setFixedPosition();
$("#content").on("mouseover",".element",function () {
    $(this).css("opacity",".4");
});

$("#content").on("mouseout",".element",function () {
    $(this).css("opacity","1");
});
var $popup=$("#popup");
var $loginForm=$("#loginForm");
var $findForm=$("#findForm");
$("#login").click(function(e) {
    e.preventDefault();
    $popup.show();
    $loginForm.show();
});
$popup.click(function(e) {
    e.preventDefault();
    $(this).hide();
    $(".form").hide();
});
$("#find").click(function(e) {
    e.preventDefault();
    $loginForm.hide();
    $findForm.show();
});
$(".tab a").click(function () {
    $(".on").removeClass("on");
    $(this).addClass("on");
})
$("#findIDBtn").click(function (e) {
    e.preventDefault();
    $("#findID").show();
    $("#findPW").hide();
});
$("#findPWBtn").click(function (e) {
    e.preventDefault();
    $("#findPW").show();
    $("#findID").hide();
});
$(".change").click(function (e) {
    e.preventDefault();
    $findForm.hide();
    $("#chanePWForm").show();
});
$(".return").click(function (e) {
    e.preventDefault();
    $(".form").hide();
    $("#loginForm").show();
});
$("#profileImage").click(function () {
    $("#personalMenu").show();
    return false;
});
$(document).click(function () {
    $("#personalMenu").hide();
});