function mostrar()
{
	var number=0
	number=prompt("Ingrese numero");
	
	while(number < 0 || number > 10){
		number=prompt("Numero incorrecto");
	}
	document.getElementById("Numero").value=number

}//FIN DE LA FUNCIÓN