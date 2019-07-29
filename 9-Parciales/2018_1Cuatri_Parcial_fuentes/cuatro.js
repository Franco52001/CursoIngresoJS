function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    var suma;

    
    numeroUno = prompt("Ingrese primer numero");
    numeroDos = prompt("Ingrese segundo numero");

    if(numeroUno == numeroDos)
    {
        mensaje= numeroUno + numeroDos;
    }

    numeroUno = parseInt(numeroUno)
    numeroDos = parseInt(numeroDos)

    if(numeroUno > numeroDos)
    {
        resultado =  numeroUno - numeroDos;
        mensaje = resultado;
        if(resultado > 10)
        {
            mensaje = "La suma es " + resultado + " y es mayor a 10"
        }
        
        
    }

    else if (numeroUno < numeroDos)
    {
        resultado = numeroUno + numeroDos;
        mensaje = resultado;
    }

    alert(mensaje);
}
