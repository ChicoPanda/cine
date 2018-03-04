
$(document).ready(function () { 

    peliculaClicada = "";

    var listaImg = $(".botonVotar");

    for (let i = 0; i < listaImg.length; i++) {

        $(listaImg[i]).on("click", function () {

            peliculaClicada = $(this).val();
            localStorage.setItem("peliculaIMG",peliculaClicada);
            location.href="pagos.html" ; 
            
        }) ;
    } 
});