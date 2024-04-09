const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    let info = [
        {vorname: "Hans", nachname: "Muller", alter: 22},
        {vorname: "Georg", nachname: "Huber", alter: 37},
        {vorname: "Fritz", nachname: "Mayr", alter: 19}
    ];

    console.table(info);

    const numColumn = {
        vorname: 'vorname',
        nachname: 'nachname',
        alter: 'alter'
    };

    const row = await prompt("CHOOSE A ROW : ");
    const col = await prompt("CHOOSE COLUMN NAME (vorname, nachname, alter): ");
    if (row >= 0 && row < info.length){
        console.log(`ROW ${row} AND ${col} IS : ${info[row][numColumn[col]]}`);
    } else
        console.log("INVALID");

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());