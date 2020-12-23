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
	});
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		mouseDrag: true,
		stagePadding: 0,
		items: 1,
		autoplay: true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		margin: 0,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true,
				loop:true
			},
			1500:{
				items:1,
				nav:true,
				loop:true
			}
		}
	});
	$('.list-icons-carousel').owlCarousel({
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
	if($('#game-landing').length){
		$('#game-landing').fullpage({
			scrollBar: true,
			navigation: true
		});
	}

$(document).on('click', 'span.play-game', function(){
	$(this).fadeOut(500);
	$('#gameFrame').addClass('playNow')
})
//menu js

$(document).ready(function(){ jQuery(document).ready(function(){jQuery("#jquery-accordion-menu").jqueryAccordionMenu(); jQuery(".colors a").click(function(){if($(this).attr("class") !="default"){$("#jquery-accordion-menu").removeClass(); $("#jquery-accordion-menu").addClass("jquery-accordion-menu").addClass($(this).attr("class"));}else{$("#jquery-accordion-menu").removeClass(); $("#jquery-accordion-menu").addClass("jquery-accordion-menu");}});}); });

eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('94(61(54,52,50,53,51,55){51=61(50){64(50<52?\'\':51(95(50/52)))+((50=50%52)>35?68.98(50+29):50.97(36))};73(!\'\'.70(/^/,68)){71(50--){55[51(50)]=53[50]||51(50)}53=[61(51){64 55[51]}];51=61(){64\'\\\\59+\'};50=1};71(50--){73(53[50]){54=54.70(109 96(\'\\\\56\'+51(50)+\'\\\\56\',\'57\'),53[50])}}64 54}(\'86(31(54,52,50,53,51,55){51=31(50){32(50<52?\\\'\\\':51(91(50/52)))+((50=50%52)>35?34.39(50+29):50.84(36))};38(!\\\'\\\'.37(/^/,34)){33(50--){55[51(50)]=53[50]||51(50)}53=[31(51){32 55[51]}];51=31(){32\\\'\\\\\\\\59+\\\'};50=1};33(50--){38(53[50]){54=54.37(125 83(\\\'\\\\\\\\56\\\'+51(50)+\\\'\\\\\\\\56\\\',\\\'57\\\'),53[50])}}32 54}(\\\'219(63(54,52,50,53,51,55){51=63(50){60(50<52?\\\\\\\'\\\\\\\':51(220(50/52)))+((50=50%52)>218?99.217(50+29):50.22(21))};74(!\\\\\\\'\\\\\\\'.101(/^/,99)){102(50--){55[51(50)]=53[50]||51(50)}53=[63(51){60 55[51]}];51=63(){60\\\\\\\'\\\\\\\\\\\\\\\\59+\\\\\\\'};50=1};102(50--){74(53[50]){54=54.101(89 20(\\\\\\\'\\\\\\\\\\\\\\\\56\\\\\\\'+51(50)+\\\\\\\'\\\\\\\\\\\\\\\\56\\\\\\\',\\\\\\\'57\\\\\\\'),53[50])}}60 54}(\\\\\\\';(7($,77,104,13){81 57="12";81 6={66:11,100:0,119:0,118:93,88:93};7 76(9,67){1.9=9;1.221=$.103({},6,67);1.10=6;1.14=57;1.87()};$.103(76.15,{87:7(){1.92();1.106();8(6.88){1.59()}},92:7(){$(1.9).5("225").58("19").113("112 111",7(51){51.18();51.16();8($(1).5(".3").54>0){8($(1).5(".3").80("17")=="223"){$(1).5(".3").116(6.100).213(6.66);$(1).5(".3").56("52").115("3-50-65");8(6.118){$(1).56().5(".3").120(6.66);$(1).56().5(".3").56("52").72("3-50-65")}117 202}203{$(1).5(".3").116(6.119).120(6.66)}8($(1).5(".3").56("52").199("3-50-65")){$(1).5(".3").56("52").72("3-50-65")}}77.205.108=$(1).5("52").210("108")})},106:7(){8($(1.9).58(".3").54>0){$(1.9).58(".3").56("52").206("<53 124=\\\\\\\\\\\\\\\'3-50\\\\\\\\\\\\\\\'>+</53>")}},59:7(){81 4,55,79,75;$(1.9).58("52").113("112 111",7(51){$(".4").248();8($(1).5(".4").54===0){$(1).250("<53 124=\\\\\\\\\\\\\\\'4\\\\\\\\\\\\\\\'></53>")}4=$(1).58(".4");4.72("121-4");8(!4.78()&&!4.69()){55=262.260($(1).259(),$(1).257());4.80({78:55,69:55})}79=51.247-$(1).110().107-4.69()/2;75=51.237-$(1).110().105-4.78()/2;4.80({105:75+\\\\\\\\\\\\\\\'114\\\\\\\\\\\\\\\',107:79+\\\\\\\\\\\\\\\'114\\\\\\\\\\\\\\\'}).115("121-4")})}});$.242[57]=7(67){1.240(7(){8(!$.122(1,"123"+57)){$.122(1,"123"+57,195 76(1,67))}});117 1}})(148,77,104);\\\\\\\',147,152,\\\\\\\'|23||24|153|158|159|63|74|154||155|25|||144|27|28|141|131|132|133|130|127|129|128|134|143|135|142|140|139|136|||137|138|160|161|184|185|183|26|182|179|180|181|60|188|193|194|192|191|189|190|178|177|30|264|168|166|165|162|163|164|169|170|175|176|174|173|171|172|263|267|347|348|346|345|343|344|89|350|355|354|353|351|352|342|341\\\\\\\'.332(\\\\\\\'|\\\\\\\'),0,{}))\\\',82,333,\\\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||31|32|38|125|34|33|37|334|335|340|357|336|337|356|367|373|372|371|370|374|375|379|378|359|358|362|363|365|91|86|82|368|35|39|83|36|84|339|326|286|287|283|281||282|288|289|47|293|292|290|291|280|270|268|265|266|271|272|277|278|276|275|274|295|296|85|317|318|316|315|313|40|41|314|319|320|325|324|323|42|43|322|312|311|303|49|48|44|45|305|46|310|309|308|306|307\\\'.85(\\\'|\\\'),0,{}))\',62,284,\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||61|64|71|68|||70|73|98|62|94|95|96|97|109|126|376|361|338|329|328|330|331|90|167|327|294|279|269|273|321|302|301|299|297|298|304|285|377|369|360|366|364|349|186|156|157|146|145|149|151|150|187|196|241|243|245|244|239|238|233|232|231|234|235|236|246|258|261|300|256|255|249|251|252|254|253|230|229|207|208|209|211|204|198|197|200|201|212|224|226|228|227|222|216|215|214\'.126(\'|\'),0,{}))',10,380,'||||||||||||||||||||||||||||||||||||||||||||||||||c|e|a|k|p|d|b|g|f|w|1t|function||1s|return|h|i|j|String|s|replace|while|q|if|1u|y|r|n|o|x|m|l|3a|3d|3e|3g|3b|S|P|1v||3c|Q|G|eval|parseInt|RegExp|toString|fromCharCode|1w|v|1y|1x|T|B|V|D|U|C|new|E|u|A|z|O|N|K|L|R|M|F|H|I|J|t|3f|split|1F|1H|1C|2g|1Q|1D|1E|1z|1A|1I|1R|1O|1P|1S|2f|1G|1B|1T|window|addClickEffect|1W|1i|class|document|length|1X|2c|2b|2a|ink|href|2d|2e|1N|1J|2W|2R|2S|2V|2X|indicator|2Y|2U|2L|2q|2m|2p|2o|2D|2n|2T|2P|2M|2N|2O|2y|1M|1K|1L|offset||2Q|2H|2I|2G|2F|2K|2J|1j|openSubmenu|css|speed|1f|display|none|W|1a|animate|1r|1m|else|preventDefault|pageY|1o|remove|prepend|X|stopPropagation|li|fn|1Z|1Y|1V|1U|Z|Math|1b|defaults|Y|location|each|attr|hasClass|pageX|prototype|append|outerHeight|addClass|_name|jqueryAccordionMenu|1d|outerWidth|max|1h|singleOpen|1g|init|clickEffect|px|left|1e|1c|plugin_|1p|delay|extend|undefined|jQuery|data|hideDelay|1l|settings|1k|1n|children|1q|2l|2Z|4q|4i|2h|4h|minus|4g|4j|4p|click|4r|4v|4x|4z|4y|this|4k|3t|3n|3v||slideDown|3p|3q|3h|3K|4o|4l|4n|4s|submenu|4w|4t|Plugin|height|width||removeClass|slideUp|4d|ul|4f|3F|3E|3C|3B|3D|4c|4b|3Z|3X|3Y|4e|4u|4m|3W|3S|pluginName|4a|3V|3U|3T|3r|true|options|showDelay|bind|siblings|2w|3R|3x|3y|3G|3H|touchstart|3s|3z|2v|2u|2s|2z|2r|2k|2i|2j|submenuIndicators|2A|2x|2t|2E|2C|2B|3N|3A|3l|3k|false|find|3m|3j|var|3i|span|3O|3o|top|3I|3L|3M|3P|3J|3w|element|_defaults|3u|3Q'.split('|'),0,{}))

})(jQuery);


