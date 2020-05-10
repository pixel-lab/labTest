

export function GetletterMatchingCount(guessedWords, secretWord){
    return ([...new Set(guessedWords)].filter((i) => [...new Set(secretWord)].indexOf( i) > -1)).length
}