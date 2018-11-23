const reverseStringOne = str => {
//    const reversedArr = str.split('');
//    reversedArr.reverse();
//    return reversedArr.join("");
    
    return str.split('').reverse().join('');
};

//console.log(reverseStringOne('greetings!'));

const reverseStringTwo = str => {
    let reversed = '';
    
    for(let character of str) {
        reversed = character + reversed;
    }
    
    return reversed;
};

//console.log(reverseStringTwo('apple'));

const reverseStringThree = str => {
    return str.split('').reduce((reversed, character) => character + reversed, '');
};

console.log(reverseStringThree('hello'));