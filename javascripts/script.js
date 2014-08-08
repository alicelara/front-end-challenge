var relayRobin = angular.module('relayRobin',[]);

relayRobin.controller('inboxCtrl', ['$scope', function($scope) {
	$scope.checkboxMaster = false;
  $scope.isCheckboxSelected = function() {
  	var getCheckboxes = document.querySelector('.emailCheckbox:checked');
  	if(getCheckboxes !== null) {
	  	$scope.checkboxMaster = true;
	  } else {
	  	$scope.checkboxMaster = false;
	  }
  }
}]);