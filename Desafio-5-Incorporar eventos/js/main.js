const contenedor = document.getElementById("productos");
const tablaCarrito = document.getElementById("tablaCarrito");
/* const storage = localStorage.getItem('carrito'); */
const carrito = [];

const Peliculas = [{
    id: 1,
    nombre: "Vengadores: Endgame",
    categoria: "Accion",
    alquiler: 1000,
    imagen: "https://images-na.ssl-images-amazon.com/images/I/81MQNJF9XvL.jpg"
  },
  {
    id: 2,
    nombre: "Avatar",
    categoria: "Ciencia ficción",
    alquiler: 800,
    imagen: "https://i.pinimg.com/originals/4d/d2/3b/4dd23b8120032cce4e9826f3cbffeafc.jpg"
  },
  {
    id: 3,
    nombre: "Star Wars: Episodio IX",
    categoria: "Ciencia ficción",
    alquiler: 700,
    imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-episode-vii-the-force-awakens-1541413640.png?crop=1xw:1xh;center,top&resize=480:*"
  },
  {
    id: 4,
    nombre: "Jurassic World",
    categoria: "Aventura",
    alquiler: 600,
    imagen: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JurassicWorldEvolution2_FrontierDevelopments_S6_1200x1600-56055d1e93c502852ccc0f9578094e5d"
  },
  {
    id: 5,
    nombre: "El secreto de sus ojos",
    categoria: "Drama",
    alquiler: 500,
    imagen: "https://pics.filmaffinity.com/El_secreto_de_sus_ojos-862971973-large.jpg"
  },
  {
    id: 6,
    nombre: "El Clan",
    categoria: "Drama",
    alquiler: 500,
    imagen: "https://pics.filmaffinity.com/El_clan-262802426-large.jpg"
  },
  {
    id: 7,
    nombre: "Culpable",
    categoria: "Suspenso",
    alquiler: 700,
    imagen: "https://pics.filmaffinity.com/Culpable-128991806-large.jpg"
  },
  {
    id: 8,
    nombre: "Spider-Man: No Way Home",
    categoria: "Accion",
    alquiler: 900,
    imagen: "https://pics.filmaffinity.com/Spider_Man_No_Way_Home-164964839-large.jpg"
  }
];

const getCard = (item) => {
  return (`
  <div class="">
      <div class="card h-100 text-center border bg-light" style="width: 18rem;">
          <img src="${item.imagen}" class="card-img-top img-fluid" alt="${item.nombre}">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-title">Categoria: ${item.categoria}</p>
            <p class="card-text">$${item.alquiler}</p>
            <a href="#" onclick=agregarCarrito(${item.id})  class="btn btn-primary">Agregar al Carrito</a>
          </div>
      </div>
  </div>
  `);
};

const getRow = (item) => {
  return (`
  <tr>
      <th scope="row">${item.id}</th>
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>${item.alquiler}</td>
      <td><img src="${item.imagen}" class="img-thumbnail"/></td>
  </tr>

  `)
}

const cargarProductos = (datos, nodo, esTabla) => {
  let acumulador = "";
  datos.forEach((el) => {
    acumulador += esTabla ? getRow(el) : getCard(el);
  })
  nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
  const seleccion = Peliculas.find(item => item.id === id);

  carrito.push({
    id: seleccion.id,
    nombre: seleccion.nombre,
    cantidad: 1,
    imagen: seleccion.imagen,
    alquiler: seleccion.alquiler
  })

  cargarProductos(carrito, tablaCarrito, true)

}

cargarProductos(Peliculas, contenedor, false);