//Création des pages
 var app = angular.module('playground', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider
                    .when('/', {
	                    templateUrl: 'template/home.html',
	                    controller: 'homeCtrl'
	                    })
                .when('/compare/:countryA/:countryB', {
                    templateUrl: 'template/home.html',
                    controller: 'homeCtrl'
                })
                    .when('/carte', {
	                    templateUrl: 'template/carte.html',
	                    controller: 'carteCtrl'
	                    })
                    .when('/choix-personnage', {
	                    templateUrl: 'template/choix-personnage.html',
	                    controller: 'personnageCtrl'
	                    })
                    .when('/temps-travail', {
	                    templateUrl: 'template/temps-travail.html',
	                    controller: 'tempstravailCtrl'
	                    })
                    .when('/comparatif', {
	                    templateUrl: 'template/comparatif.html',
	                    controller: 'comparatifCtrl'
	                    })
                    .when('/about', {
	                    templateUrl: 'template/about.html',
	                    controller: 'aboutCtrl'
	                    })
                    .otherwise({redirectTo: '/'})
        });
        
//création des controller

	//controller home
        app.controller('homeCtrl', function($scope, $log, $routeParams) {
        $log.debug('angular is ready');
            $log.debug('test', $routeParams);
            $scope.countries = [1,2,3];
            $routeParams.countryA = 'france';
            $routeParams.countryB = 'belgique';
            



            $scope.choose = function(country){
                $scope.countries=[1,3,54]
            }
      });
    
    //controller carte
        app.controller('carteCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });
      
    //controller choix personnage
        app.controller('personnageCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });
      
    //controller temps travail
        app.controller('tempstravailCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });
    
    //controller comparatif
        app.controller('comparatifCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });
    
    //controller about
        app.controller('aboutCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });