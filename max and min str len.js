const str1 = prompt("enter first string: ");
const str2 = prompt("enter second string: ");
const str3 = prompt("enter third string: ");
if(str1.length > str2.length && str1.length > str3.length){
    console.log("longest string is: ", str1);
    if(str2.length > str3.length){
    console.log("smallest string is: ", str3);
}
if(str2.length < str3.length){
    console.log("smallest string is: ", str2);
}
}
if(str2.length > str3.length && str2.length > str1.length){
    console.log("longest string is: ", str2);
    if(str3.length > str1.length){
    console.log("smallest string is: ", str1);
    }
    if(str3.length < str1.length){
        console.log("smallest string is: ", str3);
    }
}
if(str3.length > str1.length && str3.length > str2.length){
    console.log("longest string is: ", str3);
    if(str1.length > str2.length){
    console.log("smallest string is: ", str2);
    }
    if(str1.length < str2.length){
        console.log("smallest string is: ", str1);
    }
}
else{
    console.log("invalid input.")
}