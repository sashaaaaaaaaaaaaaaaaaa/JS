const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const n1 = await prompt("INPUT NUMBER :");
    const n2 = await prompt("INPUT NUMBER :");
    const n3 = await prompt("INPUT NUMBER :");
    const n4 = await prompt("INPUT NUMBER :");

   const temp1 = Number(n1) >= Number(n2)? n1 :n2;
   const temp2 = temp1 >= Number(n3)? temp1 : n3;
   const temp3 = temp2 >= Number(n4) ? temp2 : n4;
   console.log(temp3)



}

// Ende von eurem Code

execute().catch((err) => { console.error(err); }).finally(() => rl.close());