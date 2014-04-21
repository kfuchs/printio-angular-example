'use strict';

printio.filter('productImages', function() {
    return function(product) {
        var images = product.Images;
        var productImages = new Array();

        for (var image in images) {
            for (var type in images[image].ImageTypes) {
                if (images[image].ImageTypes[type] === 'AppDetails') {
                    productImages.push(images[image]);
                }
            }
        }

        return productImages;
    };
});