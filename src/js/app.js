$('.mobile').click(function () {
    $('.nav_wrap').toggleClass('active');
});
window.onscroll = function (){
    if (window.pageYOffset > 200){
        $('.nav_wrap').removeClass('active');
    }

}
const slider = document.getElementsByClassName('slider_item');
let sliderCount = 1;
const sliderChange = () => {
    console.log(1)
    if (sliderCount === 1){
        slider[1].style.opacity = '1'
        slider[1].style.zIndex = '2'
        sliderCount = 0;
    } else {
        slider[1].style.opacity = '0'
        slider[1].style.zIndex = '-1'
        sliderCount = 1;
    }
}
setInterval(sliderChange,5000);


const sliderItem = $('.snowboards_item')
let curentPosition = parseInt($('.wrap').css('left'))
let sliderIndex = 1

const next = function(a){
    $('#prev,#next').css({
        'opacity':'1'
    })
    if (sliderIndex < sliderItem.length-1) {
        $(sliderItem).removeClass('active')
        $('.wrap').css({
            'left': (curentPosition -= a)+'px'
        })
        sliderIndex++
        $(sliderItem[sliderIndex]).addClass('active')
        console.log(curentPosition)
    }
    if (sliderIndex === sliderItem.length-1){
        $('#next').css({
            'opacity':'0.2'
        })
    }
}

const prev = function(a){
    $('#prev,#next').css({
        'opacity':'1'
    })
    if (sliderIndex > 0) {
        $(sliderItem).removeClass('active')
        $('.wrap').css({
            'left': (curentPosition += a)+'px'
        })
        sliderIndex--
        $(sliderItem[sliderIndex]).addClass('active')
        console.log(curentPosition)
    } 
    if (sliderIndex === 0){
        $('#prev').css({
            'opacity':'0.2'
        })
    }
}
$('#next').click(function(){
    if ( window.innerWidth <= 770){
        next(265)
    } else {
        next(370)
    }
})
$('#prev').click(function(){
    if ( window.innerWidth <= 770){
        prev(265)
    } else {
        prev(370)
    }
})

