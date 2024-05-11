const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const fs = require('fs').promises;
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let products =[];

    try {
        const data = await fs.readFile('./products.json', 'utf8');
        products = JSON.parse(data);

        do {
            const ans = await prompt("add data (by typing a), find data (by typing f ), or save and exit (by typing x ) :");

            switch (ans) {
                case 'a':
                    const proNum = await prompt("product number: ");
                    const proName = await prompt("product name: ");
                    const proPrice = await prompt("product price: ");
                    products.push({ number: proNum, name: proName, price: proPrice });
                    console.log('you saved a product');
                    break;
                case 'f':
                    const findPro = await prompt("enter a product number to find: ");
                    let found = false;
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].number === findPro) {
                            console.log("product was found:", products[i]);
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log("product was not found!");
                    }
                    break;
                case 'x':
                    const dataToWrite = JSON.stringify(products, null, 2);
                    fs.writeFile('./products.json', dataToWrite, 'utf8')

                        .then(() => { // .then() used here
                            console.log("file was saved");
                            rl.close();
                        })
                        .catch((err) => { // .catch() used here
                            console.error("error :" + err);
                        });
                    break;
                default:
                    console.log("INVALID INPUT");
                    break;
            }
        } while (true);
    } catch (err) {
        console.error("error  : ", err);
    }
}
execute().catch((err) => { console.error(err); });