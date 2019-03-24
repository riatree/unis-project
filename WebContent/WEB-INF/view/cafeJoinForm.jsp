<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>카페 회원가입</title>
    <c:import url="/WEB-INF/template/link.jsp" />
	<link rel="stylesheet" href="/css/index.css">
    <link rel="icon" href="img/unis_favicon.png"/>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/fonts/Do_Hyeon.css">
    <link rel="stylesheet" href="/fonts/Noto_Sans_KR.css">
    <link rel="stylesheet" href="/css/default.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo" rel="stylesheet">
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

    .checked, .unchecked,
    .all_checked, .all_unchecked {
        font-size: 20px;
        position: relative;
        left: 0;
    }
    .input_email{
        width: 138px;
    }
    div .term_agree{
        line-height: 24px;
    }
    #content .aux{
        width: 1050px;
        /*background-color: #8d99a6;*/
        min-height: 1200px;
    }
    #cafeRegiWrap{
        width: 900px;
        min-height: 1980px;
        background-color: whitesmoke;
        margin: auto;
        border: 1px dashed #dadada;
    }
    .cafe_regi_title{
        text-align: center;
        /*background-color: #953b39;*/
        font-size: 30px;
        padding: 20px 0 10px 0;
    }
    #agreeBox{
        width: 600px;
        /*background-color: #5eb95e;*/
        margin: 20px 160px;
    }

    .require_check{
        color: #fa7268;
        font-weight: 500;
    }
    .row{
        width: 700px;
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
        /* background-color: #00b0a7; */
        font-size: 12px;
        text-indent: 10px;
        padding-top: 2px;
    }
    .time_input{
        width: 50px;
    }
    .dash{
        padding: 0px 5px;
    }
    .colon{
        padding: 0px 2px;
    }
    .reg_title{
        width: 130px;
        height: 28px;
        line-height: 28px;
        float: left;
        font-family: 'Noto Sans KR', sans-serif;
        /*background-color: #953b39;*/
    }
    .input_detailed, .address_detailed, .rest_date{
        width: 300px;
        height: 30px;
    }
    .address_detailed{
        margin-left: 130px;
        margin-top: 3px;
        margin-bottom: 5px;
    }
    #addressFinder{
        width: 240px;
    }
    .reg_num{
        width: 70px;
    }
    .reg_detail{
        font-size: 8px;
        color: dimgray;
        margin-left: 130px;
    }
    #profileRow {
        height: 210px;
        position: relative;
    }
    #profileBox {
        width: 300px;
        height: 200px;
        border-radius: 20px;
        text-align: center;
        font-size: 140px;
        position: relative;
        color: #ddd;
        display: block;
        margin-left: 130px;
        border: 5px dotted #8d99a6;
    }
    #profileBox.no_image #profileImg {
        display: none;
    }

    #profileBox label {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: -10px;
        right: -5px;
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

    #profileImg {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 0;
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
        font-size: 15px;
        text-indent: 8px;
        outline: 1px solid #dadada;
        border: none;
    }
    .input_height:focus, input_detailed:focus, input_email:focus,
    .time_input:focus, intro_height:focus{
        outline: 2px solid #fa7268;
        border-radius: 2px;
        border: none;
    }
    .time_height{
        height: 25px;
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
    #map{
        margin-left: 130px;
    }
    .reg_btn{
        border: none;
        text-indent: -2px;
        margin-left: 5px;
        font-size: 16px;
        padding: 4px 10px;
        text-decoration: none;
        color: #424242;
    }
    .reg_btn:hover{
        background-color: #fa7268;
        color: #FFFFFF;
        transition: 0.3s ease;
        border: none;
    }
    .facility{
        display: none;
        cursor: pointer;
    }
    .cafe_facility{
        margin-right: 3px;
        margin-bottom: 3px;
        border-radius: 5px;
        position: relative;
        padding: 4px 7px;
        display: inline-block;
        border: 1px solid #424242;
        font-size: 16px;
        font-family: 'Noto Sans KR', sans-serif;
        cursor: pointer;
    }
    .cafe_facility:hover {
        transition: 0.3s ease;
        background-color: #fa7268;
        color: #FFFFFF;
        border:1px solid transparent;
    }
    .clicked {
        background-color: #ff5252;
        color: #FFFFFF;
        /*font-weight: bold;*/
        border:1px solid transparent;
    }
    #cafeInfo{
    	resize: none;
    	width: 296px;
    }
    /*#licenseBox{
        background-color: #1f6377;
    }*/
    #regAllBox{
        position: relative;
        height: 130px;
        /*background-color: #00b0a7;*/
    }
    .regAll_btn{

        margin: 50px 340px;
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
        width: 240px;
        height: 22px;
        margin-left: 20px;
        display: inline-block;
        font-size: 12px;
        line-height: 21px;
        padding-top: 2px;
        /* background-color: #00b0a7; */
       
    }
     #agreeBox .term_msg.check{
     	
     }
    .term_msgOne, .term_msgTwo, .term_msgThree{
        position: absolute;

    }
    .beverage_price{
        width: 70px;
    }
    .cafe_regi_form{
        background-color: #dadada;
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
        <h2 class="screen_out">카페 회원가입 양식</h2>
        <form class="cafe_regi_form" action="/cafe/join" method="post">
        <div id="cafeRegiWrap">
            <div>
                <h2 class="cafe_regi_title">카페 회원가입</h2>
            </div>
            <div id="agreeBox">
                <h3 class="screen_out">가입약관 안내</h3>
                <!--<div>
                    <label class="term_agreeAll">
                        <i class="all_unchecked far fa-check-circle"></i>
                        <i class="all_checked fas fa-check-circle"></i>
                        <input class="agree_checkAll" type="checkbox">아래의 모든 가입약관에 동의합니다.
                    </label>
                </div>-->
                <div class="termsBox">
                    <label class="term_agree">
                        <i class="unchecked far fa-check-circle"></i>
                        <i class="checked checked_one fas fa-check-circle"></i>
                        <input id="service"  class="agree_check" type="checkbox"><span class="require_check">[필수]</span> 서비스 이용약관 동의
                    </label>
                    <div class="term_msg term_msgOne"></div>
                    <div class="termContentBox">
                        <div class="term_content"></div>
                    </div>
                </div>
                <div class="termsBox">
                    <label class="term_agree">
                        <i class="unchecked far fa-check-circle"></i>
                        <i class="checked checked_two fas fa-check-circle"></i>
                        <input id="personalInfo"  class="agree_check" type="checkbox"><span class="require_check">[필수]</span> 개인정보 수집 및 이용 동의
                    </label>
                    <div class="term_msg term_msgTwo"></div>
                    <div class="termContentBox">
                        <div class="term_content"></div>
                    </div>
                </div>
                <div class="termsBox">
                    <label class="term_agree">
                        <i class="unchecked far fa-check-circle"></i>
                        <i class="checked checked_three fas fa-check-circle"></i>
                        <input id="consignment" class="agree_check" type="checkbox"><span class="require_check">[필수]</span> 업무 위탁 동의
                    </label>
                    <div class="term_msg term_msgThree"></div>
                    <div class="termContentBox">
                        <div class="term_content"></div>
                    </div>
                </div>
            </div><!--//.agreeBox-->
            <div id="userInfoBox">
                <div class="user_basic">
                    <div class="row">
                        <label>
                        <span class="reg_title">아이디</span><input id="id"  class="input_email input_height" type="text" autocomplete="off" placeholder="이메일 입력"/></label> @
                            <input class="input_email input_height" id="domain"  autocomplete="off" placeholder="직접입력">
                        <select class="input_height" id="emailSelect" >
                            <option value="1">직접입력</option>
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="yahoo.com">yahoo.com</option>
                        </select>
                        <button id="checkIdBtn" class="reg_btn input_height" type="button">중복확인</button>
                        <input type="hidden" id="email" name="email"/>
                        <div class="msg email"></div>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">닉네임</span>
                        <input id="nickname" name="nickname" class="input_detailed input_height" type="text" autocomplete="off" placeholder="4~16자 영문,숫자,한글"/>
                        </label>
                        <div class="msg nickname"></div>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">비밀번호</span>
                        <input id="password" name="password" class="input_detailed input_height" type="password"  placeholder="6~16자 영문,숫자,특수문자"/>
                        </label>
                        <div class="msg pwd"></div>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">비밀번호 확인</span>
                        <input id="passwordConfirm" class="input_detailed input_height" type="password" placeholder="6~16자 영문,숫자,특수문자"/>
                        </label>
                        <div class="msg pwd_confirm"></div>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">휴대폰 번호</span>
                        <select id="phoneOne" class="reg_num input_height">
                            <option>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                            <option>018</option>
                            <option>019</option>
                        </select>
                            <span class="dash"> - </span>
                        <input id="phoneTwo" class="reg_num input_height" type="text" maxlength="4"/>
                            <span class="dash"> - </span>
                        <input id="phoneThree" class="reg_num input_height" type="text" maxlength="4"/>
                            <a href="/cell/verification" id="veri" class="reg_btn input_height">인증하기</a>
                        </label>
                        <input type="hidden" id="cell" name="cell" value="01022223333"/>
                        <input type="hidden" id="name" name="name" value=""/>
                        <input type="hidden" id="gender" name="gender" value=""/>
                        <input type="hidden" id="birthDate" name="birthDate" value=""/>
                        <div class="msg phone_num"></div>
                    </div>
                </div><!--//.user_basic-->
            </div><!--//#userInfoBox-->
            <h3 class="screen_out">카페 세부정보등록 양식</h3>
            <div id="licenseWrap">
                <div id="licenseBox">
                    <div class="row">
                        <label>
	                        <span class="reg_title">사업자 등록번호</span>
	                        <div>
	                            <input id="businessNoOne" class="reg_num input_height" maxlength="3"/>
	                            <span class="dash"> - </span>
	                            <input id="businessNoTwo" class="reg_num input_height" maxlength="2"/>
	                            <span class="dash"> - </span>
	                            <input id="businessNoThree" class="reg_num input_height" maxlength="5"/>
	                            <button type="button" class="reg_btn input_height" id="cafeBtn">중복확인</button>
	                            <input type="hidden" id="license" name="license"/>
	                            <div class="msg cafe license_no"></div>
	                            <div>
		                            <p><span class="reg_detail">※ 사업자등록번호 도용 방지를 위해 기업인증시스템을 사용하고 있습니다.</span></p>
		                            <p><span class="reg_detail">※ 해당 지점 및 지사의 사업자등록번호를 입력해주세요.</span></p>
		                            <p><span class="reg_detail">※ 허위 인증 및 작성시에 어떠한 불이익도 책임지지 않습니다.</span></p>
	                            </div>
	                        </div>
                        </label>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">카페명</span>
                        <input id="cafeName" name="cafeName" class="input_detailed input_height" type="text" placeholder="카페명을 입력해주세요."/>
                        </label>
                        <div class="msg cafe"></div>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">대표자명</span>
                        <input id="owner" name="name" class="input_detailed input_height" type="text" placeholder="대표자명을 입력해주세요."/>
                        </label>
                        <div class="msg cafe"></div>
                    </div>
                    <div class="row">
                        <span class="reg_title ">카페주소</span>
                        <input type="text" id="addressNew" name="addressNew" placeholder="주소">
						<input type="button" onclick="execDaumPostcode()" value="주소 검색"><br>
						<input id="detailAddress" placeholder="상세주소를 입력해 주세요."/>
						<div id="map" style="width:300px;height:300px;margin-top:10px;display:none"></div>
						<input type="hidden" id="addressOld" name="addressOld"/>
						<input type="hidden" id="latitude" name="latitude"/>
						<input type="hidden" id="longitude" name="longitude"/>
						<input type="hidden" id="zipcode" name="zipcode"/>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title ">영업시간</span>
                        	<input id="openTimeOne" class="time_input time_height" type="text"/><span class="colon"> : </span>
                            <input id="openTimeTwo" class="time_input time_height" type="text"/>
                            <span class="dash"> ~ </span> <input id="closeTimeOne" class="time_input time_height" type="text"/>
                            <span class="colon"> : </span><input id="closeTimeTwo" class="time_input time_height" type="text"/>
                        </label>
                        <input type="hidden" id="open" name="open"/>
                        <input type="hidden" id="close" name="close"/>
                        <div class="msg"></div>
                    </div>
                    <div class="row">
                        <label>
                            <span class="reg_title">휴무일</span>
                            <input id="restDate" name="restDate" class="rest_date input_height" type="text" placeholder="휴무일을 입력해주세요"/>
                        </label>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">카페 전화번호</span>
                        	<input id="cafePhoneOne" name="cafeCell" class="reg_num input_height" type="text" maxlength="3"/><span class="dash"> - </span>
                            <input id="cafePhoneTwo" name="cafeCell" class="reg_num input_height" type="text" maxlength="4"/><span class="dash"> - </span>
                            <input id="cafePhoneThree" name="cafeCell" class="reg_num input_height" type="text" maxlength="4"/>
                        </label>
                        <input type="hidden" id="phone" name="phone"/>
                        <div class="msg cafe_phone"></div>
                    </div>
                    <div class="row">
                        <p id="cafeFacility">
                        <span class="reg_title">카페시설</span>
                        <label class="cafe_facility parking"><input id="parking" name="condition" class="facility" type="checkbox" value="parking"/>주차장</label>
                        <label class="cafe_facility packing"><input id="takeout" name="condition" class="facility" type="checkbox" value="takeout"/>포장</label>
                        <label class="cafe_facility wifi"><input id="wifi" name="condition" class="facility" type="checkbox" value="wifi"/>무선인터넷</label>
                        <label class="cafe_facility restroom"><input id="restroom" name="condition" class="facility" type="checkbox" value="restroom"/>화장실</label>
                        <label class="cafe_facility group"><input id="group" name="condition" class="facility" type="checkbox" value="group"/>단체석</label>
                        <label class="cafe_facility reservation"><input id="reservation" name="condition" class="facility" type="checkbox" value="reservation"/>예약</label>
                        <label class="cafe_facility vallet"><input id="vallet" name="condition" class="facility" type="checkbox" value="vallet"/>발렛파킹</label>
                        </p><!--//#cafeFacility-->
                        <div class="msg"></div>
                    </div>

                    <div class="row">
                        <label>
                        <span class="reg_title">아메리카노 가격</span>
                        <input id="americanoPrice" name="americano" class="input_height beverage_price"  type="text" maxlength="5"/> 원
                        </label>
                        <div class="msg americano"></div>
                    </div>
                    <div class="row">
                        <label>
                        <span class="reg_title">소개글</span>
                        <textarea id="cafeInfo" name="intro" class=" intro_height" placeholder="내용을 입력해주세요"></textarea>
                        </label>
                        <div class="msg"></div>
                    </div>
                    <div class="row" id="profileRow">
                        <span class="label reg_title">카페 대표이미지</span>
                        <div id="profileBox" class="no_image">
                        	<input type="hidden" id="profileName" name ="profile"/>
                            <img src="/img/sugarland-cafe-image-3-510.jpg" width="300" height="200" id="profileImg"/>
                            <label class="fas fa-camera">
                                <input type="file" id="profile"/>
                            </label>
                            <button type="button" class="delete fas fa-times"><span class="screen_out">삭제</span>
                            </button>
                        </div><!-- //profileBox -->
                        <div class="msg profile">카페등록을 위해 반드시 필요합니다.</div>
                    </div><!--//profileRow -->
                </div><!--//#licenseBox-->
            </div><!--//#licenseWrap-->
            <div id="regAllBox">
                <button class="regAll_btn">가입하기</button>
            </div>
        </div><!--//#cafeRegiWrap-->
        </form>
    </div><!--//.aux-->
</div><!--//#content-->
	<c:import url="/WEB-INF/template/footer.jsp" />
<script src="/js/jquery.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4aa167a1572a6f69469c5b43f7f92bd5&libraries=services"></script>
<script>
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
	    center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
	    level: 5 // 지도의 확대 레벨
	};
	
	//지도를 미리 생성
	var map = new daum.maps.Map(mapContainer, mapOption);
	//주소-좌표 변환 객체를 생성
	var geocoder = new daum.maps.services.Geocoder();
	//마커를 미리 생성
	var marker = new daum.maps.Marker({
		position: new daum.maps.LatLng(37.537187, 127.005476),
		map: map
	});	
	
	function execDaumPostcode() {
		new daum.Postcode({
		    oncomplete: function(data) {
				var road = data.roadAddress;//도로명 주소
		        var jibun = data.jibunAddress;//지번 주소
		        var zipcode = data.zonecode;//우편 번호
				
		        // 주소 정보를 해당 필드에 넣는다.
		        document.getElementById("addressNew").value = road;
		        
		        $("#addressOld").val(jibun);
		        $("#zipcode").val(zipcode);
		        
		        // 주소로 상세 정보를 검색
		        geocoder.addressSearch(data.address, function(results, status) {
		            // 정상적으로 검색이 완료됐으면
		            if (status === daum.maps.services.Status.OK) {
		
		                var result = results[0]; //첫번째 결과의 값을 활용
		                
		                var lat = result.y;
		                var lng = result.x;
		                
		                var latfront = lat.substring(0,lat.lastIndexOf(".")+1);
		                var lngfront = lng.substring(0,lng.lastIndexOf(".")+1);
		                var latback = lat.substring(lat.lastIndexOf(".")+1,lat.lastIndexOf(".")+7);
						var lngback = lng.substring(lng.lastIndexOf(".")+1,lng.lastIndexOf(".")+7);
						
						lat = latfront+latback;
						lng = lngfront+lngback;
						
		                // 해당 주소에 대한 좌표를 받아서
		                var coords = new daum.maps.LatLng(result.y, result.x);
		                // 지도를 보여준다.
		                mapContainer.style.display = "block";
		                map.relayout();
		                // 지도 중심을 변경한다.
		                map.setCenter(coords);
		                // 마커를 결과값으로 받은 위치로 옮긴다.
		                marker.setPosition(coords)
		                
		                $("#latitude").val(lat);
		                $("#longitude").val(lng);
		            }
		        });
		    }
		}).open();
	}


    $(".agree_check").change(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("check");
        }else{
            $(this).parent().removeClass("check");
        }
    });

    $("#cafeFacility .facility").on("change",function () {
    	$(this).parent().toggleClass("clicked");
    	if($(this).prop("checked")) {
            //console.log($(this).val());
        }else {
        	//console.log("off");
        	$(this).prop("checked",false);
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


    /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ정규표현식ㅡㅡㅡ김현수ㅡㅡㅡㅡㅡㅡㅡㅡ */
	
    //아이디 영문,숫자로 4~16자
    var idReg = /^[a-z|A-Z|0-9][\w]{3,15}$/;
  	//닉네임 정규표현식 영문,숫자,한글 4~16자
    var nicknameReg = /^[a-z|A-Z|0-9|ㄱ-힣]{4,16}$/;
  	//비밀번호 6~16자, 비밀번호 규칙 정규식
	// : 숫자, 특문,영문 각 1회 이상 사용하여 6~16자 입력
	var pwdReg = /(?=.*\d{1,16})(?=.*[~`!@#$%\^&*()-+=]{1,16})(?=.*[a-zA-Z]{1,16}).{6,16}$/;
    
    //전화번호 가운데 4자리
    var phoneReg =/^[0-9]{4}$/
	
    //사업자번호 앞에 3자리
	var businessNoOneReg =/^[0-9]{3}$/
	//사업자번호 중간 2자리
	var businessNoTwoReg =/^[0-9]{2}$/
	//사업자번호 뒤에 5자리
	var businessNoThreeReg =/^[0-9]{5}$/
	
	//카페명 
	var cafeNameReg = /^[a-z|A-Z|0-9|ㄱ-힣][\w]{1,50}$/;
	
	//사업자 이름
    var ownerReg = /^[a-z|A-Z|ㄱ-힣]{4,20}$/;
    
    //카페 세부주소
    var cafeAddressTwoReg = /^[a-z|A-Z|0-9|ㄱ-힣][\w]{10,50}$/; 
    
  	//매장영업 시간
    var openTimeOneReg = /^[0-9]{1,2}$/;
  	//매장영업 시간
    var openTimeTwoReg = /^[0-9]{1,2}$/;
  	//매장영업 시간
    var closeTimeOneReg = /^[0-9]{1,2}$/;
  	//매장영업 시간
    var closeTimeTwoReg = /^[0-9]{1,2}$/;
    
  	//매장휴무일
    var restDateReg = /^[a-z|A-Z|0-9|ㄱ-힣][\w]{2,80}$/;
    
    //매장전화번호
    var cafePhoneOneReg = /^[0-9]{2,3}$/;
    var cafePhoneTwoReg = /^[0-9]{3,4}$/;
    var cafePhoneThreeReg = /^[0-9]{4}$/;
    
    //아메리카노 가격
    var americanoPriceReg =/^[0-9]{3,5}$/;
    
  	//jpg,gif,png인지 확인하는 정규표현식
    var profileReg = /([^\s]+(?=\.(jpg|gif|png))\.\2)/;
    
  	
    var $service = $("#service"); 
    var $personalInfo = $("#personalInfo");
    var $consignment = $("#consignment");
    
    var $password = $("#password");
    var $pwdConfirm = $("#passwordConfirm");
    
    var $phoneOne = $("#phoneOne");
    var $phoneTwo = $("#phoneTwo");
    var $phoneThree = $("#phoneThree");
    
    var $cafeName = $("#cafeName");
    
    var $owner = $("#owner");
    
    var $cafeAddressTwo = $("#cafeAddressTwo");
    var $openTimeOne = $("#openTimeOne");
    var $openTimeTwo = $("#openTimeTwo");
    var $closeTimeOne = $("#closeTimeOne");
    var $closeTimeTwo = $("#closeTimeTwo");
    var $restDate = $("#restDate");
    
    var $cafePhoneOne = $("#cafePhoneOne");
    var $cafePhoneTwo = $("#cafePhoneTwo");
    var $cafePhoneThree = $("#cafePhoneThree");
    
    var $americanoPrice = $("#americanoPrice");
    var $cafeInfo = $("#cafeInfo");
    
    var $profile = $("#profile");

    /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

    var $emailSelect = $('#emailSelect'),
        $domain = $('#domain');

    $emailSelect.change(function () {
        $('#emailSelect option:selected').each(function () {
            if($(this).val() == '1'){
                $domain.val('');
                $domain.attr('disabled',false);
                //console.log($domain.val());
            }else {
                $domain.val($(this).text());
                $domain.attr('disabled',true);
                //console.log($domain.val());
            } // if() ~  else end
        });//each() end
    });//change() end
    
    
    function checkService() {
    	var checked = $service.prop("checked");
    	//console.log(checked);
    	if(!checked) {
    		$(".term_msgOne").text("서비스 이용약관에 동의해주세요.").css("color","red");
    	}else {
    		$(".term_msgOne").text("").css("color","green");
    	}
    	return false;
    }
    
 	function checkPersonalInfo() {
 		var checked = $personalInfo.prop("checked");
    	//console.log(checked);
    	if(!checked) {
    		$(".term_msgTwo").text("개인정보 수집 및 이용에 동의해주세요.").css("color","red");
    	}else {
    		$(".term_msgTwo").text("").css("color","green");
    	}
    	return false;
    }	
    	
 	function checkConsignment() {
    	var checked = $consignment.prop("checked");
    	//console.log(checked);
    	if(!checked) {
    		$(".term_msgThree").text("업무 위탁에 동의해주세요.").css("color","red");
    	}else {
    		$(".term_msgThree").text("").css("color","green");
    	}
    	return false;
    }
    
 	var $id = $("#id");
 	var isValidId = false;
 	var oldId = "";
 	var domain ;
 	var email = "";
 	
 	function checkId() {
 		var value = $id.val();
 		if(oldId != value){
 			oldId != value;
 			
 			if(idReg.test(value)){
 				isValidId = false;
 				domain = $domain.val();
 				email = value+"@"+domain;
 				
 				$.ajax({
 					url:"/ajax/user/check/email",
 					dataType : "json",
 					data : {"email" : email},
 					error : function() {
						alert("서버 점검 중!");
					},
					success:function(json) {
						if(json.count == 0){
							isValidId = true;
							$(".msg.email").text("좋은 아이디입니다. ").css("color","green");
							$("#email").val(email);
						}else {
							isValidId = false;
							$(".msg.email").text("이미 사용중이거나 탈퇴한 아이디 입니다.").css("color","red");
						}//if() else end
					}
 					
 				});//ajax() end
 			}//if() end
 		}//if() end
 	}//checkId() end
 	
 	var $nickname = $("#nickname"); 
 	var oldNickname;
 	var isValidNickname = false;
 	
 	function checkNickname() {
		var value = $nickname.val();
		
		if(oldNickname != value) {
			oldNickname = value;
			
			if(nicknameReg.test(value)) {
				isValidNickname = false;
				$(".msg.nickname").text("확인중..");
				console.log(value);
			
				$.ajax({
					url:"/ajax/user/check/nickname",
					dataType : "json",
					data : {"nickname":value},
					error:function() {
						alert("서버 점검 중");
					},
					success:function(json) {
						if(json.count == 0) {
							isValidNickname = true;
							$(".msg.nickname").text("아주 좋은 닉네임입니다.").css("color","green");
						} else {
							isValidNickname = false;
							$(".msg.nickname").text("이미 사용중인 닉네임입니다.").css("color","red");
						}//if ~ else end
					}
				});//ajax() end
			}//if() end
		}//if() end
	}//checkNickname() end
 	
	function checkPwd() {
		if(pwdReg.test($password.val())) {
			$(".msg.pwd").text("좋은 비밀번호입니다.").css("color","green");
			return true;
		} else {
			$(".msg.pwd").text("영어, 숫자, 특수문자 6 ~ 16자로 입력해주세요.").css("color","red");
			return false;
		}
	}//checkPwd() end
	function checkConfirm() {
		if($password.val() == $pwdConfirm.val()) {
			$(".msg.pwd_confirm").text("비밀번호가 일치합니다.").css("color","green");
			return true;
		} else {
			$(".msg.pwd_confirm").text("비밀번호가 일치하지 않습니다.").css("color","red");
			$password.focus();
			return false;
		}//if ~ else end
	}//checkConfirm() end
	
	function checkPhoneNum() {
		if(phoneReg.test($phoneTwo.val()) && phoneReg.test($phoneThree.val())){
			$(".msg.phone_num").text(" ");
			return true;
		} else {
			$(".msg.phone_num").text("숫자로 입력해주세요.").css("color","red");
			return false;
		}
	}//checkPhoneNum() end
	
	var $businessNoOne = $("#businessNoOne");
	var $businessNoTwo = $("#businessNoTwo");
	var $businessNoThree = $("#businessNoThree");
	var license;
	var isValidBusinessNo = false;
	
	function checkBusinessNum() {
		if(businessNoOneReg.test($businessNoOne.val()) && businessNoTwoReg.test($businessNoTwo.val()) && businessNoThreeReg.test($businessNoThree.val()) ) {
			$('.msg.cafe').text("");
			
			license = $businessNoOne.val() + $businessNoTwo.val() + $businessNoThree.val();
			isValidBusinessNo = false;
			$.ajax({
				url : "/ajax/user/check/license",
				dataType : "json",
				data : {"license" : license },
				error:function() {
					alert("서버 점검 중입니다.");
				},
				success:function(json) {
					if(json.count == 0){
						isValidBusinessNo = true;
						$('.msg.cafe.license_no').text("가입 가능한 사업자 번호입니다.").css("color","green");
						$("#license").val(license);
					}else {
						isValidBusinessNo = false;
						$('.msg.cafe.license_no').text("이미 등록된 사업자 번호입니다.").css("color","red");
					}
				}
			});//ajax() end
			
		} else {
			$('.msg.cafe.license_no').text("제대로 된 사업자 번호를 입력해주세요.").css("color","red");
			return false;
		}
	}//checkBusinessNum() end
    
	var phone;
	
	function checkCafeNum() {
		if(cafePhoneOneReg.test($cafePhoneOne.val()) && cafePhoneTwoReg.test($cafePhoneTwo.val()) && cafePhoneThreeReg.test($cafePhoneThree.val()) ){
			phone = $cafePhoneOne.val()+$cafePhoneTwo.val()+$cafePhoneThree.val();
			$('.msg.cafe_phone').text("");
			$("#phone").val($("#cafePhoneOne").val()+$("#cafePhoneTwo").val()+$("#cafePhoneThree").val());
			return true;
		} else {
			$('.msg.cafe_phone').text("제대로 된 번호를 입력해주세요.").css("color","red");
			return false;
		}
	}//checkCafeNum() end
	
	function checkAmericanoPrice() {
		if(americanoPriceReg.test($americanoPrice.val())){
			$(".msg.americano").text(" ");
			return true;
		}else {
			$(".msg.americano").text("정확한 가격을 숫자로 입력해주세요.").css("color","red");
			return false;
		}
	}//checkAmericanoPrice() end

	var $profileName = $("#profileName");
	var oldProfile = null;
	var profileReg = /^image/;
	
	$profile.change(function() {
		var profile = $profile.get(0);
		var file = profile.files[0];
		
		if(file==null || file.size <= 0) {
			alert("제대로 된 파일을 선택해주세요.");
			return;
		}//if() end
		if(!profileReg.test(file.type)){
			alert("이미지 파일을 선택해주세요.");
			return;
		} else {
			
		}//if ~ else() end
		
		if(oldProfile != file.name){
			oldProfile = file.name;
			
			var form = new FormData();
			form.append("type", "P");
			form.append("uploadImg",file,file.name);
			
			$.ajax({
				url : "/ajax/upload",
				dataType : "json",
				type : "POST",
				processData:false,
				contentType:false,
				data:form,
				error:function(){
	                alert("서버 점검 중");
	            },
	            success:function(json){
	                $('#profileImg').attr("src","/img/profile/"+json.src);
	                $profileName.val(json.src)
	                $("#profileBox").removeClass("no_image");
	                $(".msg.profile").text(" ");
	            }
			}); //ajax() end
		}//if end
	});//change() end
	
	
	$('.delete').click(function() {
        $profile.val("");
        $("#profileBox").addClass("no_image");
    });//click() end
    
 	$service.change(checkService);
    $personalInfo.change(checkPersonalInfo);
    $consignment.change(checkConsignment);
     
    $("#checkIdBtn").click(checkId);//click() end
    $("#cafeBtn").click(checkBusinessNum);
    
    $nickname.keyup(checkNickname);
    $password.keyup(checkPwd);
    
    $nickname.blur(checkNickname); 
    $pwdConfirm.blur(checkConfirm);
    
    $phoneTwo.blur(checkPhoneNum);
    $phoneThree.blur(checkPhoneNum);

    $cafePhoneThree.blur(checkCafeNum);
    $americanoPrice.blur(checkAmericanoPrice);
    
    $(".cafe_regi_form").submit(function() {
       
        
        var addressTmp=$("#addressNew").val();        
        $("#addressNew").val(addressTmp+" "+$("#detailAddress").val());
        
        addressTmp=$("#addressOld").val();   
        $("#addressOld").val(addressTmp+" "+$("#detailAddress").val());
        
    	$("#open").val($("#openTimeOne").val()+":"+$("#openTimeTwo").val());
    	$("#close").val($("#closeTimeOne").val()+":"+$("#closeTimeTwo").val());
    	
    	checkService();
        checkPersonalInfo();
        checkConsignment();
        checkNickname();
        checkPwd();
        checkConfirm();
        checkProfile();
        checkAmericanoPrice();
        checkCafeNum();
        checkPhoneNum();
        checkBusinessNum();
        checkId();
        
        if(!isValidId ||
          !isValiPwd ||
          !isValidNickname ||
          !isConfirmPwd || 
          !isValidBusinessNo ||
          $("#profileBox").hasClass("no_image")
       ) {
           
          return false;
       }
    });
    
    var veriWindow;
    var veriedName;
    var veriedBirthDate;
    var veriedSex;
    
    $("#veri").click(function(e) {
    	e.preventDefault();
    	var url = $(this).attr("href");
    	
    	var veriWindow = window.open(url,"UNIS","resizable=no, scrollbars=no, width=450, height=550");
    	
	    veriWindow.onbeforeunload = function(){
			$("#name").attr("value",veriedName);
			$("#birthDate").attr("value",veriedBirthDate);
			$("#gender").attr("value",veriedSex);
	    }
    });//#veri.click() end
    
</script>
</body>
</html>