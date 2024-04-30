// Write a function called checkTriangleType that takes three parameters representingh the length of sides of a triangle. The function should return a string indicating the type of triangle: "equilateral" ,"isosceles", or "scalene"

// if all three sides are equal length , return "equilateral"
// if two sides are equal length , return "isosceles"
// if all three side have different length, return "scalene"


function checkTriangle(a, b, c) {
    if (a === b && b === c) {
        return "equilateral";
    }
    else if (a === b || b === c || a === c) {
        return "isosceles";
    }
    else {
        return "scalene";
    }
}


let a = 3;
let b = 3;
let c = 3; 
console.log(checkTriangle(a, b, c));