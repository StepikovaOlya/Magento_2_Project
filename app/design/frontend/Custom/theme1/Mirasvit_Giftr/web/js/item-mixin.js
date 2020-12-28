define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'redirectUrl'
], function ($, modal) {
    'use strict';

    var mixin = {
        /**
         * Redirect to the login account page if the customer is not logged in.
         * Close popup if the customer is not logged in.
         */
        addToGiftRegistryBehaviour: function () {
            var giftrModal = $('[data-role="openGiftrModal"]');
            this.initRegistries();

            if (!this.isLoggedIn()) {
                $("#addto-giftr-new").redirectUrl({url: this.loginUrl});
            } else if (this.registries().length == 1) {
                event.stopPropagation();
                this.addProduct();
            } else {
                giftrModal.trigger('openModal');
            }
        }
    };

    return function (Component) {
        return Component.extend(mixin);
    };
});