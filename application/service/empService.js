"use strict";

empInfo.service('EmpService',['$q', function($q){
	var allEmployees = [{"isNewRecord":true,"fName":"veera","lName":"obula","pNumber":8105555344,"dateOfJoin":"2016-07-13T18:30:00.000Z","totalExp":"7","email":"veera@gmail.com","id":1}]

	var addEmployee = function(emp){
		var deferred = $q.defer();
		if(emp.isNewRecord){
			emp.id = allEmployees.length + 1;
			allEmployees.push(emp);
			deferred.resolve({msg:emp.fName+' employee added successfully.'});
		}else{
			deferred.resolve({msg:emp.fName+' employee details updated successfully.'});
		}
		
		return deferred.promise;
	}

	var getAllEmployees = function(){
		var deferred = $q.defer();
		deferred.resolve(allEmployees);
		return deferred.promise;
	}

	var getEmployeeById = function(empId){
		var deferred = $q.defer();
		_.each(allEmployees, function(emp){
			if(emp.id == empId){
				deferred.resolve(emp);
			}
		})
		return deferred.promise;
	}

	var deleteEmployee = function(emp){
		var deferred = $q.defer();
		allEmployees = _.without(allEmployees, emp);
		deferred.resolve(allEmployees);
		return deferred.promise;
	}

	var checkEmailExists = function(email){
		var deferred = $q.defer();
		var emailExists = false;
		_.each(allEmployees, function(emp){
			if(emp.email == email){
				emailExists = true;
			}
		})
		if(emailExists){
			deferred.reject();
		}else{
			deferred.resolve();
		}
		return deferred.promise;
	}

	return{
		addEmployee:addEmployee,
		getAllEmployees:getAllEmployees,
		getEmployeeById:getEmployeeById,
		deleteEmployee:deleteEmployee,
		checkEmailExists:checkEmailExists
	}

}])