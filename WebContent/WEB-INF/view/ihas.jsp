<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS - IHAS페이지</title>
    <c:import url="/WEB-INF/template/link.jsp" />
    <link rel="stylesheet" href="/css/paginate.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <style>
        #heroImg img{
            width: 100%;
            height: 500px;
            position: relative;
        }
        .back{
            width: 100%;
            height: 500px;
            background: rgba(0,0,0,0.3);
            position: absolute;
            left: 0;
            top: 60px;
            text-align: center;
        }
        .intro{
            color: #fafafa;
            font-size: 47px;
            width: 730px;
            height: 200px;
            margin: 190px auto;
            text-align: center;	
            line-height: 60px;
            font-weight: 600;
        }
        .under_line{
            width: 210px;
            border-bottom: #fa7268 solid 3px;
            margin: 10px auto;
        }
        .intro span{
            color: #fa7268;
            font-size: 75px;
        }

        .aux{
            width: 1050px;
            margin: auto;
         }
         .ihas_contents .title{
             width: 250px;
             font-size: 27px;
             color: #424242;
             padding: 25px 0 10px 0;
         }
         .under_line2{
             width: 220px;
             border-bottom: #fa7268 solid 2px;
             margin: 0 0 8px 0;
         }

        .under_line3{
            width: 220px;
            border-bottom: #fa7268 solid 2px;
            margin: 0 0 8px 0;
        }

         .ihas_contents{
             width: 1050px;
             margin: 25px auto;
             /* background-color: #cdcdcd;*/
         }

        .ihas_contents>.cafe_list{
             width: 1050px;
             height: 320px;
        }


        .cafe_list>li.cafe{ 
            width:330px;
            height: 255px;
            border-radius: 2px;
            float: left;
            margin: 20px 10px 20px 10px;
            box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
            transition: all .1s ease-in-out;
            position: relative;
        }

        .cafe>.cafe_img{
            overflow: hidden;
        }


        .cafe_list div.cafe_img>img{
            width:330px;
            height: 255px;
            border-radius: 2px;
            transition: .3s ease;

        }
        .cafe_list div.cafe_title{
            width: 325px;
            height: 42px;
            background: rgba(0,0,0,0.3);
            position: absolute;
            top: 210px;
            left: 0px;
            line-height: 19px;
            border-radius: 2px;
            padding: 4px 0 0 5px;

        }
        .cafe_list div.cafe_detail{
            width: 330px;
            height: 210px;
            background: rgba(0,0,0,0.3);
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 2px;
            transition: all .3s ease;
            display: none;
        }
        
        .cafe_detail>strong{
            color: #fafafa;
            font-size: 16px;
            padding: 10px;

        }
        .cafe_title>strong {
            color: #fafafa;
            font-size: 16px;
            padding-top: 10px;
        }
        .cafe_title>.tema {
            font-size: 17px;
            font-weight: bold;
            padding-left:5px;
            color: #fa7268;
        }
        .cafe_title em{
            color: #cdcdcd;
            font-size: 14px;
        }
        .cafe_title{
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            word-break:break-all;
            text-align: justify-all; 
            
        }

        .paginate{
            width: 300px;
            height: 80px;
            margin: 30px auto;
            /*background-color: #fa7268;*/
            text-align: center;
        }
        .cafe_name {
            color: #cdcdcd;
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            width: 270px;
            height: 140px;
            margin: 30px auto;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
        }


        .ihas_all>.cafe_all{
            width: 1050px;
            height: 600px;
        }


        .cafe_all>li.cafe{ 
            width:330px;
            height: 255px;
            border-radius: 2px;
            float: left;
            margin: 20px 10px 20px 10px;
            box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
            transition: all .1s ease-in-out;
            position: relative;
        }
        .cafe_all>li.cafe:hover{
            transform: translateY(-1px);
            box-shadow: 0 8px 20px 0 rgba(0,0,0,.14);
        }


        .cafe_all div.cafe_img>img{
            width:330px;
            height: 255px;
            border-radius: 2px;

        }
        .cafe_all div.cafe_title{
            width: 325px;
            height: 42px;
            background: rgba(0,0,0,0.4);
            position: absolute;
            top: 210px;
            left: 0px;
            line-height: 19px;
            border-radius: 2px;
            padding: 4px 0 0 5px;

        }
        .cafe_all div.cafe_detail{
            width: 330px;
            height: 210px;
            background: rgba(0,0,0,0.4);
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 2px;
            transition: all .3s ease;
            display: none;
        }
        
        

        #filterWrap{
            clear: both;
            width: 1046px;
            margin: 20px auto;
            border: 2px solid #fa7268;
            border-radius: 3px;
        }
        #filterBox{
            text-align: justify;
        }
        .wrapper{
            min-width: 260px;
            margin: 5px;
            display: inline-block;
            vertical-align: middle;
        }
        label{
            cursor: pointer;
        }
        .input_title{
            font-size: 20px;
            margin-bottom: 10px;
        }
        #addressOldWrap input{
            width: 250px;
            height: 26px;
            border-radius: 5px 0 0 5px;
            border: 1px solid #fa7268;
            text-indent: 10px;
        }
        #searchAddressOldBtn{
            width: 50px;
            width: 48px;!ie;
            height: 30px;
            padding: 0;
            border: none;
            border-radius: 0 5px 5px 0;
            background-color: #fa7268;
            color: #fff;
            vertical-align: top;
        }
        .icon_condition{
            width: 50px;
            height: 50px;
            padding: 2px;
            margin-left: 5px;
            border: 3px solid #A9A9A9;
            border-radius: 5px;
            display: inline-block;
            color: #616161;
            text-align: center;
            vertical-align: bottom;
        }
        .icon_condition.on{
            border-color: #fa7268;
            font-weight: bold;
            color: #fa7268;
        }
        .icon_condition .fas{
            font-size: 30px;
            display: block;
        }

        .tui-calendar th, .tui-calendar td{
            line-height: 39px;
        }



        #unisWrap label {
            display: block;
            margin: 10px 0;
            color: #fa7268;
            font-size: 18px;
            font-weight: 600;
        }
        #costWrap label{
            width: 100px;
            height: 25px;
            border-radius: 5px;
            background-color: #A9A9A9;
            text-align: center;
            line-height: 25px;
            font-size: 15px;
            color: #fff;
            margin-bottom: 20px;
        }

        #costWrap .standard.on, #costWrap .method.on{
            background-color: #fa7268;
        }

        .slider{
            width: 90%;
            margin-left: 15px;

        }

        .range_last{
            float: right;
        }
        .range_input{
            width: 30px;
            margin-left: 100px;
            border: none;
            font-size: 15px;
            font-weight: bold;
            text-align: center;
            background: transparent;
        }
        .range_input.cost, .range_input.americano{
            width: 80px;
            margin-left: 50px;
        }
        #foldBox{
            min-height: 30px;
            overflow: hidden;
            padding: 5px;
            background: #fa7268;
        }
        #foldBox div{
            width: 1000px;
            min-height: 30px;
            line-height: 30px;
            float: left;
            color: #fff;
        }
        .item_filter{
            float: left;
            margin-right: 15px;
        }
        .deleteBtn{
            background: transparent;
            color: #fff;
        }
        .btn_fold{
            width: 30px;
            height: 30px;
            display: inline-block;
            font-size: 25px;
            background: #fa7268;
            border-radius: 30px;
            text-align: center;
            line-height: 30px;
            float: right;
        }

		#cafeWrap .cafe_all {
			overflow: hidden;
		}


    </style>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp" />
