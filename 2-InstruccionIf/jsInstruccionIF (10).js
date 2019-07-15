function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var number

		number=Math.floor((Math.random()*10)+1);

		if(number>=9){
			alert(number + " Excelente");
			
			}
			 else if(number<4)
				 {
				alert(number + " Vamos,la proxima se puede");
			}
			 else 
			 	{
				alert(number + " Aprobado");
			}

}//FIN DE LA FUNCIÓN