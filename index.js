// code your solution here

// Define the functions
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol = "*") {
    return function(adjective) {
        return `You are ${symbol}, ${adjective},${symbol}!`;
    };
}
function wrapAdjective(symbol = "*") {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

// Additional requirements
const asteriskWrapper = wrapAdjective('*');
const doublePipeWrapper = wrapAdjective('||');

console.log(asteriskWrapper("amazing")); // You are *amazing*!
console.log(doublePipeWrapper("incredible")); // You are ||incredible