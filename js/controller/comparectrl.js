//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers 

//controller compare HOME and START
        app.controller('comparatifHomeCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;


            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;
                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;
            })//END DATAFACTORY
      });

//controller compare COULEUR
        app.controller('comparatifCouleurCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
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

                var color1 = $filter('filter')(data, countrySelect1, true)[0].color;
                var color2 = $filter('filter')(data, countrySelect2, true)[0].color;
                if (color1=="Vert") {
                    $('#page2compare #front-bottom>polygon').attr("fill", "#01330A");
                    $('#page2compare #front-top>polygon').attr("fill", "#004911");
                    $('#page2compare #top>polygon').attr("fill", "#577C59");
                    $('#page2compare #left-side>polygon').attr("fill", "#34663C");
                    $('#page2compare #left-side-shadow>polygon').attr("fill", "#011904");
                }else{
                    $('#page2compare #front-bottom>polygon').attr("fill", "#A32332");
                    $('#page2compare #front-top>polygon').attr("fill", "#BE1532");
                    $('#page2compare #top>polygon').attr("fill", "#D77379");
                    $('#page2compare #left-side>polygon').attr("fill", "#A32332");
                    $('#page2compare #left-side-shadow>polygon').attr("fill", "#680117");
                }

                if (color2=="Vert") {
                    $('#page2compare2 #front-bottom>polygon').attr("fill", "#01330A");
                    $('#page2compare2 #front-top>polygon').attr("fill", "#004911");
                    $('#page2compare2 #top>polygon').attr("fill", "#577C59");
                    $('#page2compare2 #left-side>polygon').attr("fill", "#34663C");
                    $('#page2compare2 #left-side-shadow>polygon').attr("fill", "#011904");
                }else{
                    $('#page2compare2 #front-bottom>polygon').attr("fill", "#A32332");
                    $('#page2compare2 #front-top>polygon').attr("fill", "#BE1532");
                    $('#page2compare2 #top>polygon').attr("fill", "#D77379");
                    $('#page2compare2 #left-side>polygon').attr("fill", "#A32332");
                    $('#page2compare2 #left-side-shadow>polygon').attr("fill", "#680117");
                }
               //timeline color 
               $('#color circle').attr("fill", "#DF5252");
               $scope.textcolor1 = $filter('filter')(data, countrySelect1, true)[0].color;
               $scope.textcolor2 = $filter('filter')(data, countrySelect2, true)[0].color;
            
                
            })//END DATAFACTORY
      });

//controller compare CALORIES
        app.controller('comparatifCaloriesCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;


            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                var color1 = $filter('filter')(data, countrySelect1, true)[0].color;
                var color2 = $filter('filter')(data, countrySelect2, true)[0].color;
                
                if (color1=="Rouge") {
                    $('#page3compare #top-background>polygon').attr("fill", "#D77379");
                    $('#page3compare #bottom-side polygon').attr("fill", "#7F1C2B");
                    $('#page3compare #bottom-background>polygon').attr("fill", "#661722");
                    $('#page3compare #top-side-top-bot polygon').attr("fill", "#BE1532");
                    $('#page3compare #top-side-left-right polygon').attr("fill", "#A32332");
                    $('#page3compare #bottom-front polygon').attr("fill", "#A32332");
                }
                if (color2=="Rouge") {
                    $('#page3compare2 #top-background>polygon').attr("fill", "#D77379");
                    $('#page3compare2 #bottom-side polygon').attr("fill", "#7F1C2B");
                    $('#page3compare2 #bottom-background>polygon').attr("fill", "#661722");
                    $('#page3compare2 #top-side-top-bot polygon').attr("fill", "#BE1532");
                    $('#page3compare2 #top-side-left-right polygon').attr("fill", "#A32332");
                    $('#page3compare2 #bottom-front polygon').attr("fill", "#A32332");
                }
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;
                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;

                
                $scope.cal1 = $filter('filter')(data, countrySelect1, true)[0].calorie;
                $scope.cal2 = $filter('filter')(data, countrySelect2, true)[0].calorie;
                
                //timeline color 
                $('#color circle').attr("fill", "#DF5252");
                $scope.textcolor1 = $filter('filter')(data, countrySelect1, true)[0].color;
                $scope.textcolor2 = $filter('filter')(data, countrySelect2, true)[0].color;

                $('.timeline #cal circle').attr("fill", "#DF5252");
                $scope.textcal1 = $filter('filter')(data, countrySelect1, true)[0].calorie + ' cal';
                $scope.textcal2 = $filter('filter')(data, countrySelect2, true)[0].calorie + ' cal';
            })//END DATAFACTORY
      });
//controller compare SEL
        app.controller('comparatifSelCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;


            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;
                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;

                
                $scope.sel1 = $filter('filter')(data, countrySelect1, true)[0].sodium + ' mg';
                $scope.sel2 = $filter('filter')(data, countrySelect2, true)[0].sodium + ' mg';
                //timeline color 
                $('#color circle').attr("fill", "#DF5252");
                $scope.textcolor1 = $filter('filter')(data, countrySelect1, true)[0].color;
                $scope.textcolor2 = $filter('filter')(data, countrySelect2, true)[0].color;

                $('#cal circle').attr("fill", "#DF5252");
                $scope.textcal1 = $filter('filter')(data, countrySelect1, true)[0].calorie + ' cal';
                $scope.textcal2 = $filter('filter')(data, countrySelect2, true)[0].calorie + ' cal';

                $('#salt circle').attr("fill", "#DF5252");
                $scope.textsalt1 = $filter('filter')(data, countrySelect1, true)[0].sodium + ' mg';
                $scope.textsalt2 = $filter('filter')(data, countrySelect2, true)[0].sodium + ' mg';
            })//END DATAFACTORY
      });

