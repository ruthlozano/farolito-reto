$(document).ready (function(){
	$(".circulo-1").hover
	(
		function()
		{
			$(this).stop().animate({ opacity: 0 }, 1000);
		},
		function()
		{
			$(this).stop().animate({ opacity: 1 }, 1000);	
		}
	);
});
$(window).scroll(function(){
	var menu = $(this).scrollTop();
	if (menu >400){
		$(".navbar").addClass("scroll")
	}
	else if(menu < 400){
		$(".navbar").removeClass("scroll");
	}
});