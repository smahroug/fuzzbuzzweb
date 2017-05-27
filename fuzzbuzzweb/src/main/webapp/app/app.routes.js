var app = angular.module('fuzzbuzzRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/fuzzbuzz.html'
        })
        
//        .state('home', {
//            url: '/home',
//            templateUrl: 'app/components/home/partial-home.html'
//        })
        
        ;

});