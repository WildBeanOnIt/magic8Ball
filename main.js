const userName = prompt("What is your name?");   //*Usr Name
let userQuestion = prompt("Ask your question?");    //*Asking the question.
let randomNum = Math.floor(Math.random() * 8);  //* Creates random #

let eightBall = "";

// console.log(`Random # - ${randomNum}`)  //showing the random num.

//Welcoming the user.
if (userName === "") {
    console.log(`Hello!`)
} else {
    console.log(`Hello, ${userName}!`);
}

//printing the question asked.
console.log(`Question asked: ${userQuestion}`);

if (randomNum === 0 ){
    eightBall = "It is certain";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 1){
    eightBall = "It is decidedly so";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 2){
    eightBall = "Not looking to good...";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 3){
    eightBall = "Cannot predict now";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 4){
    eightBall = "Do not count on it";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 5){
    eightBall = "my sources say no";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 6){
    eightBall = "outlook not so good";
    console.log(`Eight Ball: ${eightBall}`);
} else if (randomNum === 7){
    eightBall = "Signs point to yes";
    console.log(`Eight Ball: ${eightBall}`);
}