//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers 

//controller compare
        app.controller('comparatifCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;

            var tailleFenetre = window.innerHeight;
            $('.body_perso').css('height', tailleFenetre);

            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;
                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;
            })
      });