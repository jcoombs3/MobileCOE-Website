
function toggleFolder(state){
	switch(state){
		case 'img-view':
				TweenMax.to($('.carousel .inspect-image'), 0.5, {left: -$('.carousel').outerWidth() + 50 +'px', ease: Back.easeIn});
				TweenMax.staggerTo($('.carousel .folder'), 0.4, {delay: 0.25, left: 0, ease: Back.easeOut}, 0.02);
				TweenMax.to($('.carousel .back-button'), 1, {opacity: 0});
				break;
		case 'folders':
				TweenMax.staggerTo($('.carousel .folder'), 0.4, {left: -$('.carousel').outerWidth()+ 50 +'px', ease: Back.easeIn}, 0.02);
				TweenMax.to($('.carousel .inspect-image'), 0.5, {delay: 0.52, left: $('#nav').outerWidth()*1.25 + 'px', ease: Back.easeOut});
				window.setTimeout(function(){tileFlow()}, 375);
			break;
	}
}

function loadTiles(){
    var tileWidth = $('.carousel .tile').outerWidth();
    var tileBorder = parseInt($('.carousel .tile').css('border-width'));
    TweenMax.to($('.carousel .tile'),0,{width:tileWidth-(tileBorder*4), height:tileWidth-(tileBorder*4)});
    TweenMax.to($('.carousel .tiles'),0,{width:$('.carousel .tiles').outerWidth()+1});

    var rowTracker=0;
    var rowDelay = 0;
    var randArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    $('.tile-row').each(function(){
        var colTracker = 0;
        $($(this).find('.tile')).each(function(){
            TweenMax.to($(this),0,{rotationX:"0deg"});
            colTracker++;
        });
    });
    var carouselDistance = $('.carousel .inspect-image').outerWidth() + $('#nav').outerWidth()*1.25;
    TweenMax.to($('.carousel .inspect-image'), 0, {left: '-=' + carouselDistance+ 'px', onComplete:loadAppState()});
    
}