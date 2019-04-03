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
setInterval(sliderChange,5000)