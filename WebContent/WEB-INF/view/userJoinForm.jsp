<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>유저 회원가입</title>
    <c:import url="/WEB-INF/template/link.jsp" />
</head>
<style>
    .agree_check,
    .agree_checkAll {
        display: none;
    }

    .term_agree .unchecked,
    .term_agreeAll .all_unchecked {
        display: inline;
    }

    .term_agree .checked,
    .term_agreeAll .all_checked{
        display: none;
        color: #fa7268;
    }

    .term_agree.check .unchecked,
    .term_agreeAll.check .all_unchecked {
        display: none;
    }

    .term_agree.check .checked,
    .term_agreeAll.check .all_checked
    {
        display: inline;
    }
    div .term_agree{
        line-height: 20px;

    }
    .term_agreeOne{

        left: 100px;
    }
    .checked, .unchecked,
    .all_checked, .all_unchecked {
        font-size: 20px;
        position: relative;
        left: 0;
    }
    .input_email{
        width: 136px;
    }
    #content .aux{
        width: 1050px;
        /*background-color: #8d99a6;*/
        min-height: 1200px;
    }
    #userRegiWrap{
        width: 900px;
        min-height: 1130px;
        background-color: whitesmoke;
        margin: auto;
        border: 1px dashed #dadada;
    }
    .user_regi_title{
        text-align: center;
        /*background-color: #953b39;*/
        font-size: 30px;
        padding: 20px 0 10px 0;
    }
    #agreeBox{
        width: 600px;
        /*background-color: #5eb95e;*/
        margin: 20px 160px;
        position: relative;

    }
    .require_check{
        color: #fa7268;
        font-weight: 500;
    }
    .row{
        width: 600px;
        /*background-color: #5bc0de;*/
        margin: 0px 160px;
        position: relative;
        min-height: 50px;
        padding-top: 5px;

    }
    .msg{
        width: 300px;
        height: 22px;
        margin-left: 130px;
        font-size: 12px;
        text-indent: 10px;
        padding-top: 2px;
    }
    .dash{
        padding: 0px 5px;
    }
    .reg_title{
        width: 130px;
        height: 24px;
        float: left;
        font-family: 'Noto Sans KR', sans-serif;
        /*background-color: #953b39;*/
    }
    .input_detailed{
        width: 300px;
        height: 20px;
    }
    .reg_num{
        width: 70px;
    }

    #profileRow {
        height: 210px;
        position: relative;
    }
    #profileBox {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        text-align: center;
        font-size: 140px;
        position: relative;
        background-color: #8d99a6;
        color: #ddd;
        display: block;
        margin-left: 200px;
        border: 5px dot-dash #8d99a6;
    }
    #profileBox.no_image #profileImg {
        display: none;
    }

    #profileBox label {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 5px;
        right: 5px;
        background: #9E9E9E;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        border-radius: 40px;
        cursor: pointer;
        color: #fff;
        border: 2px solid #fff;
    }

    #profileBox label:hover {
        background: #fa7268;
    }

    #profileRow {
        height: 210px;
        position: relative;
    }

    #profile {
        display: none;
    }


    .input_height, input_detailed, input_email, .time_input{
        height: 28px;
        border: 1px solid darkgray;
        border-radius: 2px;
        margin-bottom: 3px;
        transition: .1s ease;
        outline: 1px solid #dadada;
        font-size: 15px;
        text-indent: 8px;
        border: none;
    }
    .intro_height{
        height: 100px;
        border: 1px solid darkgray;
        border-radius: 2px;
        margin-bottom: 3px;
        transition: .1s ease;
        outline: 1px solid #dadada;
        border: none;
        text-indent: 3px;
    }
    .input_height:focus, input_detailed:focus, input_email:focus,
    intro_height:focus, #inputBox input:focus{
        outline: 2px solid #fa7268;
        border-radius: 2px;
        border: none;
    }

    #profileBox.no_image .delete {
        display: none;
    }
    .delete {
        width: 24px;
        height: 24px;
        border-radius: 24px;
        text-align: center;
        line-height: 15px;
        cursor: pointer;
        position: absolute;
        border: none;
        outline: none;
        right: -5px;
        top: -5px;
        background: #9E9E9E;
        color: #FFFFFF;
        border: 2px solid #FFFFFF;
        display: block;
    }
    .delete:hover {
        background: #fa7268;
        color: #fff;
    }
    .reg_btn{
        border: none;
        text-indent: -2px;
        margin-left: 5px;
        font-size: 14px;
        padding: 2px 5px;
        text-decoration: none;
        color: #424242;
    }
    .reg_btn:hover{
        background-color: #fa7268;
        color: #FFFFFF;
        transition: 0.3s ease;
        box-shadow: 2px 2px 3px #424242;
        border: none;
        cursor: pointer;
    }
    .clicked {
        background-color: #ff5252;
        color: #FFFFFF;
        /*font-weight: bold;*/
        border:1px solid transparent;
    }
    /*#licenseBox{
        background-color: #1f6377;
    }*/
    .regAllBox{
        height: 70px;
        /*background-color: #00b0a7;*/
    }
    .regAll_btn{
        position: relative;
        margin-left:340px;
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
    .regAll_btn:hover{
        background-color: #fa7268;
        color: #FFFFFF;
    }
    .regAll_btn:active{
        box-shadow: none;
        transform: translate(2px, 4px);
    }
    #agreeBox .term_msg{
        width: 220px;
        height: 22px;
        margin-left: 20px;
        display: inline-block;
    }
    .term_msgOne, .term_msgTwo, .term_msgThree{
        position: absolute;
    }
    .user_regi_form{
        background-color: #dadada;
    }
    .icon_talent{
        width: 35px;
        height: 48px;
        padding: 2px;
        margin-left: 5px;
        border: 3px solid #A9A9A9;
        border-radius: 5px;
        display: inline-block;
        color: #616161;
        text-align: center;
        vertical-align: bottom;
    }
    .icon_talent.on{
        border-color: #fa7268;
        font-weight: bold;
        color: #fa7268;
    }
    .icon_talent .fas{
        font-size: 30px;
        display: block;
    }
    .help{
        padding: 5px;
        display: inline-block;
        position: absolute;
        background-color: #A9A9A9;
        border-radius: 5px;
        text-align: justify;

        line-height: 1.2;
        color: #fff;
        display: none;
    }
    .help:after{
        content: '';
        width: 0;
        height: 0;
        border-right: 10px solid #A9A9A9;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid transparent;
        position: absolute;
    }
    #addTalentHelp{
        width: 225px;
        top: 50px;
        left: 440px;
    }
    #addTalentHelp:after{
        z-index: 2;
        top: 20px;
        left: -20px;
    }
    #inputBox h3{
        display: inline-block;
    }
    #inputBox{
        display: none;
    }
    #inputBox input{
        width: 260px;
        height: 26px;
        border: 1px solid #A9A9A9;
        border-radius: 5px;
        text-indent: 10px;
        margin-left: 135px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    #inputBox span{
        cursor: pointer;
    }
    .termContentBox{
        margin-left: 75px;
        margin-top: 5px;
    }
    .term_content{
        max-width: 438px;
        height: 90px;
        padding: 8px 10px;
        background-color: #FFF;
        margin-bottom: 10px;
        overflow: auto;
        white-space: pre-wrap;
        word-break: break-all;
        text-overflow: ellipsis;
    }
