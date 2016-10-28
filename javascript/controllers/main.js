app.controller('mainCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
  $scope.allData;
  Items.getAll().then(
    function (response) {
      $scope.allData = response.data;
    },
    function (err) {});
}]);