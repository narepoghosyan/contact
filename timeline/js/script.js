$(function(){
	$('.circle').mouseover(function(){
		$(this).css("background-color", "#D3E4FF");
		$(this).parent().parent().parent().children(':first-child').children(':first-child').animate({fontSize:"30px"},300);
		$(this).parent().parent().parent().children(':last-child').children(':first-child').animate({fontSize:"30px"},300);
		$(this).parent().parent().parent().children(':last-child').children(':last-child').animate({fontSize:"20px"},300);
	})

	$('.circle').mouseout(function(){
		$(this).css("background-color", "#FFFFFF");
		$(this).parent().parent().parent().children(':first-child').children(':first-child').animate({fontSize:"22px"},300);
		$(this).parent().parent().parent().children(':last-child').children(':first-child').animate({fontSize:"22px"},300);
		$(this).parent().parent().parent().children(':last-child').children(':last-child').animate({fontSize:"18px"},300);
	})
})

