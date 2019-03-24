<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS|로그인</title>
    <c:import url="/WEB-INF/template/link.jsp"/>
   
    <style>
        h2{
            margin: 35px 0 25px 0;
            font-size: 30px;
            text-align: center;
            color: #424242;
        }
        .intro{
            color: #424242;
            font-size: 13px;
            line-height: 20px;

        }

        #findPassword {
            width: 400px;
            height: 350px;
            margin: 17.5vh auto;
            border: darkgrey solid 1px;
            border-radius: 3px;
            background-color: #fafafa;

        }


        #sendPassword{
            margin: 30px 0 25px 0;
        }

        .btn {
            width: 300px;
            height: 40px;
            background: #cdcdcd;
            color: #424242;
            border: none;
            border-radius: 5px;
            font-size: 15px;
            cursor: pointer;

        }
        .btn:hover{
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
        .fas{
            color: #fa7268;
        }
        .fa-unlock-alt{
            margin-right: 10px;
        }
        .findWrap{
            margin-top: 25px;
        }

    </style>
</head>

<body>
<c:import url="/WEB-INF/template/header.jsp"/>
<div id="content">
    <div class="aux">
        <div id="findPassword" class="form">
            <h2><i class="fas fa-unlock-alt"></i>비밀번호 찾기</h2>
            <form id="find" action="" method="post">
                <fieldset>
                    <legend class="screen_out">비밀번호 찾기 폼</legend>
                    <div class="findWrap">
                    <div class="row">
                        <label for="email">
                            <i class="fas fa-envelope"></i>
                            <span class="screen_out">가입이메일</span>
                        </label>
                        <input id="email" placeholder="  가입시 입력한 이메일 주소 입력" autocomplete="off"/>
                    </div>

                    <div class="row">
                        <button id="sendPassword" class="btn" title="임시 비밀번호 전송">임시 비밀번호 전송</button>
                    </div>
                    </div>
                </fieldset>
            </form>
            <div class="row intro">
                ※가입시 입력한 이메일 주소로 임시 비밀번호를 전송해 드립니다.
            </div>
        </div>

    </div>
</div>
<c:import url="/WEB-INF/template/footer.jsp"/>
</body>
</html>