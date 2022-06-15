const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComTHis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg)
}

const nums = [1, 2];

console.log('this -> maçã', mapComTHis(nums, maca));

console.log('this -> laranja', mapComTHis(nums, laranja));

function mapSemThis(array) {
    return array.map(function (item) {
        return item * 2;
    });
}

const nums1 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums1));
console.log(nums1);
