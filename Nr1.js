const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const pass = 'drinkwooah'
    const password = await prompt("Please enter your password: ");
    if (password === pass){
        console.log("YE")
    }else {
        console.log("NOOO")
    }

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());