/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var num1
var porcentaje
var final

num1=document.getElementById("sueldo").value;
num1=parseInt(num1);

porcentaje=(num1*10/100);
final=(num1+porcentaje);

document.getElementById("resultado").value=final;
	
}
