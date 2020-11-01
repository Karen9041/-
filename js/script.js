$(document).ready(function(){
    
    $(".nav-list-item").hover(function(){
        $(this).children(".nav-sublist").children(".nav-sublist-item").slideDown('fast');
    },function(){
        $(this).children(".nav-sublist").children(".nav-sublist-item").slideUp('slow');
    });

});