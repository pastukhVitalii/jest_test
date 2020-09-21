 export let sum = (a: number, b: number) => {
    return a + b
}
export let mult = (a: number, b: number) => {
    return a * b
}

export let splitIntoWords = (sentence: string) => {
    const words = sentence.toLowerCase().split(' ')
    return words.filter( w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', ''))
 }