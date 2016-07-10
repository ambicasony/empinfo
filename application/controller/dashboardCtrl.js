"use strict";

empInfo.controller('DashboardController',['$scope', 'toaster', 'employees', 'EmpService', function($scope, toaster, employees, EmpService){

	$scope.allEmployees = employees;
	$scope.onDeleteEmployee = function(emp){
		EmpService.deleteEmployee(emp).then(function(response){
			$scope.allEmployees = response;
			toaster.pop('warning', "Status", emp.fName+' employee deleted successfully.');
		})	
	}
	
}])