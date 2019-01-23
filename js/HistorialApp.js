var app = angular.module('HistorialApp', []);

app.controller('ctrlHistorial', function ($scope, $http) {
    $scope.guardar = function () {
        var administrador = {
            "nombre": $scope.nombre,
            "rut": $scope.rut,
            "correo": $scope.correo,
            "habilidades": $scope.habilidades,
            "proyecto": $scope.proyecto,
            
          
        };

        $http.put("http://localhost:8080/historial", historial)
            .then(function (resp) {
                console.log(resp.data);
                window.location.href = "visualHistorialDeProyectos.html";
            });
    };
});