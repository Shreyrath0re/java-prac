function replace(arr, oldItem, newItem){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === oldItem){
            arr[i] = newItem;
        }
    }
    console.log(arr);
}
replace([1,5,3,5,6,8], 5, 10);