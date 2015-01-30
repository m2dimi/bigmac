//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
//controller carte
        app.controller('carteCtrl', function($scope, $log , $routeParams, dataFactory) {
        $log.debug('angular is ready');
            $log.debug('test', $routeParams);
        $scope.model = {
	        dataurl :
	        	$routeParams.countryA + " " +
	        	$routeParams.countryB
        }
        $scope.countries = dataFactory;

      });
      