</style>
<body>
<c:import url="/WEB-INF/template/header.jsp" />
<div id="content">
    <div class="aux">
        <h2 class="screen_out">유저 회원가입 양식</h2>
        <form class="user_regi_form" action="/user/join" method="post">
            <div id="userRegiWrap">
                <div>
                    <h2 class="user_regi_title">유저 회원가입</h2>
                </div>
                <div id="agreeBox">
                    <h3 class="screen_out">가입약관 안내</h3>
                    <div>
                        <label class="term_agree">
                            <i class="unchecked far fa-check-circle"></i>
                            <i class="checked checked_one fas fa-check-circle"></i>
                            <input name="service" class="agree_check" type="checkbox"><span class="require_check">[필수]</span> 서비스 이용약관 동의
                        </label>
                        <div class="msg term_msg term_msgOne"></div>
                        <div class="termContentBox">
                            <div class="term_content"></div>
                        </div>
                    </div>
                    <div>
                        <label class="term_agree">
                            <i class="unchecked far fa-check-circle"></i>
                            <i class="checked checked_two fas fa-check-circle"></i>
                            <input name="personalInfo" class="agree_check" type="checkbox"><span class="require_check">[필수]</span> 개인정보 수집 및 이용 동의
                        </label>
                        <div class="msg term_msg term_msgTwo"></div>
                        <div class="termContentBox">
                            <div class="term_content"></div>
                        </div>
                    </div>
                    <div>
                        <label class="term_agree">
                            <i class="unchecked far fa-check-circle"></i>
                            <i class="checked checked_three fas fa-check-circle"></i>
                            <input name="consignment" class="agree_check" type="checkbox"><span class="require_check">[필수]</span> 업무 위탁 동의
                        </label>
                        <div class="msg term_msg term_msgThree"></div>
                        <div class="termContentBox">
                            <div class="term_content"></div>
                        </div>
                    </div>
                </div><!--//.agreeBox-->
                <div id="userInfoBox">
                    <div class="user_basic">
                        <div class="row">
                            <label>
                                <span class="reg_title">아이디</span><input  name="email" class="input_email input_height" type="text"/></label> @
                            <input class="input_email input_height" id="domain" name="email" autocomplete="off" placeholder="직접입력">
                            <select class="input_height" id="emailSelect" name="email">
                                <option value="1">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="yahoo.com">yahoo.com</option>
                            </select>
                            <div class="msg email"></div>
                        </div>
                        <div class="row">
                            <label>
                                <span class="reg_title">닉네임</span>
                                <input name="nickname" class="input_detailed input_height" type="text" placeholder="4~16자 영문,숫자,한글"/>
                            </label>
                            <div class="msg nickname"></div>
                        </div>
                        <div class="row">
                            <label>
                                <span class="reg_title">비밀번호</span>
                                <input name="password" class="input_detailed input_height" type="password" placeholder="6~16자 영문,숫자,특수문자"/>
                            </label>
                            <div class="msg pwd"></div>
                        </div>
                        <div class="row">
                            <label>
                                <span class="reg_title">비밀번호 확인</span>
                                <input class="input_detailed input_height" type="password" placeholder="6~16자 영문,숫자,특수문자"/>
                            </label>
                            <div class="msg pwd_confirm"></div>
                        </div>
                        <div class="row">
                            <label>
                                <span class="reg_title">휴대폰 번호</span>
                                <select class="reg_num input_height">
                                    <option>010</option>
                                    <option>011</option>
                                    <option>016</option>
                                    <option>017</option>
                                    <option>018</option>
                                    <option>019</option>
                                </select>
                                <span class="dash"> - </span>
                                <input class="reg_num input_height" type="text"/>
                                <span class="dash"> - </span>
                                <input class="reg_num input_height" type="text"/>
                                <a href="http://localhost:63342/UNIS/cellVerification.html" class="reg_btn input_height">인증하기</a>
                            </label>
                            <div class="msg phone_num"></div>
                        </div>
                    </div><!--//.user_basic-->
                </div><!--//#userInfoBox-->
                        <div class="row">
                            <p id="userTalentBox">
                                <span class="reg_title">재능</span>
                                <label for="music" class="icon_talent"><input class="screen_out" id="music" type="checkbox" name="talent"/><i class="fas fa-guitar"></i>음악</label>
                                <label for="art" class="icon_talent"><input class="screen_out" id="art" type="checkbox" name="talent"/><i class="fas fa-palette"></i>미술</label>
                                <label for="magic" class="icon_talent"><input class="screen_out" id="magic" type="checkbox" name="talent"/><i class="fas fa-hat-wizard"></i>마술</label>
                                <label for="exhibition" class="icon_talent"><input class="screen_out" id="exhibition" type="checkbox" name="talent"/><i class="fas fa-vector-square"></i>전시</label>
                                <label for="other" class="icon_talent"><input class="screen_out" id="other" type="checkbox" name="talent"/><i class="fas fa-plus"></i>기타</label>
                            <div id="inputBox">
                                <input name="talent" placeholder="카테고리 명을 입력해주세요"/>
                                <span><i class="fas fa-question-circle"></i></span>
                            </div>
                            <div class="help" id="addTalentHelp">입력해주신 재능은 아이콘을 선정하여 추가하겠습니다</div>
                            </p><!--//#userTalentBox-->
                            <div class="msg"></div>
                        </div>
                        <div class="row">
                            <label>
                                <span class="reg_title">소개글</span>
                                <textarea name="introduction" class=" intro_height" style="width: 296px" placeholder="내용을 입력해주세요"></textarea>
                            </label>
                            <div class="msg"></div>
                        </div>
                        <div class="row" id="profileRow">
                            <span class="label reg_title">유저 대표이미지</span>
                            <div id="profileBox" class="fas fa-user-circle no_image">
                                <img src="profile/profile.png" width="140" height="140" id="profileImg"/>
                                <label class="fas fa-camera">
                                    <input dirname="fileName" type="file" name="profile" id="profile"/>
                                </label>
                                <button type="button" class="delete fas fa-times"><span class="screen_out">삭제</span>
                                </button>
                            </div><!-- //profileBox -->
                            <div class="msg profile">유저등록을 위해 반드시 필요합니다.</div>
                        </div><!--//profileRow -->
                <div class="regAllBox">
                    <button class="regAll_btn">가입하기</button>
                </div>
            </div><!--//#userRegiWrap-->
        </form>
    </div><!--//.aux-->
