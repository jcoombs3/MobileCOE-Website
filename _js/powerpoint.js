function animPowerpoints() {

	$('.powerpoint').each(function() {
		//var target = $(this).find('.slide.enabled');

		animateSlide(this);
	});
}

function animateSlide(powerpoint) {
	var animSlide = $(powerpoint).find('.slide.enabled');

	slideAnimation(animSlide);
}

function slideAnimation(animSlide) {

	//Check for Scanner//
    if($(window).outerWidth() < 400){
		TweenMax.to($(animSlide).find('.header'),0,{right:'5%'});
		TweenMax.to($(animSlide).find('.sub-info'),0,{right:'2%'});
		TweenMax.to($(animSlide).find('img'),0,{left:'5%'});
    }
    else {
		TweenMax.to($(animSlide).find('.header'),0,{right:'5%'});
		TweenMax.to($(animSlide).find('.sub-info'),0,{right:'2%'});
		TweenMax.to($(animSlide).find('img'),0,{left:'15%'});
    }

	//move img and header 
	TweenMax.from($(animSlide).find('.header'),0.3,{right:-$(window).outerWidth() + 'px', onComplete:function(){
		TweenMax.to($(animSlide).find('.header'),10,{x:'-10px'});
	}});
	TweenMax.from($(animSlide).find('img'),0.3,{delay:'0.2', left:-$(window).outerWidth() + 'px', onComplete:function(){
		TweenMax.to($(animSlide).find('img'),10,{x:'+50px', onComplete:function(){
			TweenMax.to($(animSlide).find('.header'),0.2,{x:'-30px'});
			TweenMax.to($(animSlide).find('.sub-info'),0.2,{x:'-30px'});
			TweenMax.to($(animSlide).find('img'),0.3,{x:'+70px', onComplete:function(){
				TweenMax.to($(animSlide).find('.header'),0.7,{x:'0', right:-$(window).outerWidth()});
				TweenMax.to($(animSlide).find('.sub-info'),0.7,{delay:'0.1', x:'0', right:-$(window).outerWidth()});
				TweenMax.to($(animSlide).find('img'),0.3,{delay:'0.2', x:'0', left:-$(window).outerWidth(), onComplete:function(){
					$(animSlide).removeClass('enabled');

					var lastOrder = $($(animSlide).parent()).find('.slide:last-child').data('order');

					if($(animSlide).data('order') !== lastOrder){
						var newChild = $(animSlide).next();
						$(newChild).addClass('enabled');
						slideAnimation(newChild);
					}
					else {
						var firstChild = $($(animSlide).parent()).find('.slide:nth-child(1)');
						$(firstChild).addClass('enabled');
						slideAnimation(firstChild);
					}
				}});
			}});
		}});
	}});
	TweenMax.from($(animSlide).find('.sub-info'),0.3,{delay:'0.3', right:-$(window).outerWidth() + 'px', onComplete:function(){
		TweenMax.to($(animSlide).find('.sub-info'),10,{x:'-20px'});
	}});

}