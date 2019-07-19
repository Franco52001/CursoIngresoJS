function mostrar() {
    var planeta
    var mensaje

    planeta = prompt("Ingrese planeta");

    switch (planeta) {
        case "tierra":
            mensaje = "Acá vivimos"
            break;
        case "mercurio":
        case "venus":
            mensaje = "Acá hace mas calor"
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "Acá hace mas frio"
            break;
    }
    alert(mensaje);


}
