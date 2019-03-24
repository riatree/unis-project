function openChatPop(){

    //새 창을 가운데로 띄우기 위해 좌표계산.
    var left = Math.floor((screen.availWidth - 250) / 2);
    var top = Math.floor((screen.availHeight - 100) / 2);

    //창 옵션
    var winOpts = "width=900, height=800, left=" + left + ", top=" + top + ", scrollbars=no, resizable=yes";
    //창 오픈​
    window.open("chat.html", "",winOpts);
}