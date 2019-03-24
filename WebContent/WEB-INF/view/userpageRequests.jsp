<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>UNIS - ${owner.nickname }님의 페이지</title>
    <c:import url="/WEB-INF/template/link.jsp"></c:import>
    <link rel="stylesheet" href="/css/user_header.css" />
    <link rel="stylesheet" href="/css/paginate.css" />
    <style>
    	#hiddenProfile {
        	background-image: url("/img/upload/${owner.profile}");
        }
        #applyCardBox{
            margin-top: 485px;
            clear: both;
        }

        .item_card{
            width: 1026px;
            height: auto;
            overflow: hidden;
            padding: 10px;
            margin: 10px auto;
            border: 2px solid #fa7268;
            border-radius: 5px;
            overflow: hidden;
        }
        .profile{
            width: 80px;
            height: 80px;
            margin-right: 10px;
            border-radius: 80px;
            display: inline-block;
        }
        .box_content{
            width: 800px;
            /*height: 80px;*/
            display: inline-block;
            vertical-align: top;
            line-height: 1.5;
        }
        .box_title{
        	width : 700px;
        	height: auto;
        	overflow:hidden;
        	float: left;
        	display: block;
        }
        .move_user_page, .move_post_view{
            text-decoration: none;
            color: #000;
            font-size: 18px;
            font-weight: bold;    
        }
        .nickname{
            display: inline-block;
            width: 130px;
            text-decoration: none;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 25px;
        }
        .title{
            display: inline-block;
            width: 400px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
        }
        .title.on{
            width: 355px;
            text-overflow: ellipsis;
            word-break: break-all;
            text-align: justify-all;
            white-space: nowrap;
            overflow: hidden;
            vertical-align: top;
        }
        .status{
        	width: 90px;
        	height: 30px;
        	display: inline-block;
        	text-align: center;
        	float:right;
        	background-color: orange;
        	border: 1px solid orange;
        	border-radius: 15px;
        	line-height: 30px;
        }
        .date{
            display: inline-block;
            width: 370px;
        }
        .intro_text{
        	width: 700px;
        	height: auto;
        	overflow: hidden;
        }

        #paginateWrap{
            clear: both;
           /*  width: 300px; */
            margin: auto;
            text-align : center;
            background: #A9A9A9;
        }
        .profile {
        visibility: hidden;
        }
    </style>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
        <h2 class="screen_out">신청 이력</h2>
        <div id="listWrap">
            <ul id="applyCardBox"></ul>
            <div id="paginateWrap"></div>
        </div>
    </div>
</div>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
	<script type="text/template" id="applyCardTmpl">
	<@ _.each(matchings,function(matching){ @>
    	<li class="item_card">
        	<a href="/user/<@=matching.userNo@>"><img class="profile" src="/img/upload/<@=matching.userProfile@>"/></a>
        	<div class="box_content">
			<div class="status"><@=matching.status@></div>
			<div class="box_title">
				<a class="move_user_page" href="/unes/detail/<@=matching.needNo@>"><span class="nickname"><@=matching.nickname @></span></a>
            	<a class="move_post_view" href="/unes/detail/<@=matching.needNo@>"><span class="title"><@=matching.title @></span></a>	
				 <span class="date"><@=moment(matching.startEvent).format("YYYY-MM-DD")@> ~ <@=moment(matching.endEvent).format("YYYY-MM-DD")@></span>
				 <span><@=moment(matching.startEvent).format("A hh:mm")@> ~ <@=moment(matching.endEvent).format("A hh:mm")@></span>
				<p class="intro_text"><@=matching.title@></p>	
            		
			</div>     
        	</div>
    </li>
	<@ })@>
</script>

<script src="/js/jquery.js"></script>
<script src="/js/header.js"></script>
<script src="/js/user_header.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="/js/moment-with-locales.js"></script>
<script>
	 _.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};
	
    var applyCardTmp = _.template($("#applyCardTmpl").html());
    
	var no = ${whosePage};
    var pageNo = 1;
    
    function initCard() {
    	
    	$("#applyCardBox").children().remove();
		$.ajax({
	        url:"/ajax/user/"+no+"/request/page/"+pageNo,
	        type:"get",
	        dataType:"json",
	        error:function (request,status,error) {
	            alert(request+status+error);
	        },success:function (json) {
	        	//console.log(json);
	        	$("#applyCardBox").append(applyCardTmp({"matchings":json.list}));
				if(json.length != 0) {
		        	$("#paginateWrap").html(json.paginate);
				}
	        }
    	});
    }//initCard() end
    initCard();
    
    $('#paginateWrap').on('click','.paginate a',function(evt){
    	evt.preventDefault();
    	pageNo = $(this).text();
    	//alert(pageNo);
    	initCard();
    })
    
    
    
</script>
</body>
</html>