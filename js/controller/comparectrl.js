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

            $('#page1compare').hide();
            $('#page2compare').hide();
            $('#page3compare').hide();
            $('#page4compare').hide();
            $('#page5compare').hide();
            $('#page6compare').hide();
            $('#page7compare').hide();

            $scope.goPage1 = function(){
                $('#homecompare').hide();
                $('#page1compare').show();
            }
            $scope.goPage2 = function(){
                $('#page1compare').hide();
                $('#page2compare').show();
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
      });