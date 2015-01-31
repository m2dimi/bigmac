//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers

 //controller temps travail
        app.controller('tempstravailCtrl', function($scope, $log, $routeParams) {
	        
	        $scope.model = {
		        dataurl :
		        	$routeParams.countryA + " " +
		        	$routeParams.countryB
	        }
	        $scope.countryA = $routeParams.countryA;
	        $scope.countryB = $routeParams.countryB;

      });
    