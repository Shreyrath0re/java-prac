function findMax(...num){
    let max = num[0];
    for (let i = 1; i < num.length; i++){
        if(num[i] > max){
            max = num[i];
        }
    }
    return max;
}
console.log(findMax(3, 5));
console.log(findMax(3,5,9,1));