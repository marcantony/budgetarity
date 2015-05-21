angular.module('app', ['ngRoute', 'main'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .controller('MainCtrl', function () {

    })
;