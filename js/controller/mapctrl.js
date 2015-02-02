//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
//controller carte
        app.controller('carteCtrl', function($scope, $log , $routeParams, dataFactory, $filter) {
           
        
        //Display the name of the selected countries   
        $scope.model = {
            dataurl1: $routeParams.countryA,
            dataurl2 : $routeParams.countryB
        }
        $scope.countryA = $routeParams.countryA;
        $scope.countryB = $routeParams.countryB;

        //Display the thumb image of selected country on the start lightbox
        dataFactory.GetDataCountry(function(data){
            var countrySelect = $routeParams.countryA;
            var idcountry = $filter('filter')(data, countrySelect);
            $scope.countryselection = idcountry[0].thumb;
        })

        //Code for the map game
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
      