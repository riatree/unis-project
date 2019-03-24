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
            color: #242424;
        }
        #feedsWrap {
            margin-top: 485px;
            clear: both;
            overflow: hidden;
        }
        #feedsWrap table {
            border-collapse: collapse;
            margin-bottom: 40px;
        }
        #feedsWrap table a {
            text-decoration: none;
            color: #242424;
        }
        #feedsWrap th {
            font-family: "Do Hyeon", display;
            font-size: 24px;
            padding: 20px 0;
        }
        #feedsWrap td {
            border-top: 1px solid #424242;
            border-bottom: 1px solid #424242;
            line-height: 22px;
            padding: 10px;
        }
        #feedsWrap tbody>tr:hover {
            background-color: #DEDEDE;
        }
        #feedsWrap tbody>tr:nth-child(1)>td {
            border-top: 2px solid #424242;
        }
        #feedsWrap tr>td:nth-child(1) {
            font-weight: bold;
            font-size: 14px;
            width: 90px;
            vertical-align: middle;
            text-align: center;
        }
        #feedsWrap tr>td:nth-child(2) {
            text-align: justify;
        }
        #feedsWrap tr>td:nth-child(3) {
            font-size: 13px;
            width: 120px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <%--
        - 북마크 한 유저의 새로운 INES / UNES 등록
        - 북마크 한 유저의 새로운 매칭()
        - 나에게 들어온 새로운 신청
        - 새로 달린 댓글
        - 내가 쓴 SUPPORT 응답
        - 내가 신고한 내역에 대한 처리 결과
        - 내가 작성한 UNES / INES의 기한 만료
    --%>
<c:import url="/WEB-INF/template/header.jsp"></c:import>
	<c:import url="/WEB-INF/template/user_header.jsp"></c:import>
	<h3 class="screen_out">피드 목록</h3>
            <div id="feedsWrap">
                <table>
                    <thead>
                        <tr>
                            <th>알림 유형</th>
                            <th>피드 내용</th>
                            <th>시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="feed">
                            <td>새로운 댓글</td>
                            <td>
                                EAGER Kim님이
                                <a href="">'오늘 여기 가봤는데, 커피 맛있고 좋더군요.'</a>
                                댓글을 달았습니다.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                        <tr class="feed">
                            <td>UNES 종료</td>
                            <td>
                                내가
                                '허전한 벽을 채워주실 화가를 모십니다.(대리판매 가능)'
                                제목으로 작성했던 UNES의 종료일이 되어 해당 UNES의 아티스트 모집이 종료되었습니다.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                        <tr class="feed">
                            <td>북마크 알림</td>
                            <td>
                                민들레씨님이
                                '당하동 근처 아카펠라 공연 가능한 카페를 찾습니다'
                                INES를 새로 등록하였습니다.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                        <tr class="feed">
                            <td>북마크 알림</td>
                            <td>
                                민들레씨님이
                                새로운 매칭이 성사되어, 당하동 커피 볶는 남자에서
                                새로운 이벤트를 진행 할 예정입니다.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                        <tr class="feed">
                            <td>새 신청</td>
                            <td>
                                내가
                                '허전한 벽을 채워주실 화가를 모십니다.(대리판매 가능)'
                                제목으로 작성했던 UNES에 새로운 아티스트가 신청했습니다.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                        <tr class="feed">
                            <td>고객센터 답변</td>
                            <td>
                                안녕하세요.<br />
                                고객님의 행복을 위해 항상 노력하는 관리팀입니다.<br />
                                문의해주신 현상에 대해서 확인해봤는데요,<br />
                                동일한 문제가 재현되지 않아 문제 파악이 어렵네요...<br />
                                내부적으로 조사하여 확인되는 경우 수정될 수 있도록 할게요.<br />
                                불편을 끼쳐 드린 점 양해바라며,<br />
                                보다 안정적인 서비스 제공을 위해서 노력하겠습니다.<br />
                                그외 다른 문의사항이 있다면 언제든지 문의글을 접수해주세요.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                        <tr class="feed">
                            <td>신고 처리 결과</td>
                            <td>
                                내가
                                INES에 대해 신고했던 '사칭 및 허위 내용...'에 대한
                                제재가 적절히 이루어졌습니다.
                            </td>
                            <td>2019-01-02 19:55:42</td>
                        </tr>
                    </tbody>
                </table>
            </div><!--//#feedsWrap-->
        </div><!--//.aux-->
    </div><!--//#content-->
<c:import url="/WEB-INF/template/footer.jsp"></c:import>
<script src="/js/jquery.js"></script>
<script src="/js/user_header.js"></script>
<script>

</script>
</body>
</html>