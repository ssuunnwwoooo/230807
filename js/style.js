$(function () {

    $('.main').fullpage({
        css3: false,
        navigation: true,
        showActiveTooltip: true,
        scrollOverflow: true,
        /*     afterRender: function () {
                $('.header').eq(0).addClass('on')
            },
    
            afterLoad: function (lnk, idx) {
                console.log(lnk, idx);
                $('.main .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
            },
     */
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.header').eq(0).removeClass('on')
                $('.header').eq(0).removeClass('in')
            }
            if (index == 2) {
                $('.header').eq(0).addClass('on')
                $('.header').eq(0).removeClass('in')
            }
            if (index == 3) {
                $('.header').eq(0).removeClass('on')
                $('.header').eq(0).removeClass('in')
            }
            if (index == 4) {
                $('.header').eq(0).addClass('in')
            }
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



    const SLIDE_NUM = document.querySelector('.slide_num strong');
    const SLIDE_NUM_T = document.querySelector('.slide_num span');


    const snsSlide = new Swiper(".sns_slide", {
        spaceBetween: 1,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        on: {
            init: function () {
                SLIDE_NUM.innerHTML = this.realIndex + 1;
                SLIDE_NUM_T.innerHTML = this.slides.length;
            },
            slideChangeTransitionStart: function () {
                SLIDE_NUM.innerHTML = this.realIndex + 1;
                SLIDE_NUM_T.innerHTML = this.slides.length;
            }
        }
    });

    $('.main_sns .arrows .left').on('click', function () {
        snsSlide.slidePrev();
    });
    $('.main_sns .arrows .right').on('click', function () {
        snsSlide.slideNext();
    });

    $(document).ready(function () {
        $('.tab ul li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('.tab ul li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });

    });

})