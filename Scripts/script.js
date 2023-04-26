//js

// Navbar resize background
if($(window).width() < 972){
		var $nav = $("#main_navbar");
		$nav.addClass("scrolled");
	}
$(window).resize(function(){
	if($(window).width() < 972){
		var $nav = $("#main_navbar");
		$nav.addClass("scrolled");
	}
	else{
		var $nav = $("#main_navbar");
		$nav.removeClass("scrolled");
	}
});

// Navbar Scroll Background
$(function(){
    $(document).scroll(function(){
    	if($(window).width() > 972){
    		var $nav = $("#main_navbar");
    		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    	}
    });
});