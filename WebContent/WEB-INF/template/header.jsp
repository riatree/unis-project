<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<header>
	<a href="/index"><h1 class="logo" title="메인으로">UNIS</h1></a>
	<dl id="headerMenu">
		<dt class="screen_out">I Have Space : UNIS에 등록한 카페</dt>
		<dd class="menu">
			<a href="/ihas/list" title="카페의 목록">IHAS</a>
		</dd>
		<dt class="screen_out">U Need Space : 공간을 빌려주는 카페</dt>
		<dd class="menu">
			<a href="/unes/list" title="공간을 빌려주는 카페">UNES</a>
		</dd>
		<dt class="screen_out">I Need Space : 재능을 공유하는 아티스트</dt>
		<dd class="menu">
			<a href="/ines/list" title="공간이 필요한 사람">INES</a>
		</dd>

		<c:choose>
			<c:when test="${loginUser!=null}">
				<dt class="screen_out">회원정보</dt>
				<dd class="login menu">
					<h4 class="screen_out">회원정보 리스트</h4>
					<img src="/img/upload/${loginUser.getProfile()}" alt="유저"
						title="${loginUser.nickname }" class="user_profile" width="50"
						height="50" />
					<ul id="userBox" class="none">
						<li><a href="/user/${loginUser.no}" title="마이페이지">마이페이지</a></li>
						<li><a href="" title="회원정보수정">회원정보수정</a></li>
						<li>
							<form action="/session" method="post">
								<input type="hidden" name="_method" value="DELETE" />
								<button id="logoutBtn" title="로그아웃">로그아웃</button>
							</form>
						</li>
					</ul><!--//userBox-->
				</dd>

				<dt class="screen_out">Massage</dt>
				<dd class="menu login message none">
					<button class="alarm_icon">
						<i class="fas fa-envelope" title="알림"></i>
					</button>
					<div id="alarmBox" class="none">
						<h4 class="title">알림</h4>
						<ul id="alarmList">
							<li class="alarm"><a href="">
									<div>
										<img src="../img/index/na.jpg" alt="알림이 온 게시글의 유저 프로필"
											class="alarm_profile" width="60" height="60" />
									</div>
									<div class="alarm_detail">
										매칭이 완료되었습니다. <em class="alarm_time">1초전</em>
									</div>
							</a>
								<div>
									<button class="btn">
										<i class="fas fa-trash-alt"></i>
									</button>
								</div></li>
						</ul>
					</div>
				</dd>
			</c:when>
			<c:otherwise>
				<dt class="screen_out">Login</dt>
				<dd class="login menu">
					<a href="/login" title="로그인버튼">LOGIN</a>
				</dd>
			</c:otherwise>
		</c:choose>
		<dt class="screen_out">슬라이드메뉴</dt>
		<dd id="sideIcon">
			<i class="fas fa-bars"></i>
		</dd>

	</dl>
	<!--//headerMenu-->

	<div id="sideWrap" class="menu_bar">
		<h3 class="screen_out">슬라이드 메뉴</h3>
		<button class="close_btn" title="슬라이드 닫기">&times;</button>
		<ul id="sideList">
			<li class="side_manu"><a href="/ihas/list">IHAS</a></li>
			<li class="side_manu"><a href="/unes/list">UNES</a></li>
			<li class="side_manu"><a href="/ines/list">INES</a></li>

			<c:choose>
				<c:when test="${loginUser!=null}">
					<li class="side_manu feed none"><a href="">FEED</a></li>
					<li class="side_manu"><a href="/user/${loginUser.no }">MYPAGE</a></li>
					<li class="side_manu">
						<form action="/session" method="post">
							<input type="hidden" name="_method" value="DELETE" />
							<button id="logoutBtn2" title="로그아웃">LOGOUT</button>
						</form>
					</li>
				</c:when>
				<c:otherwise>
					<li class="side_manu"><a href="/login">LOGIN</a></li>
				</c:otherwise>
			</c:choose>

			<li class="side_manu end"><a href="">About us</a></li>
			<li class="side_manu end"><a href="">SITE MAP</a></li>
			<li class="side_manu end"><a href="">SUPPORT</a></li>
		</ul>
	</div>
</header>
<!--//header-->
