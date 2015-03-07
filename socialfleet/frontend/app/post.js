angular.module('app').controller('Post',function($scope, $http, $location, toastr){

    var id = $location.search().id;

    $scope.time = new Date();

    $scope.minDate = new Date();

    $scope.opened = false;

    $scope.open = function($event){
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = !$scope.opened;
    };

    $scope.delete = deletePost;

    function getPost(){

        console.log("newPost");

        $http.get('/api/post/' + id).then(function(post){
            $scope.message = post.data.scheduledfor;

            var datetime = new Date(post.data.datetime);
            $scope.date = datetime;
            $scope.time = datetime;
        });
    }

    if(isEditingPost()){
        $scope.isEditing = true;
        getPost();
        $scope.save = editPost;
    } else {
        $scope.save = newPost;
    }

    function newPost(){

        console.log("newPost");

        var datetime = new Date(
            $scope.date.getFullYear(),
            $scope.date.getMonth(),
            $scope.date.getDate(),
            $scope.time.getHours()
        );

        $http.post('/api/post/tweet', {
            message: $scope.message,
            scheduledfor: datetime
        }).then(function(){
            toastr.success("new post created");
        });
    }

    function editPost(){

        console.log("editPost");
        console.log("id: " + id);

        var datetime = new Date(
            $scope.date.getFullYear(),
            $scope.date.getMonth(),
            $scope.date.getDate(),
            $scope.time.getHours()
        );

        $http.post('/api/post/update/' + id, {
            message: $scope.message,
            scheduledfor: datetime
        }).then(function(){
            toastr.success("new post updated");
        });
    }

    function deletePost(){
        $http.post('/api/post/destroy/' + id)
        .then(function(){
            toastr.info(" post has been deleted");
        });
    }

    function isEditingPost(){
        return id;
    }

});


angular.module('app').directive('datepickerPopup', function(){
    return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function(scope, element, attr, controller){
            controller.$formatters.shift();
        }
    };
});
