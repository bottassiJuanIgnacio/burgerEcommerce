const productos = [
    {id: 1, burger: "Fresh Burger", price: 1030 , stock: true},
    {id: 2,burger: "Special Bacon", price: 1330 , stock: false},
    {id: 3,burger: "Le Blue", price: 1110 , stock: true},
    {id: 4,burger: "Burger Stacker Quintuple", price: 1480 , stock: true},
    {id: 5,burger: "Doble Cheese Burger", price: 1170 , stock: true}
];
/** 
for (let i = 0; i < productos.length; i++) {
    let burger= prompt("Elija su hamburguesa");
    let total = 0;
    if (burger == productos[i].burger && productos[i].stock) {
        total++
        console.log(productos[i]);
        console.log("Productos totales "+total);
    }
    
    
}*/



let productosMayorPrecio = [];
let productosMenorPrecio = [];

let productosEnElCarrito =[];
let acumulador = ``;
for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock) {
    acumulador += `<div> ${productos[i].burger} - $${productos[i].price} <br>
    <button onclick="agregarAlCarrito(${productos[i].id})">Agregar</button> </div>
    <br>
    <button onclick="eliminarDelCarrito(${productos[i].id})">Eliminar</button> </div>`;
    }
    //Probando PUSH
    if (productos[i].price > 1300 ) {
        productosMayorPrecio.push(productos[i].burger)   
    }else{
        productosMenorPrecio.push(productos[i].burger)
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
    
    console.log(productosEnElCarrito);
    console.log(precioTotal(productosEnElCarrito));
    
}

//Comparo ID y pop
function eliminarDelCarrito(idDeProducto){
    
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    
    productosEnElCarrito.pop(productos[indiceEncontrado]);
    
    console.log(productosEnElCarrito);
    console.log(precioTotal(productosEnElCarrito));
    
}



document.write(acumulador);

//hello

//Listado de hamburguesas 
let listado = productosMayorPrecio.concat(productosMenorPrecio);
//console.log(listado);

// Quería hacerlo con un join pero se complicaba en un array de objetos y opte por el reduce #graciasStackoverflow
//console.log(productos.reduce(function (a,b) {
//    return (a.burger || a) + ", " + b.burger 
//}));

//SLICE para el paginado
let paginadoUno = listado.slice(0,3);
let paginadoDos = listado.slice(3,5);


//INDEXOF
// console.log(listado.indexOf("Le Blue"));



//PUSH
//console.log(productosMayorPrecio);
//console.log(productosMenorPrecio);









