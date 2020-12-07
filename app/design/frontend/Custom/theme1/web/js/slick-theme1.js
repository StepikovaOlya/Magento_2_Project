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
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: true,
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


