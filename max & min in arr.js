const array = [10,4,5,2,5,6,9];
let max = array[0];
let min = array[0];
for(let i = 1; i < array.length; i++){
  if(array[i] > max){
    max = array[i];
  }
  if(array[i] < min){
    min = array[i];
  }
}
console.log("max of given array is = ", max);
console.log("min of given array is = ", min);