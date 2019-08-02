function mostrar()
{
    var nota;
    var sexo;
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var notamin;
    var sexomin;
    var mensaje;
    var contadorvaron = 0;

    while (contador < 5)
    {
        contador ++;
        nota = prompt("Ingrese nota");
        sexo = prompt("Ingrese su genero");
        nota = parseInt(nota)

        acumulador = acumulador + nota;

        
        if(contador == 1)
        {
            notamin = nota;
            sexomin = sexo;
        }

        else if(nota < notamin)
        {
            notamin = nota;
            sexomin = sexo;
        }

        if(nota > 5 && sexo == "m")
        {
            contadorvaron++;
        }

           
    }

    alert(("El promedio de notas es " + acumulador / 5) + (" Esta persona es " + sexomin + "  y saco un " + notamin ) + (" La cantidad de varones que sacaron una nota mayor a 6 es " + contadorvaron));


}
