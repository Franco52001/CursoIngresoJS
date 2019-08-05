function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio");
    while(isNaN(precio))
    {
        precio = prompt("Precio no valido");
    }

    descuento = prompt("Ingrese el descuento");
    while(isNaN(descuento))
    {
        descuento = prompt("Descuento no valido");
    }

    descuento = precio * descuento/100

    precioFinal = precio - descuento

    document.getElementById("elPrecioFinal").value = precioFinal;
}
