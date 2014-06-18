$(window).load(function(){

	/* #projects */ 
    setup('#ribbon');
	setup('#devices');
	setup('#projects');

	//setup('.progress-bar');
});


function setup(el){


	switch (el) {
        case ('#ribbon'):
            var ribbonHeight = $('#ribbon').outerHeight();
            var logoHeight = $('#ribbon .logo img').outerHeight();
            var delta = (ribbonHeight - logoHeight)/2;

            $('#ribbon .logo img').css('margin-top', delta+'px');
            break;
		case ('#devices'):
            $('#devices img').each(function(e){
                var imgMargin = ($('#devices li').outerHeight() - $(this).outerHeight()) / 2;
                $(this).css('margin',imgMargin + 'px ' + '0px');
            });	
			break;
        case ('#projects'):

            //projects ul offset to move in X 
            var ulOffsetX = $(window).outerWidth();
            TweenMax.to($('#projects ul'), 0, {left:ulOffsetX + 'px'});

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
                appWidth = Math.round(appHeight*0.19);
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

            TweenMax.to($('#projects ul'), 0.7, {delay:'1', left:'0px', ease:Back.easeOut});

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
            if(( rButtonX + ($('.btns .btn').outerWidth()) )> $(window).outerWidth()){
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
        case('.timeline'):
            $('.timeline.container').css('height', $('.timeline.circleDiv').outerWidth());

            // description close 
            var descriptionWidth = $('.timeline .description').outerWidth();
            TweenMax.to($('.timeline .description'), 0, {width:'100%'});

            // disk
            var diskSire = $('.disk').parent('.circleDiv');
            var circX = $(diskSire).outerWidth()/2 - $('.timeline .circleDiv .disk').outerWidth()/2;
            var circY = $(diskSire).outerHeight()/2 - $('.timeline .circleDiv .disk').outerHeight()/2;
            TweenMax.to($('.timeline .circleDiv .disk'), 0, {marginTop: circY + 'px', marginLeft: circX+'px'});

            //title
            $('.timeline .icon').css('height', $('.timeline .icon').outerWidth());
            var iconY = $('.timeline.titleDiv').outerHeight()/2 - $('.timeline .icon').outerHeight()/2;
            var titleY = $('.timeline.titleDiv').outerHeight()/2 - $('.timeline .subtitle').outerHeight()/2;
            TweenMax.to($('.timeline .subtitle'), 0, {marginTop: titleY + 'px'});

            // box
            var detailX = $('.timeline .box').outerWidth();
            var detailY = $('.timeline .box').outerHeight();
            var deltaX = ( $('.timeline .details').outerWidth() - detailX ) / 2;
            var deltaY = ( $('.timeline .details').outerHeight() - detailY ) / 2;
            TweenMax.to($('.timeline .box'), 0, {marginTop: deltaY+'px', marginLeft: '0px', opacity:0});
            TweenMax.to($('.timeline .box p'), 0, {width: descriptionWidth *.9 + 'px'});

            //meet-the-team
            var teamWidth = $('.meet-the-team .container').outerWidth()/5;
            $('.meet-the-team').css('height', teamWidth+'px');
            $('.meet-the-team .member').css('width', teamWidth+'px');
            var teamHeight = $('.meet-the-team .container').outerHeight();
            $('.meet-the-team .member').css('height', teamHeight+'px');
            var diskSire = $('.disk').parent('.member');
            var circX = $(diskSire).outerWidth()/2 - $('.timeline .member .disk').outerWidth()/2;
            var circY = $(diskSire).outerHeight()/2 - $('.timeline .member .disk').outerHeight()/2;
            TweenMax.to($('.timeline .member .disk'), 0, {marginTop: circY + 'px', marginLeft: circX+'px'});

            var kiddies = $('.meet-the-team .container').children().length;
            if(kiddies <=5){
                console.log(kiddies);
                var pad = ((5-kiddies)*teamWidth)/(kiddies +1);
                $('.timeline .member').css('marginLeft', pad + 'px');
            }
            else{
                var contLength = teamWidth*kiddies;
                $('.meet-the-team .container').css('width', contLength +'px');
            }

            break;


    }

}
