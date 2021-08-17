var nameManger = 'Андрей';

$(function() {

    setTimeout(function() {
        $("header").addClass("header-show");
        $("h1").addClass("h1-show");
        $(".exs-items").addClass("exs-items-show");
        $(".message-box").addClass("message-box-show");
        setTimeout(function() {
            $(".main").removeClass("mainshow");
        }, 250);
    }, 50);

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $('.message-box div[data-delay-text]').each(function() {
        var delayVal = $(this).attr('data-delay-text');
        // console.log(delayVal);

        setTimeout(() => {
            if ($('.text-print').length == 0) {
                $(this).before('<div class="text-print">' + nameManger + ' печатает ...</div>');
            }
        }, delayVal);
    });

    $('.message-box div[data-delay]').each(function() {
        var delayVal = $(this).attr('data-delay');

        setTimeout(() => {

            $(this).addClass('visF');
        }, delayVal - 100);

        setTimeout(() => {

            $(this).addClass('vis');
            $('.text-print').remove();
        }, delayVal);
    });

    setTimeout(() => {
        $('html,body').animate({ scrollTop: $('.btns-serv').offset().top + "px" }, { duration: 1E3 });
    }, 5200);

    $('.btns-serv label').click(function() {
        $('.js-message--check-money').removeClass('vis visF');
        $('.js-car-check').removeClass('vis visF');
        $('.js-money-check').removeClass('vis visF');
    });

    $('.btns-time label').click(function() {
        $('.js-message--check-money').removeClass('vis visF');
        $('.js-money-check').removeClass('vis visF');
    });

    $('.btns').each(function() {
        $(this).children('label').click(function() {
            // $(this).parents('.btns').addClass('btns-checked');
            var elemThis = $(this).closest('.message-item-m');
            $('.js-final-message').removeClass('vis');
            $('.js-final-message').removeClass('visF');
            $(this).siblings('label').removeClass('active');
            $(this).addClass('active');

            var NextEl = $(this).closest('.message-item').next('.message-item').next('.message-item').length;

            var valueMoney = $(this).children('input:checked').val();
            // console.log(valueMoney);
            $(this).closest('.messag-elem').next('.message-y').find('.message-text').text(valueMoney);

            $(this).closest('.messag-elem').next('.messag-elem').removeClass('vis visF');

            $(this).closest('.messag-elem').next('.messag-elem+.messag-elem').removeClass('vis visF');


            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').addClass('visF');
            }, 100);




            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').addClass('vis');
            }, 200);

            setTimeout(() => {
                $('html,body').animate({ scrollTop: $(this).closest('.messag-elem').next('.message-y').offset().top + "px" }, { duration: 1E3 });
            }, 400);

            setTimeout(() => {
                if ($('.text-print').length == 0 && NextEl != 0) {
                    $(this).closest('.messag-elem').next('.message-y').after('<div class="text-print text-money-check">' + nameManger + ' печатает ...</div>');
                }
            }, 600);

            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').next('.messag-elem').addClass('visF');
                $('.text-money-check').remove();

            }, 1500);



            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').next('.messag-elem').addClass('vis');

            }, 1600);

            if (NextEl == 0) {
                setTimeout(() => {
                    if ($('.text-final').length == 0) {
                        $('.js-final-message').before('<div class="text-print text-final">' + nameManger + ' печатает ...</div>');
                    }
                }, 400);

                setTimeout(() => {
                    $('.js-final-message').addClass('visF');
                    $('.text-final').remove();
                }, 1500);

                setTimeout(() => {
                    $('.js-final-message').addClass('vis');
                }, 1600);


            }
        });
    });



    // $('.btns label').click(function() {
    //     $('.js-final-message').removeClass('vis');
    //     $('.js-final-message').removeClass('visF');
    //     $('.btns label').removeClass('active');
    //     $(this).addClass('active');

    //     var valueMoney = $(this).children('input:checked').val();
    //     $('.js-message--check-money').addClass('vis');
    //     $('.js-message--check-money .message-text').text(valueMoney);



    //     setTimeout(() => {
    //         $('.js-message--check-money').addClass('visF');
    //     }, 300);

    //     setTimeout(() => {
    //         $('html,body').animate({ scrollTop: $('.js-message--check-money').offset().top + "px" }, { duration: 1E3 });
    //     }, 400);

    //     setTimeout(() => {
    //         if ($('.text-print').length == 0) {
    //             $('.js-message--check-money').after('<div class="text-print text-money-check">' + nameManger + ' печатает ...</div>');
    //         }
    //     }, 600);

    //     setTimeout(() => {
    //         $('.js-money-check').addClass('vis');
    //         $('.text-money-check').remove();
    //     }, 1600);

    //     setTimeout(() => {
    //         $('.js-final-message').addClass('visF');
    //     }, 1600);

    //     setTimeout(() => {
    //         $('.js-final-message').addClass('vis');
    //         $('.text-final').remove();
    //     }, 1700);



    // });




});


$("body").on("keyup", ".inpphone", function() {
    if ($(this).val() != "") {
        $(".butphone").addClass("butphoneshow");
    } else {
        $(".butphone").removeClass("butphoneshow");
    }
});
//# sourceMappingURL=../sourcemaps/main.js.map
//# sourceMappingURL=../sourcemaps/main.js.map
