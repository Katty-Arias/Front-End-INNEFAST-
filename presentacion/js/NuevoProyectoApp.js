var app = angular.module('NuevoProyectoApp', []);
app.controller('ctrlRegistro', function ($scope, $http) {

    $scope.mostrarError = false;
    $scope.idProyecto = "";
    $scope.estado = "";
    $scope.nombreProyecto = "";
    $scope.fechaInicio = "";
    $scope.fechaFinal = "";





    $scope.registrarse = function () {
        var user = ({

            nombre: $scope.nombreProyecto,
            habilidad: $scope.idProyecto,
            estado: $scope.estado,
            fechaInicio: $scope.fechaInicio,
            fechaFinal: $scope.fechaFinal,
       
        });
        if ($scope.nombreProyecto == "" || $scope.idProyecto == "" || $scope.estado == "" || $scope.fechaInicio == "" || $scope.fechaFinal == "") {
            $scope.mostrarError = true;
            $scope.mensaje = "Ingrese todos los campos requeridos";
            console.log("Error Campos")
        }
        else {

            $http({
                method: 'PUT',
                url: "http://localhost:8083//",
                data: user
            }).then(function (respuesta) {
                console.log(respuesta.data);
                if (respuesta.data) {
                    alert("Registrado correctamente");
                    window.location.href = "visualProyecto.html";
                } else {
                    $scope.mostrarError = true;
                    $scope.mensaje = "El nombre o ID ya se encuentran registrados";
                }
            });
        }


    };


});