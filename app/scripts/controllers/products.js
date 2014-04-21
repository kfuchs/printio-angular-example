'use strict';

printio.controller('ProductsCtrl', function($http, $routeParams, $scope, Printio) {

    Printio.getProducts().then(function(products) {
        $scope.products = products;
    });
});