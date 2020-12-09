define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickTheme1'
], function ($) {
    'use strict';

    $.widget('custom.slickNews', $.custom.slickTheme1, {
        options: {
            slickOptions: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
                dots: true,
                dotsClass: "slider-dots",

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: false,
                            dots: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            dots: false,
                            slidesToShow: 1
                        }
                    }
                ]

            }
        }
    });

    return $.custom.slickNews;
});


