//Animations for specific topic content
function loadContent() {
	/* BETA for App load */
	var middleHeight = ($('#icon-load .middle td').outerHeight()) / 2;

	TweenMax.to($('#icon-load .top .load'), 0, {
		width: '0px',
		x: '0'
	});
	TweenMax.to($('#icon-load .middle .load'), 0, {
		height: '0px',
		y: '0'
	});
	TweenMax.to($('#icon-load .bottom .load'), 0, {
		width: '0px',
		x: '0'
	});

	TweenMax.to($('#icon-load .top .load'), 0.2, {
		width: '50%',
		onComplete: function() {
			TweenMax.to($('#icon-load .middle .slide-down'), 0.2, {
				height: middleHeight + 'px',
				onComplete: function() {
					TweenMax.to($('#icon-load .middle .slide-down'), 0.2, {
						y: '+200%'
					});

					TweenMax.to($('#icon-load .bottom .load'), 0.2, {
						delay: '0.1',
						width: '50%',
						onComplete: function() {
							TweenMax.to($('#icon-load .bottom .slide-left'), 0, {
								x: '-100%'
							});
							TweenMax.to($('#icon-load .bottom .slide-right'), 0, {
								x: '+100%'
							});
							TweenMax.to($('#icon-load .bottom .slide-left'), 0.2, {
								width: '0%'
							});
							TweenMax.to($('#icon-load .bottom .slide-right'), 0.2, {
								width: '0%',
								onComplete: function() {
									$('#app-center-icon').addClass('enabled');
								}
							});
						}
					});
				}
			});
			TweenMax.to($('#icon-load .top .slide-left'), 0.2, {
				x: '-100%'
			});
			TweenMax.to($('#icon-load .top .slide-right'), 0.2, {
				x: '+100%'
			});
		}
	});

	var maxHeight = $(window).outerHeight() - $('#ribbon').outerHeight();
	var iconHeight = $('#app-content .app-title').outerHeight();
	var titlePadding = parseInt($('#app-content .title').css('padding-top'));
	var newPadding = Math.round(titlePadding * .5);
	var delta = titlePadding - Math.round(newPadding);

	var setHeight = maxHeight - titlePadding;

	var arrowRight = ($(window).outerWidth() / 2) - ($('#app-content .title .arrow').outerWidth() / 2);

	$('#app-content .title').css('height', maxHeight + 'px');
	$('#app-content .title .arrow').css('right', arrowRight + 'px');

	TweenMax.to($('#app-content .title'), 1, {
		paddingTop: newPadding + 'px',
		paddingBottom: delta + 'px',
		height: setHeight + 'px'
	});
	TweenMax.to($('#app-content .title .arrow'), 1.5, {
		delay: '2',
		opacity: '1'
	});

	setup('.slider-section');
	setup('.halfsies.img');
	setup('.powerpoint');
	setup('.timeline');


	$('#app-content .title .arrow').on('click', function(e){
		$("#app-content").animate({scrollTop: $('#app-content .title').outerHeight()}, 1000);
	});

	$('.slider-section .btn').on('click', function(e) {

		var block = $(e.currentTarget).parents('.slider-section');
		var ul = block.find('ul');
		var margin = parseInt(ul.find('li:nth-child(2)').css('margin-left'));
		var width = parseInt(ul.find('li').css('width'));
		var num = margin + width;
		var order = ul.find('li.selected').data('order');

		if ($(ul).data('anim') == 'false') {
			$(ul).data('anim', 'true');

			ul.find('li.selected').removeClass('selected');

			if (order == 0 || order == $(ul.find('li:last-child')).data('order')) {
				$(block.find('.btn')).removeClass('disabled');

				TweenMax.to($(block.find('.btn')), 0.5, {
					opacity: '1'
				});
			}

			if ($(e.currentTarget).hasClass('right-btn')) {
				order++;
				var orderNum = (order + 1).toString();
				var orderStr = ':nth-child(' + orderNum + ')';

				$(ul.find('li' + orderStr)).addClass('selected');

				TweenMax.to($(ul), 1, {
					left: '-=' + num,
					ease: Back.easeInOut,
					onComplete: function() {
						$(ul).data('anim', 'false');
					}
				});
			} else {
				order--;
				var orderNum = (order + 1).toString();
				var orderStr = ':nth-child(' + orderNum + ')';

				$(ul.find('li' + orderStr)).addClass('selected');

				TweenMax.to($(ul), 1, {
					left: '+=' + num,
					ease: Back.easeInOut,
					onComplete: function() {
						$(ul).data('anim', 'false');
					}
				});
			}

			if ($(ul.find('li:last-child')).hasClass('selected')) {
				TweenMax.to($(block.find('.right-btn')), 0.5, {
					opacity: '0',
					onComplete: function() {
						$(block.find('.right-btn')).addClass('disabled');
					}
				});
			} else if ($(ul.find('li:first-child')).hasClass('selected')) {
				TweenMax.to($(block.find('.left-btn')), 0.5, {
					opacity: '0',
					onComplete: function() {
						$(block.find('.left-btn')).addClass('disabled');
					}
				});
			}

		}
	});

	$('#app-content .timeline .circleDiv .disk').on('click', function(e){
		var parent = $(e.currentTarget).parents('li');
		if(!($(parent).hasClass('expanded'))){
			toggleTimeline(parent);
		}
	});

	$('#app-content .timeline .box').on('click', function(e){
		var parent = $(e.currentTarget).parents('li');
		if($(parent).hasClass('expanded')){
			toggleTimeline(parent);
		}
	});

	$('#app-content .timeline .meet-the-team .disk').hover(function(e){
		$(e.currentTarget).addClass('hover');
		var member = $(e.currentTarget).parents('.member');
		var post = $(member).find('.post');
		var name = $(member).find('.name');

		TweenMax.to($(post),0.1,{top:'-'+$(post).outerHeight() + 'px', onComplete:function(){
			TweenMax.to($(name), 0.2, {marginLeft: '0px', width: '100%', onComplete:function(){
				TweenMax.to($(name).find('table'),0.1,{opacity:'1'});
			}});
		}});

	},function(e){
		var member = $(e.currentTarget).parents('.member');
		var post = $(member).find('.post');
		var name = $(member).find('.name');

		TweenMax.to($(name).find('table'),0.1,{opacity:'0', onComplete:function(){
			TweenMax.to($(name), 0.2, {marginLeft: $(name).outerWidth()/2 + 'px', width: '0px', onComplete:function(){
				TweenMax.to($(post),0.1,{top:'0px'});
				$(e.currentTarget).removeClass('hover');
			}});
		}});
	});

	$('#app-content .timeline .meet-the-team .disk').on('click', function(e){
		roleStack($(e.currentTarget));
	});

	animPowerpoints();
	moveEverforms($('#leftEF'),1);
	moveEverforms($('#rightEF'),-1);
}

