app.controller('addCtrl', ['$scope', '$http', function($scope, $http) {

    var baseURL='https://test-for-linor.herokuapp.com/api';
    
    $scope.question={
        question: '',
        answers: [
            {answer: '', right: false},
            {answer: '', right: false},
            {answer: '', right: false},
            {answer: '', right: false}
        ]
    };

    $scope.save=function() {
        console.log($scope.question);
        $http.post(baseURL+"/add", $scope.question).then(
            function (response) {
                console.log(response.status+", "+response.data);
            },
            function (response) {
                console.log(response.status+", "+response.data);
            }
        );
    }
}]);