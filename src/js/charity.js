angular.module('charity', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/charities', {
			templateUrl: '/html/charities.html',
			controller: 'CharitiesCtrl'
		});
	})
	.controller('CharitiesCtrl', function ($scope, UserService) {
		$scope.charities = UserService.getCharities();
	})
	.directive('charityButton', function (UserService) {
		return {
			templateUrl: "/html/tmplt/charity-button.html",
			scope: {
				charities: '=charities',
				charity: '=charity'
			},
			link: function (scope) {
				scope.onClick = function () {
					for (var i = 0; i < scope.charities.length; i++) {
						scope.charities[i].isSelected = false
					};
			        scope.charity.isSelected = true;
			        UserService.updateCharities(scope.charities);
				};
			}
		};
	})
;