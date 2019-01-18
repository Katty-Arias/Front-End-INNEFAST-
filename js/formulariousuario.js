/*formulario agregar usuario*/
   <script>
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                });
                });

        $(document).ready(function () {
            $('#formus').hide();
            $('#agregarus').click(function (e) {
                e.preventDefault();
                $('#formus').show();
                })
                })
    </script>