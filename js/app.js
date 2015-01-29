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
//factory
app.factory('dataFactory', function($http){
	/*
var obj = {content:null};

    $http.get('data/data.json').success(function(data) {
        // you can do some processing here
        obj.content = data;
    });    

    return obj; 
*/
var factory = [
    {
		"id" : "1",
        "country" : "France",
        "worktime": "13",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "2",
        "country" : "Brésil",
        "worktime": "120",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "3",
        "country" : "Mexique",
        "worktime": "31",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "4",
        "country" : "Australie",
        "worktime": "09",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "5",
        "country" : "Azerbajan",
        "worktime": "368",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "6",
        "country" : "Amerique",
        "worktime": "10",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "7",
        "country" : "Russie",
        "worktime": "30",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "8",
        "country" : "Argentine",
        "worktime": "71",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "9",
        "country" : "Egypte",
        "worktime": "21.16",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "10",
        "country" : "Emirates",
        "worktime": "13",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "11",
        "country" : "Japon",
        "worktime": "08",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "12",
        "country" : "Chine",
        "worktime": "35",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "13",
        "country" : "Afrique du sud",
        "worktime": "49",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "14",
        "country" : "Inde",
        "worktime": "339",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "15",
        "country" : "Uk",
        "worktime": "15",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "16",
        "country" : "Roumanie",
        "worktime": "52",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "17",
        "country" : "Grèce",
        "worktime": "32",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    },
    {
		"id" : "18",
        "country" : "Maroc",
        "worktime": "345",
        "thumb" : "ressources/caractere/test.jpg",
		"url_img" : "ressources/caractere/test.jpg"
    }

];

		
	return factory;
});
//création des controller

	//controller home
        app.controller('homeCtrl', function($scope, $log, $routeParams, dataFactory) {
        $log.debug('angular is ready');
            $log.debug('test', $routeParams);
            $scope.countries = [1,2,3];
            $routeParams.countryA = 'france';
            $routeParams.countryB = 'belgique';
            /*
$http.get('data/data.json').success(function(data){
		$log.debug('fichier chargé');
	}).
	error(function(data){
		$log.debug('error');
	});
*/

			 $log.debug('data', dataFactory.content);

			$scope.countries = dataFactory.obj;
			$scope.choose = function(country){
                 
            }
      });
    
    //controller carte
        app.controller('carteCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });
      
    //controller choix personnage
        app.controller('personnageCtrl', function($scope, $log, dataFactory) {
        $log.debug('angular is ready');
        $scope.countries = dataFactory;
        
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