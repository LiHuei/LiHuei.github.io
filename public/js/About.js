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

$(window).scroll(function(){
    // console.log( $(window).scrollTop() )

    if( $(window).scrollTop()>0 ){
        $(".back1,.pic,.aboutInner").addClass("animate__animated animate__fadeInUp")
        $(".aboutBottom,.quote").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".back1,.pic,.aboutInner").removeClass("animate__animated animate__fadeInUp")
        $(".aboutBottom,.quote").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
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

    if( $(window).scrollTop()>800 ){
        $(".back2").addClass("animate__animated animate__fadeInUp")
        $("#img2,#img3,#raviTitle,#raviText").addClass("animate__animated animate__fadeInUp --animate-delay: 2s")
    }else{
        $(".back2").removeClass("animate__animated animate__fadeInUp")
        $("#img2,#img3,#raviTitle,#raviText").removeClass("animate__animated animate__fadeInUp --animate-delay: 2s")
    }

    if( $(window).scrollTop()>2300 ){
        $(".time1").addClass("animate__animated animate__fadeInUp")
    }else{
        $(".time1").removeClass("animate__animated animate__fadeInUp")
    }

    if( $(window).scrollTop()>2500 ){
        $(".time2").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".time2").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }

    if( $(window).scrollTop()>2800 ){
        $(".time3").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".time3").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }

    if( $(window).scrollTop()>3000 ){
        $(".time4").addClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }else{
        $(".time4").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s")
    }
})