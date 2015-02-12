//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers

 //controller temps travail
        app.controller('tempstravailCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {

            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;
            $scope.ecran = 'home';

            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                var idcountry = $filter('filter')(data, countrySelect1);
                $scope.worktimeselection1 = $filter('filter')(data, countrySelect1, true)[0].worktime;
                $scope.countryselection1 = $filter('filter')(data, countrySelect1, true)[0].perso;
                $scope.prenomselection1 = $filter('filter')(data, countrySelect1, true)[0].prenom;

                $scope.worktimeselection2 = $filter('filter')(data, countrySelect2, true)[0].worktime;
                $scope.countryselection2 = $filter('filter')(data, countrySelect2, true)[0].perso;
                $scope.prenomselection2 = $filter('filter')(data, countrySelect2, true)[0].prenom;
            })

            

      });
    