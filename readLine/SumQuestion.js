const readLine = require('readline');
const rl = readLine.createInterface({input: process.stdin, output: process.stdin});

let num1 = Math.floor((Math.random() * 100) + 1);
let num2 = Math.floor((Math.random() * 100) + 1);
let answer = num1 + num2

rl.question(`What is ${num1} + ${num2}?　\n`, (userInput) => {
    if(userInput.trim() == answer){
        rl.close();
    } else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect. try again.\n`);
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer){
                rl.close();
            } else {
                rl.setPrompt(`Your answer of ${userInput} is incorrect. try again.\n`);
                rl.prompt();
            }
        })
    }
})

rl.on('close', () => {
    console.log(`Correct! Hope you'll play again!`)
})