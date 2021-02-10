;
(function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document)
            .on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
                e.preventDefault();
            })

        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function () {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile")
                .clone()
                .appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function (e) {
                // e.preventDefault();

                $(this)
                    .siblings('.sub-menu')
                    .animate({
                        height: "toggle"
                    }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');

        menutoggle.on('click', function () {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------  
                  side nav
        ---------------------------------------------*/


        $('.btn-sidenav').click(function(){
          $(this).toggleClass("click");
          $('.side-navbar').toggleClass('show');
          $('nav ul .lib-show').removeClass('show');
          $('nav ul .first').removeClass("rotate");
          $('nav ul .tips-show').removeClass("show1");
          $('nav ul .second').removeClass("rotate");
          $('nav ul .serv-show').removeClass("show2");
          $('nav ul .third').removeClass("rotate");
        });

        $('.lib-dropdown-btn').click(function(){
          $('nav ul .lib-show').toggleClass("show");
          $('nav ul .first').toggleClass("rotate");
        });

        $('.tips-dropdown-btn').click(function(){
            $('nav ul .tips-show').toggleClass("show1");
            $('nav ul .second').toggleClass("rotate");
          });

        $('.serv-dropdown-btn').click(function(){
            $('nav ul .serv-show').toggleClass("show2");
            $('nav ul .third').toggleClass("rotate");
          });

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        // Item Selection
        $("select").niceSelect();

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-arrow-left"></i>';
        var leftAngle = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-arrow-right"></i>';
        var rightAngle = '<i class="fa fa-angle-right"></i>';

        /* -------------------------------------------------
            Magnific JS
        ------------------------------------------------- */
        $('.video-play-btn').magnificPopup({type: 'iframe', removalDelay: 260, mainClass: 'mfp-zoom-in'});
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /*---------------------------------------
            Quantity
        ---------------------------------------*/
        function wcqib_refresh_quantity_increments() {
            jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)")
                .each(function (a, b) {
                    var c = jQuery(b);
                    c.addClass("buttons_added"),
                    c
                        .children()
                        .first()
                        .before('<input type="button" value="-" class="minus" />'),
                    c
                        .children()
                        .last()
                        .after('<input type="button" value="+" class="plus" />')
                })
        }
        String.prototype.getDecimals || (String.prototype.getDecimals = function () {
            var a = this,
                b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b
                ? Math.max(0, (b[1]
                    ? b[1].length
                    : 0) - (b[2]
                    ? + b[2]
                    : 0))
                : 0
        }),
        jQuery(document).ready(function () {
            wcqib_refresh_quantity_increments()
        }),
        jQuery(document).on("updated_wc_div", function () {
            wcqib_refresh_quantity_increments()
        }),
        jQuery(document).on("click", ".plus, .minus", function () {
            var a = jQuery(this)
                    .closest(".quantity")
                    .find(".qty"),
                b = parseFloat(a.val()),
                c = parseFloat(a.attr("max")),
                d = parseFloat(a.attr("min")),
                e = a.attr("step");
            b && "" !== b && "NaN" !== b || (b = 0),
            "" !== c && "NaN" !== c || (c = ""),
            "" !== d && "NaN" !== d || (d = 0),
            "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1),
            jQuery(this).is(".plus")
                ? c && b >= c
                    ? a.val(c)
                    : a.val((b + parseFloat(e)).toFixed(e.getDecimals()))
                : d && b <= d
                    ? a.val(d)
                    : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())),
            a.trigger("change")
        });

        /* -------------------------------------------------------------
         fact counter
         ------------------------------------------------------------- */
        $('.counter').counterUp({delay: 15, time: 2000});

        /*------------------------------------------------
            banner-slider
        ------------------------------------------------*/
        $('.banner-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            smartSpeed: 1500,
            items: 1,
            navText: [leftArrow, rightArrow]
        });

        /*------------------------------------------------
            course-slider
        ------------------------------------------------*/
        $('.course-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 3,
            navText: [
                leftArrow, rightArrow
            ],
            responsive: {
                0: {
                    items: 1
                },
                426: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        });

        /*------------------------------------------------
            partner-slider
        ------------------------------------------------*/
        $('.partner-slider').owlCarousel({
            loop: true,
            margin: 70,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 5,
            responsive: {
                0: {
                    items: 3
                },
                426: {
                    items: 3
                },
                768: {
                    items: 3
                },
                1100: {
                    items: 5
                }
            }
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                426: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1100: {
                    items: 2
                }
            }
        });

        /*------------------------------------------------
            product-slider-2
        ------------------------------------------------*/
        $('.product-slider-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            navText: [
                leftAngle, rightAngle
            ],
            responsive: {
                0: {
                    items: 1
                },
                426: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1100: {
                    items: 5
                },
                1600: {
                    items: 6
                }
            }
        });

        /*------------------------------------------------
            partner-slider
        ------------------------------------------------*/
        $('.partner-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            navText: [
                leftAngle, rightAngle
            ],
            responsive: {
                0: {
                    items: 1
                },
                426: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1100: {
                    items: 5
                }
            }
        });

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function () {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        } else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }

        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });

    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

})(jQuery);

/*---------------------
    Dynamic Calender
----------------------*/
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

    document.querySelector(".date h4").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
