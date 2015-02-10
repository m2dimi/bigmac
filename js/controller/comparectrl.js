//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers 

//controller compare
        app.controller('comparatifCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        $log.debug('angular is ready');

            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }

            dataFactory.GetDataCountry(function(data){
                var countrySelect = $routeParams.countryA;
                var idcountry = $filter('filter')(data, countrySelect);
                $scope.worktimeselection = $filter('filter')(data, countrySelect, true)[0].worktime;
                $scope.countryselection = $filter('filter')(data, countrySelect, true)[0].perso;
                $scope.prenomselection = $filter('filter')(data, countrySelect, true)[0].prenom;
            })
      });