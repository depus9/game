/* =================================
------------------------------------
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';
$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.setBackground').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

/*
* Featured awesome
* */
	$('.featured-carousel').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		stagePadding: 40,
		items: 5,
		autoplay: false,
		margin: 10,
		responsive:{
			0:{
				items:2,
				nav:true
			},
			600:{
				items:4,
				nav:true
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			},
			1500:{
				items:7,
				nav:true,
				loop:false
			}
		}
	});
	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span></span>');
		}else{
			$(this).html(index);
			$(this).append('<span></span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	var $mq = $('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true,
		pauseOnHover: true
	});
//filter
	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
	});
})(jQuery);

