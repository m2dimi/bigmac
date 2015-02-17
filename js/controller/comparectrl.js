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
                    $('#page3compare #bottom-front>polygon').attr("fill", "#A32332");
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
            
            $scope.countryA = $routeParams.countryA;
            $scope.countryB = $routeParams.countryB;


            dataFactory.GetDataCountry(function(data){
                var countrySelect1 = $routeParams.countryA;
                var countrySelect2 = $routeParams.countryB;
                $scope.thumbperso1 = $filter('filter')(data, countrySelect1, true)[0].thumb;
                $scope.thumbperso2 = $filter('filter')(data, countrySelect2, true)[0].thumb;

                $scope.fullperso1 = $filter('filter')(data, countrySelect1, true)[0].url_img;
                $scope.fullperso2 = $filter('filter')(data, countrySelect2, true)[0].url_img;

                $scope.prenomperso1 = $filter('filter')(data, countrySelect1, true)[0].prenom;
                $scope.prenomperso2 = $filter('filter')(data, countrySelect2, true)[0].prenom;

                
                $scope.sel1 = $filter('filter')(data, countrySelect1, true)[0].sodium;
                $scope.sel2 = $filter('filter')(data, countrySelect2, true)[0].sodium;
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
            
                //don't display each page
                $('#page1compare').hide();
                $('#page2compare').hide();
                $('#page3compare').hide();
                $('#page4compare').hide();
                $('#page5compare').hide();
                $('#page6compare').hide();
                $('#page7compare').hide();
                $('#page1compare2').hide();
                $('#page2compare2').hide();
                $('#page3compare2').hide();
                $('#page4compare2').hide();
                $('#page5compare2').hide();
                $('#page6compare2').hide();
                $('#page7compare2').hide();
                $('.comparetimeline').hide();
                //END don't display each page

                $scope.goPage1 = function(){
                    $('#homecompare').hide();
                    $('#page1compare').show();
                    $('#page1compare2').show();
                    $('.comparetimeline').show();
                }
                $scope.goPage2 = function(){
                    $('#page1compare').hide();
                    $('#page1compare2').hide();
                    $('#page2compare').show();
                    $('#page2compare2').show();
                    
                    
                   
                }
                $scope.goPage3 = function(){
                    $('#page2compare').hide();
                    $('#page2compare2').hide();
                    $('#page3compare').show();
                    $('#page3compare2').show();

                    
                }
                $scope.goPage4 = function(){
                    $('#page3compare').hide();
                    $('#page3compare2').hide();
                    $('#page4compare').show();
                    $('#page4compare2').show();


                    //timeline color 
                    $('#salt circle').attr("fill", "#DF5252");
                    $scope.textsalt1 = $filter('filter')(data, countrySelect1, true)[0].sodium + ' mg';
                    $scope.textsalt2 = $filter('filter')(data, countrySelect2, true)[0].sodium + ' mg';
                }
                $scope.goPage5 = function(){
                    $('#page4compare').hide();
                    $('#page4compare2').hide();
                    $('#page5compare').show();
                    $('#page5compare2').show();

                    //timeline color 
                    $('#meat circle').attr("fill", "#DF5252");
                    $scope.textsalt1 = $filter('filter')(data, countrySelect1, true)[0].meat_origin;
                    $scope.textsalt2 = $filter('filter')(data, countrySelect2, true)[0].meat_origin;
                }
                $scope.goPage6 = function(){
                    $('#page5compare').hide();
                    $('#page5compare2').hide();
                    $('#page6compare').show();
                    $('#page6compare2').show();
                }
                $scope.goPage7 = function(){
                    $('#page6compare').hide();
                    $('#page7compare').show();
                }
                $scope.goPage8 = function(){
                    $('#page7compare').hide();
                    $('#page8compare').show();
                }
            })//END DATAFACTORY
      });