<div id="contents">
    <div id="heroImg">
        <img src="/img/169/ihasHero.jpg">
        <div class="back">
            <div class="intro">
                <strong>IHAS에서는 등록된 <span id="cafeTotal">1,776</span>개의 카페를 여러분께 공유합니다.</strong>
                <div class="under_line"></div>
            </div>
        </div><!--heroImg end-->
    </div>
    </div> <!--contents end-->
	
    <div class="aux"> 
        <!--실시간 인기 카페-->
        <div class="ihas_contents">
            <h3 class="title">실시간 인기 카페</h3>
            <div class="under_line2"></div>
            <ul class="cafe_list">
            <c:forEach items="${bestList }" var="best">
                <li class="cafe">
                    <a href="/user/${best.no }"><div class="cafe_img">
                       <img src="/img/upload/${best.profile }" alt="${best.nickname}"/>
                     </div></a>
                     <div class="cafe_title">
                         <strong>${best.cafeName}</strong>
                         <strong class="tema">(WITH UNIS)</strong></br>
                         <em>${best.addressOld }</em>
                     </div><!--cafe_title end-->
                    <a href="/user/${best.no }"><div class="cafe_detail">
                        <div class="cafe_name">${best.intro}</div>
                    </div></a>
                </li><!--hot_cafe end-->
			</c:forEach>
            </ul><!--cafeList end-->
        </div><!--ihasContents end-->

        <!--새로 등록된 카페-->
        <div class="ihas_contents">
            <h3 class="title">새로 등록된 카페</h3>
            <div class="under_line2"></div>
            <ul class="cafe_list">
            <c:forEach items="${newList }" var="newList">
                <li class="cafe">
                    <a href="/user/${newList.no }"><div class="cafe_img">
                        <img src="/img/upload/${newList.profile }" alt="${newList.cafeName }"/>
                    </div></a>
                    <div class="cafe_title">
                        <strong>${newList.cafeName }</strong></br>
                        <em>${newList.addressOld }</em>
                    </div><!--cafe_title end-->
                    <a href="/user/${newList.no }"><div class="cafe_detail">
                        <div class="cafe_name">${newList.intro }</div>
                    </div></a>
                </li><!--hot_cafe end-->
            </c:forEach>
            </ul><!--cafeList end-->
        </div><!--ihasContents end-->

        
        <!--전체 카페-->
        <div class="ihas_all ihas_contents">
        <h3 class="title">모든 IHAS 카페</h3>
        <div class="under_line3"></div>  
        <div id="filterWrap">
            <form>
                <fieldset>
                    <legend class="screen_out">필터</legend>
                    <div id="filterBox">
                        <div class="wrapper" id="addressOldWrap">
                            <h3 class="input_title">지역검색</h3>
                            <input id="addressOld" name="addressOld" onclick="DaumPostcode()" readonly/><!--
                    --><button id="searchAddressOldBtn" type="button" onclick="DaumPostcode()">검색</button>
                        </div><!--addressOldWrap end-->
                        <div class="wrapper" id="conditionWrap">
                            <h3 class="input_title">부대시설</h3>
                            <label for="wi-fi" class="icon_condition"><input class="screen_out" id="wi-fi" type="checkbox" name="condition" value="Wi-Fi"/><i class="fas fa-wifi"></i>Wi-Fi</label>
                            <label for="parking" class="icon_condition"><input class="screen_out" id="parking" type="checkbox" name="condition" value="주차장"/><i class="fas fa-parking"></i>주차장</label>
                            <label for="toilet" class="icon_condition"><input class="screen_out" id="toilet" type="checkbox" name="condition" value="화장실"/><i class="fas fa-restroom"></i>화장실</label>
                        </div><!--conditionWrap end-->


                        <div class="wrapper" id="americanoWrap">
                            <h3 class="input_title">아메리카노 가격</h3>
                            <div class="slider americano"></div>
                            <span>1500원</span>
                            <span class="range_last">5900원</span>
                            <input id="americanoInput" class="range_input americano" value="1,500" name="americano" readonly/>원
                        </div>

                        <div class="wrapper" id="unisWrap">
                            <label for="withUnis"><input type="checkbox" name="time" id="withUnis"/>UNIS와 함께하는 카페만 보기</label>
                        </div><!--unisWrap end-->
                    </div>
                </fieldset>
            </form>
            <div id="foldBox">
                <div>
                    <ul id="selectFilterList"></ul>
                </div>
                <label class="btn_fold" for="foldBtn"><i class="fas fa-angle-up"></i><input id="foldBtn" class="screen_out" type="checkbox"/></label>
            </div>
        </div>   
            <div id="cafeWrap"></div>
            <script type="text/template" id="cafeTmp">
            <ul class="cafe_all">
            <@_.each(users,function(user) {	@>
                <li class="cafe">
                    <a href="/user/<@=user.no@>"><div class="cafe_img">
                        <img src="/img/upload/<@=user.profile@>" alt="<@=user.nickname@>"/>
                    </div></a>
                    <div class="cafe_title">
                        <strong><@=user.cafeName@></strong>	
						<@if(user.withUnis > 0){@>	
						<strong class="tema">(WITH UNIS)</strong>	
						<@ } @></br>
                        <em><@=user.addressOld@></em>
                    </div><!--cafe_title end-->
                    <a href="/user/<@=user.no@>"><div class="cafe_detail">
                        <div class="cafe_name"><@=user.intro@></div>
                    </div></a>
                </li>
               <@ }) @>
            </ul>
            <div class="paginate"><@=paginate@></div>
			</script>
        </div><!--ihasContents end-->
        
    </div><!--aux end-->
