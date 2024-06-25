jQuery(function($) {

    var loggedIn = false,
        playable = true,
        alreadyPlayed = false;

        var $btn = $('.btn-normal');
        $btn.data('count', 0); // initialize count to 0
      
        $btn.on('click', function(event) {
          var count = $btn.data('count');
      
          if (count === 0) {
            $(".popup-gift-result").fadeIn();
            $btn.data('count', 1);
      
          } else if (count === 1) {
            $(".popup-get-confirm").fadeIn();
            $btn.data('count', 2);
            $btn.prop('disabled', true);

            $btn.css('color', 'black');
            $btn.css('opacity', '0.3');
      
          } else if (count === 2) {
            $btn.prop('disabled', true);

            $btn.css('color', 'black');
            $btn.css('opacity', '0.3');
      
          } else {
            $(".popup-gift-result").fadeIn();
            $btn.data('count', 0);
          }
        });

          /*-------- Not qualified--------*/

          var $btnNotQualified = $('.btn-not-qualified');
  $btnNotQualified.data('count', 0); // initialize count to 0

  $btnNotQualified.on('click', function(event) {
    var count = $btnNotQualified.data('count');

    if (count >= 0) {
      $(".popup-get-not-qualified").fadeIn();
      $btnNotQualified.data('count', 1);
      disableButton($btnNotQualified);
    }
  });

   
    /*-------- 其他功能 --------*/
    $(".pop-close, .btn-know, .btn-get-confirm-no").on('click', function(event) {
        $(".popup").fadeOut();
    });
    $(".btn-rule").on('click', function(event) {
        $(".popup-rule").fadeIn();
    });

});


$(window).on('load', function (e) {
    // delete preloader
    $(".preloader").fadeOut(300);
});