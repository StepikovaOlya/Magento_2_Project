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
                autoplay: false,
                autoplaySpeed: 1000,
                arrows: false,
                dots: true,
                dotsClass: "slider-dots",

                responsive: [
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
                            slidesToShow: 2
                        }
                    }
                ]

            }
        }
    });

    return $.custom.slickNews;
});


