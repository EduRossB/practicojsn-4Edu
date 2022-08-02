// clase que permita crear distintos objetos “rectángulos” con las propiedades de alto y ancho

// métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    set modificarAlto(nuevoalto) {
        this.alto = nuevoalto;
    }   
    set modificarAncho(nuevoancho) {
        this.ancho = nuevoancho;
    }
    get mostrarDatos(){
        document.write(`<hr>El rectangulo tiene ${this.alto} de alto y ${this.ancho} de ancho`)
    }
    get mostrarArea(){
        document.write(`<hr>El área del rectangulo es ${area1}`)
    }
    get mostrarPerimetro(){
        document.write(`<hr>El perimetro del rectangulo es: ${perimetro}`)
    }
}


let altoR = parseFloat(prompt("Ingrese el alto"));

let anchoR = parseFloat(prompt("Ingrese el ancho"));

let Rectangulo1 = new Rectangulo(altoR, anchoR)

let area1 = Rectangulo1.ancho * Rectangulo1.alto
let perimetro = (Rectangulo1.alto*2)+(Rectangulo1.ancho*2)

console.log(Rectangulo1.alto)
console.log(Rectangulo1.ancho)
console.log(Rectangulo1.alto * Rectangulo1.ancho)

Rectangulo1.mostrarDatos 