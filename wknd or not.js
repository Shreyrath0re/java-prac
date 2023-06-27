var day = prompt("enter a day:");
day = day.toLowerCase();
if(day === "monday"||
day === "tuesday"||
day === "wednesday"||
day === "thursday"||
day === "friday"){
    console.log("it is a weekday.");
}
else if(day === "saturday"||
day === "sunday"){
    console.log("it is not a weekday.");
}