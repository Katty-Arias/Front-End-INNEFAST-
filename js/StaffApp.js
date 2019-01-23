var app = angular.module('StaffApp', []);

app.controller('ctrlStaff', function ($scope, $http) {
    $scope.guardar = function () {
        var staff = {
            "nombre": $scope.nombre,
            "rut": $scope.rut,
            "correo": $scope.correo,
            "cargo": $scope.cargo,
            "habilidades": $scope.habilidades,
            "proyecto": $scope.proyecto,
 
        };

        $http.put("http://localhost:8080/Staff", staff)
            .then(function (resp) {
                console.log(resp.data);
                window.location.href = "visualStaff.html";
            });
    };
});