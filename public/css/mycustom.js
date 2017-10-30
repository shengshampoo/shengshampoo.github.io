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
jQuery(document).ready(function(){
    jQuery('#slippry-query').slippry({
    // general elements & wrapper
    slippryWrapper: '<div class="sy-box jquery-demo" />', // wrapper to wrap everything, including pager
    // options
    adaptiveHeight: false, // height of the sliders adapts to current slide
    useCSS: false, // true, false -> fallback to js if no browser support
    autoHover: false,
    transition: 'horizontal'
    });
    });
    
/* caption.js*/    

$(window).load(function() {
    $('img.caption').captionjs({
        'class_name'      : 'captionjs', 
        'schema'          : true,        
        'mode'            : 'stacked',   // default | stacked | animated | hidden (deprecated: hide)
        'force_dimensions': true,        // Force the dimensions in case they cannot be detected (e.g., image is not yet painted to viewport)
        'debug_mode'      : false,       // Output debug info to the JS console
    });
});
