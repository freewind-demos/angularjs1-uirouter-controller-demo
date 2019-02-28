const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('hello', {
    url: '/hello/:name',
    template: '<h1>Hello, {{name}}!</h1>',
    controller: function ($scope, $stateParams) {
      $scope.name = $stateParams.name;
    }
  });

  $urlRouterProvider.otherwise('/hello/xxx');

});

