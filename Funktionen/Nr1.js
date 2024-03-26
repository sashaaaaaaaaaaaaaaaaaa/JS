const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    function even(index){
        return index % 2 === 0;
    }

    console.log(even(0));
    console.log(even(7));

    function even(index){
        const res = index % 2 === 0;
        return res ;
    }
    console.log(even(4));
    console.log(even(11));


    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());



