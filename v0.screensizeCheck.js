var screensizeCheck = function(xs, sm, md, lg, xl){

	var screenXs = xs;
	var screenSm = sm;
	var screenMd = md;
	var screenLg = lg;
  var screenLg = xl;

  var fn = function() {

  	if (($(window).innerWidth()) <= screenXs) {
  	$('body').addClass('screen-xs');
  	$('body').removeClass('screen-sm screen-md screen-lg screen-xl');
  	}
  	if (($(window).innerWidth()) > screenXs && ($(window).innerWidth()) < screenSm) {
  	$('body').addClass('screen-sm');
  	$('body').removeClass('screen-xs screen-md screen-lg screen-xl');
  	}
  	if (($(window).innerWidth()) >= screenSm && ($(window).innerWidth()) < screenMd) {
  	$('body').addClass('screen-md');
  	$('body').removeClass('screen-xs screen-sm screen-lg screen-xl');
  	}
  	if (($(window).innerWidth()) >= screenMd && ($(window).innerWidth()) < screenLg) {
  	$('body').addClass('screen-lg');
  	$('body').removeClass('screen-xs screen-sm screen-md screen-xl');
  	}
  	if (($(window).innerWidth()) >= screenLg) {
  	$('body').addClass('screen-xl');
  	$('body').removeClass('screen-xs screen-sm screen-md screen-lg');
  	}

  }

  fn();

  $(window).resize(function(){
    fn();
  });

}
