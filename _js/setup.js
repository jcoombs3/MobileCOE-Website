
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
            console.log(appHeight)
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
            /*ERASE*/
            var setHeight = $(window).outerHeight() - $('#ribbon').outerHeight();
            $('#app-content').css('height',setHeight + 'px');
            TweenMax.to($('#app-content'),1.5,{opacity:'1'});
            break;
    }

}
