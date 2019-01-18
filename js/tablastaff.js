/*tabla staff*/
    <script>
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                });
                });

        $(document).ready(function () {
            $('#tablausuario').hide();
            $('#staff').click(function (e) {
                e.preventDefault();
                $('#tablausuario').show();
                })

                })