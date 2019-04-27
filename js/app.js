var app = angular.module('test', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("/customer", {
            templateUrl : "customer.html"
        })
        .when("/order", {
            templateUrl : "order.html"
        })
        .when("/add", {
            templateUrl : "add.html"
        })
});