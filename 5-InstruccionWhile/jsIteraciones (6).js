function mostrar()
{
	var contador=0
	var acumulador=0
	
	contador=prompt("Ingrese 5 numeros");

	while(contador < 5 ){
		contador++
		contador=prompt("Error,ingrese 5 numeros")
	}


	document.getElementById("suma").value=acumulador
	document.getElementById("promedio").value=acumulador/5
	
}//FIN DE LA FUNCIÓN