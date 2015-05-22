angular.module('app', ['ngRoute', 'main', 'charity'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .run(function () {
        Parse.initialize("7as8XJVDNefTa0cXQTMR5nuS6dhwQaKMHnhFgpqr", "IivItsZKeVAEXLdIUt0lpeKyPgHnScseejaAH7Hu");
        var Charities = Parse.Object.extend("CharityDetails");
        var charities = new Charities();
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
            updateCharities: function () {
                return [
                    {
                        name: 'Red Cross',
                        amount: 50,
                        isSelected: true
                    },
                    {
                        name: 'Red Cross',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Red Cross',
                        amount: 50,
                        isSelected: false
                    },
                    {
                        name: 'Red Cross',
                        amount: 50,
                        isSelected: true
                    },
                    {
                        name: 'Red Cross',
                        amount: 50,
                        isSelected: false
                    }
                ];
            },
            getCharities: function (charities) {
                var query = new Parse.Query(charities);
                query.find({
  					success: function(charities) {
  						var CharityName = charities.get('Name');
  						var CharityAmount = charities.get('Amount');
  						console.log("results: " + results);
  				},
  					error: function(error) {
  						console.log("Error: " + error);
  				}

  				
  				
			});
            }
        };
    })
;