function filtraPares(array){
    return array.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1,55,61,8,13,6,45,32,11];

console.log(filtraPares(meuArray));