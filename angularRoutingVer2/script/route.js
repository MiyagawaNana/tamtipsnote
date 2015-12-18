angular.module('myApp',['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
	$routeProvider
	.when('/:path',{
		templateUrl:'views/page.html',
		controller:'myController'
	})
	.otherwise({
		redirectTo:'/girl'
	})
});