$(function(){
	$('.form-input').focus(function(){
		if($(this).val() == ""){
			$(this).css('box-shadow', '0 2px 0 0 #73C8C1');
			$(this).parent().children(':first-child').animate({fontSize:"14px", bottom:"25px"}, 300);
		}
    });

    $('.form-input').blur(function(){
		if($(this).val() == ""){
			$(this).css('box-shadow', '0 1px 0 0 #e5e5e5');
			$(this).parent().children(':first-child').animate({fontSize:"18px", bottom:"0px"}, 300);
		} else {
			$(this).css('box-shadow', '0 1px 0 0 lightgreen');
		}
    });

    $('.message-input').focus(function(){
		if($(this).val() == ""){
			$(this).css('box-shadow', '0 2px 0 0 #73C8C1');
			$(this).parent().children(':first-child').animate({fontSize:"14px", bottom:"150px"}, 300);
		}
    });

    $('.message-input').blur(function(){
		if($(this).val() == ""){
			$(this).css('box-shadow', '0 1px 0 0 #e5e5e5');
			$(this).parent().children(':first-child').animate({fontSize:"18px", bottom:"120px"}, 300);
		} else {
			$(this).css('box-shadow', '0 1px 0 0 lightgreen');
		}
    });
})


