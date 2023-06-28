const array = [10,4,5,2,5,6,9];
let sum = 0;
for(let i = 0; i < array.length; i++){
  sum += array[i];
  result = sum / array.length;
}
console.log("sum of given array = ", result);