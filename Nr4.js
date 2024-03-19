const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const num = await prompt("SO ENTER A NUM BETWEEN 1 & 7 :");
    switch (num){
        case '1':
            console.log("MONDAY")
            break;
        case '2':
            console.log("TUESDAY")
            break;
        case '3':
            console.log("WEDNESDAY")
            break;
        case '4':
            console.log("THURSDAY")
            break;
        case '5':
            console.log("FRIDAY")
            break;
        case '6':
            console.log("SATURDAY")
            break;
        case  '7':
            console.log("SUNDAY")
        default:
            console.log("NONE")
    }


    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());