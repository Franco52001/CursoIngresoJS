function mostrar()
{
    var letra; 
    var numero;
    var contadorPar = 0;
    var contadorImpar = 0;
    var contadorCero = 0;
    var contadorPos = 0;
    var acumuladorPos = 0;
    var contadorNeg = 0;
    var acumuladorNeg = 0;
    var promedioPos;
    var maximo = 0;
    var minimo = 0;
    var contadorMN = 0;
    var letraMax;
    var letraMin;
    
    for(respuesta = true ; respuesta == true ; respuesta = confirm("Ingresar otro numero?") )
    {
        numero = prompt("Ingrese numero");
        while(numero < -100 || numero > 100)
        {
            numero = prompt("Numero no valido");
        }
        numero = parseInt(numero)

        letra = prompt("Ingrese letra");
        while (!(isNaN(letra)))
        {
            letra = prompt("Letra no valida");
        }

        contadorMN++

        if (numero > 0)
        {
            contadorPos++
            acumuladorPos = acumuladorPos + numero;          
        }else if(numero < 0)
        {
            contadorNeg++
            acumuladorNeg = acumuladorNeg + numero;
        }else 
        {
            contadorCero++
        }

        
        if(numero % 2 == 0)
        {
            contadorPar++

        }
        else{
        
            contadorImpar++
        }

        if(contadorMN == 1)
	{
	maximo = numero;
	minimo = numero;

	}

	else if(numero > maximo)
	{
        maximo = numero;
        letraMax = letra;
	}

	else if(numero < minimo)
	{
    minimo = numero;
    letraMin = letra;
	}

        promedioPos = acumuladorPos / contadorPos

    }

    document.write( "Cantidad de pares " + contadorPar + "<br>")
    document.write("Cantidad de impares " + contadorImpar + "<br>")
    document.write("Cantidad de ceros " + contadorCero + "<br>")
    document.write("Suma de negativos " + acumuladorNeg + "<br>")
    document.write("Promedio de positivos " + promedioPos + "<br>")
    document.write("Maximo " + maximo + letra + "<br>")
    document.write("Minimo " + minimo + letra + "<br>")



}

