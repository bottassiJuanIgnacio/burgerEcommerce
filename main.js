const productos = [
    {id: 1, burger: "Fresh Burger", price: 1030 , stock: true},
    {id: 2,burger: "Special Bacon", price: 1330 , stock: false},
    {id: 3,burger: "Le Blue", price: 1110 , stock: true},
    {id: 4,burger: "Burger Stacker Quintuple", price: 1480 , stock: true},
    {id: 5,burger: "Doble Cheese Burger", price: 1170 , stock: true}
];

let productosMayorPrecio = [];
let productosMenorPrecio = [];
let listadoCarrito =[];
let productosEnElCarrito =[];
let acumulador = ``;
let padreCarrito = document.createElement("span");

// for (let i = 0; i < productos.length; i++) {
//     if (productos[i].stock) {
//     acumulador += `<div> 
//     <br>
//     ${productos[i].burger} - $${productos[i].price} <br>
//     <button onclick="agregarAlCarrito(${productos[i].id})">Agregar</button> </div>
//     <br>
//     <button onclick="eliminarDelCarrito(${productos[i].id})">Eliminar</button> </div>`;
//     }

    
// };

for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock) {
        acumulador += `<div class="container px-4 px-lg-5 mt-5">
        <div class="row mb-5">
         <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${productos[i].burger}</h5>
                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$20.00</span>
                    $${productos[i].price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <div onclick="agregarAlCarrito(${productos[i].id})"><a class="btn btn-outline-dark mt-auto" >Agregar al carrito</a></div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <div onclick="eliminarDelCarrito(${productos[i].id})"><a class="btn btn-outline-dark mt-auto" >Eliminar del carrito</a></div>
            </div>
        </div>
        </div>
        </div>`;
    }
}

// Reduce para saber el precio total en el carrito
function precioTotal(productosEnElCarrito) {
    return productosEnElCarrito.reduce((acumuladorTotal,valorActual)=> acumuladorTotal + valorActual.price, 0) ;
    
}

//Comparo ID y push
function agregarAlCarrito(idDeProducto){
    
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    productosEnElCarrito.push(productos[indiceEncontrado]);
    listadoCarrito.push(productos[indiceEncontrado].burger);

    let total = precioTotal(productosEnElCarrito);
    
    padreCarrito.innerHTML = `<h2>Precio del carrito : ${total}</h2>`;
    
    alert("Usted tiene "+ listadoCarrito.length + " producto/s en el carrito actual: " + listadoCarrito);
     
    //console.log(productosEnElCarrito);
    //console.log(precioTotal(productosEnElCarrito));
    
}

/*TODO: Al eliminar: 1) elimina todo sin verificar si es ese el producto que se habia agregado anteriormente.
* 2) Siempre se elimina el ultimo producto agregado pero si el cliente quiere agregar muchos productos y 
* borrar uno en especifico no puede. 
*/
//Comparo ID y pop
function eliminarDelCarrito(idDeProducto){
    
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    console.log(indiceEncontrado);
    productosEnElCarrito.pop(productos[indiceEncontrado]);
    listadoCarrito.pop(productos[indiceEncontrado].burger);
    
    //Funcion total precio del carrito
    let total = precioTotal(productosEnElCarrito);
    
    padreCarrito.innerHTML = `<h2>Precio del carrito : ${total}</h2>`;
    
    alert("Usted tiene "+ listadoCarrito.length + " producto/s en el carrito actual: " + listadoCarrito);
        
    //console.log(productosEnElCarrito);
    //console.log(total);
    
}



document.body.append(padreCarrito);
document.getElementById("cardProduct").innerHTML = acumulador;



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



// const cartStorage=localStorage.getItem('cart');
// const cart=JSON.parse(cartStorage)??[];

// const cart=cartStorage;
// document.write('Tenes en el carrito:'+cart.length);

// document.getElementById("producto").onclick=()=>{
//     agregarAlCarrito({id:1,title:'Zapas',price:9000})
// }

// const agregarAlCarrito=(producto)=>{
//     cart.push(producto.id)
//     const cartJSON=JSON.stringify(cart)
//     localStorage.setItem('cart',cart JSON);
//     
//     console.log(cart);
// }




