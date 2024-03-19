const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein


    const temp = await prompt("How cold is it: ");
    if (temp < 0) {
        console.log("COLD")
    } else if (temp > 0 && temp < 20) {
        console.log("COMFY")
    } else {
        console.log("HOT")
    }
    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());