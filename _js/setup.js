
$(window).load(function(){

	/* #projects */ 
	setup('#projects');

	setup('.progress-bar');
});


function setup(el){

	switch (el) {
        case ('#projects'):
            var height = ( $(window).outerHeight() - ( $('#ribbon').outerHeight() + $('#devices').outerHeight() ) ) + 'px';
            $('#projects').css('height',height);
           	break;
    }

}
