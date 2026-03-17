(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	/*----------------------------------------
		Navigation - smooth scroll & mobile toggle
	----------------------------------------*/
	var OnePageNav = function() {
		var navToggler = $('.navbar-toggler');

		$(".smoothscroll[href^='#'], #pb-navbar ul li a[href^='#']").on('click', function(e) {
			e.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function(){
				window.location.hash = hash;
			});
		});

		$("#pb-navbar ul li a[href^='#']").on('click', function(e){
			if ( navToggler.is(':visible') ) {
				navToggler.click();
			}
		});
	};


	/*----------------------------------------
		Animate Scroll
	----------------------------------------*/
	var contentWayPoint = function() {
		var i = 0;
		$('.site-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('site-animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .site-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn site-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft site-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight site-animated');
							} else {
								el.addClass('fadeInUp site-animated');
							}
							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};


	/*----------------------------------------
		Navbar hide/show on scroll
	----------------------------------------*/
	var navbarState = function() {

		var lastScrollTop = 0;
		$(window).scroll(function(){

			var $this = $(this),
				st = $this.scrollTop(),
				navbar = $('.site-navbar');

			if ( st > 200 ) {
				navbar.addClass('scrolled');
			} else {
				navbar.removeClass('scrolled awake');
			}

			if ( navbar.hasClass('scrolled') && st > 300 ) {
				if (st > lastScrollTop){
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				} else {
					navbar.addClass('awake');
					navbar.removeClass('sleep');
				}
				lastScrollTop = st;
			}

		});

		$('.site-navbar')
			.mouseenter(function() {
				var $this = $(this);
				$this.addClass('awake');
				$this.removeClass('sleep');
			})
			.mouseleave(function() {
				var $this = $(this);
				$this.addClass('sleep');
				$this.removeClass('awake');
			});
	};


	/*----------------------------------------
		Portfolio Masonry
	----------------------------------------*/
	var portfolioMasonry = function() {
		$('.filters ul li').click(function(){
			$('.filters ul li').removeClass('active');
			$(this).addClass('active');

			var data = $(this).attr('data-filter');
			$grid.isotope({
				filter: data
			});
		});

		if(document.getElementById("section-portfolio")){
			var $grid = $(".grid").isotope({
				itemSelector: ".all",
				percentPosition: true,
				masonry: {
					columnWidth: ".all"
				}
			});
		}
	};


	$(function(){
		OnePageNav();
		contentWayPoint();
		navbarState();
		portfolioMasonry();
	});

})();
