function typeOfTriangle(angle1, angle2, angle3){
    if(angle1 + angle2 + angle3 != 180){
        console.log("not a triangle.");
    }
    if(angle1 === angle2 && angle2 === angle3 && angle1 + angle2 + angle3 == 180){
        console.log("it is an equilateral triangle.");
    }
    if(angle1 === angle2 || angle1 === angle3 || angle2 === angle3 ){
        console.log("it is an isoceles triangle.");
    }
    else if(angle1!=angle2 && angle2!=angle3 && angle3!=angle1 && angle1+angle2+angle3 == 180){
        console.log("it is a scalene triangle");
        }
}
typeOfTriangle(30, 60, 90);