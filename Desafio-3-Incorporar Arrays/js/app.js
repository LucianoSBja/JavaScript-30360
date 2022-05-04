/*  const saludoUsuario = () => {
     let nombre = prompt("Hola! como te llamas?");
     alert(`Hola ${nombre} como estas?`)
     let pregunta = prompt("Quieres ver una pelicula?\nY/N");
     if (pregunta === "y" || "Y") {
         alert(`¡Genial! Mira nuestro repertorio.. \n`);
     } else {
         alert(`Nos vemos la proxima!!`);
     }
 } */

class Peliculas {

    constructor(titulo, genero, alquilar) {

        this.titulo = titulo;
        this.genero = genero;
        this.alquilar = alquilar;

    }

    obtenerDatos() {

        return `Titulo: ${this.titulo}.\nGenero: ${this.genero}.\nAlquilar: ${this.alquilar}.`;

    }
}

class Carrito {

    constructor() {

        this.peliculassSeleccionados = [];

    }

    agregarPeliculas(nuevoPeliculas) {
        this.peliculassSeleccionados.push(nuevoPeliculas);
    }

    eliminarPeliculas(peliculasAEliminar) {

        let index = this.peliculassSeleccionados.indexOf(peliculasAEliminar);

        this.peliculassSeleccionados.splice(index, 1);
    }

    obtenerPeliculassSeleccionados() {

        let auxPeliculassSeleccionados = [];

        for (let i = 0; i < this.peliculassSeleccionados.length; i++) {

            auxPeliculassSeleccionados.push(`Peliculas: ${i + 1}.\n` + this.peliculassSeleccionados[i].obtenerDatos() + "\n");

        }

        auxPeliculassSeleccionados.push(`\nIngrese 0 si no quiere eliminar ningun Peliculas.\n`);

        return auxPeliculassSeleccionados.join("\n");

    }
}

class Catalogo {

    constructor(peliculas, stock) {
        this.peliculas = peliculas;
        this.stock = stock;
    }

    agregarStock(cantidad) {
        this.stock += cantidad;
    }

    reducirStock(cantidad) {
        this.stock -= cantidad;
    }

    obtenerDatos() {

        return this.peliculas.obtenerDatos() + `\nStock: ${this.stock}.`;

    }

}

class Cine {

    constructor() {

        this.catalogo = [];

        this.carrito = new Carrito();

    }

    agregarCatalogoPeliculas(catalogo) {
        this.catalogo.push(catalogo);
    }

    obtenerCatalogo() {

        let auxCatalogo = [];

        for (let i = 0; i < this.catalogo.length; i++) {

            if (this.catalogo[i].stock > 0)
                auxCatalogo.push(`Peliculas: ${i + 1}.\n` + this.catalogo[i].obtenerDatos() + "\n");

        }

        auxCatalogo.push(`\nIngrese 0 si no quiere agregar ningun Peliculas.\n`);

        return auxCatalogo.join("\n");
    }

    obtenerIndiceCatalogo(catalogo) {
        return this.catalogo.find(catalogo);
    }

}



/* ----------------------------------------------------------------------- */

function cargaPreviaDatos() {
    const peliculas1 = new Peliculas("Vengadores: Endgame", "Accion", 900);
    const peliculas2 = new Peliculas("Avatar", "Ciencia ficción", 700);
    const peliculas3 = new Peliculas("Star Wars: Episodio VII", "Aventura", 800);
    const peliculas4 = new Peliculas("Jurassic World", "Thriller", 500);
    const peliculas5 = new Peliculas("Titanic", "Cine romántico", 400);

    const cine = new Cine();

    cine.agregarCatalogoPeliculas(new Catalogo(peliculas1, 10));
    cine.agregarCatalogoPeliculas(new Catalogo(peliculas2, 5));
    cine.agregarCatalogoPeliculas(new Catalogo(peliculas3, 15));
    cine.agregarCatalogoPeliculas(new Catalogo(peliculas4, 23));
    cine.agregarCatalogoPeliculas(new Catalogo(peliculas5, 0));

    return cine;
}




const cine = cargaPreviaDatos();
prompt(cine.obtenerCatalogo());