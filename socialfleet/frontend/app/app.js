angular.module('app', ['satellizer', 'ui.bootstrap', 'ui.router', 'toastr', 'ngAnimate'])
    .config(function($authProvider, $stateProvider, toastrConfig){
        $authProvider.twitter({
            url: '/api/user/login'
        });

        $stateProvider
            .state('posts', {
                url: '/',
                templateUrl: 'myposts.html',
                controller: 'MyPosts'
            })
            .state('post', {
                url: '/post?id',
                templateUrl: 'post.html',
                controller: 'Post'
            });

        toastrConfig.positionClass = 'toast-bottom-right';

    });
