app.controller('mainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.addQuestion = function() {
        $location.url('/add');
    };

    $scope.take = function (n) {
        $location.url(typeof n==='undefined' ? '/test' : '/test?'+n);
    };

    $scope.back = function () {
        $location.url('/');
    }
}]);