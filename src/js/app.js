angular.module('app', ['ngRoute', 'main', 'charity'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .run(function () {
        Parse.initialize("7as8XJVDNefTa0cXQTMR5nuS6dhwQaKMHnhFgpqr", "IivItsZKeVAEXLdIUt0lpeKyPgHnScseejaAH7Hu");
        /*var Charities = Parse.Object.extend("CharityDetails");
        var charities = new Charities();*/
    })
    .controller('MainCtrl', function () {

    })
    .service('UserService', function ($http) {
        return {
            getName: function () {
                return 'Jim';
            },
            getPeriodInitialBalance: function () {
                return 10000;
            },
            getBudget: function () {
                return 500;
            },
            getAccountId: function () {
                return '555e88c7566c6e7c4d4d565b';
            },
            getBudgetLeft: function () {
                var budget = this.getBudget(),
                    periodInitialBalance = this.getPeriodInitialBalance();
                return $http.get('http://api.reimaginebanking.com/accounts/' +
                    this.getAccountId() + '?key=ac60e9a485bcfd480f51c35a0adf1649')
                    .then(function (res) {
                        return budget - (periodInitialBalance - res.data.balance);
                    });
            },
            getCharities: function () {
                return [
                    {
                        name: 'American Red Cross',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Cancer Foundation',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Doctors Without Borders',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Feeding America',
                        amount: 50,
                        isSelected: true
                    },
                    {
                        name: 'Water.org',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Action Against Hunger',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'American Kidney Fund',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'The Foundation for AIDS Research',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'American Bird Conservancy',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Marine Mamamal Care',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Save The Children',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Partnership for Drug-Free Kids',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Reading is Fundamental',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Mental Health America',
                        amount: 50,
                        isSelected: false
                    }
                ];
            },
            updateCharities: function (charities) {
                var Charities = Parse.Object.extend("CharityDetails");
                var charitiesObj = new Charities();
                charitiesObj.save(charities, {
                    success: function (obj) {
                        console.log(obj);
                    },
                    error: function (model, error) {
                        console.log(error);
                    }
                });
            }
        };
    })
;