//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
var worktimeselection1;
var worktimeselection2;

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
                worktimeselection1 = $filter('filter')(data, countrySelect1, true)[0].worktime;
                $scope.countryselection1 = $filter('filter')(data, countrySelect1, true)[0].perso;
                $scope.prenomselection1 = $filter('filter')(data, countrySelect1, true)[0].prenom;

                worktimeselection2 = $filter('filter')(data, countrySelect2, true)[0].worktime;
                $scope.countryselection2 = $filter('filter')(data, countrySelect2, true)[0].perso;
                $scope.prenomselection2 = $filter('filter')(data, countrySelect2, true)[0].prenom;
            })

            $scope.bigmac_calcul= function() {
                var time =  $("#time").val();
                var min = time * 60;
                var totalbigmac1;
                var totalbigmac2;


                $scope.totalbigmac2 = Math.round(min/worktimeselection2)*0.5;
                refresh();
                setInterval(refresh,30000);
                setTimeout($scope.totalbigmac1 =  Math.round(min/worktimeselection1)*0.5, 30000);
            }


      });




function refresh() {
    var tmp = new Date();
    var img = $("#img_machine")[0];
    img.src = "ressources/machine/machine.gif" + '?' + tmp.getTime();
}

