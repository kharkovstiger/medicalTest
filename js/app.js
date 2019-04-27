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