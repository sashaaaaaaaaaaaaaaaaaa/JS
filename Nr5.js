const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const input = await prompt("INPUT A LETTER :");

    if (input >= 'A' && input <= 'Z') {
        if (input === 'A'||input === 'E'|| input === 'I'|| input === 'O'|| input ==='U') {
            console.log("VOWEL")
        } else {
            console.log("CONSONANT")
        }
    }

    if (input >= 'a' && input <= 'z') {
        if (input === 'a'||input === 'e'|| input === 'i'|| input === 'o'|| input ==='u') {
            console.log("VOWEL")
        } else {
            console.log("CONSONANT")
        }
    }
    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());