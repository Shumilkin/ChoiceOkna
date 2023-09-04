$(document).ready(function(){
  $("#owl-carousel-head").owlCarousel({
      loop:true, //Зацикливаем слайдер
      margin:10, //Отступ от элемента справа в 50px
            items:1,
            dots:true,
      autoplay:true,
      autoplayTimeout:6000,
      
      navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
  });
});
$(document).ready(function(){
    $("#owl-carousel-uslugi").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:true,
        items:4,
        autoplay:true,
        autoplayTimeout:6000,
        responsive:{
          700:{
             nav:true,
             items:4,

          },
          400:{
            nav:true,
            autoplayTimeout:2000,
            items:3,
dots:true,
        },
        100:{
          nav:true,
          autoplayTimeout:2000,
          items:2,
dots:true,
      }
      },
        
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
    });
  });
  $(document).ready(function(){
    $("#owl-carousel-photo").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:true,
        items:4,
        autoplay:true,
        responsive:{
          600:{   items:3},
          400:{   items:2}},
        autoplayTimeout:3000,
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
    });
  }); $(document).ready(function(){
    $("#owl-carousel-photo-otdelka").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:true,
        items:4,
        autoplay:true,
        responsive:{
          600:{   items:3},
          400:{   items:2}},
        autoplayTimeout:3000,
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
    });
  });
  $(document).ready(function(){
    $("#owl-carousel-price").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:true,
        items:4,
        autoplay:true,
        autoplayTimeout:6000,
        responsive:{
          991:{
             nav:true

          },
          400:{
            nav:true,
            autoplayTimeout:2000,
            items:3,
dots:true,
        },
        100:{
          nav:true,
          autoplayTimeout:2000,
          items:2,
dots:true,
      }
      },
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
    });
  });
  $(document).ready(function(){
    $("#owl-carousel-partners").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от элемента справа в 50px
     
        items:4,
        autoplay:true,
        autoplayTimeout:2000,
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
        responsive:{
          600:{   items:4},
          400:{   items:2}}
       
    });
  });
  $(document).ready(function(){
    $("#owl-carousel-info").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от элемента справа в 50px
              items:2,
              dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        nav:true,
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
    });
  });