$(function(){
    var gnbm =$('.gnb>ul>li>a'); //주메뉴
    var subm =$('.gnb>ul>li>ul'); //서브메뉴

    var min =$('.gnb').height(); //높이값
    var max =subm.innerHeight()+min; //

    gnbm.on('mouseenter focus', function(){
        $('.gnb').css({height:min});
        $('.gnb>ul').stop().animate({height:max},
            "fast",function(){subm.stop().slideDown('fast')}
        );
        subm.removeClass('on');
        $(this).find('ul').addClass('on');
        return false
    });

    $('.gnb>ul').mouseleave(function(){
        subm.stop().slideUp('fast',function(){
            $('.gnb').stop().animate({height:min},'fast');
            return false;
        });
    });

   
})

