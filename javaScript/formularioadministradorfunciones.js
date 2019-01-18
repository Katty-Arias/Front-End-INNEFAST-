/*Formulario para validar el ingreso de un administrador*/
   <script>
                    (function () {
                        var formulario = document.getElementsByName('formulario')[0],
                            elementos = formulario.elements,
                            boton = document.getElementById('btn');

                        var validarNombre = function (e) {
                            if (formulario.nombre.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarNombre(e);
                        };
                        var validarRol = function (e) {
                            if (formulario.rol.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarRol(e);
                        };
                        var validarMail = function (e) {
                            if (formulario.mail.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarMail(e);
                        };
                        var validarContraseña = function (e) {
                            if (formulario.contraseña.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarContraseña(e);
                        };
                        formulario.addEventListener("submit", validar);
                    }())
                </script>