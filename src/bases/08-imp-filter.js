import heroes from "../data/heroes";

//console.log(owners)

//Busqueda de elementos simples solo uno
export const getHeroesById = (id)=> heroes.find( elem => elem.id === id);



//Busqueda de elemntos multiples varios 
//const getHeroesByOwner =  (owner)=> heroes.filter( elem => elem.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));