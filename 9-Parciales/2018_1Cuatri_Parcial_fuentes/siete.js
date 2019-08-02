function mostrar() {
    var nota;
    var sexo;
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var notamin;
    var sexomin;
    var mensaje;
    var contadorvaron = 0;


    while (contador < 5) {
        contador++;
        
        nota = prompt("Ingrese nota"); //se valida un dato justo despues de que se pide
        while ( isNaN(nota) || nota < 0 || nota > 10) {
            nota = prompt("Nota no valida, ingrese nuevamente");
        }
        nota = parseInt(nota)

        sexo = prompt("Ingrese su genero");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Genero no valido, ingrese nuevamente");
        }

        acumulador = acumulador + nota;


        if (contador == 1 || notamin < nota) {
            notamin = nota;
            sexomin = sexo;
        }

        
        if (nota > 5 && sexo == "m") {
            contadorvaron++;
        }


    }

    alert(("El promedio de notas es " + acumulador / 5) + (" Esta persona es " + sexomin + "  y saco un " + notamin) + (" La cantidad de varones que sacaron una nota mayor a 6 es " + contadorvaron));


}
