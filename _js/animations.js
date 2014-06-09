
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

