const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const car = {
        // Euer Code kommt hier hinein

        brand: "Chevrolet",
        model : "Matiz",
        horsePower : 50,
        price: 1250 ,
        color: ["silver","yello","Jazz Blue"],
    };

    console.log(`My favorite vehicle is ${car.brand} ${car.model} and it has ${car.horsePower} hp and costs ${car.price}€`)
    console.log(`It is available in ${car.color} colors`)

    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());