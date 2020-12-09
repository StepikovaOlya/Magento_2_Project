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
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
                dots: true,
                dotsClass: "slider-dots",
                centerMode: true,
                centerPadding: '60px',

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: false,
                            dots: false,
                            centerMode: true,
                            centerPadding: '40px',
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            dots: false,
                            centerMode: true,
                            centerPadding: '40px',
                        }
                    }
                ]

            }
        }
    });

    return $.custom.slickTheme2;
});


