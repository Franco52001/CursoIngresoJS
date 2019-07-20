function mostrar()
{
	var contador=0
	var acumulador=0
	var num
	
	while(contador < 5){

		num=prompt("Ingrese numero");

		num=parseInt(num);

		acumulador=acumulador+num

		contador=contador+1

	}
	
	


	document.getElementById("suma").value=acumulador
	document.getElementById("promedio").value=acumulador/5
	
}//FIN DE LA FUNCIÓN