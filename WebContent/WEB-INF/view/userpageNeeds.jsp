<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS - ${owner.nickname }님의 페이지</title>
    <c:import url="/WEB-INF/template/link.jsp"></c:import>
    <link rel="stylesheet" href="/css/user_header.css" />
    <style>
    #hiddenProfile {
        	background-image: url("/img/upload/${owner.profile}");
        }
        #listWrap{
            margin-top: 485px;
            clear: both;
        }
        #list li{
            width: 340px;
            height: 190px;
            margin-right: 15px;
            margin-bottom: 20px;
            float: left;
        }
        #list li:nth-child(3n){
            margin-right: 0;
        }

        .item_card{
            position: relative;
        }
        .box_detail{
            width: 320px;
            height: 100px;
            padding: 10px;
            position: absolute;
            top: 0px;
            background: rgba(0,0,0,.5);
            color: #fff;
            display: none;
        }
        .box_detail p{
            margin-bottom: 10px;
            font-size: 16px;
        }
        .box_info{
            width: 320px;
            height: 50px;
            padding: 10px;
            position: absolute;
            bottom: 0px;
            background: rgba(0,0,0,.5);
            font-size: 18px;
            color: #fff;
            line-height: 1.3;
        }
        .status{
            position: relative;
            right: -130px;
            border: 2px solid #68d3fa;
            border-radius: 5px;
            vertical-align: center;
        }

        #paginateWrap{
            clear: both;
            width: 300px;
            margin: auto;
            background: #A9A9A9;
        }
    </style>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
        <h2 class="screen_out">UNES 리스트</h2>
        <div id="listWrap">
            <ul id="list"></ul>
            <!-- <div id="paginateWrap">paginate</div> -->
        </div>
    </div>
</div>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script type="text/template" id="UNESCardTmpl">
    <@_.each(needList, function(need) { @>
	<li class="item_card">
			<@if(need.type == "unes") {@>
				<a href="/unes/detail/<@=need.no@>">
			<@} else {@>
				<a href="/ines/detail/<@=need.no@>">
			<@ } @>
            <div>
                <img src="/img/profile/<@=need.profile@>" width="100%" height="190px"/>
                <div class="box_detail">
                    <p><i class="fas fa-map-marked-alt"></i><@=moment(need.addressNew).format("YYYY년 MM월 DD일")@></p>
                    <p><i class="fas fa-calendar-alt"></i><@=moment(need.startDate).format("A h : mm")@>~2019.01.02</p>
                    <p><i class="far fa-clock"></i>AM 11:00~AM 02:30</p>
                    <p><i class="fas fa-microphone-alt"></i>음악 스트리밍 정도</p>
                </div>
                <div class="box_info">
                    <p><@=need.title@></p>
                    <@if(need.cafeName != null) {@>
						<span>카페명 입니다.</span>
					<@ }@>
                    <span class="status"><@=need.status@></span>
                </div>
            </div>
        </a>
    </li>
<@ }) @>
</script>
<script src="/js/jquery.js"></script>
<script src="/js/header.js"></script>
<script src="/js/user_header.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="/js/moment.min.js"></script>
<script>
	_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};
	
    var UNESCardTmpl=$("#UNESCardTmpl").html()
    
 	var no = ${whosePage};
    
    function getList() {
		$.ajax({
			url : "/ajax/user/"+no+"/need/list",
			dateType : "json",
			error:function() {
				alert("에러");
			},
			success:function(json) {
				$("#list").append(UNESCardTmpl({"needList":json}));
			}//success end
		});//ajax() end
	}//getList() end
    getList();

    $(".item_card").mouseenter(function () {
        $(this).find(".box_detail").show();
    });
    $(".item_card").mouseleave(function () {
        $(this).find(".box_detail").hide();
    });
</script>
</body>
</html>