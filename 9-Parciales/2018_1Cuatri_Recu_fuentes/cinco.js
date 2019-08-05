function mostrar()
{
    var dia;
    var mensaje;

    dia = prompt("Ingrese un dia");

    switch(dia)
    {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
        mensaje = "A trabajar";
        break;
        case "Sabado":
        case "Domingo":
        mensaje = "Buen finde";
        break;
        default:
        mensaje = "No es un dia valido";
    }
    alert(mensaje);
}
