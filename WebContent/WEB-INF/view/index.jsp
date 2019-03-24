<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>UNIS &boxv; Uni-Space</title>
<c:import url="/WEB-INF/template/link.jsp" />
<link rel="stylesheet" href="/css/index.css">
</head>
<body>
	<c:import url="/WEB-INF/template/header.jsp" />
	<div id="content">
		<div id="heroWrap">
			<h3 class="screen_out">회사 소개</h3>
			<div id="heroViewBox">
				<ul id="heroList">
					<li class="hero">
						<div id="IHAS" title="IHAS소개">
							<h4 class="hero_detail">새로운 카페를 찾아보세요</h4>
						</div>
					</li>
					<li class="hero">
						<div id="UNES" title="UNES소개">
							<h4 class="hero_detail">당신의 공간을 아티스트에게 공유해보세요</h4>
						</div>
					</li>
					<li class="hero">
						<div id="INES" title="INES소개">
							<h4 class="hero_detail">당신의 재능을 공유해보세요</h4>
						</div>
					</li>
				</ul><!--heroList-->
			</div><!--//heroViewBox-->
		</div><!--//heroWrap-->

		<div class="aux">
			<div id="cafeWrap">
				<h2 class="title">IHAS에서는 UNIS에 등록된 모든 개인카페를 여러분에게 공유하고 있습니다</h2>
				<ul id="cafeList">
				
				<c:forEach items="${cafeList }" var="cafe">
					<li class="cafe">
						<a href="/user/${cafe.no }"><div class="cafe_img">
							<img src="/img/upload/${cafe.profile }" alt="카페대표이미지" />
						</div>
						<div class="cafe_title">
							<strong>${cafe.cafeName }</strong> 
							<c:if test="${cafe.with() }">
								<strong class="tema">(WITH UNIS)</strong>
							</c:if></br>
							<em>${cafe.addressOld }</em>
						</div><!--//cafe_title-->
						<a href="/user/${cafe.no }"><div class="cafe_detail">
							<div class="cafe_name">${cafe.intro }</div>
						</div>
						</a>
					</li><!--//cafe-->
				</c:forEach>
				
				</ul><!--cafeList end-->
			</div><!--//cafeWrap-->
		</div><!--//aux-->

		<div id="footHero">
			<ul id="footHeroList">
				<li class="hero">
					<div id="cafeIntro">
						<h4 class="screen_out">NUIS를 이용한 카페 소개</h4>
						<h5 class="cafe_intro title">cafe</h5>
						<div class="cafe_intro detail">
							<em>21,500</em> 곳의 카페가 공간을 공유하고 있습니다.
						</div>
					</div> <!--//cafeInfo-->
				</li>
				<li class="hero">
					<div id="artistIntro">
						<h4 class="screen_out">NUIS에 이용하는 아티스트 소개</h4>
						<h5 class="artist_intro title">artist</h5>
						<div class="artist_intro detail">
							<em>2,702</em> 명의 다양한 아티스트가 재능을 공유하고 있습니다.
						</div>
					</div> <!--//artistInfo-->
				</li>
			</ul><!--//footHeroList-->
		</div><!--//footHero-->
	</div><!--//contents-->
	
	<c:import url="/WEB-INF/template/footer.jsp" />
	
<script src="/js/jquery.js"></script>
<script src="/js/header.js"></script>
<script>
		$(".cafe").mouseenter(function () {
	        $(this).find(".cafe_detail").show();
	        $(this).find(".cafe_img>img").css("transform","scale(1.1)");
	    });

	    $(".cafe").mouseleave(function () {
	        $(this).find(".cafe_detail").hide();
	        $(this).find(".cafe_img>img").css("transform","scale(1)");
	    });


		var heroWidth = 0;

		setInterval(function() {
			if (heroWidth <= 0) {
				heroWidth -= 100;
				if (heroWidth == -300) {
					heroWidth = 0;
				}
				// console.log(heroWidth);
			}
			$("#heroList")
					.css("transform", "translateX(" + (heroWidth) + "vw)");
		}, 8000);
	</script>
</body>
</html>