
/*
nav-item
当鼠标移动的此标签后，激活下拉列表、展开列表；
当鼠标离开后，删除激活的下拉列表、停止
*/
$(function () {
	$(".nav-item").on("mouseenter", function () {
		$(this).addClass("show")
		$(this).find(".nav_side").slideDown();
	}).on("mouseleave", function () {
		$(this).removeClass("show");
		$(this).find(".nav_side").stop().slideUp(200);
	})
});

