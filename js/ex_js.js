/**
 * Autor: Sergio Matamoros Delgado
 * Fecha: 25/01/2022
 * Licencia: GPL v3
*/

//Variables
let pulsadoAntes = false;

$(document).ready(function(){

    //Aplicamos los estilos del JQuery UI
    $('#iFechaNacimiento').datepicker();
    $("button").button();

    $( "#coches" ).selectmenu();


    //Cancelamos el envio al formulario
    $("form").submit(function(e) {

        //Comprobación de campos vacios, si hay muestra un mensaje.
        if(checkVacio()) $("#dialog").dialog();
        else clickBtn()

        return false;
    });
});

/**
 * Comprueba que si hay al menos un campo vacío
 * @returns true si hay vacio, false si no lo hay.
 */
function checkVacio() {
    for(let i=0;i< $("input").length;i++) {
        if($("input").eq(i).val().length == 0) 
            return true;
    }
    return false;
}


/**
 * Función que crea los elementos de las multas.
 */
function clickBtn() {

    if(!pulsadoAntes) {
        pulsadoAntes = true;

        let multas = [
            "Multa por exceso de velocidad", "Multa por embriaguez", "Multa por conducción temeraria",
            "Multa por desobediencia", "Multa por obstrucción", "Multa por pair programming", "Multa conducción temeraria",
            "Multa 8...", "Multa 9...", "Multa para llegar a la 10"
        ];

        let rnd = Math.floor(Math.random()*10+3);

        for(let i=0;i<rnd;i++) {
            let li = document.createElement("li");
            $(li).addClass("tarjeta")

            //Selecciono una multa aleatoriamente
            let multaRnd = Math.floor(Math.random()*multas.length)

            let dineroRnd = Math.floor(Math.random()*1000+100);

            //Añado el texto de las multas al "li" y el dinero aleatorio
            $(li).text(multas[multaRnd] + " - " + dineroRnd + "€");


            //Añado el li al ol.
            $("ol").append(li);

        }
    }
    else console.error("Ya has enviado una solicitud de búsqueda...");

}

/* 
    ============================
            REFERENCIAS
    ============================
    https://stackoverflow.com/questions/9347282/using-jquery-preventing-form-from-submitting

    Para comprobar si había algún metodo para coger el valor de un array en JQuery 
    https://stackoverflow.com/questions/44845811/get-array-value-by-index-jquery

    JQuery UI:

    https://stackoverflow.com/questions/1328025/jquery-ui-datepicker-change-date-format

    https://learn.jquery.com/jquery-ui/getting-started/

    https://desarrolloweb.com/articulos/jquery-ui-dialog.html

*/