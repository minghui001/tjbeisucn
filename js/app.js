/*! product */
$(function () { $(".subNav").click(function () { $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd"); $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt"); $(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500) }) });
/*! mobile */
$(function () { $(".navbar").click(function () { $(".head_side").slideToggle("fast"); }); });
/*language*/
$(function () {
	$(".language").on("mouseenter", function () {
		$(this).addClass("language-active")
		$(this).find(".lang").slideDown();
	}).on("mouseleave", function () {
		$(this).removeClass("language-active");
		$(this).find(".lang").stop().slideUp(300);
	})
});
/*nav*/
$(function () {
	$(".nav_li").on("mouseenter", function () {
		$(this).addClass(" active")
		$(this).find(".nav_side").slideDown();
	}).on("mouseleave", function () {
		$(this).removeClass(" active");
		$(this).find(".nav_side").stop().slideUp(200);
	})
});
/*product 列表高度*/
$(function () {
	$(".pro_left").each(function () {
		$(this).css("height", $(this).next(".pro_right").height() - 2);
	})
});
function goTopEx() {
	var obj = document.getElementById("goTopBtn"); function getScrollTop() { return $(window).scrollTop() }
	function setScrollTop(value) { $(window).scrollTop(value) }
	window.onscroll = function () { getScrollTop() > 0 ? obj.style.display = "" : obj.style.display = "none" }; obj.onclick = function () { var goTop = setInterval(scrollMove, 10); function scrollMove() { setScrollTop(getScrollTop() / 1.1); if (getScrollTop() < 1) { clearInterval(goTop) } } }
};