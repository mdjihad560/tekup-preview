(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){


/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
  } else {
      $('.scrollup').fadeOut();
  }
});

$('.scrollup').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, 600);
  return false;
});


$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});


var popup_youtube = $('.video-popup');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}

Splitting();

gsap.from(".char", {duration:0.5, opacity:0, stagger:0.02, y:30, ease:"power1.inOut"});



});/*End document ready*/


$(window).on("resize", function(){
  

}); // end window resize


$(window).on("load" ,function(){



}); // End window LODE

   var wow = new WOW({
      mobile: false,       // default
      tablet:false
    });
    wow.init();


})(jQuery);






