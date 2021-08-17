$(document).ready(function () {
	$(".menu-btn").click(function () {
		$(this).toggleClass("is-active");
		$(".page-header .navigation-list").slideToggle();
		$("body").toggleClass("noScroll");
		$(".main-content").toggleClass("open");
	});
	
	$(".go-to-form").click(function() {
		$('html, body').animate({
			scrollTop: $("#bnkle-contact-form").offset().top
		}, 1000);
	});
});

new WOW().init();
