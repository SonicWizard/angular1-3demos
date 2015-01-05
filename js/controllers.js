angular.module('myApp')
.controller('IntroCtrl', ['$scope', function($scope) {
}])
.controller('OneTimeBindingCtrl', ['$scope', function($scope) {
    $scope.first = 'Mickey';
    $scope.last = 'Mouse';
    $scope.boundText = "the text";
}])
.controller('AriaCtrl', ['$scope', function($scope) {
    $scope.disabled = false;
    $scope.btnText = 'Disable';
    $scope.toggle = function() {
        disabled = !disabled;
        btnText = disabled ? "Enable" : "Disable";
    };
}])
.controller('NgMessagesCtrl', ['$scope', function($scope) {
    $scope.field;
    $scope.field2;
}])
.controller('NgModelOptionsCtrl', ['$scope', function($scope) {
    $scope.field;
    $scope.field2;
}])
.controller('MyStrictDiCtrl', function($scope) {
    $scope.content = 'here is the content';
})
.controller('ResourcesCtrl', ['$scope', function($scope) {
}])
.controller('FormsCtrl', ['$scope', function($scope) {
    $scope.first = 'Mickey';
    $scope.last = 'Mouse';
}]);
