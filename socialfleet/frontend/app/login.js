angular.module('app').controller('Login', function($scope, $auth, $http){

    $scope.isAuthenticated = $auth.isAuthenticated;

    $scope.login = function(){
        $auth.authenticate('twitter');
    };

    $scope.logout = function(){
        $auth.logout();
    };

    $scope.tweet = function(){
        $http.post('/api/post/tweet', {
            message: $scope.message
        }).then(function(){

        });
    };

    $scope.time = new Date();

    $scope.minDate = new Date();

    $scope.opened = false;

    $scope.open = function($event){
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = !$scope.opened;

        console.log($scope.opened);
    };
});