//controller compare VIANDE
        app.controller('comparatifViandeCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;


            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;
                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;

                
                $scope.meat1 = $filter('filter')(data, countrySelect1, true)[0].meatorigin;
                $scope.meat2 = $filter('filter')(data, countrySelect2, true)[0].meatorigin;
                //timeline color 
                $('#color circle').attr("fill", "#DF5252");
                $scope.textcolor1 = $filter('filter')(data, countrySelect1, true)[0].color;
                $scope.textcolor2 = $filter('filter')(data, countrySelect2, true)[0].color;

                $('#cal circle').attr("fill", "#DF5252");
                $scope.textcal1 = $filter('filter')(data, countrySelect1, true)[0].calorie + ' cal';
                $scope.textcal2 = $filter('filter')(data, countrySelect2, true)[0].calorie + ' cal';

                $('#salt circle').attr("fill", "#DF5252");
                $scope.textsalt1 = $filter('filter')(data, countrySelect1, true)[0].sodium + ' mg';
                $scope.textsalt2 = $filter('filter')(data, countrySelect2, true)[0].sodium + ' mg';

                $('#meat circle').attr("fill", "#DF5252");
                $scope.textmeat1 = $filter('filter')(data, countrySelect1, true)[0].meatorigin;
                $scope.textmeat2 = $filter('filter')(data, countrySelect2, true)[0].meatorigin;
            })//END DATAFACTORY
      });

//controller compare PRIX
        app.controller('comparatifPrixCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            $scope.model = {
                dataurl1: $routeParams.countryA,
                dataurl2: $routeParams.countryB
            }
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;


            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;
                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;

                
                $scope.price1 = $filter('filter')(data, countrySelect1, true)[0].price + ' €';
                $scope.price2 = $filter('filter')(data, countrySelect2, true)[0].price + ' €';
                //timeline color 
                $('#color circle').attr("fill", "#DF5252");
                $scope.textcolor1 = $filter('filter')(data, countrySelect1, true)[0].color;
                $scope.textcolor2 = $filter('filter')(data, countrySelect2, true)[0].color;

                $('#cal circle').attr("fill", "#DF5252");
                $scope.textcal1 = $filter('filter')(data, countrySelect1, true)[0].calorie + ' cal';
                $scope.textcal2 = $filter('filter')(data, countrySelect2, true)[0].calorie + ' cal';

                $('#salt circle').attr("fill", "#DF5252");
                $scope.textsalt1 = $filter('filter')(data, countrySelect1, true)[0].sodium + ' mg';
                $scope.textsalt2 = $filter('filter')(data, countrySelect2, true)[0].sodium + ' mg';

                $('#meat circle').attr("fill", "#DF5252");
                $scope.textmeat1 = $filter('filter')(data, countrySelect1, true)[0].meatorigin;
                $scope.textmeat2 = $filter('filter')(data, countrySelect2, true)[0].meatorigin;

                 $('#price circle').attr("fill", "#DF5252");
                $scope.textprice1 = $filter('filter')(data, countrySelect1, true)[0].price + ' euros';
                $scope.textprice2 = $filter('filter')(data, countrySelect2, true)[0].price + ' euros';
            })//END DATAFACTORY
      });
//controller compare RESUMÉ
        app.controller('comparatifResumeCtrl', function($scope, $log, $routeParams, dataFactory, $filter) {
        
            //Display the name of the selected countries
            var pays1 =  $routeParams.countryA;
            var pays2 =  $routeParams.countryB;

            if (pays1 == 'Australie' || pays1 == 'Azerbajan' || pays1 == 'Argentine' || pays1 == 'Egypte' || pays1 == 'Afrique-du-sud' || pays1 == 'Inde' || pays1 == 'Angleterre') {
                $scope.countryA = "l'" + pays1;
            }else if(pays1 == "Bresil" || pays1 == 'Mexique' || pays1 == 'Japon' || pays1 == 'Maroc' || pays1 == 'Chili' )  {
                $scope.countryA = "le " + pays1;
            }else if(pays1 == 'France' || pays1 == 'Russie' || pays1 == 'Chine' || pays1 == 'Grece' || pays1 == 'Suede' ){
                $scope.countryA = "la " + pays1;
            }else if(pays1 == 'USA' || pays1 == 'Emirates'){
                $scope.countryA = "les " + pays1;
            }
            
            if (pays2 == 'Australie' || pays2 == 'Azerbajan' || pays2 == 'Argentine' || pays2 == 'Egypte' || pays2 == 'Afrique-du-sud' || pays2 == 'Inde' || pays2 == 'Angleterre') {
                $scope.countryB = "l'" + pays2;
            }else if(pays2 == "Bresil" || pays2 == 'Mexique' || pays2 == 'Japon' || pays2 == 'Maroc' || pays2 == 'Chili' )  {
                $scope.countryB = "le " + pays2;
            }else if(pays2 == 'France' || pays2 == 'Russie' || pays2 == 'Chine' || pays2 == 'Grece' || pays2 == 'Suede' ){
                $scope.countryB = "la " + pays2;
            }else if(pays2 == 'USA' || pays2 == 'Emirates'){
                $scope.countryB = "les " + pays2;
            }

      });
