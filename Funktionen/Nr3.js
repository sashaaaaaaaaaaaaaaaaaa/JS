const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    function biggst(a,b,c,d) {
        if(a > d && a > b && a > d ){
            return a;
        } else if(b > a && b > c && b > d ){
            return b;
        }else if(c > a && c > b && c > d ){
            return c;
        }else {
            return d
        }
    }

    console.log(biggst(12,7,15,22));


    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());