var app = angular.module('ProyectosApp', []);

app.controller('ctrlProyectos', function ($scope, $http) {
    $scope.guardar = function () {
        var administrador = {
            "nombre": $scope.nombre,
            "rut": $scope.rut,
            "correo": $scope.correo,
            "habilidades": $scope.habilidades,
            "proyecto": $scope.proyecto,
            
          
        };

        $http.put("http://localhost:8080/proyectos", proyectos)
            .then(function (resp) {
                console.log(resp.data);
                window.location.href = "visualProyectos.html";
            });
    };
});