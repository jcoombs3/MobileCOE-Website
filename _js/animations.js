
$(window).load(function(){

	$('#projects li').hover(function(e){
		$(e.currentTarget).find('.app-bar').addClass('hover');
		$(e.currentTarget).find('.overview').addClass('hover');

	},function(e){
		$(e.currentTarget).find('.app-bar').removeClass('hover');
		$(e.currentTarget).find('.overview').removeClass('hover');

	});

	$('#projects li').on('click', function(){
		$(e.currentTarget).find('.overview').addClass('clicked');
	});
		
});

