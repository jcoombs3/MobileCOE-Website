function loadAppState() {
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

    TweenMax.to($('#app-content'),0.5,{height:$(window).outerHeight() - $('#ribbon').outerHeight() + 'px'});

    TweenMax.to($('#app-content .title'), 1, {
        paddingTop: newPadding + 'px',
        paddingBottom: delta + 'px',
        height: setHeight + 'px',
    });
    TweenMax.to($('#app-content .title .arrow'), 1.5, {
        delay: '2',
        opacity: '1'
    });
}
