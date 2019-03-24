<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Error Page</title>
    <link rel="stylesheet" href="/css/reset.css"/>
    <link rel="stylesheet" href="/css/default.css"/>
    <link rel="stylesheet" href="/fonts/Do_Hyeon.css"/>
    <link rel="stylesheet" href="/fonts/Noto_Sans_KR.css"/>
    <style>
        header{
        }
        header .title{
            width: 150px; height: 60px;
            background-image: url(/img/logo/logo.png);
            background-repeat: no-repeat;
            background-position: 40% 100%;
            background-size: 40% 100%;
        }
        header .title>a{
            width: 100%;
            height: 60px;
            display: inline-block;
            text-indent: -9999px;
            overflow: hidden;
        }
        #errorPageList{
            width: 100%;
            padding: 40px 0;
        }
        #errorPageList .error{
            width: 100%;
            display: block;
            margin: 30px auto;
        }
        #imageWrap {
            width: 300px; height: 300px;
            margin: auto;
            background-image: url(/img/logo/error.png);
            background-position: 55% 100%;
            background-size: 40% 100%;
            background-repeat: no-repeat;
        }
        #errorDetail{
            width: 500px; height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 30px;
        }
        #indexBtn{
            width: 100px; height: 50px;
            margin: 30px auto;
            line-height: 50px;
            text-align: center;
        }
        #indexBtn>a{
            padding: 10px 18px;
            background-color: #FA7268;
            border-radius: 5px;
            text-decoration: none;
            color: #ddd;
        }

        #indexBtn>a:hover{
            box-shadow: 1px 1px 3px #424242;
        }

        footer{
            height: 100px;
        }
        #companyList{
            padding: 8px 10px;
        }
        footer #companyList li{
        	font-family: 'Do Hyeon', display;
        }
        footer address{
        	font-family: 'Do Hyeon', display;
        	text-indent: 15px;
        }
        
    </style>
</head>
<body>
    <header>
        <h1 class="title"><a href="/index" title="메인으로">UNIS</a></h1>
    </header>
    <div id="content">
        <div class="aux">
            <h2 class="screen_out">에러페이지</h2>
            <ul id="errorPageList">
                <li id="imageWrap" class="error"><h3 class="screen_out">에러페이지이미지</h3></li>
                <li id="errorDetail" class="error">해당 페이지는 존재하지 않습니다.</li>
                <li id="indexBtn" class="error"><a href="/index" title="메인으로">메인으로</a></li>
            </ul>
        </div>
    </div>
    <footer>
        <h2 class="screen_out">회사소개</h2>
        <ul id="companyList">
            <li>서울특별시 강남구 테헤란로 26번길 14, 9층 | 대표번호 02-1234-5678 | fax 02-123-4567</li>
            <li>프로젝트 팀 NUPLEX | 사업자등록번호 123-12-23434</li>
        </ul>
        <address>&copy; UNIS</address>
    </footer>
</body>
</html>