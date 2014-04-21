'use strict';

printio.factory('Product', ['Printio', '$http', '$q', 'apiUrl', 'recipeId', 'productImagesFilter',
    function(Printio, $http, $q, apiUrl, recipeId, productImagesFilter) {

        return {

            getProduct: function(name) {
                var deferred = $q.defer();
                Printio.getProducts().then(function(products) {
                    var product = products.filter(function(products) {
                        return products.Name.replace(/\s/g, '-').toLowerCase() === name;
                    })[0];
                    deferred.resolve(product);
                    })

                return deferred.promise;
            },

            getShippingEstimate: function(productId, countryCode, currencyCode) {
                countryCode = typeof countryCode !== 'undefined' ? countryCode : 'us';
                currencyCode = typeof currencyCode !== 'undefined' ? currencyCode : 'usd';
                var deferred = $q.defer();
                var params = {
                    productId: productId,
                    recipeId: recipeId,
                    countryCode: countryCode,
                    currencyCode: currencyCode
                };

                $http.get(apiUrl+'/shippriceestimate', {
                    params: params,
                    cache: true
                }).success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject('An error occurred while fetching the shipping estimate');
                });

                return deferred.promise;
            },

            getProductImages: function(product) {
                return productImagesFilter(product);
            }
        };
    }
]);