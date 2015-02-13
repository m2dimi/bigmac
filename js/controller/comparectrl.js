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
                    var color1 = $filter('filter')(data, countrySelect1, true)[0].color;
                    var color2 = $filter('filter')(data, countrySelect2, true)[0].color;
                    if (color1=="green") {
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

                    if (color2=="green") {
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

                   
                    
                   
                }
                $scope.goPage3 = function(){
                    $('#page2compare').hide();
                    $('#page3compare').show();
                }
                $scope.goPage4 = function(){
                    $('#page3compare').hide();
                    $('#page4compare').show();
                }
                $scope.goPage5 = function(){
                    $('#page4compare').hide();
                    $('#page5compare').show();
                }
                $scope.goPage6 = function(){
                    $('#page5compare').hide();
                    $('#page6compare').show();
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