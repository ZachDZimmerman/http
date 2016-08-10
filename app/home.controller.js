/*eslint-disable*/

angular
  .module('myApp')
  .controller('HomeController', HomeController);

function HomeController($scope, $http) {
  $scope.view = {};

  $http.get('https://api.github.com/zen')
  .then(data => {
  $scope.view.zenData = data.data;

  });
};
