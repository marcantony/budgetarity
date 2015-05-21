angular.module('main', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/html/main.html',
            controller: 'LandingCtrl'
        })
    })
    .controller('LandingCtrl', function ($scope) {
        $scope.name = 'Jim';
        $scope.budgetLeft = 35;
    })
    .directive('charityHistory', function () {
        return {
            templateUrl: '/html/tmplt/charity-history.html',
            scope: {
                charity: '=?charity'
            },
            link: function (scope) {
                scope.charity = {
                    name: 'Red Cross',
                    amount: 50
                };
            }
        };
    })
;