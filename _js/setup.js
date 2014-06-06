
$(window).load(function(){

	/* #projects */ 
	setup('#devices');
	setup('#projects');

	setup('.progress-bar');
});


function setup(el){

	switch (el) {
		case ('#devices'):
			var imgMargin = ($('#devices li').outerHeight() - $('#devices img').outerHeight()) / 2;
			$('#devices img').css('margin',imgMargin + 'px ' + '0px');
			break;
        case ('#projects'):
            var height = ( $(window).outerHeight() - ( $('#ribbon').outerHeight() + $('#devices').outerHeight() ) ) + 'px';
            $('#projects').css('height',height);

            var maxApp = 0;
            $('#apps li').each(function(){
            	maxApp++;
            });

            var appWidth = Math.round( ($(window).outerWidth() * 0.22 ));
            $('#apps li').css('width',appWidth + 'px');

            var width = (appWidth * maxApp + (5 * maxApp));
            $('#apps').css('width',width + 'px');

           	break;
    }

}
