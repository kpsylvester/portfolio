$(function() {
	$("#menu").localScroll();
	$(window).on("notify.serialScroll", function() {
		console.log("serialScroll");
	});
});