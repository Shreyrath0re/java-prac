const array1 = [3, 5, 2, 9, 4];
const array2 = [6, 2, 8, 1, 3];
function sumOfArray(array){
    let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
    return sum;
}
const sum1 = sumOfArray(array1);
const sum2 = sumOfArray(array2);
const result = sum1 + sum2;
console.log("sum of given arrays = ", result);