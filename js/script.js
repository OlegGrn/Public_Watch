$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu').toggleClass('icon-menu_active');
		$('.header__menu').toggleClass('header__menu_active');
		$('body').toggleClass('lock');
		$('.header__user-link').toggleClass('header__user-link_color');

	});


});

let user_icon = document.querySelector('.header__user-icon');
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector('.header__user-menu');
	user_menu.classList.toggle('header__user-menu_active')

});

