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

        var valid1 = 0;
        var valid2 = 0;

        $scope.characterDisplayClick = function(obj, name, country) {
			if (valid1==0) {
                $scope.persochoix = obj ;
                $scope.persochoixname = name;
                $scope.countryA = country;
                $("#btn_anul1").fadeIn();
                $("#perso1").fadeIn();
                valid();
                valid1 = 1;
                console.log(valid1);
            }else if (valid2==0) {
                $scope.persochoix2 = obj;
                $scope.persochoixname2 = name;
                $scope.countryB = country;
                $("#btn_anul2").fadeIn();
                $("#perso2").fadeIn();
                valid2 = 1;
                valid();

            };
		}
        $scope.characterremove1 = function() {
            $scope.persochoix = "";
            valid1 = 0;
            $("#btn_anul1").hide();
            $("#perso1").hide();
            $(".btn_valid").fadeOut();
        }

        $scope.characterremove2 = function() {
            $scope.persochoix2 = "";
            valid2 = 0;
            $("#btn_anul2").hide();
            $("#perso2").hide();
            $(".btn_valid").fadeOut();
        }


        function valid()
        {
            if(valid1 = valid2)
            {
                $(".btn_valid").fadeIn();
            }
        }


			
       /*
 $scope.characterDisplayOver = function(obj) {
			    // alert(obj.target.attributes.data.value);
			    // $log.debug(obj);
			    $scope.persochoix = obj ;
			    
			}
*/
		
    });