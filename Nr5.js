const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const input = await prompt("INPUT A LETTER :");

        switch (input) {
            case 'U':
                console.log("VOWEL")
                break;
            case 'A':
                console.log("VOWEL")
                break;
            case 'E':
                console.log("VOWEL")
                break;
            case 'I' :
                console.log("VOWEL")
                break;
            case 'O' :
                console.log("VOWEL")
                break;
            case 'U':
                console.log("VOWEL")
                break;
            case 'a':
                console.log("VOWEL")
                break;
            case 'e':
                console.log("VOWEL")
                break;
            case 'i' :
                console.log("VOWEL")
                break;
            case 'o' :
                console.log("VOWEL")
                break;
            default :
                console.log("CONSONANT")
        }
}
    //
    //     if (input === 'A'||input === 'E'|| input === 'I'|| input === 'O'|| input ==='U') {
    //         console.log("VOWEL")
    //     } else {
    //         console.log("CONSONANT")
    //     }
    // }
    //
    // if (input >= 'a' && input <= 'z') {
    //     if (input === 'a'||input === 'e'|| input === 'i'|| input === 'o'|| input ==='u') {
    //         console.log("VOWEL")
    //     } else {
    //         console.log("CONSONANT")
    //     }
    // }
    // Ende von eurem Code

execute().catch((err) => { console.error(err); }).finally(() => rl.close());