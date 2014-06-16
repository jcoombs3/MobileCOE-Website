//attaching all the click events
$(window).load(function(){

	$('#projects li').hover(function(e){
		$(e.currentTarget).find('.app-bar').addClass('hover');
		$(e.currentTarget).addClass('hover');
		checkDevices($(e.currentTarget));
	},function(e){
		$(e.currentTarget).find('.app-bar').removeClass('hover');
		$(e.currentTarget).removeClass('hover');
		resetDevices();
	});

	$('#projects li').on('click',function(e){
		$(e.currentTarget).find('.app-bar').addClass('hover');
		$(e.currentTarget).addClass('clicked');
		TweenMax.to($('#app-content'), 0.6, {opacity: 1});

		var color = $(e.currentTarget).data('brandcolor');
		$('#app-content').css('background', color);
		stackDeck($(e.currentTarget));
	});

	$('#nav').on('click', function(e){
		$(e.currentTarget).toggleClass('expanded');

		if($(e.currentTarget).hasClass('expanded')){
			TweenMax.to($('#nav ul'), 0, {width: $(window).outerWidth() + 'px'});
			TweenMax.to($('#nav'), 0.3, {width: '0px', onComplete:function(){
				TweenMax.to($('#nav'), 0, {height: '25%', onComplete:function(){
					TweenMax.to($('#nav'), 0, {top: $('#ribbon').outerHeight() + $('#devices').outerHeight() - ($('#nav').outerHeight()/2) +'px'});
					TweenMax.to($('#nav'), 0.15, {width: '100%'});
					TweenMax.staggerFrom($('#nav li'), 1, 
                   		{opacity:0}, 0.05);
					TweenMax.to($('#nav li'), 0, {lineHeight: $('#nav').outerHeight() + 'px'});
				}})
			}});	
		}
		else {
			TweenMax.to($('#nav'), 0.15, {width: '0px', onComplete:function(){
				TweenMax.to($('#nav'), 0, {height:'50px', onComplete:function(){
					TweenMax.to($('#nav'), 0, {top: $('#ribbon').outerHeight() + $('#devices').outerHeight() - ($('#nav').outerHeight()/2) +'px'});
				}});
				TweenMax.to($('#nav'), 0.3, {width:'50px'});
			}});
		}
		
	});
		
});



