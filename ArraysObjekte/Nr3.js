const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    let info = [
        ["Hans","Muller",22],
        ["Georg","Huber",37],
        ["Fritz","Mayr",19]

    ];
    console.table(info)
    const row = await prompt("CHOOSE A ROW : ")
    const column = await prompt("CHOOSE COLUMN : ")
    console.log(info[row][column])

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());