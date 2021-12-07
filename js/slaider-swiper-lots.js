new Swiper('.slaider-lots', {
	navigation: {
		nextEl: '.control-slaider-lots__arow_next',
		prevEl: '.control-slaider-lots__arow_prev'
	},
	loop: true,
	slidesPerView: 3,
	// autoHeight: true,
	spaceBetween: 0,
	centerSlides: true,

});

const swiper = new Swiper('.slaider-lots', {
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		// when window width is >= 320px
		500: {
			slidesPerView: 1,
			spaceBetween: 0
		},

		// when window width is >= 480px
		720: {
			slidesPerView: 2,
			spaceBetween: 0
		},
		// when window width is >= 640px
		970: {
			slidesPerView: 3,
			spaceBetween: 0
		}
	}
})