//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
//controller carte
        app.controller('carteCtrl', function($scope, $log , $routeParams, dataFactory) {
            $scope.compt=[1,2,3,4,5]
        $log.debug('angular is ready');
            $log.debug('test', $routeParams);
        $scope.model = {
	        dataurl :
	        	$routeParams.countryA + " " +
	        	$routeParams.countryB
        }
        // $scope.countries = dataFactory;
        $scope.colourAll = '#9DD3CA';        

        $scope.countryreveal = function(number, event){
            // if (number==1) {
                // var idcurrent = event.target.id;
                 // $scope.colour = $scope.colour === "green" ? "blue" : "green";
                var id = $(event.target).data('id');
                // var col = "colour"+id;
                // console.log(id);
                switch(id) {
                    case 102:
                        $scope.colour102 = "green";
                        break;
                    case 103:
                        $scope.colour103 = "blue";
                        // alert('perdu');
                        break;
                    case 104:
                        $scope.colour104 = "green";
                        break;
                    
                    case 105:
                        $scope.colour105 = "green";
                        break;
                    case 106:
                        $scope.colour106 = "green";
                        break;
                    case 107:
                        $scope.colour107 = "green";
                        break;
                    case 108:
                        $scope.colour108 = "green";
                        break;
                    case 109:
                        $scope.colour109 = "green";
                        break;                        
                }
                 
                // console.log(id);
            //     $scope.$apply;
            // }else if (number==2) {
            //     alert('bien joué');
            // };    
            
        }

      });
      