</div><!--contents end-->
<c:import url="/WEB-INF/template/footer.jsp" />
<script type="text/template" id="selectedFilterTmpl">
<li class="item_filter <@=type@>" data-category="<@=category@>">
	<span class="selected_filter"><@=value@></span>
	<button class="deleteBtn" type="button"><i class="fas fa-times"></i></button>
</li>
</script>

<script src="/js/jquery.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="/js/header.js"></script>
<script>
	_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
	};
	
	var addressOld = "";
	var americano = 0;
	var withUnis = 0;
	
	var Tmp = _.template($("#cafeTmp").html());
	
	function getContents(pageNo) {
		$.ajax({
			url:"/ajax/ihas/list/page/" + pageNo,
			type:"get",
			data:{
				"addressOld":addressOld,
				"americano":americano,
				"withUnis":withUnis
			},
			dataType:"json",
			error:function(xhr, error, code){
				alert(xhr+error+code);
			},
			success:function(data){
				console.log(data);
				$("#cafeWrap").html(Tmp(data));
				$("#cafeTotal").text(data.total);
			}
		});
	}//getContents() end
	
	getContents(1); // 작성한 Ajax 출력 
	
	$("#cafeWrap").on("click",".paginate a",function(evt){
		var href = $(this).attr("href");
		var pageNo = href.substring(href.lastIndexOf("/")+1, href.length);
		//console.log(href);
		evt.preventDefault();
		
		getContents(pageNo);
	});


	var selectedFilterTmpl=_.template($("#selectedFilterTmpl").html());

	function DaumPostcode() {
	    new daum.Postcode({
	        oncomplete: function(data) {
	            var addr = data.sido+" "+data.sigungu+" "+data.bname; // 최종 주소 변수
	            // 주소 정보를 해당 필드에 넣는다.
	            document.getElementById("addressOld").value = addr;
	            $(".item_filter.addressOld").remove();
	            $("#selectFilterList").append(selectedFilterTmpl({value:addr,type:"addressOld",category:"addressOld"}));
	            addressOld=addr;
	            getContents(1);
	        },
	        theme: {
	            searchBgColor: "#fa7268", //검색창 배경색
	            queryTextColor: "#FFFFFF" //검색창 글자색
	        }
	    }).open();
	}//주소 입력 api : 동까지만 값을 받아와서 넣는다, 도로명 주소여도 상관없음, 필터 밑부분에 텍스트로 추가

