console.log('-----------------------1---------------------------')

const getCount = (str) => {
    let countOfVowels = 0;
    for (let letter of str.split('')) {
        for (let vowel of ['a', 'e', 'i', 'o', 'u']) {
            vowel === letter ? countOfVowels++ : null;
        }
    }
    return countOfVowels;
}

console.log(getCount('abracadabra'))

console.log('-----------------------2---------------------------')

const disemvowel = (str) => {
    let string = str.split('');
       for (let letter of string){
           for (let vowel of ['a', 'e', 'i', 'o', 'u']){
                string.filter(letter=>letter!==vowel)
           }
       }
    return string;
}

console.log(disemvowel('abracadabra'))