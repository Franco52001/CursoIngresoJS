function mostrar() {
    var precio;
    var porcentaje;
    var descuento;
    var final
    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    precio = prompt("Ingrese precio");
    porcentaje = prompt("Ingrese porcentaje");

    descuento = precio * porcentaje / 100;

    final = precio - descuento;

    document.getElementById("elPrecioFinal").value = final;


}
