'use strict';

printio.factory('Printio', ['$http', '$q', 'apiUrl', 'recipeId', function($http, $q, apiUrl, recipeId) {

    return {
        getProducts: function() {
            var deferred = $q.defer();
            var params = {
                recipeId: recipeId,
                countryCode: 'us',
                currencyCode: 'usd'
            }

            $http.get(apiUrl+'/products', {
                params: params,
                cache: true
            }).success(function(data) {
                deferred.resolve(data.Products);
            }).error(function() {
                deferred.reject('An error occurred while fetching products');
            });

            return deferred.promise;
        }
    };

}]);
