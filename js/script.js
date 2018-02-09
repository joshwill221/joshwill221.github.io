// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider, $locationProvider) {
    
    $routeProvider    
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
    
        // route for the about page
        .when('/projects', {
            templateUrl : 'pages/projects.html',
            controller  : 'projectController'
        })

        // route for the about page
        .when('/resume', {
            templateUrl : 'pages/resume.html',
            controller  : 'resumeController'
        })
    
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('projectController', function($scope) {
    $scope.message = 'Look! I am an PROJECTS page.';
});

scotchApp.controller('resumeController', function($scope) {
    $scope.message = 'Look! I am an RESUME page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! ... This is just a demo.';
});