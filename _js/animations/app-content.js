//Animations for specific topic content
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

	var maxHeight = $(window).outerHeight() - $('#ribbon').outerHeight();
	var iconHeight = $('#app-content .app-title').outerHeight();
	var titlePadding = parseInt($('#app-content .title').css('padding-top'));
	var newPadding = Math.round(titlePadding*.5);
	var delta = titlePadding - Math.round(newPadding);

	var setHeight = maxHeight - titlePadding; 

	var arrowRight = ($(window).outerWidth()/2) - ($('#app-content .title .arrow').outerWidth()/2);

	$('#app-content .title').css('height',maxHeight+'px');
	$('#app-content .title .arrow').css('right',arrowRight + 'px');

	TweenMax.to($('#app-content .title'), 1, {paddingTop:newPadding + 'px', paddingBottom:delta + 'px', height:setHeight + 'px'});
	TweenMax.to($('#app-content .title .arrow'), 1.5, {delay:'2', opacity:'1'});

    setup('.slider-section');
    setup('.halfsies.img');
    setup('.powerpoint');

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

	animPowerpoints();
}

function animPowerpoints(){

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