const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const number1 = await prompt("INPUT NUMBER :");
    const number2 = await prompt("INPUT NUMBER :");
    const operator = await prompt("INPUT OPERATOR :");


    switch(operator) {
        case '+':
            result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;

        case '-':
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;

        case '*':
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;

        case '/':
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;
    }
}

    // Ende von eurem Code

execute().catch((err) => { console.error(err); }).finally(() => rl.close());