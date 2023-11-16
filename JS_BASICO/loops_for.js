var estudiantes = ['Maria', 'Sergio', 'David', 'Luz'];
function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
   saludarEstudiantes(estudiantes[i])
}

// esta es otra forma de aplicar el ciclo 

var estudiantes = ['Maria', 'Sergio', 'David', 'Luz'];
function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
   saludarEstudiantes(estudiante)
}