"use strict";

empInfo.controller('ManageEmpController',['$scope', 'toaster', '$state', '$stateParams', 'EmpService', function($scope, toaster, $state, $stateParams, EmpService){

	$scope.emp = {isNewRecord:true};
	if($stateParams.id > 0){
		EmpService.getEmployeeById($stateParams.id).then(function(response){
			$scope.emp = response;
			$scope.emp.isNewRecord = false;
			$scope.title = "Update Employee"
		});
	}else{
		$scope.title = "Add Employee"
	}
	
	$scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
  	};

	$scope.onAddNewEmpClick = function(isFormValid){
		if(isFormValid){
			EmpService.addEmployee($scope.emp).then(function(response){
				toaster.pop('success', "Status", response.msg);
				$state.go('/');
			});
		}	
	}

	$scope.onCancelClick = function(){
		$scope.emp = {isNewRecord:true};
		$state.go('/');
	}

}])