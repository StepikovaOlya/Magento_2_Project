var config = {
    map: {
        '*': {
            'slick': 'js/slick',
            'slickTheme1': 'js/slick-theme1',
            'slickTheme2': 'js/slick-theme2',
            'slickNews': 'js/slick-news',
            'selectize': 'js/selectize/selectize',
            'sifter': 'js/selectize/sifter',
            'microplugin': 'js/selectize/microplugin',
            'selectizeTheme1': 'js/selectize/selectize-theme1'

        }
    },

    shim: {
        slick: {
            deps: ['jquery']
        },
        selectize: {
            deps: ['jquery', 'sifter', 'microplugin']
        }
    }
};