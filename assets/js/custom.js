$(document).ready(function () {
    $("[data-fancybox]").each(function () {
        $(this).attr("data-caption", $(this).attr("title"));
    }),
        $("[data-fancybox]").fancybox(),
        
       
        $(".nav-open .ham input:checkbox").change(function () {
            $(this).is(":checked") ? $(".nav-bar").addClass("active") : $(".nav-bar").removeClass("active") ; $('.mainoverlay').addClass('active');
        }),
        $(document).on("click", function(e){
            if( 
              $(e.target).closest(".nav-bar").length == 0 &&
              $(".nav-bar").hasClass("active") &&
              $(e.target).closest(".nav-open").length == 0
            ){
              $('.nav-bar').toggleClass('active');
              $('.mainoverlay').toggleClass('active');
              $('.nav-open .ham input:checkbox').prop('checked', false);
            }
          });
        
      

          $('.banner').slick({
            dots: false,
            arrows:false,
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed:20000,
            fade: true,
            cssEase: 'linear'
          });
        
          $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            
            responsive: [
                    {
                            breakpoint: 769,
                            settings: {
                                    slidesToShow: 2
                            }
                    },
                    {
                            breakpoint: 480,
                            settings: {
                                    slidesToShow: 1
                            }
                    }
            ]
    });
    $('.campus').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      lazyLoad: 'ondemand',
      
});
    $('.reviews').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      arrows: true,
     
      responsive: [
              {
                      breakpoint: 769,
                      settings: {
                              slidesToShow: 2
                      }
              },
              {
                      breakpoint: 480,
                      settings: {
                              slidesToShow: 1
                      }
              }
      ]
});


             $('.banner')
              .on('beforeChange', function() {
                  $('.cont').removeClass("aos-animate");
              })
              .on('afterChange', function(event, slick, currentSlide) {
                  $('.cont').addClass("aos-animate");
              });

              


       AOS.init();
});
