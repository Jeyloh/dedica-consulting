'use strict';


// Declare app level module which depends on views, and components
var myApp = angular
    .module('myApp', [
      'ngRoute',
    ])

    .config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {

            $routeProvider.when('/', {
                templateUrl: 'components/pageStructure/pageStructureView.html',
                controller: 'PageStructureController'
            });

            $routeProvider.when('/home', {
                templateUrl: 'components/partials/bannerView.html',
            });

            $routeProvider.when('/about', {
                templateUrl: 'components/partials/articleView.html',
                controller: 'ArticleController'
            });
            $routeProvider.when('/partners', {
                templateUrl: 'components/form/formView.html',
                controller: 'FormController',
            });

            $routeProvider.when('/contact', {
                templateUrl: 'components/partials/articleView.html',
            });


            $routeProvider.when('/contact', {
                templateUrl: 'components/partials/articleView.html',
            });

            $routeProvider.when('/consultant', {
                templateUrl: './components/header/headerView.html',
                controller: 'HeaderController'
            });

            $routeProvider.otherwise({redirectTo: '/'});
        }
    ]);

