
var sails = require('sails');

sails.load(function(){
    checkPosts();
});

function checkPosts(){
    Post.find().where({scheduledfor: {'<': new Date()}}).exec(function(err, posts){
        console.log(posts);
    });
}
//
// setInterval(function(){
//     console.log("hello");
// },1000);
