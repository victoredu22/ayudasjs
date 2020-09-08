const saludar3 = (nombre)=>`Hola, ${nombre}`
const saludar4 = ()=>`Hola Mundo`

console.log(saludar3('Vegeta'));
console.log(saludar4());


const getUser = ()=>(
  {
    uid : 'ABC123',
    username: 'El papi123'
  })
console.log(getUser());

const getUsuarioActivo = (nombre)=>(
  {
    uid : 'ABC123',
    username: nombre
  }
)

const usuarioActivo = getUsuarioActivo('victor');
console.log(usuarioActivo);

