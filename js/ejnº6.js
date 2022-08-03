// Crear una clase Libro que contenga al menos las siguientes propiedades: ISBN, Título, Autor, Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad.

// Crear el método mostrarLibro() para mostrar la información del libro: “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro()

// Indicar cuál de los 2 objetos “libros” tiene más páginas

class Libro {
  constructor(ISBN, titulo, autor, numeropaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numpag = numeropaginas;
  }
  mostrarLibro(){
    document.write(`El libro "${this.titulo}" con ISBN  #${this.ISBN} creado por el autor  ${this.autor} tiene páginas ${this.numpag}.<hr>`)
  }

//   GETTERs y SETTERs
  get mostrarISBN() {
    return this.ISBN;
  }
  get mostrartitulo() {
    return this.titulo;
  }
  get mostrarautor() {
    return this.autor;
  }
  get mostrarnumpag() {
    return this.numpag;
  }
  set modificarISBN(nuevoISBN) {
    this.ISBN = nuevoISBN;
  }
  set modificartitulo(nuevotitulo) {
    this.titulo = nuevotitulo;
  }
  set modificarautor(nuevoautor) {
    this.autor = nuevoautor;
  }
  set modificarnumpag(nuevonumpag) {
    this.numpag = nuevonumpag;
  }
}

// CREACIÓN LIBROS

let libro1 = new Libro(9788425432026, "El hombre en busca de sentido", "Viktor Frankl", 160)
console.log(libro1)
libro1.mostrarLibro()

let libro2 = new Libro(9788417347291, "Mistborn 1 -El Imperio Final", "Brandon Sanderson", 400)
console.log(libro2)
libro2.mostrarLibro()

// PAGINAS
if(libro1.numpag>libro2.numpag){
    document.write(`El libro "${libro1.titulo}" posee más páginas que "${libro2.titulo}"<hr>`)
}
else if(libro1.numpag<libro2.numpag){
    document.write(`El libro "${libro2.titulo}" posee más páginas que "${libro1.titulo}"<hr>`)
}
else{
    document.write(`Los libros "${libro2.titulo}" y ${libro1.titulo} poseen las mismas cantidad de hojas<hr>`)
}