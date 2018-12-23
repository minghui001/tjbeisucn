window.onload = function () {
    var ul_Nav = document.getElementsByClassName("downList"); var index_01 = document.getElementById("index_01"); var li_Nav = ul_Nav.children; var aGroup = []; var sid = getQueryString("sid"); var windowHref = window.location.href; getObjA(); findParentById(sid);
    function getObjA() { for (var i = 0; i <= 3; i++) { var a = ul_Nav[i].getElementsByTagName("a"); aGroup.push(a); } }
    function findParentById(sid) { for (var i = 0; i <= 3; i++) { for (var j = 0; j <= aGroup[i].length - 1; j++) { if (aGroup[i][j].href == windowHref) { aGroup[i][j].parentNode.parentNode.parentNode.children[0].className = "nav_a_bold"; } } } }
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); var r = window.location.search.substr(1).match(reg); var context = ""; if (r != null)
            context = r[2]; reg = null; r = null; return context == null || context == "" || context == "undefined" ? "" : context;
    }; var logo = Zepto("#logo"); logo.on("click", function (e) { e.preventDefault(); location.href = "https://www.tjbeisu.cn"; }); var headNav = Zepto("#head_nav"); var navShow = Zepto("#nav_s"); var black_bg = Zepto("#black_bg"); var isNavShow = false; navShow.on("click", function (e) { e.preventDefault(); if (!isNavShow) { headNav.css("display", "block"); black_bg.css("display", "block"); isNavShow = true; } else { headNav.css("display", "none"); black_bg.css("display", "none"); isNavShow = false; } }); var mainLeft = document.getElementById("xy_main_left"); if (mainLeft) { var links = mainLeft.getElementsByTagName("a"); for (var a = 0; a <= links.length - 1; a++) { if (links[a].clientHeight == 90) { links[a].className = "lineHeight_a_25"; } } }
    var caselis = document.getElementsByClassName("pl"); for (var cli = 0; cli <= caselis.length - 1; cli++) { var ca = caselis[cli].getElementsByTagName("a"); var divbg, divname; ca[0].onmouseover = function () { divbg = this[0].getElementsByClassName("red_bg"); divname = this[0].getElementsByClassName("bottom_name"); divbg[0].style.visibility = "visible"; divname[0].style.visibility = "hidden"; }.bind(ca); ca[0].onmouseout = function () { divbg = this[0].getElementsByClassName("red_bg"); divname = this[0].getElementsByClassName("bottom_name"); divbg[0].style.visibility = "hidden"; divname[0].style.visibility = "visible"; }.bind(ca); }
    var ul = document.getElementById("navUL"); var liArray = ul.children; for (var j = 0; j <= liArray.length - 1; j++) { if (j != 0) { liArray[j].onmouseover = function () { this.children[1].className = "downListShow"; }.bind(liArray[j]); liArray[j].onmouseout = function () { this.children[1].className = "downList"; }.bind(liArray[j]); } }
    if (window.innerWidth > 640) {
        var picGroup = document.getElementsByClassName("caseCenterPic"); var sidePicGroup = []; var time = 0; var fps = 0; var isAutoPlay = false; var isLeft = false; var isRight = false; var curPic = null; var leftBtn = document.getElementById("leftmovePic"); var rightBtn = document.getElementById("rightmovePic"); if (leftBtn && rightBtn) { leftBtn.onclick = leftMove; rightBtn.onclick = rightMove; }
        setDefaultPicPosX(); function setDefaultPicPosX() { for (var i = 0; i <= picGroup.length - 1; i++) { picGroup[i].style.left = (i * 595) + "px"; } }
        function setPicPosX(d) {
            sidePicGroup = []; for (var i = 0; i <= picGroup.length - 1; i++) { if (picGroup[i].offsetLeft != 0) { sidePicGroup.push(picGroup[i]); } else { curPic = picGroup[i]; } }
            var curId = parseInt(curPic.id.charAt(curPic.id.length - 1)); if (curId != 1 && curId != picGroup.length) { sidePicGroup.reverse(); }
            if (curId == 3 && d == "left" && picGroup.length > 3) { var tmp = sidePicGroup[sidePicGroup.length - 1]; sidePicGroup.pop(); sidePicGroup.unshift(tmp); }
            if (curId == 2 && d == "right" && picGroup.length > 3) { var tmp = sidePicGroup[0]; sidePicGroup.shift(); sidePicGroup.push(tmp); }
            for (var j = 0; j <= sidePicGroup.length - 1; j++) { if (d == "left") { sidePicGroup[j].style.left = (-(sidePicGroup.length - j) * 595) + "px"; } else if (d == "right") { sidePicGroup[j].style.left = ((j + 1) * 595) + "px"; } }
        }
        function movePic(d, speed) {
            for (var i = 0; i <= picGroup.length - 1; i++) {
                var posX = picGroup[i].offsetLeft; if (d == "left") { posX += speed; } else if (d == "right") { posX -= speed; }
                picGroup[i].style.left = posX + "px"; if (Math.abs(posX) % 595 == 0) { isLeft = false; isRight = false; isAutoPlay = false; time == 0; }
            }
        }
        function leftMove() { if (!isLeft) { setPicPosX("left"); isLeft = true; isRight = false; isAutoPlay = false; } }
        function rightMove() { if (!isRight) { setPicPosX("right"); isRight = true; isLeft = false; isAutoPlay = false; } }
        var update = function () {
            requestAnimationFrame(update); fps++; if (fps == 60) { time++; fps = 0; if (time % 5 == 0 && !isLeft && !isRight) { setPicPosX("left"); isAutoPlay = true; } }
            if (isAutoPlay) { movePic("left", 35); }
            if (isLeft) { movePic("left", 35); }
            if (isRight) { movePic("right", 35); }
        }; update();
    }
};