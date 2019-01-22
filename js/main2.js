jQuery(document).on('submit','#formlg', function(event){
    event.preventDefault();
}

.done(function(respuesta){
    console.log(respuesta);
})

.fail(function(resp){
    console.log(resp.responseText);
})
.always(function(){
    console.log("complete");
})
