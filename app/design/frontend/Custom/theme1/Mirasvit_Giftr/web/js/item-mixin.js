define([
    'jquery',
    'uiComponent',
    'underscore',
    'Magento_Customer/js/customer-data',
    'Magento_Ui/js/modal/modal',
    'mage/translate',
    'redirectUrl'
], function ($, Component, _, customerData, modal, $t) {
    'use strict';

    var mixin = {
        /**
         * Retrieve message for gift registry dropdown.
         * Redirect to the login account page if the customer is not logged in.
         */
        getMessage: function () {
            var message = '';

            if (!this.isLoggedIn()) {
                $("#addto-giftr-new").redirectUrl({url: this.loginUrl});
            } else if (!this.hasRegistries()) {
                message = $t('You have no Gift Registries yet.') +
                    ' <a href="' + this.newRegistryUrl + '">' + $t('Create Gift Registry') + '</a>';
            }

            return message;
        },

        /**
         * Hide popup if the customer is not logged in
         */
        hideModal: function () {
            if (!this.isLoggedIn()) {
                this.closeModal();
            } else {
                this.openModal();
            }
        }

    };

    return function (target) {
        return target.extend(mixin);
    };
});