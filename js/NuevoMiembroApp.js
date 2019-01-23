var app = angular.module('NuevoMiembroApp', []);

app.controller('ctrlNuevoMiembro', function ($scope, $http) {
    $scope.guardar = function () {
        var miembro = {
            "idPersona": 121,
            "nombre": $scope.nombre,
            "rut": $scope.rut,
            "email":$scope.email,
            "cargo": $scope.cargo,
            "habilidad": $scope.habilidad,
            "proyecto":$scope.proyecto,
        };

        $http.put("http://localhost:8080/guarPersona",PersonaService)
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "visualStaff.html";
        });
    };
});