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

        this.productosSeleccionados = [];

    }

    agregarProducto(nuevoProducto) {
        this.productosSeleccionados.push(nuevoProducto);
    }

    eliminarProducto(productoAEliminar) {

        let index = this.productosSeleccionados.indexOf(productoAEliminar);

        this.productosSeleccionados.splice(index, 1);
    }

    obtenerProductosSeleccionados() {

        let auxProductosSeleccionados = [];

        for (let i = 0; i < this.productosSeleccionados.length; i++) {

            auxProductosSeleccionados.push(`Producto: ${i + 1}.\n` + this.productosSeleccionados[i].obtenerDatos() + "\n");
        }

        auxProductosSeleccionados.push(`\nIngrese 0 si no quiere eliminar ningun producto.\n`);

        return auxProductosSeleccionados.join("\n");

    }
}

class Catalogo {

    constructor(producto, stock) {
        this.producto = producto;
        this.stock = stock;
    }

    agregarStock(cantidad) {
        this.stock += cantidad;
    }

    reducirStock(cantidad) {
        // this.stock = this.stock - cantidad; Es lo mismo que la expresión de abajo.
        this.stock -= cantidad;
    }

    obtenerDatos() {

        return this.producto.obtenerDatos() + `\nStock: ${this.stock}.`;

    }

}
class Cine {

    constructor() {

        this.catalogo = [];

        this.carrito = new Carrito();

    }

    agregarCatalogoProducto(catalogo) {
        this.catalogo.push(catalogo);
    }

    obtenerCatalogo() {

        let auxCatalogo = [];

        for (let i = 0; i < this.catalogo.length; i++) {

            if (this.catalogo[i].stock > 0)
                auxCatalogo.push(`Producto: ${i + 1}.\n` + this.catalogo[i].obtenerDatos() + "\n");

        }

        auxCatalogo.push(`\nIngrese 0 si no quiere agregar ningun producto.\n`);

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
    const peliculas6 = new Peliculas("Titanic", "Cine romántico", 400);
    const peliculas7 = new Peliculas("Titanic", "Cine romántico", 400);
    const peliculas8 = new Peliculas("Titanic", "Cine romántico", 400);

    const cine = new Cine();

    cine.agregarCatalogoProducto(new Catalogo(peliculas1, 10));
    cine.agregarCatalogoProducto(new Catalogo(peliculas2, 5));
    cine.agregarCatalogoProducto(new Catalogo(peliculas3, 15));
    cine.agregarCatalogoProducto(new Catalogo(peliculas4, 23));
    cine.agregarCatalogoProducto(new Catalogo(peliculas5, 0));
    cine.agregarCatalogoProducto(new Catalogo(peliculas6, 0));
    cine.agregarCatalogoProducto(new Catalogo(peliculas7, 0));
    cine.agregarCatalogoProducto(new Catalogo(peliculas8, 0));

    return cine;
}
const cine = cargaPreviaDatos();

const mensajeBienvenida = "--- Bienvenido al cine ---\n" +
    "1 - Agregar Pelicula al carrito.\n" +
    "2 - Eliminar Pelicula del carrito.\n" +
    "3 - Finalizar compra.\n" +
    "\n0 - Salir del programa.\n";


const validarRango = (valor) => {
    return (minimo, maximo) => minimo <= valor && maximo >= valor
}

const validarOpcionIngresada = (minimo, maximo, mensaje) => {
    let opcion;
    let auxFuncion;
    do {
        opcion = parseInt(prompt(mensaje));
        auxFuncion = validarRango(opcion);
    } while (!auxFuncion(minimo, maximo));
    return opcion;
}

function agregarProductoCarrito() {
    let cantidad = 0;
    for (const aux of cine.catalogo) {
        if (aux.stock > 0)
            cantidad++;
    }
    let producto = validarOpcionIngresada(0, cantidad, cine.obtenerCatalogo());
    if (!Number.isNaN(producto)) {
        if (producto != 0) {
            producto--;
            let productoSeleccionado = cine.catalogo[producto].producto;
            cine.carrito.agregarProducto(productoSeleccionado);
            cine.catalogo[producto].reducirStock(1);
        }
    }

}

function eliminarProductoCarrito() {
    let producto = validarOpcionIngresada(0, cine.carrito.productosSeleccionados.length, cine.carrito.obtenerProductosSeleccionados());
    if (!Number.isNaN(producto)) {
        if (producto != 0) {
            producto--;
            let productoSeleccionado = cine.carrito.productosSeleccionados[producto];
            cine.catalogo.forEach((element) => {
                if (element.producto == productoSeleccionado) {
                    element.agregarStock(1);
                }
            });
            cine.carrito.eliminarProducto(productoSeleccionado);
        }
    }
}



function finalizarCompra() {
    let total = cine.carrito.productosSeleccionados.reduce((acumulador,elemento) => acumulador + elemento.alquilar,0);
    alert(`Tu total de alquiler es:\n ${total}`);
}

function ejecutarOpcion(opcion) {
    if (opcion == 0) {
        return true;
    } else if (opcion == 1) {
        agregarProductoCarrito();
    } else if (opcion == 2) {
        eliminarProductoCarrito();
    } else if (opcion == 3) {
        finalizarCompra();
    } else {
        return false;
    }
}

let terminarPrograma = false;
while (!terminarPrograma) {
    let opcion = validarOpcionIngresada(0, 3, mensajeBienvenida);
    terminarPrograma = ejecutarOpcion(opcion);
}
