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
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
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
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
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
	//scroll to section
	$(document).on('click', 'a.scroll[href^="#"]', function(e) {
		// target element id
		var id = $(this).attr('href');

		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}
		// prevent standard hash navigation (avoid blinking in IE)
		e.preventDefault();
		// top position relative to the document
		var pos = $id.offset().top;
		// animated top scrolling
		$('body, html').animate({scrollTop: pos}, 1000);
	});
	// MODAL LOGIN


	$('.sign-in-modal').click(function(e) {
		e.preventDefault();
		$('.sign-in-modal').removeClass('active');
		$('.inner--sign-in-modal').removeClass('active');
	});

	$('.inner--sign-in-modal').click(function(e){
		e.stopPropagation();
	})

	$('.close-login').click(function(e){
		e.preventDefault();
		$('.sign-in-modal').removeClass('active');

		$('.inner--sign-in-modal').removeClass('active');
	})

	/* MODAL */
	$('.modal-sign').click(function(e){
		e.preventDefault();
		$('.sign-in-modal').addClass('active');
		$('.inner--sign-in-modal').addClass('active');
		setTimeout(function(){
			$('.overlay').removeClass('sign-up-side');
			$('.overlay').addClass('sign-in-side');
			$('.tab-sign-up').removeClass('active');
			$('.tab-sign-in').addClass('active');
			$('.content-sign-up').removeClass('active');
			$('.content-sign-in').addClass('active');
		}, 400);
	});

	$('.inner--sign-in-modal .close-modal').click(function(e){
		e.preventDefault();
		$('.sign-in-modal').removeClass('active');
		$('.inner--sign-in-modal').removeClass('active');
	});

	$('.val-info .tab').click(function(e){
		e.preventDefault();
		if($(this).hasClass('tab-sign-in') == true){
			$('.overlay').removeClass('sign-up-side');
			$('.overlay').addClass('sign-in-side');
			$('.tab-sign-up').removeClass('active');
			$('.tab-sign-in').addClass('active');
			$('.content-sign-up').removeClass('active');
			$('.content-sign-in').addClass('active');
		} else {
			$('.overlay').removeClass('sign-in-side');
			$('.overlay').addClass('sign-up-side');
			$('.tab-sign-in').removeClass('active');
			$('.tab-sign-up').addClass('active');
			$('.content-sign-in').removeClass('active');
			$('.content-sign-up').addClass('active');
		}
	});

	//Greetings
	$('.input-firstname').keyup(function(){
		var getText = $(this).val();
		console.log(getText);
		$('.greetings-name').html(getText);
	});

	$('.input-lastname').keyup(function(){
		var getText = $(this).val();
		console.log(getText);
		$('.greetings-surname').html(getText);
	});
	//play game
	$('#play').click(function(event){
		event.preventDefault();
		var $this = $(this);
		var url = $this.data('url')
		//var url = $(this).html(); //this will not work
		$(".game-thumb").html('<iframe width="100%" height="100%" src="'+ url +'" frameborder="0" allowfullscreen></iframe>');
		$(this).hide();
		//$('video-poster').css('z-index','-1');

	});
})(jQuery);

