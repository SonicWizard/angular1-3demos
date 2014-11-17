var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forms', {
      templateUrl: 'partials/forms.html',
      controller: 'FormsCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
