function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var num;
	

	while(respuesta == true) {
		
		num=prompt("Ingrese numero");
		num=parseInt(num);

		acumulador=acumulador+num;

		contador=contador+1;

		respuesta = confirm("Desea ingresar otro numero?");

		}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN