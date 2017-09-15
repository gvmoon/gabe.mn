//Scroll Fix//
if (document.documentElement.clientWidth < 2400) {
 var $window = $(window),
       $stickyEl = $('#text'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > 1000);
    });

 var $window = $(window),
       $ghostE2 = $('#clear'),
       e2Top = $ghostE2.offset().top;

   $window.scroll(function() {
        $ghostE2.toggleClass('ghost', $window.scrollTop() > 1000);
    });
}