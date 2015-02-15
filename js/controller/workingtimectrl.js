//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
var worktimeselection1;
var worktimeselection2;

 //controller temps travail
        app.controller('tempstravailCtrl', function($scope, $timeout, $log, $routeParams, dataFactory, $filter) {
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
                $scope.totalbigmac1 =  "";
                $scope.totalbigmac2 = "";
                $("#interupt")[0].src = "ressources/machine/off.png";
                refresh();
                setInterval(refresh, 30000);
                setTimeout(result, 30000);
                setTimeout(reload, 30000);
            }

            function result()
            {
                var time =  $("#time").val();
                var min = time * 60;
                var totalbigmac1;
                var totalbigmac2;
                $scope.totalbigmac1 =  Math.round(min/worktimeselection1)*0.5;
                $scope.totalbigmac2 = Math.round(min/worktimeselection2)*0.5;
                $timeout(function () {$scope.$apply();});
            }

      });



function reload()
{
    $("#interupt")[0].src = "ressources/machine/on.png";
}


function refresh() {
    var tmp = new Date();
    var img1 = $("#img_machine1")[0];
    var img2 = $("#img_machine2")[0];
    img1.src = "ressources/machine/machine.gif" + '?' + tmp.getTime();
    img2.src = "ressources/machine/machine2.gif" + '?' + tmp.getTime();
}

