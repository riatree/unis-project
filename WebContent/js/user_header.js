var $window = $(window);
var $profile = $("#profile");
var $userHeader = $("#userHeader");

function moveProfile() {
	var brsWidth = $(this).width();
	var trsPx = (brsWidth - 1050) / 2;
	var scrollTop = $(this).scrollTop();

	if (scrollTop > 200 && brsWidth > 1050) {
		$profile.css("transform", "translate(" + trsPx + "px, -500px)");
	} else if (scrollTop <= 200 && brsWidth > 1050) {
		$profile.css("transform", "translate(" + trsPx + "px, 0)");
	}// if~else end
}// moveProfile() end
moveProfile();

$window.resize(moveProfile);// $window.resize() end

var $heroImage = $("#userCover");

function controlTmpl() {
	var scrollTop = $(this).scrollTop();
	var heroHeight = $heroImage.css("height");
	var stringIdx = heroHeight.indexOf("px");
	var flag = heroHeight.substring(0, stringIdx);
	if (flag > 25) {
		$heroImage.css("height", (350 - scrollTop) + "px");
		$userHeader.css("top", (410 - scrollTop) + "px");
	} else {
		$heroImage.css("height", "25px");
		$userHeader.css("top", "85px");
	}// if~else end
	if (scrollTop < 310) {
		$heroImage.css("height", (350 - scrollTop) + "px");
		$userHeader.css("top", (410 - scrollTop) + "px");
	}// if end
}// controlTmpl() end
controlTmpl();

$window.scroll(function() {
	controlTmpl();
	moveProfile();
	var scrollTop = $(this).scrollTop();
	if (scrollTop > 200) {
		$("#hiddenProfile").css("transform", "translateY(0)");
	} else {
		$("#hiddenProfile").css("transform", "translateY(60px)");
	}// if~else end

	if (scrollTop > 300) {
		$("#hiddenName").css("transform", "translateY(0)");
	} else {
		$("#hiddenName").css("transform", "translateY(60px)");
	}// if~else end
});// $window.scroll() end

$("#userCover").click(function() {
	scrollTo(0, 500);
});// #userCover.click() end

$(".to_comment").click(function() {
	var destination = $("#commentArea").offset().top - 155;
	scrollTo(destination, 500);
});// .to_comment.click() end

function scrollTo(element, duration) {
	var e = document.documentElement;
	if (e.scrollTop === 0) {
		var t = e.scrollTop;
		++e.scrollTop;
		e = t + 1 === e.scrollTop-- ? e : document.body;
	}
	scrollToC(e, e.scrollTop, element, duration);
}// scrollTo() end

function scrollToC(element, from, to, duration) {
	if (duration <= 0)
		return;
	if (typeof from === "object")
		from = from.offsetTop;
	if (typeof to === "object")
		to = to.offsetTop;

	scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
	if (t01 < 0 || t01 > 1 || speed <= 0) {
		element.scrollTop = xTo;
		return;
	}
	element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
	t01 += speed * step;

	setTimeout(function() {
		scrollToX(element, xFrom, xTo, t01, speed, step, motion);
	}, step);
}
function easeOutCuaic(t) {
	t--;
	return t * t * t + 1;
}