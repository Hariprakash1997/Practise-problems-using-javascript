const palindromeOne = str => {
    return str.split('').reverse().join('') === str;
};

console.log(palindromeOne('some'));

const palindromeTwo = str => {
    let reversed = '';
    for(let character of str) {
        reversed = character + reversed;
    }
    
    return reversed === str;
};

console.log(palindromeTwo('some'));

const palindromeThree = str => {
    return str.split('').reduce((rev, char) => char + rev,'') === str;
}

console.log(palindromeThree('some'));

