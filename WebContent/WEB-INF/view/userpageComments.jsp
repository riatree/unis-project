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
        #commentsWrap {
            margin-top: 485px;
            clear: both;
        }
        #myComments {
            overflow: hidden;
        }
        .comment {
            position: relative;
            margin: 10px 0;
        }
        .comment>dl {
            overflow: hidden;
        }
        dt.no {
            font-weight: bold;
            float: left;
            margin-right: 10px;
        }
        dd.no {
            float: left;
            margin-right: 20px;
        }
        .time {
            color: #9e9e9e;
            margin-bottom: 10px;
        }
        dd.content {
            clear: both;
            width: 800px;
            padding: 10px;
            text-align: justify;
            float: left;
            line-height: 22px;
        }
        .origin_thumb {
            float: right;
            transform: translateY(-27px);
        }
        .origin_thumb img {
            display: inline-block;
            background-color: #68d3fa;
        }
        dd.origin_nickname {
            position: absolute;
            right: 0;
            width: 120px;
            text-align: center;
            font-size: 14px;
            top: 100px;
        }
        dd.origin_nickname>a {
            white-space: nowrap;
            overflow: hidden;
            width: 120px;
            text-overflow: ellipsis;
            display: inline-block;
            height: 15px;
        }
        dd.management>a {
            position: absolute;
            top: 0;
            right: 194px;
        }
        .deleteForm button {
            position: absolute;
            top: 0;
            right: 150px;
        }
        dt.image_num {
            position: absolute;
            right: 200px;
            top: 38px;
        }
        dd.image_num {
            position: absolute;
            right: 135px;
            top: 38px;
            width: 60px;
        }
        dt.like_num {
            position: absolute;
            top: 65px;
            right: 200px;
        }
        dd.like_num {
            position: absolute;
            top: 65px;
            right: 135px;
            width: 60px;
        }
        #paginate {
            height: 40px;
            background-color: #FA7268;
            margin: 20px 0;
            text-align: center;
            line-height: 40px;
        }
        .management a, .management button {
            background-color: transparent;
            display: inline-block;
            padding: 0;
            text-decoration: none;
            color: #424242;
            width: 35px;
            height: 25px;
            text-align: center;
            vertical-align: middle;
            line-height: 25px;
            font-size: 16px;
            box-shadow: 2px 2px 0 #CDCDCD, -2px 2px 0 #CDCDCD, 2px -2px 0 #CDCDCD, -2px -2px 0 #CDCDCD;
            transition: .2s ease;
        }
        .management a:hover, .management button:hover {
            box-shadow: 2px 2px 0 #424242, -2px 2px 0 #424242, 2px -2px 0 #424242, -2px -2px 0 #424242;
        }
    </style>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
            <h3 class="screen_out">${owner.nickname }님이 작성한 댓글 목록</h3>
            <div id="commentsWrap">
                <ul id="myComments">
                
                </ul><!--//#myComments-->
                <div id="paginate"></div>
            </div><!--//#commentsWrap-->
        </div><!--//.aux-->
    </div><!--//#content-->
    <script type="text/template" id="commentTmp">
	<@ _.each(commnets,function(comment){
		var loginNo = 0
		<c:if test="${loginUser!=null }">
			loginNo = ${loginUser.no };
		</c:if>
	@>
                <li class="comment">
                        <dl>
                            <dt class="no">번호</dt>
                            <dd class="no"><@=comment.no@></dd>
                            <dt class="screen_out">댓글 단 시간</dt>
                            <dd title="<@=comment.regdate @>" class="time"><@=moment(comment.regdate).format("YYYY년 MM월 DD일") @></dd>
                            <dt class="screen_out">내용</dt>
                            <dd class="content"><@=comment.content@></dd>
                            <dt class="image_num" title="첨부한 이미지 갯수">
                                <i class="far fa-images"></i>
                                <span class="screen_out">첨부한 이미지</span>
                            </dt>
                            <dd class="image_num" title="첨부한 이미지 갯수">
                                <span class="image_num"><@=comment.imgNum @></span>개
                            </dd>
                            <dt class="like_num" title="받은 좋아요 갯수">
                                <i class="far fa-thumbs-up"></i>
                                <span class="screen_out">좋아요</span>
                            </dt>
                            <dd class="like_num" title="받은 좋아요 갯수">
                                <span class="like_num"><@=comment.likeNum @></span>회
                            </dd>
                            <dt class="screen_out">댓글 관리</dt>
                            <dd class="management">
								 <c:choose>
    								<c:when test="${loginUser.no==null}">
    								</c:when>
									<c:when test="${loginUser.no==1}">
										<div class="deleteForm" action="/user/1/comment" method="post">
                                        <legend class="screen_out">댓글 삭제 폼</legend>
                                        <input type="hidden" name="_method" value="DELETE" />
 										<input type="hidden" class="deleteNum" value="<@=comment.no@>" />
                                        <button title="이 댓글을 삭제합니다." value="<@=comment.no@>">
                                            <i class="fas fa-trash-alt" value="<@=comment.no@>"></i>
                                            <span class="screen_out">삭제</span>
                                        </button>                           
                                	</div>
                                	</a>
									</c:when>
    								<c:otherwise>
										<a href="" title="이 댓글을 신고합니다." class="report"
                                   			data-targetType="reply" data-targetNo="">
                                    		<i class="fas fa-flag"></i>
                                    	<span class="screen_out">신고</span>
    								</c:otherwise>
    							</c:choose>
									
								
									
								
                            </dd>
                            <dt class="screen_out">원 글 보기</dt>
                            <dd class="origin_thumb">
                                <a href="" >
                                    <img src="/img/profile/<@=comment.userProfile @>" alt="이 댓글을 작성한 원글" width="120" height="90" />
                                </a>
                            </dd>
                            <dd class="origin_nickname">
                                <a href="" title="<@=comment.userNickname @>씨님의 페이지에서 작성한 댓글 보기">
                                    <@=comment.userNickname @>
                                </a>
                            </dd>
                        </dl>
                    </li><!--//.comment-->
                <@ })@>
				</script>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
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

    var commentTmp = _.template($("#commentTmp").html());
	
	var pageNo = 1;
	var no = ${whosePage};

	function getList() {
		
		$("#myComments").children().remove();
		$.ajax({
	        url:"/ajax/user/"+no+"/comment/page/"+pageNo,
	        type:"get",
	        dataType:"json",
	        error:function (request,status,error) {
	            alert(request+status+error);
	        },success:function (json) {
	        	//console.log(json);
	        	$("#myComments").append(commentTmp({"commnets":json.list}));
	        	$("#paginate").html(json.paginate);
	        }
	    });	
	}//getList() end
    getList();
	
    $('#paginate').on('click','.paginate a',function(evt){
    	evt.preventDefault();
    	pageNo = $(this).text();
    	//alert(pageNo);
    	getList();
    })
	
	function deleteComment() {

		$.ajax({
	        url:"/ajax/user/"+no+"/comment/delete",
	        type:"post",
	        dataType:"json",
	        data : {"commentNum" : commentNum },
	        error:function (request,status,error) {
	            alert(request+status+error);
	        },success:function (json) {
	        	if(json.result) {
	        		getList();
				}else{
					alert("다시 시도해주세요.");
				}//if ~ else() end
	        }
	    });	
	}//deleteComment() end


    $("#myComments").on('click','.report',function (e) {
        e.preventDefault();

        var type = $(this).data("targetType");
        var number = $(this).data("targetNo");
        alert("준비중입니다.");
        // 신고 팝업 ajax 파라미터용



    });//.report.click()end

    var commentNum = 0;
    
    $("#myComments").on("click",".deleteForm",function (e) {
    	commentNum = $(this).find(".deleteNum").val();
    	console.log("클리한 comment 넘버 : "+commentNum);
    	var flag = confirm("정말 삭제하시겠습니까?");
    	if(flag){
    		deleteComment();		
		}//if() end
    	console.log("delete버튼 클릭");
    	e.preventDefault();	
    });

</script>
</body>
</html>