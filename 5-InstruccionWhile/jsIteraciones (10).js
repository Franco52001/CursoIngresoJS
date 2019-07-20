function mostrar() {

	var contador = 0;
	var contadorP = 0;
	var contadorN = 0;
	var contadorCeros = 0;
	var contadorPar = 0;
	var acumuladorP = 0;
	var acumuladorN = 0;
	var promedioP;
	var promedioN;
	var diferencia;

	var num
	//declarar contadores y variables 

	var respuesta = true;

	while (respuesta == true) {
		num = prompt("Ingrese un numero");
		num = parseInt(num);//aca puse numero y por eso no me funcionaba el confirm,los errores evitan que funcione

		if (num > 0) 
		{
			contadorP++; //o positivo=positivo+1
			acumuladorP = acumuladorP + num; //o acumuladorP += num
			
		}
		
		else if (num < 0) 
		{
			contadorN++;
			acumuladorN = acumuladorN + num;
		
		}
		else
		{
			contadorCeros++;
		}
		
		if(num%2==0)
		{
			contadorPar++
		}
		
		
		respuesta = confirm("Desea ingresar otro numero?");


	}
	if(contadorP != 0)
	{
	promedioP=acumuladorP/contadorP;
	}
	else 
	{
		promedioP = "No se ingresaron numeros positivos"
	}
	if(contadorN != 0)
	{
	promedioN=acumuladorN/contadorN;
	}
	else
	{
		promedioN = "No se ingresaron numeros negativos"
	}

	diferencia = acumuladorP + acumuladorN

	document.write("1. Suma de positivos: " + acumuladorP + "<br>"); 
	document.write("2. Suma de negativos: " + acumuladorN + "<br>");
	document.write("3. Positivos: " + contadorP + "<br>");
	document.write("4. Negativos: " + contadorN + "<br>");
	document.write("5. Ceros: " + contadorCeros + "<br>");
	document.write("6. Pares: " + contadorPar + "<br>");
	document.write("7. Promedio de positivos : " + promedioP + "<br>");
	document.write("8. Promedio de negativos : " + promedioN + "<br>");
	document.write("9. Diferencia : " + diferencia + "<br>");


	//me aparecian numeros "aleatorios" por que no use br (salto de linea)








}//FIN DE LA FUNCIÓN