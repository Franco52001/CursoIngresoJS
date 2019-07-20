function mostrar()
{

	var contador = 0;
	var num
	var maximo = 0;
	var minimo = 0;
	var respuesta = true ;

	while(respuesta == true)
	{
		num = prompt("Ingrese numero");
		num = parseInt(num);

		
		if(num > maximo)
		{
			maximo=num
		}

		else if(num < minimo)
		{
			minimo=num
		}

		respuesta = confirm("Ingresar otro numero?");

	
	}

	document.getElementById("maximo").value = maximo
	document.getElementById("minimo").value = minimo
	


}//FIN DE LA FUNCIÓN