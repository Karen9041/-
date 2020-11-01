$(document).ready(function(){
    
    $(".nav-list-item-btn").hover(function(){
        $(this).children(".nav-sublist").slideDown('fast');
    },function(){
        $(this).children(".nav-sublist").slideUp('slow');
    });

});