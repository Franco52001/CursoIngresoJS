function mostrar()
{
    var nombre;
    var localidad;

    nombre = document.getElementById("elNombre").value;
    while(!(isNaN(nombre)))
    {
        nombre = prompt("Nombre no valido");
    }
    localidad = document.getElementById("laLocalidad").value;
    while(!(isNaN(localidad)))
    {
        localidad = prompt("Localidad no valida");
    }
    alert("Usted se llama " + nombre + " y vive en la localidad de  " + localidad)

}


