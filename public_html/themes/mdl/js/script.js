"use strict";
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');
    //console.log(drupalSettings);
});
window.addEventListener('load', function() {
    console.log('window and all contents loaded');
    //console.log(drupalSettings);
});

(function ($) {

  Drupal.behaviors.jpatrick =  {
    attach: function(context, settings) {

    	console.log("drupal hit");

      $('.mdl-layout').scroll(function(){

      	
    	console.log($(this).scrollTop());

         if ($(this).scrollTop() == 0) {
            $('.scrolltop').css({bottom:"-100px"});
         }
         else if($(this).scrollTop() > 1 && typeof $(this).scrollTop() != 'undefined') {
           $('.scrolltop').css({bottom:"25px"});
         }

         if ($(this).scrollTop() <= 220) {
           $('#block-signature').css({display:"none"});
         }
         else if($(this).scrollTop() > 220) {
           $('#block-signature').css({display:"block"});
         }

      });

      $('.scrolltop').click(function(){
          $('html, .mdl-layout').animate({scrollTop: '0px'}, 800);
          return false;
      });

      $('.scrolltop').css({bottom:"-100px"});


    }//attach

  }
})(jQuery);