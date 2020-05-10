
// const newPomise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });



export function moviesList(){    
    //let request = null;
    // const promise = new Promise((resolve, reject) => {  
    //   const data =  [
    //     {id:1, name:"Shawsank Redimption"},
    //     {id:2, name:"Perfume"},
    //     {id:3, name:"Shawsank Redimption"}
    // ]      
    //     setTimeout(() => {            
    //       resolve(data);
    //     }, 300);
    // }).then(value => {
    //   console.log(value);
    //  return request = value;
    // });
    //console.log(promise);
      
    
    return {
    type: 'movie_list',
    payloads:   new Promise((resolve, reject) => {  
      const data =  [
        {id:1, name:"Shawsank Redimption"},
        {id:2, name:"Perfume"},
        {id:3, name:"Shawsank Redimption"}
    ]      
        setTimeout(() => {            
          resolve(data);
        }, 300);
    }).then(value => value)
    }
    
    
}

