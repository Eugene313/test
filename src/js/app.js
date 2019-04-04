$('.mobile').click(function () {
    $('.nav-wrap').toggleClass('active');
});
const slider = document.getElementsByClassName('slider-item');
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


const sliderItem = $('.snowboards-item')
let curentPosition = parseInt($('.wrap').css('left'))
let sliderIndex = 1

const next = $('#next').click(function(){
    $('#prev,#next').css({
        'opacity':'1'
    })
    if (sliderIndex < sliderItem.length-1) {
        $(sliderItem).removeClass('active')
        $('.wrap').css({
            'left': (curentPosition -= 400)+'px'
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
});

const prev = $('#prev').click(function(){
    $('#prev,#next').css({
        'opacity':'1'
    })
    if (sliderIndex > 0) {
        $(sliderItem).removeClass('active')
        $('.wrap').css({
            'left': (curentPosition += 400)+'px'
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
});



