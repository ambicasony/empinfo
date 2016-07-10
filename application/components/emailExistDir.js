empInfo.directive("emailExist", ['EmpService', function (EmpService) {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function (scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.emailexists = function (modelValue) {
                return EmpService.checkEmailExists(modelValue);
            }
        }
    };
}]);