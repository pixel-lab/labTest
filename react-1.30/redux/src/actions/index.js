


export function directorslist(){
    return {
        type:'DIR_LIST',
        payload:[
            {id:1,name:"Tarantino"},
            {id:2,name:"Scorsese"}
        ]
    }
}
export function MovieList() {
    return {
        type: 'movie_list',
        payloads: [
            { id: 1, moviename: 'shawsank' },
            { id: 2, moviename: 'perfume' },
            { id: 3, moviename: 'big fish' }
        ]
    }
}

