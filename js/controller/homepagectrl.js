//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
    //controller for the homepage
        app.controller('homeCtrl', function($scope, $log, $routeParams, dataFactory) {
        $log.debug('angular is ready');
            $routeParams.countryA = 'france';
            $routeParams.countryB = 'belgique';
            $log.debug('test', $routeParams);
            $scope.countries = [1,2,3];

			 $log.debug('data', dataFactory.content);

			$scope.countries = dataFactory.obj;
			$scope.choose = function(country){
                 
            }
            
      });