const persona = {
  nombre:'Tony',
  edad: 45,
  clave: 'Ironman',
  rango:'Soldado'
}
const {nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);

//otra forma de destrocturar
const useContext = ({clave,nombre, edad, rango='Capitan'})=>{
  //console.log(nombre, edad, rango)
  return {
    nombreClave: clave,
    anios: edad,
    latlng:{
      lat:14.133,
      lng: -12.345
    }
  }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);


console.log(nombreClave, anios)
console.log(lat)