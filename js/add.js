app.controller('addCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

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
                $scope.question={
                    question: '',
                    answers: [
                        {answer: '', right: false},
                        {answer: '', right: false},
                        {answer: '', right: false},
                        {answer: '', right: false}
                    ]
                };
            },
            function (response) {
                console.log(response.status+", "+response.data);
            }
        );
    };

    $scope.back = function () {
        $location.url('/');
    }
}]);