const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    // player1
    let secretNumber;
    do {
        secretNumber = parseInt(await prompt("player 1 enter a number between 1 to 100 : "));
    } while (secretNumber < 1 || secretNumber > 100);
    console.clear();

    //player2
    let trys = 0;
    while (true) {
        const guess = parseInt(await prompt("player 2 try to guess the number player 1 chose between 1 to 100 : "));
        if (guess < 1 || guess > 100) {
            console.log("invalid");
        } else {
            trys++;
            if (guess === secretNumber) {
                console.log(`player 2 guessed the number ${secretNumber} in ${trys} attempts!!!`);
                break;
            } else if (guess < secretNumber) {
                console.log("the number is larger");
            } else {
                console.log("the number is smaller");
            }
        }
    }
    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());