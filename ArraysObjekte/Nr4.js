const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    let info = [
        ["Hans", "Muller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19]
    ];

    console.table(info);

    const numColumn = {
        vorname: 0,
        nachname: 1,
        alter: 2
    };

    const row = await prompt("CHOOSE A ROW : ");
    const col = await prompt("CHOOSE COLUMN NAME (vorname,nachname,alter): ");

    if(row >= 0 && row < info.length ){
        console.log(`ROW ${row} AND ${col} IS : ${info[row][numColumn[col]]}`);
    } else
        console.log("INVALID");

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());