function findMin(...num){
    let min = num[0];
    for (let i = 1; i < num.length; i++){
        if(num[i] < min){
            min = num[i];
        }
    }
    return min;
}
console.log(findMin(3, 5));
console.log(findMin(3,5,9,1));