</div><!--//#content-->
<c:import url="/WEB-INF/template/footer.jsp" />
<script src="/js/jquery.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4aa167a1572a6f69469c5b43f7f92bd5&libraries=services"></script>
<script>
    var $talentSpan=$("#inputBox span");
    $talentSpan.mouseenter(function () {
        $("#addTalentHelp").show();
    });
    $talentSpan.mouseleave(function () {
        $("#addTalentHelp").hide();
    });

    $(".icon_talent input").change(function () {
        if($(this).is(":checked")){
            $(this).parent().addClass("on");
            var id=$(this).attr("id");
            if(id=="other"){
                $("#inputBox").css("display","inline-block");
            }
        }
        else{
            $("#inputBox").hide();
            $(this).parent().removeClass("on");
        }

    });
    $(".icon_talent input").change(function () {

    });




    $(".agree_check").change(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("check");
        }else{
            $(this).parent().removeClass("check");
        }
    });

    $(".agree_checkAll").change(function () {
        //alert("test");
        if ($(this).prop("checked")) {
            $(".term_agree").addClass("check");
            $(".term_agreeAll").addClass("check");
            $(".agree_check").prop("checked", "checked");

        }else{
            $(".term_agree").removeClass("check");
            $(".term_agreeAll").removeClass("check");
            $(".agree_check").prop("checked","checked");
        }
    });


    /*

    var emailReg = /^[a-z|A-Z][\w]{3,19}\@[a-z|A-Z][\w]{3,10}\.[a-z|A-Z]{1,5}$/;
    var pwdReg = /^[\w]{8,16}$/;
    var engReg = /^[a-z|A-Z|0-9]{3,16}$/;
    var korReg = /^[a-z|A-Z|ㄱ-힣|0-9]{2,8}$/;
    var profileReg = /^image/;
    var isNickKOR = /[ㄱ-힣]/;
    var nicknameReg = null;

    var $email = $("#email");
    var $pwd = $("#pwd");
    var $pwdCheck = $("#pwdCheck");
    var $nickname = $("#nickname");
    var $profile = $("#profile");
    var $profileName = $("#profileName");
    var $profileImg = $("#profileImg");
    var $profileBox = $("#profileBox");

    */

    var $emailSelect = $('#emailSelect'),
        $domain = $('#domain');

    $emailSelect.change(function () {
        $('#emailSelect option:selected').each(function () {
            if($(this).val() == '1'){
                $domain.val('');
                $domain.attr('disabled',false);
            }else {
                $domain.val($(this).text());
                $domain.attr('disabled',true);
            } // if() ~  else end
        });//each() end
    });//change() end

    $(".reg_btn").click(function () {
        location.href("http://localhost:63342/UNIS/cellVerification.html?_ijt=monkd41i2aib9omnih7f4oid22");
    })

</script>
</body>
</html>