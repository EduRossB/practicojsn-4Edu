let estado = false

let auto = {
    marca: "Ford",
    modelo: "Focus",
    color: ["Negro", "Blanco", "Azul", "Gris"],
    encender: () => {
        document.write("*sonido de motor*")
        estado = true
    },
    apagar: () =>{
        document.write("*silencio*")
        estado = false
    },
    }


