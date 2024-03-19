const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const num = await prompt("INPUT NUMBER :");

    if (num >= '0' && num <= '9') {
        if (num % 2 == 0) {
            console.log("ITS EVEN")
        } else if (num % 2 ==! 0) {
            console.log("ITS ODD")
        } else if (num === num) {
            console.log("DECIMAL NUM")

        }
    }

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());