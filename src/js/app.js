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
    .service('UserService', function () {
        return {
            getName: function () {
                return 'Jim';
            },
            getBudgetLeft: function () {
                return 35;
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