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
	.directive('charityButton', function () {
		return {
			templateUrl: "/html/tmplt/charity-button.html",
			scope: {
				charity: '=charity'
			},
			link: function (scope) {
				scope.onClick = function () {
			        scope.charity.isSelected = !scope.charity.isSelected;
				};
			}
		};
	})
;