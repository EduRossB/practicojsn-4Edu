// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
// nombre y precio, además del método imprime datos

// Posteriormente, cree tres instancias de este objeto y guárdalas en un array

// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimedatos(){
    document.write(`Los datos de este producto son:<br>
    <ul>
    <li>Código: ${this.codigo}</li>
    <li>Nombre: ${this.nombre}</li>
    <li>Precio: $${this.precio}</li>
    </ul><hr>`)
  }
}

let pan = new Producto(568321, "Pan francés", 250)
let gaseosa = new Producto(564878, "Gaseosa", 290)
let chupetin = new Producto(184875, "Chupetin", 100)


let productos = [pan, gaseosa, chupetin]

for(i=0; i<productos.length; i++){
    productos[i].imprimedatos()
}