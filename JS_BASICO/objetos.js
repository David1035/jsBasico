var miAuto = {
    marca: 'Toyota',
    modelo: 'Carolla',
    annio: 2020
};

// se accede con . y la palabra clave miAuto.marca
miAuto.marca

var miAuto = {
    marca: 'Toyota',
    modelo: 'Carolla',
    annio: 2020,
    detalleDeAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

miAuto.detalleDeAuto()

// para llamar a las carácteristicas del auto 


