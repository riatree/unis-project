<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
        #bookmarksWrap{
            clear: both;
            margin-top: 485px;
        }
        #myBookmarks{
            overflow: hidden;
        }
        #myBookmarks .bookmark{
            float: left;
            padding: 10px 20px;
        }
        .bookmark>dl{
            position: relative;
        }
        .bookmark .bookmark_profile{
            width: 200px; height: 200px;
            border-radius: 150px;
            border: 10px solid transparent;
            overflow: hidden;
            cursor: pointer;
        }
        .bookmark_profile img{
            display: inline-block;
        }
        .bookmark_form{
            margin-left: 10px;
            float: left;
            color: #AEAEAE;
            position: absolute;
            top: 0;
            right: 0;
            display: none;
        }
        label.btn{
            font-size: 30px;
            cursor: pointer;
        }

        .bookmark_nickname>ul>li{
            max-width: 220px;
            text-align: center;
            margin: 10px auto;
            white-space: nowrap;
            word-break: break-all;
            text-overflow: ellipsis;
        }
        .bookmark_nickname>ul>li>a{
            text-decoration: none;
            color: #424242;
        }

        .bookmark_nickname .nickname{
            font-size: 15px;

        }
        .bookmark_nickname .cafe_name{
            font-weight: bold;
            font-size: 20px;
        }
		
		.unfollow{
			border : 10px solid transparent;
		}
    </style>
</head>
<body>
	<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
    <h3 class="screen_out">XXX님이 북마크한 등록한 목록</h3>
       <div id="bookmarksWrap">
           <ul id="myBookmarks">
           
           </ul><!--//myBookmarks-->
        </div><!--//bookmarkWrap-->
    </div><!--//aux-->
</div><!--//content-->

<script type="text/template" id="bookmarkTmp">
<@_.each(bookmarks, function(bookmark) { @>
	<li class="bookmark">
       <dl>
          <dt class="screen_out"><@=bookmark.nickname @>님의 프로필 사진</dt>
             <dd class="bookmark_profile" 
				<@if(bookmark.cafeName!=null) {@>
					style="border: 10px solid #A1887F"
				<@}else{@>
					style="border: 10px solid #FA7268"
				<@}@>>
				
                <a href="" class="bookmark_check">
				<input type="hidden" class="no" name="no" value="<@=bookmark.no@>"/>
                <img src="/img/upload/<@=bookmark.profile@>" alt="<@=bookmark.nickname@>님의 프로필 사진" width="200" height="200"/>
                <span class="screen_out">북마크</span><span class="screen_out">하기</span>
				</a>
             </dd><!--//bookmark_profile-->
             <dd class="bookmark_nickname">
                <ul>
                  <li class="nickname"><a href="/user/<@=bookmark.targetNo@>">@<@=bookmark.nickname@></a></li>
                  <@if(bookmark.cafeName!=null) {@>
				  <li class="cafe_name" title="<@=bookmark.cafeName@>"><a href="/user/<@=bookmark.targetNo@>"><@=bookmark.cafeName@></a></li>
				  <@}@>
                </ul>
             </dd>
        </dl>
     </li><!--//bookmark-->
<@ }) @>
</script>

<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script src="/js/jquery.js"></script>
<script src="/js/user_header.js"></script>
<script src="/js/underscore-min.js"></script>
<script src="/js/header.js"></script>
<script src=""></script>
<script>
	$("#userTaps .menu").removeClass("selected");
	$("#userTaps .menu").eq(4).addClass("selected");

	_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};

	var tmp = _.template($("#bookmarkTmp").html());
	
	var no = ${whosePage};
	
	function getBookmarkList() {
		$.ajax({
			url : "/ajax/user/"+no+"/book",
			type : "get",
			dataType : "json",
			error:function(){
				alert("서버 점검중입니다.");	
			}, 
			success:function(json){
				$("#myBookmarks").append(tmp({"bookmarks":json}));
			}
		});//ajax() end
	}//getBookmarkList() end
	getBookmarkList();
	
	function deleteBookmark(no) {
		$("#myBookmarks").children().remove();
		$.ajax({
			url : "/ajax/user/book/delete",
			type : "post",
			dateType : "json",
			data : {"no" : no },
			error:function(){
				alert("서버 점검 중입니다.");
			},
			success:function(json){
				getBookmarkList();
			}
		})//ajax() end
	}//deleteBookmark() end
	
	$("#myBookmarks").on("click",".bookmark_check",function(e) {
		e.preventDefault();
		
		var flag = confirm("정말 삭제하시겠습니까?");
		if(flag) {
			$(".bookmark_profile").attr("style","border: 10px solid transparent");
			console.log($(this).find(".no").val());
			var no = $(this).find(".no").val();
			deleteBookmark(no);
		} else {
			return false;		
		}
	});
	

	

</script>
</body>
</html>