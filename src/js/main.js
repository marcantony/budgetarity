angular.module('main', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/html/main.html',
            controller: 'LandingCtrl'
        })
    })
    .controller('LandingCtrl', function ($scope, UserService) {
        $scope.name = UserService.getName();
        UserService.getBudgetLeft().then(function (data) {
            $scope.budgetLeft = data;
        })
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