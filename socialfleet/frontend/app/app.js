angular.module('app', ['satellizer', 'ui.bootstrap'])
    .config(function($authProvider){
        $authProvider.twitter({
            url: '/api/user/login'
        });
    });
