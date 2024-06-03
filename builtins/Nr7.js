const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let original ="Hello World";
    const name = await prompt("Input a name : ");
    let changed = original.replace("World",name);
    console.log(changed);
    console.log("Length : " + changed.length);
    console.log("First Char : " + original.charAt(0));
    const split = changed.split(" ");
    console .log("Split : " + split);
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());