
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

            var appHeight = $('apps li').outerHeight();
            var maxWidth = Math.round(appHeight*0.5725191);
            $('#app li').css('max-width',maxWidth + 'px');

            var appWidth = Math.round( ($(window).outerWidth() * 0.22 ));
            $('#apps li').css('width',appWidth + 'px');

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
    }

}
