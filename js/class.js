$ (function(){
	 console.log($(document).height())
	 $(window).scroll(function () {
    if ($(this).scrollTop() >= 280) {
      $('.main_1 h2').addClass("fadeIn animated");
      $('.main_1 p').addClass("fadeIn animated");
    }
    if($(this).scrollTop() >= 600){
     $('.top_1 div').addClass("fadeInRight animated");
     $('.top div').addClass("fadeInLeft animated");
    }
    if($(this).scrollTop() >= 1300){
     $('.new div').addClass("animated fadeInUp");
    }
    if($(this).scrollTop()+$(window).height()>= $(document).height()-100){
     $('.foot').addClass("animated fadeInUp");
    }
    // $(document).scrollTop()+$(window).height()>=$(document).height()
  });
})