/**
 * Show/hide password function
 */
define([
    'jquery',
    'jquery-ui-modules/widget'

], function ($) {
    'use strict';

    $.widget('custom.showHidePassword', {
        options: {

        },

        /**
         * @private
         */
        _create: function () {

            var passwordRegister = $('#password');
            var passwordConfirm = $('#password-confirmation');

            /**
             * add a span with an icon eye to input password
             */
            passwordRegister.click(function () {
                $(this).parent().append($('<span>', {'class': 'password-control'}));
            });

            /**
             * show/hide password function
             */
            $('body').on('click', '.password-control', function () {
                if (passwordRegister.attr('type') === 'password') {
                    $(this).addClass('view');
                    passwordRegister.attr('type', 'text');
                } else {
                    $(this).removeClass('view');
                    passwordRegister.attr('type', 'password');
                }
                return false;
            });

            /**
             * add a span with an icon eye to input password-confirmation
             */
            passwordConfirm.click(function () {
                $(this).parent().append($('<span>', {'class': 'password-control-confirm'}));
            });

            /**
             * show/hide password-confirmation function
             */
            $('body').on('click', '.password-control-confirm', function () {
                if (passwordConfirm.attr('type') === 'password') {
                    $(this).addClass('view');
                    passwordConfirm.attr('type', 'text');
                } else {
                    $(this).removeClass('view');
                    passwordConfirm.attr('type', 'password');
                }
                return false;
            });
        }
    });

    return $.custom.showHidePassword;
});

