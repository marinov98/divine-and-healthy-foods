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
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })



    /* this will make the selected element red when clicked 
    $(document).ready(function() {
        $('h1').click(function() {
            $(this).css('background-color', '#ff0000');
       })
     }); 
     */
});