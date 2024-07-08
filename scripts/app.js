// This Kata is intended as a small challenge for my students

// All Star Code Challenge #17

// Write a function that takes two arguments:

// An integer representing a month of the year (0-11, where 0 is January and 11 is December).
// An integer representing a day of the week (0-6, where 0 is Sunday and 6 is Saturday).
// The function should return an integer representing the first year, from 2014 to 2050,
//  where the first day of the given month falls on the specified day of the week.

// If no such year can be found, the function should return 0.

// Example 1:

// Finding year where first day in December is a Tuesday:

// input: month = 11, day = 2
// output: 2015
// Example 2:

// input: month = 4, day = 55
// output: 0
// Hint:

// Using a Date object can automatically figure out the day of the week for you



// we are going to want to do a for loop to iterate through the given years 2014 - 2050
// then for each year it will create a new Date object for the first day of the given month
// we will then check if the day of the week matches the desired day of the week
// if it matches then we will return the year
// if it doesn't match then it will return zero
function findYear(month, dayOfWeek){
    for (let i = 2014; i < 2051; i++)
        if (new Date(i, month, 1).getDay() == dayOfWeek) return i;

            return 0;

}