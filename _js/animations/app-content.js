//Animations for specific topic content
function loadContent() {
	/* BETA for App load */
	setup('.slider-section');
	setup('.halfsies.img');
	setup('.powerpoint');
	setup('.timeline');
    setup('.carousel');

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
		growName(e.currentTarget);
	},function(e){
		shrinkName(e.currentTarget);
	});


	$('#app-content .timeline .meet-the-team .disk').on('click', function(e){
		roleStack($(e.currentTarget));
	});

	$('#app-content .timeline .member-arrow').on('click',function(e){
		moveMembers($(e.currentTarget));
	});

	$('#app-content .timeline .separator').on('click',function(){
		appsUnite();
	});


	/* carousel function */
	$('#app-content .carousel .folder').hover(function(e){
		var snippet = $(e.currentTarget).find('.snippet');
		TweenMax.to($(snippet),0.3,{bottom:'90%'});
	},function(e){
		var snippet = $(e.currentTarget).find('.snippet');
		TweenMax.to($(snippet),0.3,{bottom:'10%'});
	});

	$('#app-content .carousel .large-image').on('click',function(e){
		if(!$(e.currentTarget).hasClass('busy')){
			tileFlow();
		}
	});

	$('#app-content .carousel .folder').on('click', function(e){
		if(!$(e.currentTarget).hasClass('busy')){
			toggleFolder('folders');
		}
	});

	$('.carousel .back-button').on('click', function(e){
			toggleFolder('img-view');
	});
	/* ------------------- */ 



	animPowerpoints();
	checkArrows($('.timeline li.meet-the-team .container').children().length);
}





















