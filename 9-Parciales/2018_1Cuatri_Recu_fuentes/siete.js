function mostrar()
{
    var nota;
    var sexo;
    var acumulador = 0
    var sexoMin;
    var notaMin;
    var contadorVaron = 0;
    
    for(contador = 0 ; contador < 5 ; contador++ )
    {
        nota = prompt("Ingrese nota");
        while(isNaN(nota) || nota < 0 || nota > 10)
        {
            nota = prompt("No es una nota valida, ingrese nuevamente");
        }
        nota = parseInt(nota)

        sexo = prompt("Ingrese su sexo");
        while(sexo !="m" && sexo !="f" && sexo !="M" && sexo != "F")
        {
            sexo = prompt("No es un sexo valido, ingrese nuevamente")
        }

        acumulador = acumulador + nota
        
        if(contador == 0) // aca se debe poner contador == 0 si pongo == 1 no me lo toma
        {
            notaMin = nota;
            sexoMin = sexo;

        }
        if(nota < notaMin)
        {
            notaMin = nota;
            sexoMin = sexo;
        }

        if(nota > 5 && sexo == "m" || sexo == "M"){
            contadorVaron++;
        }
    }
    alert("El promedio total de las notas es " + acumulador/5 + " Esta persona saco " + notaMin + " y es " + sexoMin + " y la cantidad de varones con nota mayor a 6 es " + contadorVaron)

}
