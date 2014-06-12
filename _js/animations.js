
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

	$('.slider-section .btn').on('click', function(e){

		var block = $(e.currentTarget).parents('.slider-section');
		var ul = block.find('ul');
		var margin = parseInt(ul.find('li:nth-child(2)').css('margin-left'));
		var width = parseInt(ul.find('li').css('width'));
		var num = margin+width;
		var order = ul.find('li.selected').data('order');

		if($(ul).data('anim') == 'false'){
			$(ul).data('anim','true');

			ul.find('li.selected').removeClass('selected');

			console.log(order);
			//console.log($(ul.find('li:last-child')).data('order'));

			if(order == 0 || order == $(ul.find('li:last-child')).data('order')){
				$(block.find('.btn')).removeClass('disabled');

				TweenMax.to($(block.find('.btn')), 0.5, {opacity:'1'});
			}

			if($(e.currentTarget).hasClass('right-btn')){
				order++;
                var orderNum = (order+1).toString();
                var orderStr = ':nth-child('+orderNum+')';
				
				$(ul.find('li'+orderStr)).addClass('selected');

				TweenMax.to($(ul), 1, {left: '-=' + num, ease:Back.easeInOut, onComplete:function(){
					$(ul).data('anim','false');
				}});
			}
			else{
				order--;
				var orderNum = (order+1).toString();
				var orderStr = ':nth-child('+orderNum+')';
				
				$(ul.find('li'+orderStr)).addClass('selected');

				TweenMax.to($(ul), 1, {left: '+=' + num, ease:Back.easeInOut, onComplete:function(){
					$(ul).data('anim','false');
				}});
			}

			if( $(ul.find('li:last-child')).hasClass('selected') ){
				TweenMax.to($(block.find('.right-btn')), 0.5, {opacity:'0', onComplete:function(){
					$(block.find('.right-btn')).addClass('disabled');
				}});
			}
			else if( $(ul.find('li:first-child')).hasClass('selected') ){
				TweenMax.to($(block.find('.left-btn')), 0.5, {opacity:'0', onComplete:function(){
					$(block.find('.left-btn')).addClass('disabled');
				}});
			}

		}
	});

	$('#app-content .app-icon').on('click', function(e){
		loadContent();
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
			 	TweenMax.to($('#app-content'),1.5,{opacity:'1', onComplete:function(){
			 		TweenMax.to($('#app-content'),0.5,{height:$(window).outerHeight() - $('#ribbon').outerHeight() + 'px'});
			 		loadContent();
			 	}});
			};
		}

		setup('#app-content');
		TweenMax.to($(this), .2, aniAttr);
	});

}

function loadContent() {
	/* BETA for App load */
	var middleHeight = ( $('#icon-load .middle td').outerHeight() ) / 2;

	TweenMax.to($('#icon-load .top .load'), 0, {width:'0px', x:'0'});
	TweenMax.to($('#icon-load .middle .load'), 0, {height:'0px', y:'0'});
	TweenMax.to($('#icon-load .bottom .load'), 0, {width:'0px', x:'0'});

	TweenMax.to($('#icon-load .top .load'), 0.2, {width:'50%', onComplete:function(){
		TweenMax.to($('#icon-load .middle .slide-down'), 0.2, {height:middleHeight + 'px', onComplete:function(){
			TweenMax.to($('#icon-load .middle .slide-down'), 0.2, {y:'+200%'});

			TweenMax.to($('#icon-load .bottom .load'), 0.2, {delay:'0.1', width:'50%', onComplete:function(){
				TweenMax.to($('#icon-load .bottom .slide-left'), 0, {x:'-100%'}); 
				TweenMax.to($('#icon-load .bottom .slide-right'), 0, {x:'+100%'}); 
				TweenMax.to($('#icon-load .bottom .slide-left'), 0.2, {width:'0%'}); 
				TweenMax.to($('#icon-load .bottom .slide-right'), 0.2, {width:'0%', onComplete:function(){
					$('#app-center-icon').addClass('enabled');
				}}); 
			}}); 
		}}); 
		TweenMax.to($('#icon-load .top .slide-left'), 0.2, {x:'-100%'}); 
		TweenMax.to($('#icon-load .top .slide-right'), 0.2, {x:'+100%'}); 
	}});


	var maxHeight = $('#app-content').outerHeight();
	console.log(maxHeight);
	var iconHeight = $('#app-content .app-icon').outerHeight();
	var newMargin = (maxHeight/2) - (iconHeight*.66);
	var originalMargin = $('#devices').outerHeight();
	var delta = originalMargin - newMargin;

	TweenMax.to($('#app-content .title'), 1, {marginTop:newMargin + 'px', marginBottom:delta + 'px'});


	animPowerpoints();
}

function animPowerpoints(){
	console.log('~~~~~ Animating powerpoint ~~~~~');

	$('.powerpoint').each(function(){
		//var target = $(this).find('.slide.enabled');

		animateSlide(this);
	});
}

function animateSlide(powerpoint){
	var animSlide = $(powerpoint).find('.slide.enabled');

	slideAnimation(animSlide);
}

function slideAnimation(animSlide){
	TweenMax.to($(animSlide),5,{color:'#fff', onComplete:function(){
		TweenMax.to($(animSlide),0.5,{color:'#f00', onComplete:function(){
			$(animSlide).removeClass('enabled');

			var lastOrder = $($(animSlide).parent()).find('.slide:last-child').data('order');

			if($(animSlide).data('order') !== lastOrder){
				var newChild = $(animSlide).next();
				$(newChild).addClass('enabled');
				slideAnimation(newChild);
			}
			else {
				var firstChild = $($(animSlide).parent()).find('.slide:nth-child(1)');
				$(firstChild).addClass('enabled');
				slideAnimation(firstChild);
			}
		}});
	}});
}

