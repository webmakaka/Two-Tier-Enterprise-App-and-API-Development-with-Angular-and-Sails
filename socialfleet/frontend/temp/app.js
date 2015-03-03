angular.module('app', ['satellizer'])
    .config(function($authProvider){
        $authProvider.twitter({
            url: '/api/auth/login'
        });
    });
