import React from 'react'

const GuessWord = (props)=>{
    //console.log(props);
    if(!props.GussedWords){
        return <div data-test="guess-title">Guess the word</div>
    }
    else {
        const retrunHTml =  props.GussedWords.map((i,j) => 
        {
            return <tr data-test="result-count" key={j}><td>{i.gussedWord}</td><td>{i.letterMatchingCount}</td></tr>
        })

        return (
            <div>
            <h2 data-test="gussed-words-title">Gussed Words</h2>
            <table>
                <thead>
                    <tr>
                    <th>Guess Word</th>
                    <th>Count Match</th></tr>
                </thead>
                <tbody>
                    {retrunHTml}
                </tbody>
            </table>
            </div>
        )
    }



}

export default GuessWord