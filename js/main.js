app.controller('mainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.addQuestion=function() {
        $location.url('/add');
    }
}]);