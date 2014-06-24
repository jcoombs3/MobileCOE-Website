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
            var liWidth = Math.round($(window).outerWidth()*.25);

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

        case('.carousel'):
            var folderDim = $('.carousel').outerWidth()/3;
            console.log(folderDim);
            TweenMax.to($('.carousel'), 0, {height: folderDim*2 + 'px'});
            TweenMax.to($('.carousel .folder'), 0, {height:folderDim+'px', width:folderDim+'px'});
            break;

        case('.timeline'):
            var bigScreen = false;
            if($(window).outerWidth() > 1024){
                bigScreen = true;
                console.log('yay');
                var tLPad = ($(window).outerWidth - 1024)/2;
                //$('.timeline .timeline-phases').css('width', '1024px');
                $('.timeline .timeline-phases').css('marginLeft', tLPad + 'px');
                $('.timeline .phase').each(function(){
                    $(this).css('width', 1024 + 'px');
                    $(this).css('marginLeft', tLPad + 'px');
                });
            }
            $('.timeline .phase .container').css('height', $('.timeline .phase .container').outerWidth()*0.15);

            //setting li padding based off nav width
            if(!bigScreen){
                var navWidth = $('#nav').outerWidth();
                navWidth = navWidth*1.25;
                $('.timeline li').css('padding-left', navWidth+'px');
                $('.blankSpace').css('padding-left', 0);
                $('.blankSpace li').css('padding-left', 0);
                $('.timeline li.meet-the-team').css('padding', navWidth+'px 0px');
             }
            // description close 
            var descriptionWidth = $('.timeline .description').outerWidth();
            TweenMax.to($('.timeline .description'), 0, {width:'100%'});

            // disk
            var circDiam = $('.timeline .circleDiv').outerHeight()*0.80;
            $('.timeline .circleDiv .disk').css('width', circDiam+'px');
            $('.timeline .circleDiv .disk').css('height', circDiam+'px');
            var diskSire = $('.disk').parent('.circleDiv');
            var circX = $(diskSire).outerWidth()/2 - $('.timeline .circleDiv .disk').outerWidth()/2;
            var circY = $(diskSire).outerHeight()/2 - $('.timeline .circleDiv .disk').outerHeight()/2;
            TweenMax.to($('.timeline .circleDiv .disk'), 0, {marginTop: circY + 'px', marginLeft: circX+'px'});

            //title
            var titleY = $('.timeline .titleDiv').outerHeight()/2 - $('.titleDiv img').outerHeight()/2;
            TweenMax.to($('.timeline .titleDiv img'), 0, {marginTop: titleY + 'px'});

            // box
            var detailX = $('.timeline .box').outerWidth();
            var detailY = $('.timeline .box').outerHeight();
            var deltaX = ( $('.timeline .details').outerWidth() - detailX ) / 2;
            var deltaY = ( $('.timeline .details').outerHeight() - detailY ) / 2;
            TweenMax.to($('.timeline .box'), 0, {marginTop: deltaY+'px', marginLeft: '0px', opacity:0});
            TweenMax.to($('.timeline .box p'), 0, {width: descriptionWidth *.9 + 'px'});

            //blankSpace
            var diskPad = $('.disk').outerHeight()/2;
            $('.blankSpace').css('marginTop', diskPad);
            $('.blankSpace').css('marginBottom', diskPad);
            $('.separator').css('height', diskPad/2);

            var divWidth = $('.separator').outerWidth()*0.33;
            var numDevices = $('.blankSpace .devicesDiv').children().length;
            var device = $('.blankSpace').outerWidth()*0.33*0.25;
            var devULHeight = $('.separator').outerHeight()*5;
            $('.timeline li.blankSpace ul').css('height', devULHeight + 'px');

            var imgXPad = ($('.blankSpace li').outerWidth() - $('.timeline li.blankSpace img').outerWidth())/2;
            $('.blankSpace img').css('marginLeft', imgXPad+'px');
            // var devicePadHeight = $('.timeline li.blankSpace ul').outerHeight()/2 - $('.separator').outerHeight()/2;
            var devicePadWidth = (divWidth/4)/(numDevices +1);
            var liPadTop = $('.timeline li.blankSpace ul').outerHeight()/2 - $('.timeline li.blankSpace li').outerHeight()/2;

            var separatorWidth = $('.timeline .separator').outerWidth();
            TweenMax.to($('.timeline .devicesDiv'),0,{left:separatorWidth - $('.timeline .devicesDiv').outerWidth() + 'px', top:'-' + $('.devicesDiv').outerHeight() + 'px'});
            TweenMax.to($('.timeline .devicesDiv ul'),0,{top: ($('.devicesDiv').outerHeight() + $('.separator').outerHeight()) + 'px'});            

            $('.timeline .devicesDiv img').each(function(){
                var width = $(this).outerWidth();
                var height = $(this).outerHeight();

                var deltaX = $(this).parent().outerWidth() - width;
                var deltaY = $(this).parent().outerHeight() - height;

                TweenMax.to($(this),0,{marginLeft:deltaX/2 + 'px', marginTop:deltaY/2 + 'px'});
            });

            TweenMax.to($('.timeline .devicesDiv'),0,{height:'0px'});

            //meet-the-team
                // member disks
            TweenMax.to($('.meet-the-team .member-mask'),0,{marginLeft:navWidth+'px',width:$(window).outerWidth()-navWidth*2 + 'px'});
            var teamWidth = $('.meet-the-team .member-mask .container').outerWidth()/5;
            $('.meet-the-team .member-mask .container').css('height', teamWidth + ($('.meet-the-team .role').outerHeight()*2) +'px');
            $('.meet-the-team .member-mask .member').css('width', teamWidth+'px');
            $('.meet-the-team .member-mask .memberPic').css('width', teamWidth+'px');
            $('.meet-the-team .member-mask .memberPic').css('height', teamWidth+'px');
            $('.meet-the-team .member .name-tag').css('width', teamWidth + 'px')
            var diskSire = $('.disk').parent('.memberPic');
            var circX = $(diskSire).outerWidth()/2 - $('.timeline .memberPic .disk').outerWidth()/2;
            TweenMax.to($('.timeline .memberPic .disk'), 0, {left: circX + 'px', top: circX+'px'});

            var kiddies = $('.timeline li.meet-the-team .container').children().length;
            if(kiddies <=5){
                var pad = ((5 - kiddies)*teamWidth)/(kiddies +1);
                $('.meet-the-team .member').css('marginLeft', pad + 'px');
            }
            else{
                var contLength = teamWidth*kiddies;
                $('.meet-the-team .container').css('width', contLength +'px');
            }

                // member order 
            var order = 0;  
            $('.meet-the-team .member').each(function(i){
                $(this).data('order',i);
            });

                // member posts 
            var postHeight = $('.meet-the-team .memberPic').outerHeight() / 2;

            var postMar = $('.meet-the-team .memberPic').outerWidth() / 2;
            var postOffset = $('.meet-the-team .post').outerWidth() / 2;

            var nameWidth = $('.meet-the-team .name table').outerWidth();
            TweenMax.to($('.meet-the-team .name table'), 0, {width:nameWidth + 'px'});
            TweenMax.to($('.meet-the-team .name'), 0, {marginLeft:nameWidth/2 + 'px', width: '0px'});

            TweenMax.to($('.meet-the-team .post'), 0, 
                {   height:postHeight + 'px',
                    marginTop:postMar+'px',
                    marginLeft:postMar-postOffset+'px'
                });

                // member arrows 
            TweenMax.to($('.meet-the-team .member-arrow'),0,{width:navWidth + 'px',height:$('.meet-the-team .member-mask').outerHeight() - navWidth - $('.meet-the-team .role').outerHeight() + 'px'});
            TweenMax.to($('.meet-the-team .member-arrows'),0,{bottom:$('.meet-the-team .member-mask').outerHeight() +'px'});

            //app-store box 
            var appBoxHeight = $('.timeline .app-box').outerHeight();
            TweenMax.to($('.timeline .app-store-link'),0,{height:appBoxHeight*3 +'px'});
            TweenMax.to($('.timeline .app-box'),0,{height:appBoxHeight*3 +'px'});
            //TweenMax.to($('.timeline .app-store'),0,{height:appBoxHeight*3 +'px'});
            TweenMax.to($('.timeline .app-box'),0,{left:separatorWidth - $('.timeline .devicesDiv').outerWidth() + (imgXPad/2) + 'px', width:$('.timeline .devicesDiv').outerWidth() * .95 + 'px'});

            var numApps = $('.app-box').children().length;
            var appStoreWidth = $('.app-box').outerWidth();
            var iconWidth = appStoreWidth/numApps;
            var bgSize = (appBoxHeight*3/iconWidth)*100;

            $('.app-store-link').css('width', iconWidth + 'px');
            $('.itunes').css('backgroundSize', bgSize + '%');
            $('.kindle').css('backgroundSize', bgSize + '%');
            $('.googlePlay').css('backgroundSize', bgSize + '%');
            $('.app-store-link h6').css('top', bgSize + '%');

            TweenMax.to($('.timeline .app-box'),0,{height:appBoxHeight*4.25 +'px'});
            TweenMax.to($('.timeline .app-store-link'),0,{height:appBoxHeight*4.25 +'px', top:appBoxHeight*4.25*4/100 +'%'});
            $('.app-store app-box').css('padding-top', 2+'%');
            TweenMax.to($('.timeline .app-store'),0,{height:$('.timeline .app-box').outerHeight() +'px'});
            break;


    }

}
