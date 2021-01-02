define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($) {
    'use strict';

    $.widget('stepikova.slider', {
        options: {
            sliderOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000
            }
        },

        /**
         * @private
         */
        _create: function () {
            this.element.slick(this.options.sliderOptions);
        }
    });

    return $.stepikova.slider;
});


