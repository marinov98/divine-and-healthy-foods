// this will make the selected element red when clicked 
//$(document).ready(function() {
//    $('h1').click(function() {
 //       $(this).css('background-color', '#ff0000');
 //   })
// }); 

$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });

});