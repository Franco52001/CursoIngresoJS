function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var num
	var respuesta = 'si';
	while (respuesta == "si") {

		num = prompt("Ingrese numeros");
		
		num = parseInt(num);

		contador = contador + 1

		respuesta = prompt("Ingresar otro numero? si/no");
	}




	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN