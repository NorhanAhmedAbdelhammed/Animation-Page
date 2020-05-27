// // ----------loading----------------//
var count = 0;
var counter =setInterval(function(){
    if(count<101){
        $('.count').text(count + "%")
        $('.count').css({"top": (102-count) + "%"})
        $('.loader').css({"height" : count +"%", "top": (100-count) + "%"})
        count++;
    }else{
        $('.loading').css({"display":"none"})
        $('.count').css({"display":"none"})
        $('.loader').css({"display":"none"})
        $('.afterLoading').css({"display":"block"})
        clearInterval(counter);
    }
},25) 

// $('.afterLoading').css({"display":"block"})
// ----------------end loading----------------------//
$(document).ready(function(){
    // -----------change view by scrolling----- //
    // -------variables------- //
    var numberOfSlides = $(".slide__item").length
    var wScroll=window.pageYOffset
    // ------initialization of scrolling------//
    $("nav").slideDown("1000");
    if(wScroll ==0 ) {
        $('.slide_1 div').each(function(i){
            setTimeout(function(){
            $('.slide_1 div').eq(i).addClass('is__showing__slide_1');
            }, 1500*(i-1));
        });
    }
    for(i=0 ; i<numberOfSlides ; i++){
        if (wScroll >= (i*10) && wScroll<((i*10)+10)) {
            $('.slide__item').eq(i).addClass('show__element');
        }else {
            $('.slide__item').eq(i).removeClass('show__element');
        }
    }
    if(wScroll>((numberOfSlides-1)*10)+10){
        $('.slide__item').eq(numberOfSlides-1).addClass('show__element');
    }
    //-----------scrolling function--------//
    $(window).scroll(function(){
        wScroll = $(this).scrollTop();
        for(i=0 ; i<numberOfSlides ; i++){
            if (wScroll >= (i*10) && wScroll<((i*10)+10)) {
                $('.slide__item').eq(i).addClass('show__element');
            }else {
                $('.slide__item').eq(i).removeClass('show__element');
            }
        }
        if(wScroll>((numberOfSlides-1)*10)+10){
            $('.slide__item').eq(numberOfSlides-1).addClass('show__element');
        }
        // ------animations in slide_1----- //
        if(wScroll >= 0 && wScroll<80 ) {
            $("nav").slideDown(1000);
            $('.slide_1 div').each(function(i){
                setTimeout(function(){
                $('.slide_1 div').eq(i).addClass('is__showing__slide_1');
                }, 150*(i-1));
            });
        }else{
            $("nav").slideUp(1000);
            $('.slide_1 div').each(function(i){
                setTimeout(function(){
                $('.slide_1 div').eq(i).removeClass('is__showing__slide_1');
                }, 150*(i-1));
            });
        }
        // -------------animations in slide_3------- //
        if( $('.slide_3').find('.show__element')){
            $('.slide_3__info').eq(0).addClass('is__showing__slide_3');
        }else{
            $('.slide_3__info').eq(0).removeClass('is__showing__slide_3');
        }
        // -------------moving_arrow-------- //
        if(wScroll > $('.infoAboutWeb').offset().top - ($(window).height() / 1.5)){
            $('.moving_arrow').css({"transform":"translateY(0)"})
        }
        // -------------change background of footer-------- //
        if(wScroll > $('footer').offset().top - ($(window).height() / 2)){
            $('footer').css({"background-color":"#5551f7" , "color":"white"})
            $('footer a').css({"color":"white"})
            $('footer span').css({"color":"white"})
            $('.contactUs__details').css({"border-top": "1px solid white"}) 
        }else{
            $('footer').css({"background-color":"white" , "color":"black"})
            $('footer a').css({"color":"black"})
            $('footer span').css({"color":"black"})
            $('.contactUs__details').css({"border-top": "1px solid black"})
        }
    });  
    //   -----------change from menu to close----------  //
    $(".aboveSection").eq(0).click(function(){
        if($("#fixedSideBar__text").html()=="MENU"){
            $("#fixedSideBar__text").html("CLOSE");
            $(".fixedSideBar__warpper").eq(0).css({"background-color":"#5551f7" ,"color":"white"})
            var newIcon = $("<span></span>").addClass("ti-close").css({"margin":"5px" })
            $("#fixedSideBar__changeIcon").append(newIcon).css({"border":"0px", "margin":"0 auto","font-size": "2.5rem"})
            $('.menu').css({"transform":"translateX(0)"})
        }else{
            $("#fixedSideBar__text").html("MENU");
            $(".fixedSideBar__warpper").eq(0).css({"background-color":"#d6d6d6" ,"color":"black"})
            $("#fixedSideBar__changeIcon").html("").css({"border":" 0.2rem solid black","border-left": "0rem","border-right": "0rem" })
            $('.menu').css({"transform":"translateX(100rem)"})
        }
    })
    // ------------change background of aboutCompany section-----------   //
    $("#type_1").mouseover(function(){
        $(this).parent().parent().parent().addClass("background_1")
        $(this).css({"opacity":"1"})
        $(".aboutCompany__number").css({"color":"white"})
        $(".aboutCompany__info").css({"color":"rgb(179, 177, 177)" , "opacity":"0.8"})
    })
    $("#type_1").mouseout(function(){
        $(this).parent().parent().parent().removeClass("background_1")
        $(".aboutCompany__number").css({"color":"#5551f7"})
        $(".aboutCompany__info").css({"color":"black", "opacity":"1"})
    })
    $("#type_2").mouseover(function(){
        $(this).parent().parent().parent().addClass("background_2")
        $(this).css({"opacity":"1"})
        $(".aboutCompany__number").css({"color":"white"})
        $(".aboutCompany__info").css({"color":"rgb(179, 177, 177)", "opacity":"0.8"})
    })
    $("#type_2").mouseout(function(){
        $(this).parent().parent().parent().removeClass("background_2")
        $(".aboutCompany__number").css({"color":"#5551f7"})
        $(".aboutCompany__info").css({"color":"black", "opacity":"1"})
    })
    $("#type_3").mouseover(function(){
        $(this).parent().parent().parent().addClass("background_3")
        $(this).css({"opacity":"1"})
        $(".aboutCompany__number").css({"color":"white"})
        $(".aboutCompany__info").css({"color":"rgb(179, 177, 177)", "opacity":"0.8"})
    })
    $("#type_3").mouseout(function(){
        $(this).parent().parent().parent().removeClass("background_3")
        $(".aboutCompany__number").css({"color":"#5551f7"})
        $(".aboutCompany__info").css({"color":"black", "opacity":"1"})
    })
    $("#type_4").mouseover(function(){
        $(this).parent().parent().parent().addClass("background_4")
        $(this).css({"opacity":"1"})
        $(".aboutCompany__number").css({"color":"white"})
        $(".aboutCompany__info").css({"color":"rgb(179, 177, 177)", "opacity":"0.8"})
    })
    $("#type_4").mouseout(function(){
        $(this).parent().parent().parent().removeClass("background_4")
        $(".aboutCompany__number").css({"color":"#5551f7"})
        $(".aboutCompany__info").css({"color":"black", "opacity":"1"})
    })
    $("#type_5").mouseover(function(){
        $(this).parent().parent().parent().addClass("background_5")
        $(this).css({"opacity":"1"})
        $(".aboutCompany__number").css({"color":"white"})
        $(".aboutCompany__info").css({"color":"rgb(179, 177, 177)", "opacity":"0.8"})
    })
    $("#type_5").mouseout(function(){
        $(this).parent().parent().parent().removeClass("background_5")
        $(".aboutCompany__number").css({"color":"#5551f7"})
        $(".aboutCompany__info").css({"color":"black", "opacity":"1"})
    })
    $("#type_6").mouseover(function(){
        $(this).parent().parent().parent().addClass("background_6")
        $(this).css({"opacity":"1"})
        $(".aboutCompany__number").css({"color":"white"})
        $(".aboutCompany__info").css({"color":"rgb(179, 177, 177)", "opacity":"0.8"})
    })
    $("#type_6").mouseout(function(){
        $(this).parent().parent().parent().removeClass("background_6")
        $(".aboutCompany__number").css({"color":"#5551f7"})
        $(".aboutCompany__info").css({"color":"black", "opacity":"1"})
    })
    //  -------------------creat Line In aboutCampany Section--------------  //
    $(".underline").eq(0).mouseover(function(){
        $(".line").eq(0).addClass("creatLine")
    })
    $(".underline").eq(0).mouseout(function(){
        $(".line").eq(0).removeClass("creatLine")
    })
    //  -------------------creat Line In Catalog Section--------------  //
    $(".underline").eq(1).mouseover(function(){
        $(".line").eq(1).addClass("creatLine")
    })
    $(".underline").eq(1).mouseout(function(){
        $(".line").eq(1).removeClass("creatLine")
    })
    //  -------------------creat Line In Projects Section--------------  //
    $(".underline").eq(2).mouseover(function(){
        $(".line").eq(2).addClass("creatLine")
    })
    $(".underline").eq(2).mouseout(function(){
        $(".line").eq(2).removeClass("creatLine")
    })
    //  ----------------------sliderOfPhotos------------------------  //
    // $('.owl-carousel').owlCarousel({
    //     // loop:true,
    //     margin:10,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })
    var slides=document.getElementsByClassName('photos_slider_images_item');
    var slide_details=document.getElementsByClassName('photos_slider_details_item')
    var nextSlide=document.querySelector(".right-slide");
    var prevSlide=document.querySelector(".left-slide");
    var totalSlides=slides.length;
    var index=0;
    if(index==0){
        $(".right-slide").eq(0).prop("disabled", true);
        $(".left-slide").eq(0).prop("disabled", false);
        $(".photos_slider_right_line").eq(0).css({'background-color': 'gray'});
        $(".photos_slider_left_line").eq(0).css({'background-color': 'black'});
        $(".photos_slider_right_line").eq(0).removeClass("change_length_of_Right_line");
        $(".photos_slider_left_line").eq(0).addClass("change_length_of_left_line");
    }else{
        $(".left-slide").eq(0).prop("disabled", true);
        $(".right-slide").eq(0).prop("disabled", false);
        $(".photos_slider_left_line").eq(0).css({'background-color': 'gray'});
        $(".photos_slider_right_line").eq(0).css({'background-color': 'black'});
        $(".photos_slider_left_line").eq(0).removeClass("change_length_of_left_line");
        $(".photos_slider_right_line").eq(0).addClass("change_length_of_Right_line");
    }

    nextSlide.onclick=function () {
        next("next");
    }
    prevSlide.onclick=function () {
        next("prev");
    }
    function next(direction){
    if(direction=="next"){
        index=0
        $(".right-slide").eq(0).prop("disabled", true);
        $(".left-slide").eq(0).prop("disabled", false);
        $(".photos_slider_right_line").eq(0).css({'background-color': 'gray'});
        $(".photos_slider_left_line").eq(0).css({'background-color': 'black'});
        $(".photos_slider_right_line").eq(0).removeClass("change_length_of_Right_line");
        $(".photos_slider_left_line").eq(0).addClass("change_length_of_left_line");
        }else{
        index=1
        $(".left-slide").eq(0).prop("disabled", true);
        $(".right-slide").eq(0).prop("disabled", false);
        $(".photos_slider_left_line").eq(0).css({'background-color': 'gray'});
        $(".photos_slider_right_line").eq(0).css({'background-color': 'black'});
        $(".photos_slider_left_line").eq(0).removeClass("change_length_of_left_line");
        $(".photos_slider_right_line").eq(0).addClass("change_length_of_Right_line");
        }
    for(i=0;i<totalSlides;i++){
        slides[i].classList.remove("active");
        slide_details[i].classList.remove("active");
    }
    slides[index].classList.add("active");     
    slide_details[index].classList.add("active");
    }


})
