angular.module('myApp')

//ページ用のコントローラー
.controller('viewController', ['$scope','$routeParams','dataList', function($scope,$routeParams,dataList){
	//パスに応じた情報をスコープに渡す
	var dataList = dataList();
	$scope.path = $routeParams.path;
	$scope.title = dataList[$routeParams.path]['title'];
	$scope.img = dataList[$routeParams.path]['img'];
	$scope.str = dataList[$routeParams.path]['str'];
}]);