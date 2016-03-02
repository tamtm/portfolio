$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// navigate control
/*jQuery(document).ready(function($) {
  var pabout = $('#about');
  var pworks = $('#workds');
  var pcontact = $('#contact');
  console.log('zzzzzzz')
  $('main').scroll(function() {
    if ((pabout.offset().top <= 0) && (0 < pworks.offset().top)) {
      $("#works_link").removeClass('active');
      $("#contact_link").removeClass('active');
      $("#about_link").addClass('active');
    }
    if ((pworks.offset().top <= 0) && (0 < pcontact.offset().top)) {
      $("#about_link").removeClass('active');
      $("#contact_link").removeClass('active');
      $("#works_link").addClass('active');
    }
    if ((pcontact.offset().top <= 0)) {
      $("#works_link").removeClass('active');
      $("#about_link").removeClass('active');
      $("#contact_link").addClass('active');
    };
    console.log('aaaa')
  });*/
});
