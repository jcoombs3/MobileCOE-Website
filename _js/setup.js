
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
            $('#apps li').each(function(){
            	maxApp++;
            });

            var appWidth = Math.round( ($(window).outerWidth() * 0.22 ));
            $('#apps li').css('width',appWidth + 'px');

            var ulWidth = (appWidth * maxApp + (5 * maxApp));
            $('#apps').css('width',ulWidth + 'px');

            var width = $('#projects li.app-icon').outerWidth();
            $('#projcts .app-icon').css('height', width + 'px');

            /* set up hover */ 
            var hoverWidth = Math.round( ($(window).outerWidth() * 0.10 ));
            $('#projects .hover').css('width',hoverWidth + 'px');
            $('#projects .hover').css('height',projectHeight + 'px');
            $('#projects-hover .hover').addClass('enabled');;

           	break;
    }

}
