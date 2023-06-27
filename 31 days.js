var month = prompt("enter month:")
month = month.toLowerCase();
if (month === "january"||
month === "march"||
month === "may"||
month === "july"||
month === "august"||
month === "october"||
month === "december"){
    console.log(month +" has 31 days.");
}
else{
    console.log(month + " does not have 31 days.")
}

