
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
		//stackDeck($(e.currentTarget));
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
	focusApp = li;
	// lockApp = true;
	var maxApp = $('#projects li').length;
	originalOffset = li.offset().left;
	var selected = li.data('order');
	var width = $(li).outerWidth();
	var longestDelay = 1.05/maxApp;
	var centerLeftPos = ( $( document ).width() /2.0)-(width/2.0);
	var centerPos = centerLeftPos - li.offset().left;
	var initMoveSpeed = .6/maxApp;

	TweenMax.to(li, 0, {zIndex: '50'});

	//stack cards
	$( "#projects li" ).each(function(i){
		var moveInteger = selected - $(this).data('order');
		var moveSpeed = initMoveSpeed*Math.abs(moveInteger);
		var delayTime = longestDelay - (moveInteger/(maxApp- selected)*.15);
		var aniAttr = {left: ( (width) * moveInteger ) + 'px', ease:Sine.easeOut, delay: delayTime};

		TweenMax.to($(this), moveSpeed, aniAttr)
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
				 $(".back").fadeIn();
				 //toggleApp(li);
				};
		}

		TweenMax.to($(this), .2, aniAttr);
	});

	//toggleApp(li);
}

