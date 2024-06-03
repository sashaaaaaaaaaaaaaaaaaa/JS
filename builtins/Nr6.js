const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const input = await prompt("Binary to decimal (1 or 0 only) : ");
    const con = parseInt(input,2);
    console.log(con);

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());