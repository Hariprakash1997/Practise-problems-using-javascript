const chunkOne = (arr, size) => {
    const chunked = [];
    
    for(let element of arr) {
        const last = chunked[chunked.length - 1];
        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    
    return chunked;
};

console.log(chunkOne([1, 2, 3, 4,3,24,545,542, 2,3], 3));

const chunkTwo = (arr, size) => {
    const chunked = [];
    let index = 0;
    
    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }
    
    return chunked;
};

console.log(chunkTwo([1, 2, 3, 4,3,24,545,542, 2,3], 3));