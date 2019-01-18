/*Formulario para validar el ingreso de una persona*/
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
                        var validarRut = function (e) {
                            if (formulario.rut.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarRut(e);
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
                        var validarCargo = function (e) {
                            if (formulario.cargo.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarCargo(e);
                        };
                        var validarHabilidad = function (e) {
                            if (formulario.habilidad.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarHabilidad(e);
                        };
                        var validarProyecto = function (e) {
                            if (formulario.proyecto.value == 0) {
                                alert("Completa el campo nombre");
                                e.preventDefault();
                            }
                        };
                        var validar = function (e) {
                            validarProyecto(e);
                        };

                        formulario.addEventListener("submit", validar);
                    }())
                </script>