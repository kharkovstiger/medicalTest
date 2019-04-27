var app = angular.module('test', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("/test?:n", {
            templateUrl : "test.html"
        })
        .when("/add", {
            templateUrl : "add.html"
        })
        .when("/finish", {
            templateUrl : "finish.html"
        })
});

app.directive('loading',   ['$http' ,function ($http) {
    return {
        restrict: 'A',
        template: '<div class="loading-spiner"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" /> </div>',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    elm.removeClass('ng-hide');
                }else{
                    elm.addClass('ng-hide');
                }
            });
        }
    };
}])