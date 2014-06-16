$(window).load(function(){

	/* #projects */ 
	setup('#devices');
	setup('#projects');

	//setup('.progress-bar');
});


function setup(el){


	switch (el) {
		case ('#devices'):
            $('#devices img').each(function(e){
                var imgMargin = ($('#devices li').outerHeight() - $(this).outerHeight()) / 2;
                $(this).css('margin',imgMargin + 'px ' + '0px');
            });	
			break;
        case ('#projects'):
            var projectHeight = $(window).outerHeight() - ( $('#ribbon').outerHeight() + $('#devices').outerHeight() );
            $('#projects').css('height',projectHeight + 'px');
            $('#projects-hover').css('height',projectHeight + 'px');

            var maxApp = 0;
            $('#apps li').each(function(i){
                $(this).data('order',i);
            	maxApp++;
            });

            var appHeight = $('#apps li').outerHeight();
            var appWidth = Math.round(appHeight*0.5725191);
            var appIconWidth = $('#projects .app-icon').outerWidth();

            //Check for Scanner//
            if($(window).outerWidth() < 400){
                appWidth = Math.round(appHeight*0.22);
                var appIconTop = ($('#apps li').outerHeight()/2)-(appIconWidth/2);
                $('#projects .app-icon').css('top', appIconTop + 'px');
            }
            
            var ulWidth = (appWidth * maxApp + (5 * maxApp));

            $('#apps li').css('max-width',appWidth + 'px');
            $('#apps').css('width',ulWidth + 'px');
            $('#projects .app-icon').css('height', appIconWidth + 'px');

            /* set up hover */ 
            // var hoverWidth = Math.round( ($(window).outerWidth() * 0.10 ));
            // $('#projects .hover').css('width',hoverWidth + 'px');
            // $('#projects .hover').css('height',projectHeight + 'px');
            // $('#projects-hover .hover').addClass('enabled');;

           	break;
        case ('#app-content'):
            var setHeight = $(window).outerHeight() - $('#ribbon').outerHeight() - $('#devices').outerHeight();
            $('#app-content .title').css('height',setHeight + 'px');
            break;
        case ('.slider-section'):
            var liWidth = Math.round($(window).outerWidth()*.20);

            //Check for Scanner//
            if($(window).outerWidth() < 400){
                liWidth = Math.round($(window).outerWidth()*.45);
            }
            
            $('.slider-section li').css('max-width',liWidth+'px');
            var firstChildLiMargin = ($('.shadow').outerWidth()/2) - (liWidth/2);
            var marginLeft = firstChildLiMargin + ($(window).outerWidth() - $('.shadow').outerWidth())/2 - (liWidth/2);
            TweenMax.to($('.slider-section li'), 0, {marginLeft:marginLeft + 'px'});
            TweenMax.to($('.slider-section li:first-child'), 0, {marginLeft:firstChildLiMargin + 'px'});
            var maxLi = $('.slider-section li').length;
            var ulLength = firstChildLiMargin + ($('.slider-section li').outerWidth()*(maxLi-1)) + (marginLeft*maxLi-1) + 20 /* add latency for box shadow */;
            ulLength *= 2;

            TweenMax.to($('.slider-section ul'), 0, {width:ulLength + 'px'});

            /*center the images*/
            $('.slider-section li').each(function(i){
                var targetHeight = ($(this).find('img')).outerHeight();
                var listHeight = $(this).outerHeight();
                var marginHeight = (listHeight - targetHeight)/2;
                var targetWidth = ($(this).find('img')).outerWidth();
                var listWidth = $(this).outerWidth();
                var marginWidth = (listWidth - targetWidth)/2;
                TweenMax.to($($(this).find('img')), 0, {marginTop : marginHeight + 'px', marginLeft: marginWidth + 'px'});
                $(this).data('order',i);
            });

            var newMaxLi = maxLi+1;
            var oddCatch = newMaxLi%2;
            var midLi = newMaxLi/2;

            if(oddCatch == 1){
                var num = (midLi+1).toString();
                var str = ':nth-child('+num+')';
                $('.slider-section ul').find('li'+str).addClass('selected');
            }
            else {
                var num = (midLi).toString();
                var str = ':nth-child('+num+')';
                $('.slider-section ul').find('li'+str).addClass('selected');
            }

            var buttonLocationY = $('.slider-section').outerHeight()/2 - $('.left-btn').outerHeight()/2;
            var buttonSpace = $('.slider-section').outerWidth() - $('.shadow').outerWidth();
            var lButtonX = $('.shadow').outerWidth() + buttonSpace*0.10 - $('.left-btn').outerWidth()/2;
            var rButtonX = $('.shadow').outerWidth() + buttonSpace*0.90 - $('.right-btn').outerWidth()/2;//Check for Scanner//
            if(( rButtonX + ($('.btns .btn').outerWidth()*2) )> $(window).outerWidth()){
                var delta = ( rButtonX + $('.btns .btn').outerWidth() ) - $(window).outerWidth();
                rButtonX -= delta;
            }
            TweenMax.to($('.left-btn'), 0, {marginTop: buttonLocationY +'px', marginLeft: lButtonX +'px'});
            TweenMax.to($('.right-btn'), 0, {marginTop: buttonLocationY +'px', marginLeft: rButtonX + 'px'});

            $('.slider-section ul').data('anim', 'false');

            break;
        case('.halfsies.img'):
            $('.halfsies.img').each(function(){
                var img = $(this).find('img');
                var imgY = $(this).parents('.block').outerHeight()/2 - $(this).outerHeight()/2;
                var imgX = $(this).outerWidth()/2 - $(img).outerWidth()/2 - parseInt($(this).css('padding-left'));

                TweenMax.to($(img), 0, {marginLeft: imgX + 'px', marginTop: imgY + 'px'});
            });
            break;
        case('.powerpoint'):
            $('.powerpoint').each(function(){
                $(this).find('.slide:first-child').addClass('enabled');
                var order = 0;
                $($(this).find('.slide')).each(function(){
                    $(this).data('order',order);
                    order++;
                });
            });
            break;
    }

}
