$ (function(){
// youtube video
$('.venobox').venobox();

//About slider
$('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
           
          }
        },

       
      ]
    });
  });



$(window).scroll(function(){
 var scrolling= $(this). scrollTop();

 if(scrolling >200 ){
    $('.navbar').addClass('navbg');

 }

 else{
    $('.navbar').removeClass('navbg');

 }


});
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar',
    offset: 80
  });



  //animation scroll js
 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 70
             }, 1500);
             return false;
         }
     }

});