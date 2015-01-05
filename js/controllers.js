angular.module('myApp')
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
.controller('FormsCtrl', ['$scope', function($scope) {
    $scope.first = 'Mickey';
    $scope.last = 'Mouse';
}]);
