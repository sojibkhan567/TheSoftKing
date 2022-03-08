/*===================================
    THEME: The SoftKking
    VERSION: 1.0.0
    AUTHOR: MD. Shojib Hossain
=====================================*/

//Bootstrap-5 tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Mouse Hover Dropdown Menu
document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
            everyitem.addEventListener('mouseover', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
            })
        });
    }
}); // DOMContentLoaded  end


$(document).ready(function() {

    //Testmonial Section
    $(".testimonial-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        speed: 1000,
        autoplaySpeed: 1000,
    });

    //Brand-item Testimonial
    $(".brand-slider, .involved-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
    //Sidebar Menu
    $('.menu-sidebar-close').on('click', function(){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').attr('aria-expanded', 'false');
    });
    // mobile menu js
    $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
        const element = $(this).parent("li");
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
        }
        else {
            element.addClass("open");
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
        }
    });

    //search btn
    $('.header__search-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header-search-form').toggleClass('active');
    });

  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.header__search-btn, .header__search-btn *, .header-search-form, .header-search-form *')) {
      $('.header-search-form').removeClass('active');
      $('.header__search-btn').removeClass('active');
    }
  });

//Wow Animation
  new WOW().init();

//preloader
$(".preloader").delay(300).animate({
    "opacity" : "0"
    }, 300, function() {
    $(".preloader").css("display","none");
  });
// Animate the scroll to top
$(".scroll-to-top").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 300);
    });

// menu options custom affix
var fixed_top = $(".scroll-menu");
$(window).on("scroll", function(){
    if( $(window).scrollTop() > 600){  
        fixed_top.addClass("animated fadeInDown menu-fixed");
    }
    else{
        fixed_top.removeClass("animated fadeInDown menu-fixed");
    }
});

var lastScrollTop = '';
$(window).on('scroll', function () {
   var ScrollTop = $('.scroll-to-top');
   if ($(window).scrollTop() > 500) {
       ScrollTop.fadeIn(500);
   } else {
       ScrollTop.fadeOut(500);
   }
   /*--------------------------
    sticky menu activation
   -------------------------*/
    var st = $(this).scrollTop();
    var mainMenuTop = $('.header');
    if ($(window).scrollTop() > 500) {
        if (st > lastScrollTop) {
            mainMenuTop.removeClass('animated fadeInDown menu-fixed');
            
        } else {
            mainMenuTop.addClass('animated fadeInDown menu-fixed');
        }
    } else {
        mainMenuTop.removeClass('animated fadeInDown menu-fixed');
    }
    lastScrollTop = st;
});

//search field hide animation after click
$('.custom-field').click(function() {
    $('.form-text-animation').css("display", "none")
});



});
