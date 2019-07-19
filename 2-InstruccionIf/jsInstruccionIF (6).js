function mostrar()
{
//tomo la edad  
var edad

edad=document.getElementById("edad").value;

if(edad<13){

alert("No es un adolescente");
}
if(edad >= 13 && edad <= 17)
{ 
alert("Es un adolescente");
}
if(edad>=18){

alert("Mayor de edad");
}     



}//FIN DE LA FUNCIÓN