$(function(){
    $('#scroll-introduction').click(function(){
        $('html,body').animate({scrollTop:$('#introduction').position().top});
    });

    $('#scroll-history').click(function(){
        $('html,body').animate({scrollTop:$('#history').position().top});
    });

    $('#scroll-current').click(function(){
        $('html,body').animate({scrollTop:2000});
    });

    $('.fa').click(function(){
        $('html,body').animate({scrollTop:0});
    });
});