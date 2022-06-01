let is_show = false

$(".menuIcon").on("click",function(){
    if(is_show == false){
        $("ul").slideToggle()
        is_show = true
    }else{
        $("ul").slideToggle()
        is_show = false
    }
})

$(window).resize(function(){
    if( $(window).width() >= 768 ){
        $("ul").show()
        is_show = true
    }else{
        $("ul").hide()
        is_show = false
    }
})

$('.slideshow').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 3000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        console.log(nextIndex)
        slideImgs.eq(currentIndex).fadeOut();
        slideImgs.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
})

$(window).scroll(function(){
    // 看捲軸上邊的高度
    // console.log( $(window).scrollTop() )

    // 判斷捲軸上邊高度是否超過指定高度  
    
    if( $(window).scrollTop()>0 ){
        // 增加.animate
        $(".back_one").addClass("animate__animated animate__fadeInUp")
        $(".left,.right,.headInner,.headBottom,.quoteInner,.quoteBottom").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".back_one").removeClass("animate__animated animate__fadeInUp")
        $(".left,.right,.headInner,.headBottom,.quoteInner,.quoteBottom").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }

    if( $(window).scrollTop()>200 ){
        $(".title").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }else{
        $(".title").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }

    if( $(window).scrollTop()>250 ){
        $(".text").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }else{
        $(".text").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }

    if( $(window).scrollTop()>700 ){
        $(".back_two").addClass("animate__animated animate__fadeInUp")
        $(".menuInner,.menuBottom").addClass("animate__animated animate__fadeInUp --animate-delay: 2s")
    }else{
        $(".back_two").removeClass("animate__animated animate__fadeInUp")
        $(".menuInner,.menuBottom").removeClass("animate__animated animate__fadeInUp --animate-delay: 2s")
    }

    if( $(window).scrollTop()>1400 ){
        $("#menuTitle").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }else{
        $("#menuTitle").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }

    if( $(window).scrollTop()>1500 ){
        $("#menuText").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }else{
        $("#menuText").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }

    if( $(window).scrollTop()>2000 ){
        $(".back_three").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
        $(".pic1").addClass("animate__animated animate__fadeInUp --animate-delay: 2s")
        $(".pic2,.spaceInner,.spaceBottom").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".back_three").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
        $(".pic1").removeClass("animate__animated animate__fadeInUp --animate-delay: 2s")
        $(".pic2,.spaceInner,.spaceBottom").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }

    if( $(window).scrollTop()>2700 ){
        $("#contactTitle").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }else{
        $("#contactTitle").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }

    if( $(window).scrollTop()>2800 ){
        $(".text_left,.text_right").addClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }else{
        $(".text_left,.text_right").removeClass("animate__animated animate__fadeInUp --animate-delay: 5s")
    }

})