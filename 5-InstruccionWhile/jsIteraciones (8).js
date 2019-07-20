function mostrar() {

	var contadorP = 0;
	var contadorN = 0;
	var acumuladorP = 0;
	var acumuladorN = 1;
	var num
	var respuesta = true;
	while (respuesta == true) {

		num = prompt("Ingrese numeros");
		
		num = parseInt(num);
		
		if(num > 0)
		{

		contadorP++
		acumuladorP = acumuladorP + num

		}

		 else if (num < 0)
		{

		contadorN++
		acumuladorN = acumuladorN * num;

		}

		respuesta = confirm("Ingresar otro numero?");
	}




	document.getElementById('suma').value = acumuladorP;
	document.getElementById('producto').value = acumuladorN;

}//FIN DE LA FUNCIÓN