define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($) {
    'use strict';

    $.widget('custom.slickTheme1', {
        options: {
            slickOptions: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            slidesToShow: 1
                        }
                    }
                ]
            },

        },

        /**
         * @private
         */
        _create: function () {
            this.element.slick(this.options.slickOptions);
        }
    });

    return $.custom.slickTheme1;
});


