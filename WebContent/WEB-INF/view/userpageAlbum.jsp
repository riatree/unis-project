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
        body {
            transition: .3s ease;
        }
        #album {
            margin-top: 485px;
            clear: both;
        }
        .my_img>img {
            display: inline-block;
            cursor: zoom-in;
        }
        #myAlbum {
            overflow: hidden;
            margin: 10px 5px 30px 5px;
            width: 1040px;
        }
        .my_img {
            float: left;
            border: 5px solid transparent;
            border-bottom: 0;
            transition: .2s ease;
        }
        .my_img.selected {
            border: 5px solid #FA7268;
            border-bottom: 0;
        }
        #btnWrap {
            text-align: right;
        }
        #addImg {
            display: none;
        }
        #addImgBtn {
            cursor: pointer;
            padding: 12px 20px;
            background-color: #FA7268;
            clear: both;
            border-radius: 18px;
            margin: 5px 0;
            display: inline-block;
        }
        /*#scope {*/
            /*width: 100%;*/
            /*position: absolute;*/
            /*height: 600px;*/
            /*background-color: #424242;*/
            /*left: 0;*/
            /*display: none;*/
            /*!*transition: .3s ease;*!*/
        /*}*/
        /*#scope .aux {*/
            /*width: 1050px;*/
            /*height: 100%;*/
            /*background-color: #424242;*/
        /*}*/
        /*.divider {*/
            /*width: 100%;*/
            /*height: 600px;*/
            /*clear: both;*/
            /*display: none;*/
        /*}*/
        #scope {
            width: 940px;
            height: 500px;
            padding: 50px;
            background-color: #FA7268;
            clear: both;
            display: none;
        }
        #scopeContainer {
            margin: auto;
            text-align: center;
            height: 500px;
            line-height: 500px;r
        }
    </style>
</head>
<body>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
            <div id="album">
                <h2 class="screen_out">${owner.nickname }님의 앨범</h2>
                <div id="btnWrap">
                    <form id="imgForm" action="/ajax/upload" method="POST" enctype="multipart/form-data">
                        <fieldset>
                            <legend class="screen_out">사진 추가 폼</legend>
                            <label id="addImgBtn" for="addImg">사진 추가</label>
                            <input type="file" name="name" id="addImg" multiple/>
                        </fieldset>
                    </form>
                </div>
                <!--<div id="scope">-->
                    <!--<div class="aux"></div>-->
                <!--</div>-->
                <ul id="myAlbum">
                </ul><!--//#myAlbum-->
            </div><!--//#album-->
        </div><!--//.aux-->
    </div><!--//#content-->
    <script type="text/template" id="imgsTmpl">
	<@_.each(images, function(image) { @>
        <li class="my_img" data-regdate="<@=image.regdate@>" data-width="" data-height="">
            <img src="/img/upload/<@=image.name@>" width="250" height="187.5"/>
        </li>
	<@ }) @>
    </script>
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script src="/js/underscore-min.js"></script>
<script src="/js/user_header.js"></script>
<script src="/js/moment-with-locales.js"></script>
<script>

