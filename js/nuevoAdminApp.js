var app = angular.module('nuevoAdminApp', []);

app.controller('ctrlnuevoAdmin', function ($scope, $http) {
    $scope.guardar = function () {
        var usuario = {
            "id": 121,
            "nombreUs": $scope.nombreUs,
            "email": $scope.email,
            "contrasena": $scope.contrasena,
            "rol": $scope.rol,
        };

        $http.put("http://localhost:8082/usuarios/agregarUsuario",Usuarios)
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "visualAdministradores.html";
        });
    };
});