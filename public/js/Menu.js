$(window).scroll(function(){
    // console.log($(window).scrollTop())

    if( $(window).scrollTop()>0 ){
        $(".back1,.menuInner,.pic").addClass("animate__animated animate__fadeInUp") 
        $(".menuBottom,.quoteInner,.quoteBottom").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".back1,.menuInner,.pic").removeClass("animate__animated animate__fadeInUp") 
        $(".menuBottom,.quoteInner,.quoteBottom").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }

    if( $(window).scrollTop()>200 ){
        $(".pic1,.pic2").addClass("animate__animated animate__fadeInUp")
    }else{
        $(".pic1,.pic2").removeClass("animate__animated animate__fadeInUp")
    }

    if( $(window).scrollTop()>800 ){
        $(".pic3,.pic4").addClass("animate__animated animate__fadeInUp")
    }else{
        $(".pic3,.pic4").removeClass("animate__animated animate__fadeInUp")
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