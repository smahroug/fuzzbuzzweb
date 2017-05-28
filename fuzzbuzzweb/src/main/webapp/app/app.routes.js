var app = angular.module('fuzzbuzzRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/fuzzbuzz.html'
        });

});