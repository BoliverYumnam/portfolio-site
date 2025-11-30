$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top 
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
  
  $('ul li  ').click(function(){
      $('li ').removeClass("active");
      $(this).addClass("active");  
  });
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        $(".top-bar").addClass("remove-bar"); // you don't need to add a "." in before your class name
    } else {
        $(".top-bar").removeClass("remove-bar");
    }
});


$(".nav.navbar-nav li a").on("click", function () {
    $(".nav.navbar-nav li").removeClass("active");
    $(this).parent().addClass("active");
    // close collapse if mobile
    $(".navbar-collapse").collapse('hide');
});
