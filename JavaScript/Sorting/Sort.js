
// Problem Statement: Perform sorting of an array in descending order.

var originalArray = [5, 2, 9, 1, 5, 6]; 

// Used the sort method with a function for comparison
var descendingArray = originalArray.sort(function(a, b) {
  return b - a; // For descending order I used "b-a".
});

console.log(descendingArray);
