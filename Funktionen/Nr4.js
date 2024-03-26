const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    function log(...smth) {
       let i;
        for (i of smth ){
            console.log(i);
        }
    }

    log(2,5,"TWD")

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());
