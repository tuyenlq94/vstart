jQuery( function ( $ ) {

	var clickEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
	function toggleMenu() {
		const nav = document.querySelector( '.nav' );
		if ( !nav ) {
			return;
		}

		const menu = nav.querySelector( 'ul' ),
			button = document.querySelector( '.menu-toggle' );

		menu.setAttribute( 'aria-expanded', 'false' );
		button.addEventListener( 'click', () => {
			if ( nav.classList.contains( 'is-open' ) ) {
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			} else {
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			}
			nav.classList.toggle( 'is-open' );
		} );
	}

	function closeMenu() {
		$( '.icon-close' ).click( function () {
			if ( $( '#navBar' ).hasClass( 'is-open' ) ) {
				$( '#navBar' ).removeClass( 'is-open' );
			} else {
				$( '#navBar' ).addClass( 'is-open' );
				return false;
			}
		} );
	}

	let slickSlide = () => {
		$( '.slider-hero' ).slick( {
			slidesToShow: 1,
			centerMode: false,
			centerPadding: '60px',
			dots: false,
			arrows: false,
			rows: 0,
			autoplaySpeed: 5000,
		} );
		$( '.main-menu__inner' ).slick( {
			slidesToShow: 1,
			dots: false,
			arrows: true,
			rows: 0,
			autoplay: false,
			prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'></button>",
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 600,
					centerPadding: '0px',
					settings: {
						slidesToShow: 1,
					}
				},
			]
		} );
		$( '.slider-for' ).slick( {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.slider-nav'
		} );
		$( '.slider-nav' ).slick( {
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: false,
			rows: 0,
			centerMode: true,
			focusOnSelect: true
		} );
	};

	function goback() {
		$( '.goback' ).on( 'click', function ( e ) {
			history.back( -1 );
		} );
	}

	function scrollToTop() {
		var $window = $( window ),
			$button = $( '.scroll-to-top' );
		$window.scroll( function () {
			$button[ $window.scrollTop() > 100 ? 'removeClass' : 'addClass' ]( 'hidden' );
		} );
		$button.on( 'click', function ( e ) {
			e.preventDefault();
			$( 'body, html' ).animate( {
				scrollTop: 0
			}, 500 );
		} );
	}

	toggleMenu();
	closeMenu();
	scrollToTop();
	slickSlide();
	goback();
} );
