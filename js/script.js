/* scroll */

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>60){
            document.getElementById("menu").style.backgroundColor="rgba(45, 52, 54,.99)";
        }else{
            document.getElementById("menu").style.backgroundColor="rgba(45, 52, 54,.8)";
        }
    });
});

