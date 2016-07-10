"use strict";

var empInfo = angular.module('empInfoWebUi',['ngResource', 'ui.router', 'ngAnimate', 'toaster', 'ui.bootstrap']);

empInfo.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");
	$stateProvider
    .state('/', {
      url: "/",
      templateUrl: "./application/partials/dashboardTpl.html",
      controller:"DashboardController",
      resolve:{
      	employees:function(EmpService){
      		return EmpService.getAllEmployees();
      	}
      }
    })
    .state('manage', {
      url: "/manage/employee/:id",
      templateUrl: "./application/partials/manageEmpTpl.html",
      controller:"ManageEmpController"
    })

}]);