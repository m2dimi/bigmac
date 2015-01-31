//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers

//controller choix personnage
    app.controller('personnageCtrl', function($scope, $log,  $routeParams, dataFactory) {
        $log.debug('angular is ready');
        $scope.countries = {};
        console.log(dataFactory);
        dataFactory.GetDataCountry(function(data){
            $scope.countries=data;
            console.log(data);
        })
        var choix =  0;
        $scope.characterDisplayClick = function(obj, name) {
			if (choix == 0) {
                $scope.persochoix = obj ;
                $scope.persochoixname = name ;
                $routeParams.countryA = name; 
                choix = 1;    
            }else if (choix == 1) {
                $scope.persochoix2 = obj ;
                $scope.persochoixname2 = name ;
                $routeParams.countryB = name;
                choix = 2;
            };

		}
        $scope.deleteCharacterSelect = function() {
            choix = 0;
            $log.debug('choix');
        }
			
       /*
 $scope.characterDisplayOver = function(obj) {
			    // alert(obj.target.attributes.data.value);
			    // $log.debug(obj);
			    $scope.persochoix = obj ;
			    
			}
*/
		
    });