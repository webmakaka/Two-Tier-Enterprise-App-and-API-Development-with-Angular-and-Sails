angular.module('app').controller('Login', function($scope, $auth){
    $scope.login = function(){
        $auth.authenticate('twitter');
    };
});
