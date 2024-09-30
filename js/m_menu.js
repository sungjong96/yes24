$(function(){
    // //모바일메뉴 보이기
    // $('.btn').click(
    //     function(){
    //         $('.m_menu').slideToggle('fast');
    //     }
    // );
   
    // 옆으로 슬라이드
    
    $(function(){
	
        $('.m_menu').css('left','-788px');
   
        $('.btn').click(function(){
        var hidden = $('.m_menu');
         if (hidden.hasClass('visible')){
             hidden.animate({"left":"-788px"}, "fast").removeClass('visible');
         } else {
            hidden.animate({"left":"0px"}, "fast").addClass('visible');
         }
         $(".back").toggle();
       });
     });

    //모바일 서브메뉴 보이기
    $('.main').click(function(){
        $(this).find('.sub').slideToggle();
        $(this).siblings().children('.sub').slideUp();
        return false;
    });
    
    /* 
    find() 찾기 함수
    siblings() 형제 함수
    children() 자식요소 함수
    slideUp() 슬라이드 위로 올리기 함수

    */
})

