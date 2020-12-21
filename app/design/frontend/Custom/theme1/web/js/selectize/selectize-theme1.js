define([
    'jquery',
    'jquery-ui-modules/widget',
    'selectize',
    'sifter',
    'microplugin'

], function ($) {
    'use strict';

    $.widget('custom.selectizeTheme1', {
        options: {
            selectizeOptions: {
                create: true,
                sortField: 'text'
            },

        },

        /**
         * @private
         */
        _create: function () {
            this.element.selectize(this.options.selectizeOptions);
        }
    });

    return $.custom.selectizeTheme1;
});


