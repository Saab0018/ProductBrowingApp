var app = angular.module('mainApp', ['ui.router', 'ui.bootstrap'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/categories');

  $stateProvider
    .state('categories', {
      templateUrl: 'templates/categories.html',
      url: '/categories',
      controller: 'mainCtrl'
    })
    .state('books', {
      templateUrl: 'templates/books.html',
      url: '/categories/:categoryID',
      controller: 'booksCtrl'
    })
    .state('books.detail', {
      templateUrl: 'templates/details.html',
      url: '/:bookID',
      controller: 'detailsCtrl'
    })

}])