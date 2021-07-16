$(document).ready(function(){
    AOS.init();
    $(window).scroll(function(){
        if(this.scrollY >  $(window).height()){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu / navbar script
    $('.menu-btn').click(function(){
        $('.navbar .navbar-nav').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});