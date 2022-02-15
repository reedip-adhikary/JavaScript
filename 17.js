let winNum = 19;

let userGuess = +prompt("Guess a number");  //input in string

if (userGuess === winNum) {
    console.log("Winner")
} else {
    if (userGuess > winNum) {
        console.log("Too high")
    } else {
        console.log("Too low")
    }
}