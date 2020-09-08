import {getHeroesById} from './bases/08-imp-filter';



/* const promesa = new Promise((resolve, reject)=>{
  setTimeout(() => {
    const p1 = getHeroesById(2)
    
    resolve(p1)
  }, 2000);
});

promesa.then((heroe)=>{
  console.log('heroe', heroe)
})
.catch(err=>console.warn(err));
 */


 const getHeroesByIdAsync = (id)=> {
  const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      const p1 = getHeroesById(id)
      if(!p1){
        reject('No se encontro el heroe');
      }
      resolve(p1)
    }, 2000);
  });

  return promesa;
 }

 getHeroesByIdAsync(4)
 .then( console.log)
 .catch(console.warn);

 
 ;
