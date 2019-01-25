var app = angular.module('AppLogin', []);

app.controller('ctrlLogin', function($scope, $http)
{    
    
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";

    $scope.iniciarSesion = function(){

        if( $scope.modelUsuario == "" &&  $scope.modelPassword=="" ){
            $scope.mensajedatos = "Ingrese datos";
            return ;
        }
        
        if( $scope.modelUsuario == "admin" &&  $scope.modelPassword=="1" ){
        	 $scope.mostrarError = false;
            $scope.mostrarLogin = true;
             $state.go('/home.html');

 

/*            $scope.mostrarError = false;
            $scope.mostrarLogin = false;
  */          

            //
        }else{
            $scope.mostrarError = true;
            $scope.mostrarLogin = true;
            $scope.mensaje = "Usuario y/o Clave incorrectos";
        }
        
    };
});
