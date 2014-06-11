
$(window).load(function(){

	/* #projects */ 
	setup('#devices');
	setup('#projects');
    setup('#app-content');

    setup('.slider-section');

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
            $('#apps li').css('max-width',appWidth + 'px');

            var ulWidth = (appWidth * maxApp + (5 * maxApp));
            $('#apps').css('width',ulWidth + 'px');

            var appIconWidth = $('#projects .app-icon').outerWidth();
            $('#projects .app-icon').css('height', appIconWidth + 'px');

            /* set up hover */ 
            // var hoverWidth = Math.round( ($(window).outerWidth() * 0.10 ));
            // $('#projects .hover').css('width',hoverWidth + 'px');
            // $('#projects .hover').css('height',projectHeight + 'px');
            // $('#projects-hover .hover').addClass('enabled');;

           	break;
        case ('#app-content'):
            var setHeight = $(window).outerHeight() - $('#ribbon').outerHeight();
            var windowWidth = $(window).outerWidth();
            var titleHeight = setHeight - $('#devices').outerHeight();
            var arrowLeft = (windowWidth/2) - ($('#app-content .arrow').outerWidth()/2);
            $('#app-content').css('height',setHeight + 'px');
            $('#app-content .title').css('height',titleHeight + 'px');
            $('#app-content .arrow').css('left',arrowLeft + 'px');
            TweenMax.to($('#app-content'),1.5,{opacity:'1'});
            break;
        case ('.slider-section'):
            var firstChildLiMargin = ($('.shadow').outerWidth()/2) - ($('.slider-section li').outerWidth()/2);
            var marginLeft = firstChildLiMargin + ($(window).outerWidth() - $('.shadow').outerWidth())/2 - ($('.slider-section li').outerWidth()/2);
            TweenMax.to($('.slider-section li'), 0, {marginLeft:marginLeft + 'px'});
            TweenMax.to($('.slider-section li:first-child'), 0, {marginLeft:firstChildLiMargin + 'px'});
            var maxLi = $('.slider-section ul').length;
            var ulLength = firstChildLiMargin + ($('.slider-section li').outerWidth()*(maxLi+1)) + (marginLeft*maxLi) + 20 /* add latency for box shadow */;
            TweenMax.to($('.slider-section ul'), 0, {width:ulLength + 'px'});

            /*center the images*/
            $('.slider-section li').each(function(){
                var targetHeight = ($(this).find('img')).outerHeight();
                var listHeight = $(this).outerHeight();
                var marginHeight = (listHeight - targetHeight)/2;
                TweenMax.to($($(this).find('img')), 0, {marginTop : marginHeight + 'px'});
            });


            break;
    }

}
