const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:{
  delay:1500,
},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
$(document).ready(function() {
  $('.drop').click(function(event){
    event.preventDefault();
 $('.dropopen').slideToggle();
      });
    $('.fa-solid.fa-arrow-up').click(function(event){
        $('html,body').animate({
          scrollTop:0
          },700)
    });
  });
  