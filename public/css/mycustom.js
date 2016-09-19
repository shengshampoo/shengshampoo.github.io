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

$(document).ready(function() {
	 
// display image caption on top of image
// https://davemcmillan.net/use-jquery-to-display-an-image-alt-tag-as-a-caption-overlay/
$("#content img").each(function() {
    var imageCaption = $(this).attr("alt");
		  
    if (imageCaption != '') {
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();
        var position = $(this).position();
        var positionTop = (position.top + imgHeight - 26);
        $("<span class='img-caption'><em>"+imageCaption+"</em></span>")
        .css({"position":"absolute", "top":positionTop+"px", "left":"0", "width":imgWidth +"px"})
        .insertAfter(this);
        }
	  
     });	
});
