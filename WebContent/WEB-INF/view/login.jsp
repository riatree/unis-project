<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS|로그인</title>
    <c:import url="/WEB-INF/template/link.jsp"/>
    <style>
    	#content .aux{
    		padding : 17.5vh 0px;
    	}
        #loginForm {
            width: 400px;
            height: 400px;
            margin : auto;
            border: darkgrey solid 1px;
            border-radius: 3px;
        }
        #loginForm > h2{
            margin: 35px 0 25px 0;
            font-size: 30px;
            text-align: center;
            color: #424242;
        }
        .fa-user{
            margin-right: 5px;
        }
        #loginBtn{
            margin: 30px 0 25px 0;
        }
        .btn {
            width: 300px;
            height: 40px;
            background: #cdcdcd;
            color: #424242;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;

        }
        .btn:hover{
            background: #fa7268;
            transition: .1s ease;
        }
        .link{
            width: 130px;
            height: 40px;
            margin-top:20px;
            color: #424242;
            border: none;
            background: #cdcdcd;
            display: inline-block;
            border-radius: 5px;
            font-size: 15px;
            text-decoration: none;
            text-align: center;
            line-height: 40px;
        }
        .link:hover{
            background: #fa7268;
            transition: .1s ease;

        }
        input{
            margin-top: 20px;
            width: 254px;
            height: 30px;
            outline: none;
            border-radius: 3px;
            border: 1px solid #cdcdcd;
        }
        label{
            font-size: 23px;
        }
        label i {
            width: 32px;
            height: 27px;
            vertical-align: middle;
            text-align: center;
            padding-top: 7px;
        }
        .row {
            width: 300px;
            margin: auto;
            overflow: hidden;
        }
        .back{
            float: left;
        }
        .register{
            float: right;
        }
        i{
            color: #fa7268;
        }

        .linkWrap{
            margin-top: 5px;
        }
    </style>
</head>

<body>
<c:import url="/WEB-INF/template/header.jsp"/>
<div id="content">
    <div class="aux">
    <div id="loginForm" class="form">
        <h2><i class="fas fa-user"></i>로그인</h2>
        <form id="login" action="/session" method="post">
            <fieldset>
                <legend class="screen_out">로그인폼</legend>
                <div class="row">
                    <label for="email">
                        <i class="fas fa-envelope"></i>
                        <span class="screen_out">이메일</span>
                    </label>
                    <input id="email" placeholder=" 이메일 주소 입력" autocomplete="off" name="email" />
                </div>
                <div class="row">
                    <label >
                        <i class="fas fa-lock"></i>
                        <span class="screen_out">비밀번호</span>
                    </label>
                    <input id="password" placeholder=" 비밀번호 입력" type="password" name="password" />
                </div>
                <div class="row"><button id="loginBtn" class="btn" title="로그인" type="submit">로그인</button></div>
            </fieldset>
        </form>
        <div class="row">
        	<a href="findPassword.html" class="findPassword" title="비밀번호찾기">비밀번호를 잊어버렸어요!</a>
        </div>
        <div class="linkWrap row">
        	<div><a href="/index" class="link back">돌아가기</a></div>
        	<div><a href="/users/join" id="registerBtn" class="link register">회원가입</a></div>
        </div>
    </div>
    </div>
</div>
<c:import url="/WEB-INF/template/footer.jsp"/>
<script src="/js/header.js"></script>
</body>
</html>