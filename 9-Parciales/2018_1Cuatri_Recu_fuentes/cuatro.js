function mostrar()
{
    var numeroUno;
    var numeroDos;
    var mensaje;
    var suma;

    numeroUno = prompt("Ingrese primer numero");
    while(isNaN(numeroUno))
    {
        numeroUno = prompt("Primer numero no valido");
    }
    
    numeroDos = prompt("Ingrese segundo numero");
    while(isNaN(numeroDos))
    {
        numeroDos = prompt("Segundo numero no valido");
    }
    
    if(numeroUno == numeroDos)
    {
        mensaje = numeroUno + numeroDos;
    }
    numeroUno = parseInt(numeroUno) 
    numeroDos = parseInt(numeroDos)   
    if(numeroUno > numeroDos)
    {
        mensaje = numeroUno / numeroDos
    }if(numeroUno < numeroDos)
    {
        suma = numeroUno + numeroDos
        mensaje = suma
    }if(suma < 50)
    {
        mensaje = "La suma es " + suma + " y es menor a 50"
    }
    alert(mensaje);
}   

