var app = angular.module('loginApp', []);

app.controller('ctrllogin', function ($scope, $http) {
    $scope.guardar = function () {
        var login = {
            "id": 121,
            "nombreUs": $scope.nombreUs,
            "email": $scope.email,
            "contrasena": $scope.contrasena,
            "rol": $scope.rol,
        };

        $http.put("http://localhost:8082/usuarios/loginUsuario?email="+$scope.email+"&contrasena="+$scope.contrasena,)
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "visualAdministradores.html";
        });
    };
});