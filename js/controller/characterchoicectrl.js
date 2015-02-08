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
        $scope.characterDisplayClick = function(obj, name, country) {
			if (choix <= 1) {
                $scope.persochoix = obj ;
                $scope.persochoixname = name;
                $scope.countryA = country;
                $("#btn_anul1").fadeIn();
                if(choix == 0)
                {
                    choix = choix + 2
                }
                else
                {
                    $(".btn_valid").fadeIn();
                }
                choix = choix + 1;
                console.log(choix);
            }else if (choix > 1) {
                $scope.persochoix2 = obj;
                $scope.persochoixname2 = name;
                $scope.countryB = country;
                choix = choix + 1;
                console.log(choix);
                $("#btn_anul2").fadeIn();
                $(".btn_valid").fadeIn();

            };

		}
        $scope.characterremove1 = function() {
            $scope.persochoix = "";
            if(choix == 1)
            {
                choix = 0;
                console.log(choix);
            }
            else
            {
                choix = choix - 3;
                console.log(choix);
            }

            $("#btn_anul1").hide();
            $(".btn_valid").fadeOut();
        }

        $scope.characterremove2 = function() {
            $scope.persochoix2 = "";
            choix = choix - 1;
            $("#btn_anul2").hide();
            $(".btn_valid").fadeOut();
            console.log(choix);
        }


			
       /*
 $scope.characterDisplayOver = function(obj) {
			    // alert(obj.target.attributes.data.value);
			    // $log.debug(obj);
			    $scope.persochoix = obj ;
			    
			}
*/
		
    });