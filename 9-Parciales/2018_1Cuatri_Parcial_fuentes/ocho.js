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
    var respuesta = true;
    
    while(respuesta == true)//como en este no se la cantidad de veces que se van a ingresar datos uso while
    {
        numero = prompt("Ingrese numero");
        while(numero < -100 || numero > 100 || (isNaN(numero)))//con && no funciona
        {
            numero = prompt("Numero no valido");
        }
        numero = parseInt(numero)

        letra = prompt("Ingrese letra");
         while (letra.length > 1 || (!(isNaN(letra)))) //con && no funciona
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
    letraMax = letra;
    letraMin = letra;

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
        respuesta = confirm("Ingresar otro numero?")
    }

    document.write( "Cantidad de pares " + contadorPar + "<br>")
    document.write("Cantidad de impares " + contadorImpar + "<br>")
    document.write("Cantidad de ceros " + contadorCero + "<br>")
    document.write("Suma de negativos " + acumuladorNeg + "<br>")
    document.write("Promedio de positivos " + promedioPos + "<br>")
    document.write("Maximo " + maximo + letraMax + "<br>")
    document.write("Minimo " + minimo + letraMin + "<br>")



}

