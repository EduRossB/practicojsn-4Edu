

// let cuenta= {
//     titular: "Alex",
//     saldo: 0,
//     ingresar (valoringreso){
//         this.saldo += valoringreso
//     },
//     extraer (valorextraer){
//         if(valorextraer <= this.saldo){
//             this.saldo = this.saldo - valorextraer
//         }
//         else{
//             alert("Fondos insuficientes")
//         }
        
//     },
//     informar (){
//         document.write(`<p>La cuenta de banco de ${this.titular} posee $${this.saldo}</p>`)
//     }
// }

// cuenta.informar()

// let valoringreso = parseFloat(prompt("Monto a ingresar:"))
// cuenta.ingresar(valoringreso)

// cuenta.informar()

// let valorextraer = parseInt(prompt("Monto a extraer"))
// cuenta.extraer(valorextraer)

// cuenta.informar()

// CLASES

class Cuenta {
    constructor(nombreUsuario, saldo){
        this.nombre = nombreUsuario;
        this.saldoCuenta = saldo
    }
    ingresar (valoringreso){
        this.saldoCuenta += valoringreso
    }
    egreso (valorextraer){
        if(valorextraer <= this.saldoCuenta){
            this.saldoCuenta -= valorextraer
        }
        else{
            alert("Fondo insuficiente")
        }
    }
    informar (){
        document.write(`<p>La cuenta de banco de ${this.nombre} posee $${this.saldoCuenta}</p>`)
      }
}

let Alex = new Cuenta("Alex", 0)

Alex.informar()

let valoringreso = parseFloat(prompt("Monto a ingresar:"))
Alex.ingresar(valoringreso)

Alex.informar()

let valorextraer = parseInt(prompt("Monto a extraer"))
Alex.egreso(valorextraer)

Alex.informar()