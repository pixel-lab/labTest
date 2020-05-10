export const CONSTRAINT = {
    CONSTRAINT_MOVIELIST : "CONSTRAINT_MOVIELIST"
}

export function movileList(){
    debugger;
   // console.log('hit');  
   return function (dispatch){   
   // console.log('hit1');       
            dispatch({            
                type:CONSTRAINT.CONSTRAINT_MOVIELIST,
                payloads:[
                    {id:1, Name: 'Shaswank'},
                    {id:2, Name: 'Die tomorrow'},
                    {id:3, Name: 'Perfume'}
                ]            
            });        
    }

}


// export function movileList(){
//     return {
//         type:CONSTRAINT.CONSTRAINT_MOVIELIST,
//         payload:[
//             {id:1,name:"Pulp Fiction"},
//             {id:2,name:"Pacific Rim"},
//             {id:3,name:"Rambo"} 
//         ]
//     }
// }