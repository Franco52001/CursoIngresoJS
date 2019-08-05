function mostrar() {
    var nota;
    var sexo;
    var acumulador = 0;
    var promedio;
    var notamin = 0;
    var sexomin;
    var mensaje;
    var contadorvaron = 0;


        for (contador = 0; contador < 5 ; contador++ ) { //como en este se la cantidad de veces que debo pedir notas uso for
        
        
        nota = prompt("Ingrese nota"); //se valida un dato justo despues de que se pide
        while ( isNaN(nota) || nota < 0 || nota > 10) //while(!(nota >=0 && nota <=10)) tambien es una forma valida de escribirlo {
            nota = prompt("Nota no valida, ingrese nuevamente");
        
        nota = parseInt(nota)

        sexo = prompt("Ingrese su genero");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Genero no valido, ingrese nuevamente");
        }
        acumulador = acumulador + nota;   
                                            //Estas dos ****** no funcionaron porque los puse afuera del for
        if (nota > 5 && sexo == "m") {  //este no funciona con || 
            contadorvaron++;
        }
        if (contador == 1 || notamin < nota)  { //esta ***** no andaba porque soy tarado y no valide el notamin
            notamin = nota;                        //no se porque funciono afuera del for pero aca esta mejor
            sexomin = sexo;
        }
    }
        alert(("El promedio de notas es " + acumulador / 5) + (" Esta persona es " + sexomin + "  y saco un " + notamin) + (" La cantidad de varones que sacaron una nota mayor a 6 es " + contadorvaron));
    }

    



