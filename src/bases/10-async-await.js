const getInfo = async ()=>{

  try{
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await resp.json();
    const title = data.title;
    document.body.append(title)
  }catch(error){
    console.log(error);
  }

  
}

getInfo();