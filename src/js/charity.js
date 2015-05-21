angular.module('charity', [])
	.directive('charityButton', function () {
		return {
			templateUrl: "/html/tmplt/charity-button.html",
			scope: {
				charity: '=charity'
			},
			link: function (scope, el) {
				scope.username = "scope";

				scope.onClick = function () {
					// do something
				};
			}
		};
	})
;