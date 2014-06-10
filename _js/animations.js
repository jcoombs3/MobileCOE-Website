
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
		TweenMax.to($('#nav'), 0.3, {width: '0px', onComplete:function(){
			TweenMax.to($('#nav'), 0.3, {top: $('#ribbon').outerHeight() + $('#devices').outerHeight() - 100 +'px' ,height: '200px', onComplete:function(){
				TweenMax.to($('#nav'), 0.3, {width: '100%'})}})}});
		// navSlide()
		
	});
		
});

function checkDevices(li){
	var android = li.data('android');
	var ipad = li.data('ipad');
	var iphone = li.data('iphone');
	var kiosk = li.data('kiosk');

	if(!android) {
		TweenMax.to($('#android img'), 0.3, {top:'150%'});
	}

	if(!ipad) {
		TweenMax.to($('#ipad img'), 0.3, {top:'150%'});
	}

	if(!iphone) {
		TweenMax.to($('#iphone img'), 0.3, {top:'150%'});
	}

	if(!kiosk) {
		TweenMax.to($('#kiosk img'), 0.3, {top:'150%'});
	}
}

function resetDevices() {
	TweenMax.to($('#devices img'), 0.2, {top:'0'});
}

function stackDeck(li) {
	/* selected app */
	var focusApp = li;
	/* select app's order # in list */
	var selected = li.data('order');
	/* quanity of apps in ul */
	var maxApp = $('#projects li').length - 1;
	/* width of li */
	var width = $(li).outerWidth();
	/* initial move speed of apps */
	var initMoveSpeed = .6/maxApp;
	console.log(initMoveSpeed + " -- initial Move speed");
	/* longest delay of animation for farthest app from selected */ 
	var longestDelay = 1.05/maxApp;
	console.log(longestDelay + " -- longest delay");
	/* center of window when moving deck to center*/
	var centerLeftPos = ( $( document ).width() /2.0)-(width/2.0);
	var centerPos = centerLeftPos - li.offset().left;

	TweenMax.to(li, 0, {zIndex: '50'});

	//stack cards
	$( "#projects li" ).each(function(i){
		var moveInteger = selected - $(this).data('order');
		var moveSpeed = initMoveSpeed*Math.abs(moveInteger);
		var delayTime = longestDelay - ( Math.abs(moveInteger)/(maxApp - selected) )*.15;
		var aniAttr = {left: ( (width) * moveInteger ) + 'px', ease:Sine.easeOut, delay: delayTime};

		TweenMax.to($(this), moveSpeed, aniAttr);
	});		

	//move stack to center
	$( "#projects li" ).each(function(i){
		var moveInteger = selected - $(this).data('order');
		var delayTime = longestDelay+ (.035*(maxApp-selected));
		var aniAttr = {left: "+=" + centerPos+ 'px', ease:Sine.easeOut, delay: delayTime};

		if(moveInteger != 0 ){
			aniAttr.opacity = 0;
		}
		else{
			aniAttr.onComplete = function(){
				 //$(".back").fadeIn();
				 //toggleApp(li);
				};
		}

		TweenMax.to($(this), .2, aniAttr);
	});

	function navSlide(nav_State){
		switch(nav_State){
			case 'expanded':
				TweenMax.to($('#nav'), 0.3, {width: '0px', onComplete:function(){
					TweenMax.to($('#nav'), 0.3, {top: $('#ribbon').outerHeight() + $('#devices').outerHeight() - 100 +'px' ,height: '200px', onComplete:function(){
						TweenMax.to($('#nav'), 0.3, {width: '100%'})}})}});
				break;
			default:
				break; 
		}
	}

}

