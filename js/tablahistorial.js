/*Tabla historial*/
  <script>
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                });
        });

        $(document).ready(function () {
            $('#tabla').hide();
            $('#historial').click(function (e) {
                e.preventDefault();
$('#tabla').show();
})
})
</script>