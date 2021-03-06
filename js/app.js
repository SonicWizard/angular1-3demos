var app = angular.module('myApp', ['ngRoute', 'ngAria', 'ngMessages']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/intro', {
        templateUrl: 'partials/intro.html',
        controller: 'IntroCtrl'
    })
    .when('/onetimebinding', {
        templateUrl: 'partials/onetimebinding.html',
        controller: 'OneTimeBindingCtrl'
    })
    .when('/aria', {
        templateUrl: 'partials/aria.html',
        controller: 'AriaCtrl'
    })
    .when('/ngMessages', {
        templateUrl: 'partials/ngMessages.html',
        controller: 'NgMessagesCtrl'
    })
    .when('/ngModelOptions', {
        templateUrl: 'partials/ngModelOptions.html',
        controller: 'NgModelOptionsCtrl'
    })
    .when('/strictdi', {
        templateUrl: 'partials/strictdi.html',
        controller: 'MyStrictDiCtrl'
    })
    .when('/resources', {
        templateUrl: 'partials/resources.html',
        controller: 'ResourcesCtrl'
    })
    .when('/forms', {
        templateUrl: 'partials/forms.html',
        controller: 'FormsCtrl'
    });
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
