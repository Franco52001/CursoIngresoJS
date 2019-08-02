function mostrar() {

    var num = prompt("Ingrese numero");
    var contador = 0

    for (numm = 0 ; ; numm++) {
        
        if (numm % 2 != 0)
        {
        continue;
        }

        contador++
        
        alert(contador);
            
        if (numm == num) {
            break;
            
        }
        
    }



}//FIN DE LA FUNCIÓN