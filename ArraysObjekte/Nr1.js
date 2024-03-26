const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
    const input = await prompt("CHOOSE A NUMBER BETWEEN 1 TO 7 :");

    if (input > 0 && input < 8) {
        console.log("ITS :", days[input-1]);
    } else {
        console.log("INPUT MUST BE BETWEEN !!!");
    }


    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());





