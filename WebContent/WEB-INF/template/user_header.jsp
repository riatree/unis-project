<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <div id="content">
        <div class="aux">
            <div id="userpageTmpl">
                <h2 class="screen_out">${owner.nickname }님의 마이페이지</h2>
                <div id="userCover" title="top"></div>
                <div id="userHeader">
                    <div id="profile">
                        <img src="/img/upload/${owner.profile }" alt="${owner.nickname}님의 프로필사진" width="200" height="200" />
                    </div>
                    <ul id="userTaps">
                        <div id="hiddenProfile"></div>
                        <div id="hiddenName">
                            <p title="${owner.cafeName }">${owner.cafeName }</p>
                            <p class="to_comment" title="${owner.nickname }">@${owner.nickname }</p>
                        </div>
                        <h3 class="screen_out">마이페이지 탭 메뉴</h3>
                        <li class="menu intro"><a href="/user/${whosePage}">소개</a></li>
                        <li class="menu album"><a href="/user/${whosePage}/album">앨범</a></li>
                        <li class="menu need"><a href="/user/${whosePage}/need">
                        <c:choose>
                        <c:when test="${owner.license != null }">
                        UNES
                        </c:when>
                        <c:otherwise>
                        INES
                        </c:otherwise>
                        </c:choose>
                        목록
                        </a></li>
                        <li class="menu request"><a href="/user/${whosePage}/request">신청이력</a></li>
                        <li class="menu bookmark"><a href="/user/${whosePage}/bookmark">북마크</a></li>
                        <li class="menu feed"><a href="/user/${whosePage}/feed">피드 목록</a></li>
                        <li class="menu commentList"><a href="/user/${whosePage}/comment">작성 댓글</a></li>
                    </ul><!--//userTaps-->
                    <script src="/js/jquery.js"></script>
                    <script>
                    	$(window).ready(function () {
                            $("#userTaps>.menu").each(function() {
                                if($(this).hasClass("${pageName}")) {
                                    $(this).addClass("selected");
                                }
                            });
                        })
                    </script>
                </div><!--//#userHeader-->
            </div><!--//userpageTmpl-->