var config = {
    shim: {
        'Ves_All/lib/bootstrap/js/bootstrap.min': {
            deps: ['jquery'],
            init: function($) {
                $.fn.modal.noConflict();
            }
        }
    }
};
