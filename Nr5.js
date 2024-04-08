const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Variant 1
    let check;
    let input;
    do {
        input = await prompt("INPUT A LETTER :");
        input = input.toLowerCase();
        check = input > 'a' && input < 'z';
    } while (!check);

    switch (input) {
        case 'u':
        case 'a':
        case 'e':
        case 'i' :
        case 'o' :
            console.log("VOWEL");
            break;
        default:
            console.log("CONSONANT");
    }

    // Variant 2 (Longer version)
    const userInput = await prompt("INPUT A LETTER :");


        switch (userInput.toLowerCase()) {
            case 'u':
            case 'a':
            case 'e':
            case 'i' :
            case 'o' :
                console.log("VOWEL");
                break;
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                console.log("CONSONANT");
                break;
            default:
                console.log("INVALID");
        }
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());