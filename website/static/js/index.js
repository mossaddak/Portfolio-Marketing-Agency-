//navbar
$(function () {
    $(".nav_btn").click(function(){
        if($(".nav_btn")==$(this)){
            $(this).addClass('nav_btn_active');//.siblings().removeClass('nav_btn_active');
        }else{
            $(".nav_btn").removeClass('nav_btn_active');
            $(this).addClass('nav_btn_active');
        }
    })
});
