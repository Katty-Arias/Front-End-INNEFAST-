var app = angular.module('AdministradoresApp', []);

app.controller('ctrlAdministradores', function ($scope, $http) {
    $scope.guardar = function () {
        var usuarios = {
            "id_rol": 1,
            "nombre": $scope.nombre,
            "email": $scope.email,
            "contrasena": $scope.contrasena,
            "id_user":$scope.id_rol,
          
        };

        $http.put("http://localhost:8082/usuarios/encontrarTodos", usuarios)
            .then(function (resp) {
                console.log(resp.data);
                window.location.href = "visualAdministradores.html";
            });
    };
});