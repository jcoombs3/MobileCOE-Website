
function growName(e){
	$(e).addClass('hover');
	var member = $(e).parents('.member');
	var post = $(member).find('.post');
	var name = $(member).find('.name');

	TweenMax.to($(post),0.1,{top:'-'+$(post).outerHeight() + 'px'});
	TweenMax.to($(name), 0.2, {delay: 0.1, marginLeft: '0px', width: '100%'});
	TweenMax.to($(name).find('table'),0.1,{delay: 0.3, opacity:'1'});
}

function shrinkName(e){
	var member = $(e).parents('.member');
	var post = $(member).find('.post');
	var name = $(member).find('.name');

	TweenMax.to($(name).find('table'),0.05,{opacity:'0', onComplete:function(){
		TweenMax.to($(name), 0.1, {marginLeft: $(name).outerWidth()/2 + 'px', width: '0px', onComplete:function(){
			TweenMax.to($(post),0.1,{top:'0px'});
			$(e).removeClass('hover');
		}});
	}});
}
function tileFlow(){
	$('.carousel .large-image').addClass('busy');
	$('.tile').css('opacity', 1);
	var rowTracker=0;
	var rowDelay = 0;
	var randArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	$('.tile-row').each(function(){
		var colTracker = 0;
		$($(this).find('.tile')).each(function(){
			if(rowTracker==0){
				randArray[colTracker] = Math.random() * 0.8;
			}
			TweenMax.to($(this),0.8,{rotationX:"+=720deg", delay:randArray[colTracker]+rowDelay});
			TweenMax.to($(this),0.4,{opacity:'0',delay:randArray[colTracker]+rowDelay+0.4});
			colTracker++;
		});
		rowDelay+=0.05;
		rowTracker++;
	});
	window.setTimeout(function(){$('.carousel .large-image').removeClass('busy')}, 3000);
	TweenMax.to($('.carousel .back-button'), 0.5, {delay: 2.5, opacity: 1});
}

function checkArrows(numMembers){
	var leftArr = $('.timeline li.meet-the-team .member-arrows .arrow-left');
	var rightArr = $('.timeline li.meet-the-team .member-arrows .arrow-right');
	//left arrow check
	if(targetCenter-2 == 1){
		TweenMax.to($(leftArr), 0.5, {opacity: 0});
	}
	else{
		TweenMax.to($(leftArr), 0.5, {opacity: 1});
	}

	if(targetCenter+2 == numMembers){
		TweenMax.to($(rightArr), 0.5, {opacity: 0});
	}
	else{
		TweenMax.to($(rightArr), 0.5, {opacity: 1});
	}
}
var targetCenter = 3;

function moveMembers(arrow){
	var numMembers = $('.timeline li.meet-the-team .container').children().length;
	if($(arrow).hasClass('arrow-right')){
		if(targetCenter + 2 < numMembers){
			TweenMax.to($('.meet-the-team .member-mask .container'),0.5,{left:'-='+$('.member').outerWidth()+'px',ease:Back.easeInOut});
			targetCenter++;
		}
	}
	else {
		if(targetCenter - 2 > 1){
			TweenMax.to($('.meet-the-team .member-mask .container'),0.5,{left:'+='+$('.member').outerWidth()+'px',ease:Back.easeInOut});
			targetCenter--;
		}
	}
	checkArrows(numMembers);
}

function roleStack(disk){
	// roles will stack based on which one was clicked. But for now, they will all just fall
	var member = $(disk).parents('.member');
	var li = $(member).parents('.meet-the-team');
	var order = member.data('order');
	var delayOffset = 0.15;

	TweenMax.to($(li).find('.role'), 0, {top:'-'+$(disk).outerHeight()/2 + 'px', opacity:'0'});

	var kiddies = $('.timeline .meet-the-team .container').children().length;
	var center = kiddies/2;
	var centerAbs = Math.round(center); 

	if(centerAbs > center && kiddies <= 5){
		center -= 0.5;
		$($(li).find('.role')).each(function(i){
			var sep = Math.abs( center - i );
			var delay = delayOffset * sep;

			TweenMax.to($(this),0.5, {delay:delay, top:'0px', ease:Back.easeOut});
			TweenMax.to($(this),0.5, {delay:delay+0.1, opacity:'1'});
		});
	}
	else if (kiddies > 5) {
		center = 2;
		$($(li).find('.role')).each(function(i){
			var sep = Math.abs( center - i );
			var delay = delayOffset * sep;

			TweenMax.to($(this),0.5, {delay:delay, top:'0px', ease:Back.easeOut});
			TweenMax.to($(this),0.5, {delay:delay+0.1, opacity:'1'});
		});
	}
	else {
		center -= 0.5;
		$($(li).find('.role')).each(function(i){
			var sep = Math.abs( center - i );
			var delay = delayOffset * sep;

			TweenMax.to($(this),0.5, {delay:delay, top:'0px', ease:Back.easeOut});
			TweenMax.to($(this),0.5, {delay:delay+0.1, opacity:'1'});
		});
	}

	// TweenMax.to($(member).find('.role'), 0.5, {top:'0px', ease:Back.easeOut});
	// TweenMax.to($(member).find('.role'), 0.5, {delay:'0.1', opacity:'1'});
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
		TweenMax.to($(disk), 0.3, {borderRadius: '50%', borderColor: '#eeeeee'});
		TweenMax.to($(description), 0, {delay: '0.2', width:'100%'});
		$(li).removeClass('expanded');
		TweenMax.to($(box), 0.3, {marginLeft: '0px'});
		TweenMax.to($(box), 0.1, {opacity: 0});
	}
	else{
		TweenMax.to($(disk), 0.3, {borderRadius: '25%', borderColor: '#1d1d1d'});
		TweenMax.to($(box), 0.3, {delay: 1.0, marginLeft: deltaX + 'px'});
		TweenMax.to($(box), 0.2, {delay: 1.1, opacity: 1});
		$(li).addClass('expanded');
		TweenMax.to($(description), 0.3, {delay:'3', width:'90%'});
	}
}

function appsUnite(){ 
	TweenMax.to($('li.blankSpace li'), 0, {left:'+=' + 25 + 'px', top: 0}); 
	TweenMax.to($('li.blankSpace .devicesDiv'), 0, {overflow: 'hidden', height: 'auto'}); var jump = $('li.blankSpace ul').outerHeight()*5/4; var land = $('li.blankSpace ul').outerHeight()/2 + $('.separator').outerHeight()/2; 
	TweenMax.to($('li.blankSpace li'), 1.2, {left: 0}); 
	TweenMax.staggerTo($('li.blankSpace li'), 0.5, {opacity: 1, top: -jump + 'px', ease:Power1.easeOut}, 0.1); 
	TweenMax.to($('li.blankSpace .devicesDiv'), 0, {delay: 0.6, overflow: 'visible', height:'0px'}); 
	TweenMax.staggerTo($('li.blankSpace li'), 0.5, {delay: 0.5, top: -land + 'px' , ease:Power1.easeIn}, 0.1); 
} 