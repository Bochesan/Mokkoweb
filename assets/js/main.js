$(document).ready(function(){

	$('#portfolio_slider').bxSlider({
		pager: true,
		captions: true,
		touchEnabled: true,
		controls: true,
		responsive: true,
		pagerType: 'short'
	});

	$('.second_logo').fancybox();
	$('.buy_btn').fancybox();

});