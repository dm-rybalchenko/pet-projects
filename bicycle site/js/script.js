//бургер
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .nav__row').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.nav__about, .nav__work, .nav__shop, .nav__contact').click(function(event){
		$('.header__burger, .nav__row').removeClass('active');
		$('body').removeClass('lock');
	});
});
//прокрутка
jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>260){
	                $('.header').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<260){
	                $('.header').removeClass('fixed');
	            }
	        });
	    });

//анимация при скролле
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout (() => {
		animOnScroll();
	}, 300);
}