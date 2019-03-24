var $sideIcon = $("#sideIcon"), 
	$sideWrap = $("#sideWrap"), 
	$close_btn = $(".close_btn"), 
	$alarm_icon = $(".alarm_icon"), 
	$alarmBox = $("#alarmBox"), 
	$userBox = $("#userBox"), 
	$user_profile = $(".user_profile");

$sideIcon.on("click", function() {
	$sideWrap.css("transform", "translateX(0)");
});
$close_btn.on("click", function() {
	$sideWrap.css("transform", "translateX(9999px)");
});

$alarm_icon.on("click", function() {
	$alarmBox.toggleClass("none");
	$userBox.addClass("none");
	return false;
});

$user_profile.on("click", function(e) {
	e.preventDefault();
	$userBox.toggleClass("none");
	$alarmBox.addClass("none");
	return false;
});