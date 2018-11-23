const reverseInt = num => {
    const rev = parseInt(num.toString().split('').reverse().join(''));
    
//    if(num < 0){
//        return rev * -1;
//    }
    return rev * Math.sign(num);
};

console.log(reverseInt(5100));