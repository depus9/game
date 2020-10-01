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
	$('.tags-carousel').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		mouseDrag: false,
		stagePadding: 0,
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
				items:3,
				nav:true
			},
			1000:{
				items:7,
				nav:true,
				loop:false
			},
			1500:{
				items:9,
				nav:true,
				loop:false
			}
		}
	});$('.list-icons-carousel').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		mouseDrag: false,
		stagePadding: 0,
		items: 5,
		autoplay: false,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		margin: 10,
		responsive:{
			0:{
				items:4,
				nav:true,
				mouseDrag: true,
			},
			600:{
				items:5,
				nav:true,
				mouseDrag: true,
			},
			1000:{
				items:7,
				nav:true,
				loop:false
			},
			1500:{
				items:9,
				nav:true,
				loop:false
			}
		}
	});
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
		percentPosition: true
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
$(window).scroll(function(){
	var $this = $(this);
	var scrollpos = $this.scrollTop();
	if(scrollpos > 100){
		$('.sticky-item').addClass('showup');
	}else{
		$('.sticky-item').removeClass('showup');
	}
})

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
		$('.greetings-name').html(getText);
	});

	$('.input-lastname').keyup(function(){
		var getText = $(this).val();
		$('.greetings-surname').html(getText);
	});
	$(document).on('click','.search-bar, .sticky-item', function(e){
		e.preventDefault();
$('#sideBarItem').addClass('openIt');
$('.sticky-item').addClass('moveright')
	})
	$(document).on('click','.hideSidebar, .sidebar-overlay', function(e){
		$('#sideBarItem').removeClass('openIt');
		$('.sticky-item').removeClass('moveright')
		e.preventDefault();
	})
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
	//hover addvideo
	$(document).on('mouseenter','.grid-item .item', function(){
	})
	//fullscreen game window
	let fullScreen = false;
	$(document).on('click','.full-screen', function(){
		if(fullScreen){
			fullScreen = false;
			closeFullscreen()
		}else{
			openFullscreen();
			fullScreen = true;
		}

	})
	var elem = document.getElementById('fullScreen');
	function openFullscreen() {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
	}

	function closeFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
	//search payment methods
	$(document).on('keyup change', '#searchpayment', function(){
		var $this = $(this);
		var searchfor = $this.val().toUpperCase();
		$('.paymentoption').hide();
		$('.paymentoption').each(function(){

			var title = $(this).find('h2').text().toUpperCase();
			if(title.includes(searchfor)){
				$(this).show();

			}
		})
	});
	//select payment type
	$(document).on('click', '.select-method', function(e){
		e.preventDefault();
		var $this = $(this);
		var showMethod = $this.data('method');
		$('.selectedPayment').removeClass('selectedPayment')
		$('.activePayment').removeClass('activePayment')
		$this.addClass('selectedPayment')
		$(showMethod).addClass('activePayment')
	})
	//go back
	$(document).on('click', '#goBack', function(e){
		e.preventDefault();
		window.history.back(1);
	})
	//package filter
	$(document).on('click','.package-filter a', function(e){
		e.preventDefault();
		var $this = $(this);
		$('.showPackage').removeClass('showPackage');
		$this.addClass('showPackage');
		var showPackage = $this.data('package');
		$(showPackage).addClass('showPackage');

	})
		$(document).on('click','.showPackageDetails', function(){
			var $this = $(this);
			var showPaackage = $this.data('details')
			if(!$(showPaackage).is(':visible')){
				$('.packageDetails').slideUp();
				$('.showMyPackage').removeClass('showMyPackage')
			}

			$(showPaackage).slideToggle();
			$this.toggleClass('showMyPackage');
		})
	//tooltip
	$('[data-toggle="tooltip"]').tooltip()
	//full page landing
	$('#game-landing').fullpage({
		scrollBar: true,
		navigation: true
	});
})(jQuery);

