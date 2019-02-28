const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('hello', {
    url: '/hello',
    template: '<h1>Hello, {{name}}!</h1>',
    controller: function ($scope) {
      $scope.name = 'uirouter';
    }
  });

  $urlRouterProvider.otherwise('/hello');

});

