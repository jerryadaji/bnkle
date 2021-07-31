$(document).ready(function () {
	$(".menu-btn").click(function () {
		$(this).toggleClass("is-active");
		$(".page-header .navigation-list").slideToggle();
		$("body").toggleClass("noScroll");
		$(".main-content").toggleClass("open");
	});
});

new WOW().init();