function animPowerpoints() {

	$('.powerpoint').each(function() {
		//var target = $(this).find('.slide.enabled');

		animateSlide(this);
	});
}

function animateSlide(powerpoint) {
	var animSlide = $(powerpoint).find('.slide.enabled');

	slideAnimation(animSlide);
}

function slideAnimation(animSlide) {

	//Check for Scanner//
    if($(window).outerWidth() < 400){
		TweenMax.to($(animSlide).find('.header'),0,{right:'5%'});
		TweenMax.to($(animSlide).find('.sub-info'),0,{right:'2%'});
		TweenMax.to($(animSlide).find('img'),0,{left:'5%'});
    }
    else {
		TweenMax.to($(animSlide).find('.header'),0,{right:'5%'});
		TweenMax.to($(animSlide).find('.sub-info'),0,{right:'2%'});
		TweenMax.to($(animSlide).find('img'),0,{left:'15%'});
    }

	//move img and header 
	TweenMax.from($(animSlide).find('.header'),0.3,{right:-$(window).outerWidth() + 'px', onComplete:function(){
		TweenMax.to($(animSlide).find('.header'),10,{x:'-10px'});
	}});
	TweenMax.from($(animSlide).find('img'),0.3,{delay:'0.2', left:-$(window).outerWidth() + 'px', onComplete:function(){
		TweenMax.to($(animSlide).find('img'),10,{x:'+50px', onComplete:function(){
			TweenMax.to($(animSlide).find('.header'),0.2,{x:'-30px'});
			TweenMax.to($(animSlide).find('.sub-info'),0.2,{x:'-30px'});
			TweenMax.to($(animSlide).find('img'),0.3,{x:'+70px', onComplete:function(){
				TweenMax.to($(animSlide).find('.header'),0.7,{x:'0', right:-$(window).outerWidth()});
				TweenMax.to($(animSlide).find('.sub-info'),0.7,{delay:'0.1', x:'0', right:-$(window).outerWidth()});
				TweenMax.to($(animSlide).find('img'),0.3,{delay:'0.2', x:'0', left:-$(window).outerWidth(), onComplete:function(){
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
		}});
	}});
	TweenMax.from($(animSlide).find('.sub-info'),0.3,{delay:'0.3', right:-$(window).outerWidth() + 'px', onComplete:function(){
		TweenMax.to($(animSlide).find('.sub-info'),10,{x:'-20px'});
	}});

}

//everform movement over non-focused slideshow images
function moveEverforms($item, direction) {
	var height = $item.height()/4.0*direction;
	var width = $item.width()/4.0*direction;
	TweenMax.to($item, 45, {
		marginTop: height+'px',
		marginLeft: width + 'px',
		onComplete: function() {
			moveEverforms($item, direction*-1)

	}});

}

function toggleTimeline(li){
	var disk = $(li).find('.disk');
	var description = $(li).find('.description');
	var box = $(li).find('.box');
	var diskHeight = $(li).find('.circleDiv').outerHeight()*8/10;
	var padX = $(li).find('.circleDiv').outerWidth()/2 - diskHeight/2;
	var padY = $(li).find('.circleDiv').outerHeight()/2 - diskHeight/2;

	var detailMar = ($('.timeline .details').outerWidth()/2) * 0.1;
	var detailX = $('.timeline .box').outerWidth();
    var deltaX = ( $('.timeline .details').outerWidth() / 2) + ( ($('.timeline .details').outerWidth() / 2) - detailX - detailMar);

	if($(li).hasClass('expanded')){
		TweenMax.to($(disk), 0.3, {borderRadius: '50%'});
		TweenMax.to($(description), 0, {delay: '0.2', width:'100%'});
		$(li).removeClass('expanded');
		TweenMax.to($(box), 0.3, {marginLeft: '0px'});
		TweenMax.to($(box), 0.2, {delay: 0.1, opacity: 0});
	}
	else{
		TweenMax.to($(disk), 0.3, {borderRadius: '25%'});
		TweenMax.to($(box), 0.3, {delay: 1.0, marginLeft: deltaX + 'px'});
		TweenMax.to($(box), 0.2, {delay: 1.1, opacity: 1});
		$(li).addClass('expanded');
		TweenMax.to($(description), 0.3, {delay:'3', width:'90%'});
	}
}

function roleStack(disk){
	// roles will stack based on which one was clicked. But for now, they will all just fall
	var member = $(disk).parents('.member');
	var li = $(member).parents('.meet-the-team');
	var order = member.data('order');
	var delayOffset = 0.15;

	TweenMax.to($(li).find('.role'), 0, {top:'-'+$(disk).outerHeight()/2 + 'px', opacity:'0'});

	var kiddies = $('.timeline .meet-the-team .container').children().length;
    if(kiddies <=5){    
    	var centerChild = Math.round(kiddies/2);

    	if(centerChild%2 > 0){
			$($(li).find('.role')).each(function(i){
				var sep = Math.abs((centerChild-1) - i);
				var delay = delayOffset * sep;

				TweenMax.to($(this),0.5, {delay:delay, top:'0px', ease:Back.easeOut});
				TweenMax.to($(this),0.5, {delay:delay+0.1, opacity:'1'});
			});
    	}
    }

	// TweenMax.to($(member).find('.role'), 0.5, {top:'0px', ease:Back.easeOut});
	// TweenMax.to($(member).find('.role'), 0.5, {delay:'0.1', opacity:'1'});
}










