const arr1 = [1, 2, 3, 4, 5];
const shiftBy = 1;
function shiftArrayRight(array,shiftBy){
    if (shiftBy < 1){
        return array;
    }
    const shiftedArray = [...array];
    for(let i = 0; i < shiftBy; i++){
        const lastElement = shiftedArray.pop();
        shiftedArray.unshift(lastElement);
    }
    return shiftedArray;
}
const shiftedArray = shiftArrayRight(arr1, shiftBy);
console.log("original array : ", arr1);
console.log("shifted array : ", shiftedArray);