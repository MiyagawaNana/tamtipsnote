angular.module('myApp',['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
	$routeProvider
	.when('/:path',{
		templateUrl:'views/page.html',
		controller:'viewController'
	})
	.otherwise({
		redirectTo:'/girl'
	})
});