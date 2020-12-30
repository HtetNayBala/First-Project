$(document).ready(function(){
  $('.navbar-toggler').click(function(){
      let result = $('.navbar-collapse').hasClass('show');
      if(result){
          $('.menu-icon').removeClass('feather-x').addClass('feather-menu')
          
      }else{
          $('.menu-icon').removeClass('feather-menu').addClass('feather-x')
      }
  })
});

let screenHeight = window.innerHeight;

$(document).ready(function () {
  $(window).scroll(function () {
    let windowHeight = $(this).scrollTop();
    if(windowHeight >screenHeight-100){
      $('.nav-bar').addClass('navShow');
      
    }else{
      $('.nav-bar').removeClass('navShow');
      setActive('home');
    }
  })
})

function setActive(current) {
  $(`.nav-link`).removeClass('underline');

  $(`.nav-link[href='#${current}']`).addClass('underline');
}

function navScroll(){
  let currentSection = $('section[id]');
    currentSection.waypoint(function (direction) {
        if(direction == "down"){
            let currentSection = $(this.element).attr('id');
            setActive(currentSection);
        }
    },{
      offset:'20%'
    });
    currentSection.waypoint(function (direction) {
      if(direction == "up"){
          let currentSection = $(this.element).attr('id');
          setActive(currentSection);
      }
  },{
    offset:'20%'
  });
}


navScroll();



$('.slide-img').slick();

$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

let arr = document.querySelectorAll("#logo path");

// for(i=0;i<=arr.length;i++){
//     console.log(`${i} is ${arr[i].getTotalLength()}`)
// }

$(window).on("load",function(){
  $(".loader").hide();
});