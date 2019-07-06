/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var num1
    var porcentaje
    var final

    num1=document.getElementById("importe").value;
    num1=parseInt(num1);

    porcentaje=(num1*25/100);
    final=(num1-porcentaje);

    document.getElementById("resultado").value=final


}
