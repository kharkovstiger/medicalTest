app.controller('testCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {

    var baseURL='https://test-for-linor.herokuapp.com/api';
    // var baseURL='localhost:8080/api';
    var questions=[];
    $scope.n=$routeParams[15] ? 15 : null;
    $scope.response=new Array(4);

    $http.get(baseURL+"/get?" + ($scope.n===null ? "" : "length=" + $scope.n)).then(
        function (response) {
            questions=response.data;
            $scope.question=questions[0];
            $scope.question.answers=shuffle($scope.question.answers);
            $scope.index=0;
            $scope.n=questions.length;
        },
        function (response) {
            console.log(response.status+", "+response.data);
        }
    );

    $scope.next = function () {
        $scope.question=questions[++$scope.index];
        $scope.question.answers=shuffle($scope.question.answers);
        $scope.response=new Array(4);
    };

    $scope.finish = function () {
        $location.url('/finish');
    };

    $scope.chose = function (i) {
        $scope.response=new Array(4);
        if ($scope.question.answers[i].right){
            $scope.response[i]='OK'
        } else {
            $scope.response[i]='NOK'
        }
    };

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    $scope.back = function () {
        $location.url('/');
    }
}]);