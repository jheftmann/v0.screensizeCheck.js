var screensizeCheck = function(xs, sm, md, lg, xl){

	var screenXs = xs;
	var screenSm = sm;
	var screenMd = md;
	var screenLg = lg;
  var screenLg = xl;

  var fn = function() {

    width = $(window).innerWidth();

  	if (width <= screenXs) {
  	$('body').addClass('screen-xs');
  	$('body').removeClass('screen-sm screen-md screen-lg screen-xl');
  	}
  	if (width > screenXs && width < screenSm) {
  	$('body').addClass('screen-sm');
  	$('body').removeClass('screen-xs screen-md screen-lg screen-xl');
  	}
  	if (width>= screenSm && width < screenMd) {
  	$('body').addClass('screen-md');
  	$('body').removeClass('screen-xs screen-sm screen-lg screen-xl');
  	}
  	if (width >= screenMd && width < screenLg) {
  	$('body').addClass('screen-lg');
  	$('body').removeClass('screen-xs screen-sm screen-md screen-xl');
  	}
  	if (width >= screenLg) {
  	$('body').addClass('screen-xl');
  	$('body').removeClass('screen-xs screen-sm screen-md screen-lg');
  	}

  }

  fn();

  $(window).resize(function(){
    fn();
  });

}
