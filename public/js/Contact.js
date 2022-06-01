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
    // console.log($(window).scrollTop())

    if( $(window).scrollTop()>0 ){
        $(".back1,.pic1,.pic2,.pic3,.contactInner,.contactBottom,.quoteInner,.quoteBottom").addClass("animate__animated animate__fadeInUp --animate-delay: 4s") 
    }else{
        $(".back1,.pic1,.pic2,.pic3,.contactInner,.contactBottom,.quoteInner,.quoteBottom").removeClass("animate__animated animate__fadeInUp --animate-delay: 4s") 
    }

    if( $(window).scrollTop()>200 ){
        $("#title1,#text1").addClass("animate__animated animate__fadeInUp")
    }else{
        $("#title1,#text1").removeClass("animate__animated animate__fadeInUp")
    }

    if( $(window).scrollTop()>900 ){
        $("#title2,#text2").addClass("animate__animated animate__fadeInUp")
    }else{
        $("#title2,#text2").removeClass("animate__animated animate__fadeInUp")
    }
})