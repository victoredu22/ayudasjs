const personajes = ['goku','vegeta','trunks'];

const [p1] = personajes;
const [,p2] = personajes;


const retornaArreglo = ()=>{
  return ['ABC', 123]
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const useState = (valor) =>{
  return [valor, ()=>{console.log('Hola Mundo')} ]
}

const [valor, setNombre] = useState('goku');

console.log(valor);
setNombre();

