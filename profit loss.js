var CP = parseInt(prompt("enter value of cost price:"));
var SP = parseInt(prompt("enter value of selling price:"));
if((SP - CP) > 0){
    result = SP - CP;
    console.log("rs", SP -CP, "profit")
}
else if((SP - CP) < 0){
    result = SP - CP;
    console.log("rs", SP - CP, "loss");
}
else{
    console.log("no loss no profit.");
}