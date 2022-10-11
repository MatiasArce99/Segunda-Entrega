class Juego{
    
    constructor(titulo,consola,genero,precio){
        this.titulo = titulo;
        this.consola = consola;
        this.genero = genero;
        this.precio = parseFloat(precio);
    }
}

const juegos = [];

let continuar = true;

while(continuar){
    
    let ingreso = prompt("Ingrese datos del juego. Título, consola, género, precio. 1 - Continuar 0 - Finalizar");
    
    if(ingreso == 0){
        continuar = false;
        break;
    }

    let titulo = prompt("Nombre del Juego: ");
    let consola = prompt("Consola: ");
    let genero = prompt("Género: ");
    let precio = prompt("Precio: ");   

    juegos.push(new Juego(titulo,consola,genero,precio));
}

const busqueda = juegos.filter((juego) => juego.precio > 5000 && juego.precio < 10000);
const busqueda2 = juegos.filter((juego) => juego.precio > 20000);

for (const juego of juegos) {
    alert("Título: "+juego.titulo+"\nConsola: "+juego.consola+"\nGénero: "+juego.genero+"\nPrecio: $"+juego.precio);
}

if(busqueda.length == 0){
    alert("Sin juegos en oferta");
}else{
    const ofertas = busqueda.map((juego) => juego.titulo);
    const estrenos = busqueda2.map((juego) => juego.titulo);
    alert("Juegos en Oferta:\n- "+ofertas.join("\n-"));
    alert("Juegos Nuevos:\n- "+estrenos.join("\n-"));
}

