function sortArray(arr){
    return arr.sort(function(a, b){
        return a - b;
    });
}
console.log(sortArray([100,83,32,9,45,61]));