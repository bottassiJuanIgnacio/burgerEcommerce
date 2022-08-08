

let productosMayorPrecio = [];
let productosMenorPrecio = [];
let listadoCarrito =[];
let productosEnElCarrito =[];
let acumulador = ``;
let padreCarrito = document.createElement("span");



async function obtenerProductos(){
    const productos = await fetch("./productos.json")
    .then(res => res.json())
    .then(data =>  data.burgers);
    return productos;
}

async function listaDeProductos(){
    const productos =  await obtenerProductos();
    mostrarProdcutos(productos);
}

function mostrarProdcutos(productos) {
    const listado = document.getElementById("cardProduct");
    productos.forEach((producto )=>{
        const {name, description,id, price, image} = producto;
        const acumulador = `<div class="container px-4 px-lg-5 mt-5" style="width: 30%">
        <div class="row mb-5">
         <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="${image}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${name}</h5>
                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>
                    <h6 class="fw-bolder">${description}</h6>
                    <!-- Product price-->
                    <span class="text-muted ">$${price}</span>
                </div>
            </div>
            <!-- Product actions-->
            <div  class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <div id="btn-add" onclick="agregarAlCarrito(${id})"><a class="btn btn-outline-dark mt-auto" >Agregar al carrito</a></div>
            </div>
            <div  class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <div id="btn-delete" onclick="eliminarDelCarrito(${id})"><a class="btn btn-outline-dark mt-auto" >Eliminar del carrito</a></div>
            </div>
        </div>
        </div>
        </div>`;
        listado.innerHTML += acumulador;
    });
}

listaDeProductos().then();






// Reduce para saber el precio total en el carrito
function precioTotal(productosEnElCarrito) {
    return productosEnElCarrito.reduce((acumuladorTotal,valorActual)=> acumuladorTotal + valorActual.price, 0) ;
    
}

const cartStorage=localStorage.getItem('carrito').split(",");
console.log(cartStorage);

const carrito = JSON.parse(cartStorage) ??  [];


async function agregarAlCarrito(idDeProducto){
    const productos =  await obtenerProductos();
    //Comparo ID y push
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    productosEnElCarrito.push(productos[indiceEncontrado]);
    const carritoJSON = JSON.stringify(productosEnElCarrito);
    localStorage.setItem("carrito", carritoJSON);
    

    listadoCarrito.push(productos[indiceEncontrado].burger);

    let total = precioTotal(productosEnElCarrito);
    
    //Sweetalert2 del agregarAlCarrito
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has agregado una hamburguesa al carrito',
        showConfirmButton: false,
        timer: 1500
    })


    document.getElementById("cart").innerHTML =  `<span> Carrito:${cartStorage.length} - $${total}</span>`;
    
    //alert("Usted tiene "+ listadoCarrito.length + " producto/s en el carrito actual: " + listadoCarrito);
    
}




/*TODO: Al eliminar: 1) elimina todo sin verificar si es ese el producto que se habia agregado anteriormente.
* 2) Siempre se elimina el ultimo producto agregado pero si el cliente quiere agregar muchos productos y 
* borrar uno en especifico no puede. 
*/
async function eliminarDelCarrito(idDeProducto){
    const productos =  await obtenerProductos();
    //Comparo ID y pop
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    //Sweetalert2 del eliminarDelCarrito
    if(carrito != []){
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás volver atrás",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrada!',
                    'La hamburguesa a sido borrada correctamente!',
                    'success'
                    )
                }
                productosEnElCarrito.pop(productos[indiceEncontrado]);
                // Paso de obj a txt para mandarlo al localStorage
                const carritoJSON = JSON.stringify(productosEnElCarrito);
                localStorage.setItem("carrito", carritoJSON);
                let total = precioTotal(productosEnElCarrito);
                document.getElementById("cart").innerHTML =  `<span> Carrito:${cartStorage.length} - $${total}</span>`;
          })

    }

    listadoCarrito.pop(productos[indiceEncontrado].burger);
    
    //Funcion total precio del carrito
    

    

    //alert("Usted tiene "+ listadoCarrito.length + " producto/s en el carrito actual: " + listadoCarrito);
        
}



document.body.append(padreCarrito);
//document.getElementById("cardProduct").innerHTML = acumulador;

// const btn = document.getElementById("#btn-add");
// let btnAgregar = btn.addEventListener("click",()=>{
//     console.log("agregar producto");
    
// })
// console.log(btnAgregar);


//Listado de hamburguesas 
let listado = productosMayorPrecio.concat(productosMenorPrecio);
//console.log(listado);


//SLICE para el paginado
let paginadoUno = listado.slice(0,3);
let paginadoDos = listado.slice(3,5);


//INDEXOF
// console.log(listado.indexOf("Le Blue"));



// PUSH
// console.log(productosMayorPrecio);
// console.log(productosMenorPrecio);








