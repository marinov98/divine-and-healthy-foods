$(document).ready(function() {
  // THIS DOWN here does not work for whatever reason
  /* For the sticky navigation 
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } 
        else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    })

    
    */
  /* scroll buttons */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(".js--scroll-to-features").click(function() {
    $("html, body").animate({ scrollTop: $("#features").offset().top }, 1000);
  });

  $(".js--scroll-to-works").click(function() {
    $("html,body").animate({ scrollTop: $("#works").offset().top }, 1000);
  });

  $(".js--scroll-to-cities").click(function() {
    $("html,body").animate({ scrollTop: $("#cities").offset().top }, 1000);
  });

  $(".js--scroll-to-plans").click(function() {
    $("html,body").animate({ scrollTop: $("#plans").offset().top }, 1000);
  });

  // Scroll to the top of the page
  $(".js--scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1400, "swing");
  });

  /* navigation scroll */
  //   $(function() {
  //     $("a[href*=#]:not([href=#])").click(function() {
  //       if (
  //         location.pathname.replace(/^\//, "") ==
  //           this.pathname.replace(/^\//, "") &&
  //         location.hostname == this.hostname
  //       ) {
  //         var target = $(this.hash);
  //         target = target.length
  //           ? target
  //           : $("[name=" + this.hash.slice(1) + "]");
  //         if (target.length) {
  //           $("html,body").animate(
  //             {
  //               scrollTop: target.offset().top
  //             },
  //             1000
  //           );
  //           return false;
  //         }
  //       }
  //     });
  //   });

  /* Animations on scroll 
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    /* this will make the selected element red when clicked 
    $(document).ready(function() {
        $('h1').click(function() {
            $(this).css('background-color', '#ff0000');
       })
     }); 
     */
});
