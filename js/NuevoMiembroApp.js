var app = angular.module('NuevoMiembroApp', []);
app.controller('ctrlRegistro', function ($scope, $http) {

    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.rut = "";
    $scope.nombre = "";
    $scope.email = "";
    $scope.cargo = "";
    $scope.habilidad = "";
    $scope.proyecto = "";




    $scope.registrarse = function () {
        var user = ({

            nombre: $scope.nombre,
            habilidad: $scope.habilidad,
            cargo: $scope.cargo,
            email: $scope.email,
            idPersona: $scope.rut,
            proyecto: $scope.proyecto,
        });
        if ($scope.rut == "" || $scope.nombre == "" || $scope.email == "" || $scope.cargo == "" || $scope.habilidad == "" || $scope.proyecto == "") {
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
                    window.location.href = "visualStaff.html";
                } else {
                    $scope.mostrarError = true;
                    $scope.mensaje = "El rut o el email ya se encuentran registrados";
                }
            });
        }


    };


});