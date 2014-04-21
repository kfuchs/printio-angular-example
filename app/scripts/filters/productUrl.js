'use strict';

printio.filter('productUrl', function() {
    return function(productName) {
        return productName.replace(/\s/g, '-').toLowerCase();
    };
});