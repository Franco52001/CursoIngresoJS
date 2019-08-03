function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var temperaturaPar = 0;
    var pesoMax = 0;
    var pesoMin = 0;
    var marcaMax;
    var contadorCero = 0;
    var promedioPeso = 0;
    var contador = 0;
    var acumuladorPeso = 0;

    for(respuesta = true; respuesta == true ; respuesta = confirm("Desea continuar?"))
    {
        marca = prompt("Ingrese la marca del producto");
        while (!(isNaN(marca)))
        {
            marca = prompt("Marca no valida, ingrese nuevamente");
        }

        peso = prompt("Ingrese el peso del producto");
        while( (isNaN(peso)) || peso < 1 || peso > 100) //isNaN se valida primero
        {
            peso = prompt("Peso no valido, ingrese nuevamente");
        }
        peso = parseInt(peso)
        contador++
        acumuladorPeso = peso + acumuladorPeso
        promedioPeso = acumuladorPeso / contador

        
        temperatura = prompt("Ingrese la temperatura del producto");
        while( (isNaN(temperatura)) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Temperatura no valida, ingrese nuevamente");
        }


        if(contador == 1)
        {
            pesoMax = peso;
            pesoMin = peso;
            marcaMax = marca

        }else if (peso > pesoMax)
        {
            pesoMax = peso
            marcaMax = marca
            
        }else if(peso < pesoMin)
        {
            pesoMin = peso
        }

        if(temperatura % 2 == 0)
        {
            temperaturaPar++
        }
         if(temperatura == 0)
        {
            contadorCero++
        }
        
    }


    document.write("El peso minimo es " + pesoMin + "<br>")
    document.write("El peso maximo es " + pesoMax + "<br>")
    document.write("La marca con mayor peso es " + marcaMax + "<br>")
    document.write("La cantidad de temperaturas pares es " + temperaturaPar + "<br>")
    document.write("La cantidad de productos que se conservan a menos de 0 grados es " + contadorCero + "<br>")
    document.write("El promedio del peso de todos los productos es " + promedioPeso + "<br>")
}
