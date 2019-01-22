var app = angular.module('AdministradoresApp', []);

app.controller('ctrlAdministradores', function ($scope, $http) {
    $scope.guardar = function () {
        var administrador = {
            "id": 121,
            "nombre": $scope.nombre,
            "cargo": $scope.cargo,
            "rut": $scope.rut,
          
        };

        $http.put("http://localhost:8080/administradores", administrador)
            .then(function (resp) {
                console.log(resp.data);
                window.location.href = "visualAdministradores.html";
            });
    };
});