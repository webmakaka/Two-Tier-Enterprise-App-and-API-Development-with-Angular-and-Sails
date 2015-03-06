angular.module('app').controller('Post',function($scope, $http, $location){

    var id = $location.search().id;

    if(id) getPost();

    $scope.tweet = function(){

        var datetime = new Date(
            $scope.date.getFullYear(),
            $scope.date.getMonth(),
            $scope.date.getDate(),
            $scope.time.getHours()
        );

        $http.post('/api/post/tweet', {
            message: $scope.message,
            datetime: datetime
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
    };

    function getPost(){
        $http.get('/api/post/' + id).then(function(post){
            $scope.post = post;
        });
    }

});