_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};


    var $window = $(window),
        $document = $(document);

    var scrollNo = 1;
    
    var tmp = _.template($("#imgsTmpl").html());
    
    function getAlbum() {
    	var no = ${whosePage}
    	$.ajax({
    		dataType: "json",
    		data: {"scrollNo": scrollNo},
    		url: "/ajax/user/" + no + "/album",
    		error: function() {
    			alert("시스템 점검중... 앨범을 불러올 수 없습니다.");
    		}, success: function(json) {
    			var images = json;
    			$(images).each(function() {
    				this.regdate = moment(this.regdate).format("YYYY.MM.DD HH:mm:ss");
    			})
    			$("#myAlbum").append(tmp({"images":json}));
    		}//success() end
    	});//$.ajax() end
    }//getAlbum() end
    getAlbum();
    
    $window.scroll(function () {
        var docHeight = $document.height();
        var winHeight = $window.height();
        var scrollTop = $window.scrollTop();

        if(docHeight <= (scrollTop + winHeight) + 30 ) {
        	
        	scrollNo++;
        	getAlbum();
        	
        }//if end
    });//$window.scroll() end

    var imgReg = /^image/;
    var oldFiles = [];

    /* $("#addImg").change(function () {
        // var files = [];

        var files = this.files;

        var oldLength = oldFiles.length;
        var newLength = files.length;
        var form = new FormData();
        var flag = true;


        for(var i = 0 ; i < newLength ; i++) {
            var file = files[i];

            if(file == null || file.size <= 0) {
                alert("올바른 이미지 파일이 아닙니다.");
                return;
            }//if end

            if(!imgReg.test(file.type)) {
                alert("이미지 파일만 선택 가능합니다. 다시 선택해주세요.");
                return;
            }//if end

            for(var j = 0 ; j < oldLength ; j++) {
                if(file.name == oldFiles[j].name) {
                    alert("방금 업로드 된 사진이 포함되어있습니다. 다시 선택해주세요.");
                    flag = false;
                    break;
                }//if end
            }//for end
            if(flag) {
                oldFiles.push(file);
                // console.log(file);
                // console.log(file.name);
                form.append("uploadImages",file);
            }//if end
        }//for end

        $.ajax({
            url: "/ajax/upload",
            dataType: "json",
            type: "post",
            processData: false,
            contentType: false,
            data: form,
            error: function () {
                alert("서버 점검중, 잠시 후 다시 시도해주세요.");
            }, success: function (json) {
            	
            }//success() end
        });//ajax() end

    });//#addImg.change() end */

    var clickedRow = -1;
    var isFold = true;

    $("#myAlbum").on('click',".my_img",function () {
        var idx = $(this).index();
        var popupRow = Math.floor(idx/4);
        var maxRow = Math.floor($(".my_img").length/4);
        console.log(popupRow==maxRow)
        var coordinateTop = $("#myAlbum").offset().top + (194.5 * popupRow);
        var coordinateBottom = coordinateTop + 192.5;
        
        var image = new Image();
        image.src = $(this).children().attr("src");
        image.onload=function() {
	        if(image.naturalWidth > image.naturalHeight) {
	        	$("#zoomedImage").removeAttr("height").attr("width",889);
	        }else {
	        	$("#zoomedImage").removeAttr("width").attr("height",500);
	        }
        }
        
        var $scope = $("<div id='scope'>").append($("<div id='scopeContainer'>")
            .append($("<img id='zoomedImage' src='" + image.src + "' width='889' height='500'>")));
        
        /* maxWidth = 889 */
        /* maxHeight = 500 */
        

        // window.scrollTo(0, coordinateTop);
        scrollTo(coordinateTop, 500);

        var axisIdx = (popupRow+1)*4 - 1;

        if($(this).hasClass("selected")) {
            $("#scope").slideUp(500);
            // $(".divider").slideUp(500);
            function remove() {
                $("#scope").remove();
            }
            setTimeout(remove,600);
            $(".my_img").removeClass("selected");
            isFold = true;
        }else {
            if(isFold) {
                $(this).addClass("selected");
                if(maxRow!=popupRow) {
	                $(".my_img").eq(axisIdx).after($scope);
                }else {
	                $scope.appendTo($("#myAlbum"));
                }
                $("#scope").slideDown(500);
                isFold = false;
            }else {
                if(clickedRow == popupRow) {
                    $(".my_img").removeClass("selected");
                    $(this).addClass("selected");
                    $("#zoomedImage").attr("src",image.src);
                }else {
                    $(".my_img").removeClass("selected");
                    $("#scope").slideUp(500);
                    $("#scope").remove();
                    // $(".divider").hide();
                    // $(".divider").remove();
                    // $("#scope").hide();
                    isFold = true;
                    $(".my_img").eq(axisIdx).after($scope);
                    $("#scope").slideDown(500);
                    // $("<div class='divider'>").after($(".my_img").eq(axisIdx));
                    // $(".divider").slideDown(500);
                    // $("#scope").css("top",coordinateBottom + "px").slideDown(500);
                    $(this).addClass("selected");
                    isFold = false;
                }//if~else end
            }//if~else end
        }//if~else end
        clickedRow = popupRow;
    });//.my_img.click() end


</script>
</body>
</html>