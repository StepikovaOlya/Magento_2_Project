define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickTheme1'
], function ($) {
    'use strict';

    $.widget('custom.slickTheme2', $.custom.slickTheme1, {
        options: {
            slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                arrows: false,
                dots: true,
                dotsClass: "slider-dots",
                centerMode: true,
                centerPadding: '60px',

                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: false,
                            dots: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            dots: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]

            }
        }
    });

    return $.custom.slickTheme2;
});


