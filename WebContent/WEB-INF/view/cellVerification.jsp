<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS 회원가입 | 휴대폰 인증</title>
    <link rel="icon" href="/img/unis_favicon.png"/>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/fonts/Do_Hyeon.css">
    <link rel="stylesheet" href="/fonts/Noto_Sans_KR.css">
    <link rel="stylesheet" href="/css/default.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo" rel="stylesheet">
</head>
<style>

    #verifyWrap{

    }
    #verifyBox{
        width: 430px;
        height: 550px;
        background-color: #dadada;
        border-radius: 2px;
        box-shadow: 1px 1px 3px #424242;
    }
    #verfiyText{
        font-family: "Do Hyeon";
        background-color: #fa7268;
        height: 40px;
        font-size: 28px;
        padding-top: 10px;
        text-indent: 5px;
    }
    #profileBox{
        background-color: #FFFFFF;
        width: 390px;
        margin: auto;
        margin-top: 10px;
        position: relative;
        box-shadow: 1px 1px 3px #424242;
    }
    #profileBox>label{
    	display:block;
    	padding : 5px 0;
    }
    #profileBox span{
        display: inline-block;
        width: 85px;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        text-indent: 10px;
    }
    
    .name_input, .cell_input{
        width: 174px;
        margin-top: 10px;
        margin-bottom: 5px;
        height: 20px;
    }
    .input_security, .name_input, .cell_input{
        border: 2px solid #dadada;
        text-indent: 5px;
    }
    .name_input:focus, .cell_input:focus, .input_security:focus{
        outline: 2px solid #fa7268;
        border-radius: 2px;
        height: 20px;
        margin-top: 10px;
        margin-bottom: 5px;

    }
    .birth_date, citizen_input{
        height: 24px;
        
    }
    #securityBox{
        background-color: #FFFFFF;
        box-shadow: 1px 1px 3px #424242;
        width: 390px;
        margin: auto;
        margin-top: 10px;
        height: 80px;
        position: relative;
    }
    #inputNum{
        width: 120px;
        position: absolute;
        top: 10px;
        right: 65px;
        font-size: 18px;
    }
    #inputNum input{
        height: 22px;
        margin-top: 3px;
    }
    #numImg{
        width: 150px;
        position: absolute;
        top: 12px;
        left: 10px;
    }
    #securityBox button{
        position: absolute;
        left: 166px;
        top: 30px;
        width: 25px;
        height: 25px;
        border: 1px solid #424242;
        box-shadow: 1px 1px 3px #424242;
        border-radius: 2px;
        background-color: #FFFFFF;
    }
    #termsBox{
        background-color: #FFFFFF;
        box-shadow: 1px 1px 3px #424242;
        width: 390px;
        height: 192px;
        margin: auto;
        margin-top: 15px;
    }
    .terms_verifying{
        padding: 5px 0;
    }
    .terms_verifying button{
        border: 1px solid #424242;
        box-shadow: 1px 1px 1px #424242;
        background-color: #FFFFFF;
        border-radius: 2px;
    }
    .profile_confirm{
        /*background-color: #5bc0de;*/
        position: relative;
        margin-top: 20px;
    }
    .btn_profile{
        margin:0 110px;
        width: 200px;
        height: 50px;
        font-size: 22px;
        background-color: #FFFFFF;
        color: #fa7268;
        box-shadow: 3px 5px 1px #424242;
        border-radius: 5px;
        transition: .3s ease;
        transform: translate(0, 0);
        border: none;
    }
    .btn_profile:hover{
        background-color: #fa7268;
        color: #FFFFFF;
    }
    .btn_profile:active{
        box-shadow: none;
        transform: translate(2px, 4px);
    }
    .msg{
        width: 250px;
        height: 15px;
        margin-left: 20px;
    }
    .msg.security_num{
        width: 180px;
        height: 15px;
        margin-left: 0px;
    }

</style>
<body>
<div id="verifyWrap">
    <div id="verifyBox">
        <div id="verfiyText">
            PASS[휴대폰 본인확인]
        </div>
        <form id="cellForm" action="/cell/verification" method="post">
            <div id="profileBox">
                <label>
                    <span>이름</span> <input id="name" name="name" class="name_input" type="text"/> <select class="citizen_input" style="vertical-align: middle;
    margin-left: 10px;"><option>내국인</option></select>
                </label>
                <label>
                    <span>생년월일</span>
                    <select class="birth_date year">
                        <option value="year"></option>
                    </select>년
                    <select class="birth_date month">
                        <option value="month"></option>
                    </select>월
                    <select class="birth_date date">
                        <option value="date"></option>
                    </select>일
                    <label><input value="M" name="gender" type="radio"/>남</label>
                    <label><input value="F" name="gender" type="radio"/>여</label>
                </label>
                <input type="hidden" name="birthDate" id="birthDate"/>
            </div><!--//#profileBox-->
            <div id="securityBox">
                <div id="numImg">
                    <img src="/img/948980.PNG" width="143" height="50"/>
                </div>
                <div>
                    <button><i class="fas fa-sync-alt"></i></button>
                </div>
                <div id="inputNum">보안숫자입력
                    <input name="secNum" type="text" class="input_security" style="width:170px"/>
                    <div class="msg security_num"></div>
                </div>
                
            </div><!--//#profileBox-->
            <div id="termsBox">
                <div class="terms_verifying">
                    <input name="personalInfo" type="checkbox"/>개인정보이용동의
                    <button type="button">전문보기</button>
                </div>
                <div class="msg"></div>
                <div class="terms_verifying">
                    <input name="identification" type="checkbox"/>고유식별정보처리 동의
                    <button type="button">전문보기</button>
                </div>
                <div class="msg"></div>
                <div class="terms_verifying">
                    <input name="service" type="checkbox"/>서비스이용약관동의
                    <button type="button">전문보기</button>
                </div>
                <div class="msg"></div>
                <div class="terms_verifying">
                    <input name="telecom" type="checkbox"/>통신사이용약관 동의
                    <button type="button">전문보기</button>
                </div>
                <div class="msg"></div>
            </div><!--//#termsBox-->
            <div class="profile_confirm">
                <button type="submit" class="btn_profile" >확인</button>
            </div>
        </form>
    </div><!--//#verifyBox-->
</div><!--//#verifyWrap-->
<script src="/js/jquery.js"></script>
<script>
    function makeDate() {
        //.year 에 년 for문 돌리기
        for(var i = 2018; i>=1900; i--) {
            //console.log(i);
            $("<option>").text(i).appendTo(".year");
        }//for end

        //.month 에 월 for문 돌리기
        for(var i = 12; i>=1; i--){
            $("<option>").text(i).appendTo(".month");
        }//for end

        for(var i = 1; i<=31; i++){
            $("<option>").text(i).appendTo(".date");
        }//for end

    }
    makeDate();
    
    $("#cellForm").submit(function (e) {
    	e.preventDefault();
		var year = $(".year").val();
		var month = $(".month").val();
		var date = $(".date").val();
		var birthDate =year + "-" + month + "-" + date;
    	$("#birthDate").val(birthDate);
    	
    	var arr = $("#cellForm").serializeArray();
    	
    	window.opener.veriedName = arr[0].value;
    	window.opener.veriedBirthDate = arr[1].value;
    	window.opener.veriedSex = arr[2].value;
    	
    	window.close();
	});
    	
    
    
</script>
</body>
</html>