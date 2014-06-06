
$(window).load(function(){

	/* #projects */ 
	setHeight('#projects');

	setHeight('.progress-bar');
});


function setHeight(el){

	switch (el) {
        case ('#projects'):
            var height = ( $(window).outerHeight() - ( $('#ribbon').outerHeight() + $('#devices').outerHeight() ) ) + 'px';
            $('#projects').css('height',height);
           	break;
    }

}
