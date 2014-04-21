'use strict';

printio.controller('ProductDetailsCtrl', function($scope, $routeParams, $filter, Printio, Product) {

    Product.getProduct($routeParams.productName).then(function(product) {
        $scope.product = product;
    })
        .then(function() {
            $scope.images = Product.getProductImages($scope.product);
            $scope.featuredImage = $scope.images[0].Url;

            Product.getShippingEstimate($scope.product.Id).then(function(shipPrice) {
                $scope.shipEstimate = shipPrice;
            });

            $scope.openPIO = function() {
                PIO.open({
                    items:[{productId: $scope.product.Id}],
                    goTo:'tpl-newcustomize'
                });
            };
        });

    $scope.setImage = function(imgUrl) {
        $scope.featuredImage = imgUrl;
    }
});