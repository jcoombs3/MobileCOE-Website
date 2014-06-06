
$(window).load(function(){

	$('#projects li').hover(function(e){
		$(e.currentTarget).find('.app-bar').addClass('hover');

	},function(e){
		$(e.currentTarget).find('.app-bar').removeClass('hover');

	});
		
});

