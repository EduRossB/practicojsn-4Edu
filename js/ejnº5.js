// Crea una clase llamada Persona(nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento)

// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anionacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anionacimiento = anionacimiento;
  }
  mostrarGeneracion() {
    if (this.anionacimiento >= 1930 && this.anionacimiento <= 1948) {
      document.write(
        "Generación Silent Generation<br>Caracteristica: Austeridad<hr>"
      );
    } else if (this.anionacimiento >= 1949 && this.anionacimiento <= 1968) {
      document.write("Generación Baby Boom<br>Caracteristica: Ambición<hr>");
    } else if (this.anionacimiento >= 1969 && this.anionacimiento <= 1980) {
      document.write(
        "Generación X<br>Caracteristica: Obsesión por el éxito<hr>"
      );
    } else if (this.anionacimiento >= 1981 && this.anionacimiento <= 1993) {
      document.write(
        "Generación Y/Millennials<br>Caracteristica: Frustración<hr>"
      );
    } else if (this.anionacimiento >= 1994 && this.anionacimiento <= 2010) {
      document.write("Generación Z<br>Caracteristica: Irreverencia<hr>");
    } else {
      document.write("No pertenece a ninguna generación");
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write("La persona es mayor de edad");
    }
  }
  mostrarDatos() {
    document.write(`<h3>${this.nombre}</h3><br>
    <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.DNI}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.anionacimiento}</li>
    </ul><hr>`);
  }
  generarDNI(min, max) {
    min = Math.ceil(9999999);
    max = Math.floor(100000000);
  return Math.floor(Math.random() * (100000000 - 9999999) + 9999999)
  }
}

let Eduardo = new Persona(
  "Juan Eduardo Ross Barbá",
  24,
  41060458,
  "H",
  74,
  182,
  1998
);

Eduardo.mostrarGeneracion();

Eduardo.mostrarDatos();
