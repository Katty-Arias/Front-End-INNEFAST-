var app = angular.module('nuevoAdminApp', []);

app.controller('ctrlnuevoAdmin', function ($scope, $http) {
    $scope.guardar = function () {
        var cancion = {
            "id": 121,
            "nombreUs": $scope.nombreUs,
            "email": $scope.email,
            "contrasena": $scope.contrasena,
            "rol": $scope.rol,
        };

        $http.put("http://localhost:8082/guardarUsuario",Usuario)
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "visualAdministradores.html";
        });
    };
});