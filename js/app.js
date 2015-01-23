 var app = angular.module('playground', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider
                    .when('/', {templateUrl: 'template/home.html'})
                    .when('/carte', {templateUrl: 'template/carte.html'})
                    .when('/choix-personnage', {templateUrl: 'template/choix-personnage.html'})
                    .when('/temps-travail', {templateUrl: 'template/temps-travail.html'})
                    .when('/comparatif', {templateUrl: 'template/comparatif.html'})
                    .when('/about', {templateUrl: 'template/about.html'})
                    .otherwise({redirectTo: '/'})
        });
        app.controller('LayoutCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });