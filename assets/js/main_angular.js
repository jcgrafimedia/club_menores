
angular.module('club_menores' , [])

	//Definiendo el controlador de la ruta base
	
	.controller('route', ['$scope', function($scope){

		$scope.ruta_base = 'http://localhost:8003/';

	}]);
