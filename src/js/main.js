angular.module('main', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/html/main.html',
            controller: 'LandingCtrl'
        })
    })
    .controller('LandingCtrl', function ($scope, UserService) {
        $scope.name = UserService.getName();
        $scope.budgetLeft = UserService.getBudgetLeft();
        $scope.charities = UserService.getCharities();
    })
    .directive('charityHistory', function () {
        return {
            templateUrl: '/html/tmplt/charity-history.html',
            scope: {
                charity: '=charity'
            }
        };
    })
;