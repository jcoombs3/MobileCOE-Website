
$(window).load(function(){

	$('#projects li').hover(function(e){
		$(e.currentTarget).find('.app-bar').addClass('hover');
		// $(e.currentTarget).addClass('clicked');

	},function(e){
		$(e.currentTarget).find('.app-bar').removeClass('hover');

	});

	$('#projects li').on('click',function(e){
		$(e.currentTarget).find('.app-bar').addClass('hover');
		$(e.currentTarget).addClass('clicked');
	});
		
});

