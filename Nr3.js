const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein



    const num = await prompt("SO ENTER A NUM BETWEEN 1 & 7 :");
    if (num == 1) {
        console.log("SUNDAY")
    } else if (num == 2) {
        console.log("MONDAY")
    } else if (num == 3){
        console.log("TUESDAY")
    } else if (num == 4){
        console.log("WEDNSDAY")
    } else if (num == 5){
        console.log("THURSDAY")
    } else if (num == 6){
        console.log("FRIDAY")
    } else if (num == 7){
        console.log("SATURDAY")
    } else {
        console.log("NONE")
    }
    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());