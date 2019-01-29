var app = angular.module('loginApp', []);

app.controller('ctrllogin', function ($scope, $http) {
    $scope.guardar = function () {
        var login = {
            "contrasena": $scope.usuario,
            "email":  $scope.pass
        };

        $http.post("http://localhost:8083/usuarios/loginUsuario", login)
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "visualAdministradores.html";
        });
    };
});