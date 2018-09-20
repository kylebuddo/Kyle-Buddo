$(document).ready(function(){

	$(window).mousemove(function(e){
		var movementStrength = 50;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();

		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 0;
		var newvalueY = height * pageY * -1 - 50;
		$('').css("background-position", newvalueX + "px " + newvalueY + "px");
    });


	// stolen bit of script for smooth scroll
   if ($(window).width() < 676) {
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});
	}
	else
	{
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top - $('.landing nav').height()
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});
	}


	// make the text section fade in and move into position

	$(window).scroll(function(){


		var textBoxTop = $('.the-words').offset().top;

		var windowScroll = $(this).scrollTop();
		

			if (windowScroll > textBoxTop - ($(window).height() / 1.3)) {

				var offset = 150;

				$('.the-words').css({'transform' : 'translateY(-' + offset + 'px)'});

				var opacityOffset = (windowScroll - textBoxTop + 500) / (windowScroll /2);

				$('.the-words').css({'opacity' : opacityOffset });

			}

	});	

});