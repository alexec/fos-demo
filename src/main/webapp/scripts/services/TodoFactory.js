angular.module('fosdemo').factory('TodoResource', function($resource){
    var resource = $resource('rest/todos/:TodoId',{TodoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});