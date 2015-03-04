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
});
