
var app = angular.module('NuevoProyectoApp', []);

app.controller('ctrlNuevoProyecto', function ($scope, $http) {
    $scope.guardar = function () {
        var proyect = {
            "idProyecto": 121,
            "nombreProyecto": $scope.nombreProyecto,
            "fechanicio": $scope.fechaInicio,
            "fechaTermino": $scope.fechaTermino,
            "status": $scope.status,
        };

        $http.put("http://localhost:8081/proyecto", Proyecto )
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "index.html";
        });
    };
});