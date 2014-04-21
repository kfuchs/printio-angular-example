'use strict';

printio.controller('HeaderCtrl', ['$scope', function($scope) {
    $scope.openCart = function() {
        PIO.open({
            goTo:'tpl-cart'
        });
    };

    /**
     * widget setup
     * see http://print.io/platform-web-customization for more info
     * TODO: add in your recipeId
     */
    PIO.config({
        recipeId:"6cfb4f30-34c7-4cf6-9490-f51925650811",
        url:"https://api.print.io/widget/",
        fns:{
            onCartChange:function(cart){
                console.log()
                $scope.$apply(function() {
                    $scope.cartItems = PIO.getNumItems();
                });
            }
        }
    });

    $scope.cartItems = PIO.getNumItems();
}]);