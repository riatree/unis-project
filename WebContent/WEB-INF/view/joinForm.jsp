<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS 회원가입</title>
    <c:import url="/WEB-INF/template/link.jsp" />
</head>
<style>
    body{
        width: 100%;
        height: 100%;
        background-image: url("/img/1.gif");
        background-size: cover;
        background-repeat: no-repeat;
    }
	#content{
		width: 1050px;
		margin:auto;
		 background: rgba(255,255,255,0.8);
        box-shadow: 1px 1px 10px #ffffff;
	}
    #content .aux{
        width: 1050px;
        margin: 8vh auto;
        background:transparent;
        
    }
    #registerWrap{
        width: 770px;
        min-height: 600px;
        position: relative;
        margin: auto;
        border-radius: 6px;
    }

    #welcomeMessage{
        width: 720px;
        height: 110px;
        position: relative;
        overflow: hidden;
        border-bottom: 2px solid #8d99a6;
        margin: auto;
    }
    #registerBox{
        width: 720px;
        min-height: 370px;
        position: relative;
        border-bottom: 2px solid #8d99a6;
        margin: auto;
    }
    .message_welcome{
        font-size: 30px;
        text-align: center;
        font-weight: 700;
    }
    .message_welcome:nth-child(1) {
        margin-top: 22px;
    }
    .message_welcome:nth-child(2) {
        margin-top: 8px;
    }
    #registerUserBox{
        width: 330px;
        min-height: 330px;
        float: left;
        position: relative;
    }
    .space{
        width: 50px;
        height: 330px;
        float: left;
        position: relative;
    }
    #registerCafeBox{
        width: 330px;
        height: 330px;
        float: left;
        position: relative;
    }
    .user_pic{
        height: 170px;
        width: 330px;
        text-align: center;
    }
    .register_image{
        border-radius: 55px;
        background-color: #afafaf;
        margin-top: 40px;

    }
    .intro{
        height: 80px;
        width: 330px;
        text-align: center;
        overflow: hidden;
    }
    .register{
        height: 80px;
        width: 330px;
        text-align: center;
    }
    .cafe_pic{
        height: 170px;
        width: 345px;
        text-align: center;
    }

    .title_sub{
        font-size: 20px;
        margin: 10px auto;
    }
    .content_sub{
        font-size: 14px;
    }
    .title_type{
        color: #fa7268;
        font-weight: bold;
    }
    .button_register{
        width: 265px;
        height: 60px;
        font-size: 22px;
        border: none;
        outline: none;
        padding: 0;
        margin-top: 10px;
        border-radius: 5px;
        cursor: pointer;
        color: #ffffff;
        display: inline-block;
        line-height: 60px;
    }
    .user_register{
        background-color:  #fc815f;
    }
    .user_register:hover{
        background-color: #ff6d2e;
    }
    .cafe_register{
        background-color: #ff5252;
    }
    .cafe_register:hover{
        background-color: #ff1c27;
    }
    .register_info{
        width: 750px;
        height: 30px;
    }
    .title_detail{
        font-size: 20px;
        margin: 10px auto;
        text-indent: 24px;
    }
    .content_detail{
        font-size: 14px;
        margin: 3px 5px;
        color: #616161;
        text-indent: 24px;
    }
    .registerBox{
        width: 750px;
        height: 100px;
    }

</style>
<body>
<c:import url="/WEB-INF/template/header.jsp" />
<div id="content">
    <div class="aux">
        <div id="registerWrap">
            <h2 class="screen_out">UNIS 회원가입</h2>
            <div id="welcomeMessage">
                <p class="message_welcome">UNIS</p>
                <p class="message_welcome">회원가입을 환영합니다.</p>
            </div>
            <div id="registerBox">
                <h3 class="screen_out">개인 회원가입</h3>
                <div id="registerUserBox">
                    <div class="user_pic">
                        <img class="register_image" src="/img/artist.svg" width="110px" height="110px"/>
                    </div>
                    <div class="intro">
                        <p class="title_sub">하고싶은 <span class="title_type">예술</span>을 등록하는 곳</p>
                        <p class="content_sub">재능을 입력하고, 공유하고 싶은 분</p>
                    </div>
                    <div class="register">
                        <a href="/user/join" class="user_register button_register">개인 회원가입</a>
                    </div>
                </div>
                <div class="space"></div>
                <h3 class="screen_out">카페 회원가입</h3>
                <div id="registerCafeBox">
                    <div class="cafe_pic">
                        <img class="register_image" src="/img/coffee.svg" width="110px" height="110px"/>
                    </div>
                    <div class="intro">
                        <p class="title_sub">원하는 테마의 <span class="title_type">카페</span>를 등록하는 곳</p>
                        <p class="content_sub">카페를 입력하고, 테마카페를 원하는 분</p>
                    </div>
                    <div class="register">
                        <a href="/cafe/join" class="cafe_register button_register">카페 회원가입</a>
                    </div>
                </div>
            </div>
            <div class="registerBox">
                <div class="register_info">
                    <p class="title_detail">UNIS 회원가입 안내</p>
                </div>
                <div>
                    <p class="content_detail">∙ UNIS에 회원가입 하시면 UNIS의 서비스를 이용하실 수 있습니다.</p>
                    <p class="content_detail">∙ 카페의 여분 공간을 활용하여 테마카페로 다양한 고객층을 만나실 수 있습니다.</p>
                    <p class="content_detail">∙ 카페의 여분 공간을 활용하여 여러분의 재능을 펼칠 수 있습니다.</p>
                </div>
            </div>
        </div><!--//#registerWrap-->
    </div><!--//.aux-->
</div><!--//#content-->
<c:import url="/WEB-INF/template/footer.jsp" />
<script src="/js/header.js"></script>
</body>
</html>