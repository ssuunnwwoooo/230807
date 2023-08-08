$(function () {

    $('.main').fullpage({
        css3: false,
        navigation: true,
        scrollOverflow: true,
        afterRender: function () {
            $('.header').eq(0).addClass('on')
        },

        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            $('.main .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
    })

    const mainSlide = new Swiper(".main_slide", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    const snsSlide = new Swiper(".sns_slide", {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });

})