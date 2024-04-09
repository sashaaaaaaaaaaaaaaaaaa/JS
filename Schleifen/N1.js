const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    let input;

    do {
        input = await prompt("Enter a number between 1 and 7: ");
        if (input < 1 || input > 7) {
            console.log("INVALID");
        }
    } while (input < 1 || input > 7);

    console.log(days[input - 1]);
    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());