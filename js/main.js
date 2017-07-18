
$('#about').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".about").offset().top
    }, 700);
});

$('#devs').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".devs").offset().top
    }, 700);
});

$('#join-us').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".join-us").offset().top
    }, 700);
});



var navOffTop    =  $('#navigation').offset().top;
var aboutHeight  =  $('.about').outerHeight();
var scrollOffTop =  $(window).scrollTop();


function stickyNav() {

    if ( $(window).scrollTop() > $('.about').outerHeight()) {
        $('#navigation').addClass("sticky");
        $('.devs').addClass("stickyOn");
    } else {
        $('#navigation').removeClass("sticky");
        $('.devs').removeClass("stickyOn");
    }
}

$(window).on('scroll', function () {
    stickyNav();    
});

$(document).ready(function() {

    $('form').submit(function(event) {

        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'message': $('textarea[name=message]').val()
        };

        $.ajax({
            type: 'POST', 
            url: 'post.php', 
            data: formData, 
            dataType: 'json', 
            encode: true
        })
            
            .done(function(data) {
                console.log(data); 
            });

        event.preventDefault();
    });

});