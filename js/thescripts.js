/**
 * Created by Sushant Gauchan
 * Email : sushant.gauchan11@gmail.com
 */


$(document).on('ready', function() {
    var $gallery = $('#packages-page .common-box-container').isotope({
        // options
        itemSelector: '.box-item',
        layoutMode: 'masonry'
    });
    $gallery.imagesLoaded().progress(function () {
        $gallery.isotope('layout');
    });   
});


/*------------------------------- Functions Starts -------------------------------*/
$(document).on('ready', function() {
    $('.common-banner-slider .common-banner-container').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.testimonial-slider-section .testimonial-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 250,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.services-slider-section .services-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 250,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.equipment-slider-section .equipment-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 250,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
function navInit() {
    if(winWidth >= 768){
        var scrollTop = 0;
        jQuery(window).scroll(function(){
            scrollTop = jQuery(window).scrollTop();
            if (scrollTop >= 150) {
                jQuery('#header-wrapper').addClass('nav-scroll');
            } else if (scrollTop < 150) {
                jQuery('#header-wrapper').removeClass('nav-scroll');
            }
        });
    }
    $('#header-wrapper .toggle .image-container').click(function() {
        $('#header-wrapper').toggleClass('nav-open');
    });

    $('.has-sub-menu > a').click(function(e){
      e.preventDefault();
    });

    $('#header-wrapper .has-sub-menu > a').click(function(_e) {
        //
        if
        ($(this).parent('li').hasClass('open')){
          $('#header-wrapper .has-sub-menu ').removeClass('open');
        }
        else{
          $('#header-wrapper .has-sub-menu ').removeClass('open');
          $(this).parent().addClass('open');
        }
    });
}


/*-------------------------------- Functions Ends --------------------------------*/
