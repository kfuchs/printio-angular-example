'use strict';

var printio = angular.module('printIO', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductsCtrl'
            })
            .when('/products/:productName', {
                templateUrl: 'views/product-details.html',
                controller: 'ProductDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/products'
            });
    })
    .constant('apiUrl', 'https://api.print.io/api/v/1/source/widget')
    // TODO: Change this to your recipeId
    .constant('recipeId', 'f255af6f-9614-4fe2-aa8b-1b77b936d9d6');