$(".icon_condition input").change(function () {
    var id=$(this).attr("id");
    if($(this).is(":checked")){
        $(this).parent().addClass("on");
        var condition=$(this).val();

        $("#selectFilterList").append(selectedFilterTmpl({value:condition,type:id,category:"condition"}));
    }
    else{
        $(this).parent().removeClass("on");
        $(".item_filter ").each(function () {
            if($(this).hasClass(id)) {
                $(this).remove();
            }
        });
    }
});//재능 라디오 선택시 label의 css변경 및 필터 밑부분에 텍스트로 추가



$("#withUnis").change(function() {
	var id=$(this).attr("id");
	if($(this).prop("checked")){
		$("#selectFilterList").append(selectedFilterTmpl({value:"UNIS와 함께하는 카페만 보기",type:id,category:"withUnis"}));
		withUnis=1;
		getContents(1);
	}
	else{
		$(".item_filter.withUnis").remove();
		withUnis=0;
		getContents(1);
	}
});
//UNIS만 보기 클릭시 폴더에 텍스트 추가


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}//숫자 3자리마다 , 찍어주는 함수

$( ".slider.americano").slider({
    min: 1500,
    max: 5900,
    step: 100,
    slide: function(event,ui) {
        $("#americanoInput").val(ui.value);
        $(".item_filter.americano").remove();
        $("#selectFilterList").append(selectedFilterTmpl({value:numberWithCommas(ui.value)+"원",type:"americano",category:"americano"}));
        americano=$("#americanoInput").val();
        getContents(1);
    },
});//기본음료 가격 슬라이더 생성 및 필터 밑부분에 텍스트로 추가

$("#selectFilterList").on("click",".deleteBtn",function () {
    division=$(this).parent().attr("class");
    var category = $(this).parent().data("category");
    if(category=="talent") {
        var selector = "#"+division.substring(division.indexOf(" ")+1,division.length);
        $(selector).prop("checked", false).parent().removeClass("on");
    }
    if(division=="item_filter addressOld"){
        $("#addressOld").val("");
        addressOld="";
        getContents(1);
    }else if(division=="item_filter americano"){
        americano=0;
        getContents(1);
    }else if(division=="item_filter withUins"){
        $("#withUnis").prop('checked', false);
    }
    $(this).parent().remove();
});//각 필터 밑부분 텍스트에 'x'버튼 클릭시 텍스트 제거하고 선택된 값 초기화

$("#foldBtn").change(function () {
    if($(this).is(":checked")){
        $("#filterBox").hide();
        $(".btn_fold").children("i").attr("class","fas fa-angle-down");
    }else{
        $("#filterBox").show();
        $(".btn_fold").children("i").attr("class","fas fa-angle-up");
    }
});//접기 버튼을 누르면 필터가 접힌다



$(".cafe").on("mouseenter","img",function () {
    $(this).parents(".cafe").find(".cafe_detail").show();
    $(this).find(".cafe_img>img").css("transform","scale(1.1)");
});

$(".cafe").on("mouseleave",function () {
    $(this).find(".cafe_detail").hide();
    $(this).find(".cafe_img>img").css("transform","scale(1)");
});


</script>
</body>
</html>