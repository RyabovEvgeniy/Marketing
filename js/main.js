$(function() {
	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow-right"></button>',
	});
	
	$('.menu__burger-btn').click(function(event) {
		$('.menu__burger-btn').toggleClass('activ');
		$('.menu__list').toggleClass('activ');
		$('body').toggleClass('lock');
	});
	
	
	var mixer = mixitup('.portfolio__content');
});