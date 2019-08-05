
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese ancho");
    while(isNaN(ancho))
    {
        ancho = prompt("No es un numero valido")
    }
   ancho = parseInt(ancho)

   largo = prompt("Ingrese largo");
   while(isNaN(largo))
   {
       largo = prompt("No es un numero valido");
   }

   perimetro = 2*ancho + 2*largo
   
   if(isNaN(perimetro))
   {
    
        alert("No es un perimetro valido");
    }
    else{
   alert(perimetro);
   }
}