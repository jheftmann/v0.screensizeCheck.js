$(document).ready(function(){

  screensizeCheck(480, 768, 1200, 1400, 1600);

  $(window).resize(function(){
    $('body').prepend("<h1 style='display:inline;'>Width: " + width + ", </h1>");
  });

});
