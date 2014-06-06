
$(window).load(function(){

	/* #projects */ 
	setHeight('#projects');

	setHeight('.progress-bar');
});


function setHeight(el){

	switch (el) {
        case ('#projects'):
            var height = ( $(window).outerHeight() - ( $('#ribbon').outerHeight() + $('#devices').outerHeight() ) ) + 'px';

            console.log(height);
            $('#projects').css('height',height);
           	break;
    }

}
