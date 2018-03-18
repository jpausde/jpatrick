(function ($) {

  Drupal.behaviors.jpatrick =  {
    attach: function(context, settings) {

      $('.mdl-layout__content').scroll(function(){


    	console.log($(this).scrollTop());

         if ($(this).scrollTop() == 0) {
            $('.scrolltop').css({bottom:"-100px"});
         }
         else if($(this).scrollTop() > 1 && typeof $(this).scrollTop() != 'undefined') {
           $('.scrolltop').css({bottom:"25px"});
         }

         if ($(this).scrollTop() <= 180) {
           $('#block-signature').css({display:"none"});
         }
         else if($(this).scrollTop() > 180) {
           $('#block-signature').css({display:"block"});
         }

      });

      $('.scrolltop').click(function(){
          $('html, .mdl-layout__content').animate({scrollTop: '0px'}, 800);
          return false;
      });

      $('.scrolltop').css({bottom:"-100px"});


    }//attach

  }
})(jQuery);