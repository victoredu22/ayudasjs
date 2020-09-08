const nombre = 'Victor';
const nombreComplete = `Hola mundo y ${nombre}`;

console.log(nombreComplete);


function getSaludo(nombre){
  return 'hola  ' + nombre
}


console.log(`Este es un texto ${getSaludo(nombre)}`)