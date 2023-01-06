$(document).ready(function(){
   //aos
    AOS.init();
    
    // 서브메뉴 연결
    $('.main-menu li').hover(function(){
      const result = $(this).attr('data-alt');
      $('.sub-menu').removeClass('avtive');
      $(`#${result}`).addClass('active');

      // 서브메뉴 박스 보이게 처리
      $('.sub-menu-box').addClass('active');
    });
    // 서브메뉴 박스 안보이게 처리
    $('.sub-menu-box').mouseleave(function(){
      $(this).removeClass('active');
    });
    
    $('#hamburger').click(function(){
      $(this).toggleClass('active');
      $('.main-menu').toggleClass('active');
    });

    //상단 이동 버튼
    const btn = $('.top-btn');
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        btn.fadeIn();
      }else{
        btn.fadeOut();
      }
    });

    btn.on('click', function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop : 0
      }, 100);
    });

});
