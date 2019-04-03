$('.mobile').click(function () {
    $('.nav-wrap').toggleClass('active');
});
const slider = document.getElementsByClassName('slider-item');

setInterval(function(){
    let i = 1;
    slider[0].css.background=`url(../img/slider${i}.png)`
},5000);