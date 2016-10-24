/* loading lightGallery.io css*/
$(document).ready(function() {
    $('#lightgallery').lightGallery({
    thumbnail:true,
    fullScreen:true,
    autoplay:true,
    pause:8000,
      }); 
    });

$(document).ready(function() {
    $('#lightgallery_1').lightGallery({
    thumbnail:true,
    fullScreen:true,
    autoplay:true,
    pause:8000,
      }); 
    });

/* loading OwlCarousel2 js*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
            items:2,
            nav:true
        }
    }
    });
    });

/* loading Slippry js*/
jQuery('#slippry-query').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box jquery-demo" />', // wrapper to wrap everything, including pager
  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  useCSS: false, // true, false -> fallback to js if no browser support
  autoHover: false,
  transition: 'horizontal'
});
