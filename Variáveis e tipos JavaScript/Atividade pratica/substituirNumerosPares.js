function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return - 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log(`${array[i]} ja é zero.`);
        }
        else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por zero`)
            array[i] = 0;
        }
    }
    return array;
}

let array = [0,1,2,3,4,5,6,7,8,9,10,22,33,44,55,66,77,125];

console.log(substituiPares(array));