angular.module('app', ['ngRoute', 'main', 'charity'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .controller('MainCtrl', function () {

    })
    .service('UserService', function () {
        return {
            getName: function () {
                return 'Jim';
            },
            getBudgetLeft: function () {
                return 35;
            },
            getCharities: function () {
                return [
                    {
                        name: 'Red Cross',
                        amount: 50
                    },
                    {
                        name: 'Red Cross',
                        amount: 50
                    },
                    {
                        name: 'Red Cross',
                        amount: 50
                    },
                    {
                        name: 'Red Cross',
                        amount: 50
                    },
                    {
                        name: 'Red Cross',
                        amount: 50
                    }
                ];
            },
            updateCharities: function (charities) {
                // send charities to back-end
            }
        };
    })
;