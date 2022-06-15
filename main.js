// Modificar el titulo
let titulo_tienda=document.getElementById("tienda")
let nombre=prompt("¡Hola! \n Por favor ingresa el nombre de tu Minimarket:")
titulo_tienda.innerText="Minimarket "+nombre+"!"

// Modificar el slogan
let frase=document.getElementById("slogan")
let frase_chory=prompt("Ahora, por favor ingresa el slogan de tu tienda")
frase.innerText=frase_chory

// Agregar productos
// 1. Crear un objeto
class Producto{
    constructor(nombre, precio, stock){
        this.nombre=nombre,
        this.precio=Number(precio)
        this.stock=stock
    }
}
// 2. Crear un array vacío que contenga los objetos
const array_productos=[]
// 3. Pedir al usuario que ingrese los productos, el precio y el stock
let producto_1=prompt("Ingresa el nombre del producto 1")
let precio_1=prompt("Ingresa el precio del producto 1")
let stock_1=prompt("Ingresa el stock del producto 1")
let producto_2=prompt("Ingresa el nombre del producto 2")
let precio_2=prompt("Ingresa el precio del producto 2")
let stock_2=prompt("Ingresa el stock del producto 2")
let producto_3=prompt("Ingresa el nombre del producto 3")
let precio_3=prompt("Ingresa el precio del producto 3")
let stock_3=prompt("Ingresa el stock del producto 3")
// 4. Ingresar los productos al array
array_productos.push(new Producto(producto_1, precio_1, stock_1)),
array_productos.push(new Producto(producto_2, precio_2, stock_2)),
array_productos.push(new Producto(producto_3, precio_3, stock_3))
// 5. Mostrar los productos
let padre = document.getElementById("productos")
for(const recorre of array_productos){
    let lista = document.createElement("li")
    lista.innerHTML="Producto: "+recorre.nombre+" // Precio: "+recorre.precio+" // Stock: "+recorre.stock
    padre.appendChild(lista)
}
