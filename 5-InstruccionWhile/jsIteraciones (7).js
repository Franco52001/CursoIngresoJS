function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	

	while(respuesta =="si") {
		
		num=prompt("Ingrese numero");
		num=parseInt(num);

		acumulador=acumulador+num;

		contador=contador+1;

		respuesta=prompt("Desea ingresar otro numero si/no");

		}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN