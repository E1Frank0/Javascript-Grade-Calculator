// Frank Diaz, DIG 2101C, Professor William Hackney

// Implement a "use script" 
// Set up the arrays containing my earned grades and possible grades
"use strict";

 var earnedGrades = [5, 5, 2, 5, 2, 5, 0, 17, 5, 0, 5, 0];
 var possibleGrades = [5, 5, 2, 5, 2, 5, 2, 15, 5, 2, 5, 5];

// var index = 0;

var i;


// UNUSED CODE!!!

/*
var earnedGrades = new Array();
earnedGrades[5] = "5";
earnedGrades[5] = "5";
earnedGrades[2] = "2";
earnedGrades[5] = "5";
earnedGrades[2] = "2";
earnedGrades[5] = "5";
earnedGrades[0] = "0";
earnedGrades[17] = "17";
earnedGrades[5] = "5";
earnedGrades[0] = "0";
earnedGrades[5] = "5";
earnedGrades[0] = "0";

var possibleGrades = new Array();
possibleGrades[5] = "5";
possibleGrades[5] = "5";
possibleGrades[2] = "2";
possibleGrades[5] = "5";
possibleGrades[2] = "2";
possibleGrades[5] = "5";
possibleGrades[2] = "2";
possibleGrades[15] = "15";
possibleGrades[5] = "5";
possibleGrades[2] = "2";
possibleGrades[5] = "5";
possibleGrades[5] = "5";
*/

// ^^^UNUSED CODE!!!



// Set up an array containing the assignment names. This will only be used for listing.
var assignmentNames = ["Discussion 1: ", "Discussion 2: ", "Homework 1: ", "Discussion 3: ", "Homework 2: ", "Discussion 4: ", "Homework 3: ", "Test 1: ", "Discussion 5: ", "Homework 4: ", "Discussion 6: ", "Discusion 7: "];

// Set variables and for loops for the DOM text to be displayed neatly
var earnedText = "";
var possibleText = "";
var assignmentText = "";


//UNUSED VARIABLES!!!


// var arrayTextTwo = "",
// var arrayTextThree = "";
// var i;
// var average = 0.0;
// var earnedTotal = 0.0;
// var possibleTotal = 0.0;
// var total = 0.0;

//^^^UNUSED VARIABLES!!!



// Set up for loops that display the arrays as lists on the DOM
for (i = 0; i < assignmentNames.length; i++) {
        
    earnedText += assignmentNames[i] + "<br>";
    }
    document.getElementById("assignments").innerHTML = earnedText;

 for (i = 0; i < earnedGrades.length; i++) {
    possibleText += earnedGrades[i] + "<br>";
}
document.getElementById("earned").innerHTML = possibleText;

for (i = 0; i < possibleGrades.length; i++) {
    assignmentText += possibleGrades[i] + "<br>";
}
document.getElementById("possible").innerHTML = assignmentText;

// Set up for loops to get the sum of array numbers
var eSum = 0;
var pSum = 0;

for (var i = 0; i < earnedGrades.length; i++){
    eSum += earnedGrades[i];
}

for (var i = 0; i < possibleGrades.length; i++){
    pSum += possibleGrades[i];
}

// Display the sum results onto the DOM
document.getElementById("earnedPoints").innerHTML = eSum;
document.getElementById("possiblePoints").innerHTML = pSum;

// Divide the two previous variables and multiply by 100 to get the grade total.
var gradeDivide = eSum / pSum * 100;

// Print the grade total to the DOM
document.getElementById("gradeDivisionResults").innerHTML = gradeDivide.toFixed(2) + "% B";


/* The following is a bunch of code that I tried out to do the entire calculation. Sadly, none of these yielded any results, so I decided to leave them here as unused commented out code so that anyone viewing this code (including you Professor Hackney) can learn about my development process on how I was able to come up with several ways to get my code to work. It also explains why I have a lot of commented out code in this Javascript document.


// UNUSED CODE!!!


/* for( var i = 0; i <earnedGrades.length; i++){
    sum += parseInt( earnedGrades[i], 12 );
}

for( var i = 0; i <possibleGrades.length; i++){
    sum += parseInt( possibleGrades[i], 12 );
} 

document.getElementById("earnedPoints").innerHTML = sum;
document.getElementById("possiblePoints").innerHTML = sum;
*/





/* function getSum(total, num) {
    return total + num;
}

function addGrades(item) {
    document.getElementById("earnedPoints").innerHTML = earnedGrades.reduce(getSum);
    document.getElementById("possiblePoints").innerHTML = possibleGrades.reduce(getSum);
}
*/

// 
/* function earnedSum(values) {
    var getEarnedSum = 0;
    
    // Create a for loop that sums up the earned grades array
    for (var i = 0; i < values.length; i++)
        getEarnedSum += values[i];
    
    return getEarnedSum;
}

function possibleSum(values) {
    var getPossibleSum = 0;
    
    for (var i = 0; i < values.length; i++)
        getPossibleSum += values[i];
    
    return getPossibleSum;
}
*?

/*
// Set a function to divide the grade sums
function gradesMath() {
    
    average = earnedGrades / possibleGrades;
    
    document.querySelector(".gradeDivisionResults").innerHTML = average.toFixed(1);
    
}
*/

// ^^^ UNUSED CODE!!!
