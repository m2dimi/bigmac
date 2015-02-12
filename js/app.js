//Initialization of angular with a module called playground.
//Angular's module is ni variable called "app"
var app = angular.module('playground', ['ngRoute']);

//ROUTING
//"when" enables to create new route
//in each route there are an url, a template for the page and a controller 
 
        app.config(function($routeProvider){
            $routeProvider
                    .when('/', {
	                    templateUrl: 'template/home.html',
	                    controller: 'homeCtrl'
	                    })
	                .when('/comparatif/:countryA/:countryB', {
	                    templateUrl: 'template/comparatif.html',
                        controller: 'comparatifCtrl'
	                })
                    .when('/carte/:countryA/:countryB', {
	                    templateUrl: 'template/carte.html',
	                    controller: 'carteCtrl'
	                    })
                    .when('/choix-personnage', {
	                    templateUrl: 'template/choix-personnage.html',
	                    controller: 'personnageCtrl'
	                    })

                    .when('/temps-travail/:countryA/:countryB', {
	                    templateUrl: 'template/temps-travail.html',
	                    controller: 'tempstravailCtrl'
	                    })
                    .when('/about', {
	                    templateUrl: 'template/about.html',
	                    controller: 'aboutCtrl'
	                    })
                    .otherwise({redirectTo: '/'})
        });

//SERVICE
//Create a new factory. It enable to get data from the JSON file in order to use it in many controllers 
app.service('dataFactory',['$http',function($http){
    var SendRequest = function (configfile, callback) {
        $http(configfile)
            .success(function (data) {
                callback(data, null);
            })
            .error(function (data, status) {
                callback(data, status);
            });
    };
    this.GetDataCountry = function (callback) {
        var config = {
            method: 'GET',
            url: 'data/data.json'
        };
        SendRequest(config, callback);
    };
}]);