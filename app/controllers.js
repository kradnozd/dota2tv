var dota2tvControllers = angular.module('dota2tvControllers', []);

dota2tvControllers.controller('HomepageCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

dota2tvControllers.controller('WatchpageCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
  	switch($routeParams.streamService) {
  		case "tw":
  			this.streamVid = '<iframe src="http://www.twitch.tv/' + $routeParams.streamID + '/embed" frameborder="0" scrolling="no" height="100%" width="100%"></iframe>';
  			break;
  	};
  }]);