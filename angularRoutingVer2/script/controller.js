angular.module('myApp')
.controller('myController', ['$scope','$routeParams', function($scope,$routeParams){

	//パス情報をスコープに渡す
	$scope.path = $routeParams.path;

	//パスに応じてコンテンツの中身を設定

	switch($routeParams.path){

		case 'girl':
			$scope.title = 'あかちゃん';
			$scope.img = 'img/girl.jpg';
			$scope.str = '赤ちゃん（あかちゃん）は、産まれたばかりの子供のこと。赤子（あかご）、赤ん坊（あかんぼう）とも言う。なお、人間以外の動物にも「赤ちゃん」が用いられることがしばしばある。種にもよるが、生存のために援助を必要とする弱い存在である。多くの種で赤ちゃんは愛らしい外見をしており、これは援助を受けやすくするために有利な形質なのではないかとの解釈もある。';
		break;

		case 'wheel':
			$scope.title = '観覧車';
			$scope.img = 'img/wheel.jpg';
			$scope.str = '観覧車の原形は、18世紀初めモスクワに登場したロシア貴族の遊具であり、あらかじめ車軸に巻き付けてあったロープを人力で引っ張るものであった。さらに17世紀には、木製の大きな輪からたらした鎖に人が乗って、この輪を人力で回すという遊具がオスマン帝国領のブルガリアにあったことが西欧からの旅行者などの記録に残っている。';
		break;

		case 'flower':
			$scope.title = '花畑';
			$scope.img = 'img/flower.jpg';
			$scope.str = '語源的には地形に由来するもの（塙→花）、歴史的背景を有するもの（寺社に花を供するための花園、また城付きの薬草園など）、近現代の開発の際に付けられたもの＝単なる美称、などがある。';
		break;

		case 'couple':
			$scope.title = 'カップル';
			$scope.img = 'img/couple.jpg';
			$scope.str = 'ラテン語の「copula コプラ」という名詞や「copulare コプラーレ」という動詞に由来する。 「co」+「apere」が短縮したものであり、「co」は「一緒」、 「apere」はつなぐ、という意味[2]。つながって一緒になっているもの、という意味となったわけである。このラテン語がフランス語でcouple（クプル）となり、英語に伝わりcouple（カップル）となった。本来は、一組になったふたつ・二人全般（「一対」）を広く指している。';
		break;

	}

}]);