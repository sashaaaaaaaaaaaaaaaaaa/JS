const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const maze = [
        ["#", "o", "#", "#", "#", "#", "#"],
        ["#", " ", " ", " ", " ", " ", "#"],
        ["#", " ", "#", "#", "#", " ", "#"],
        ["#", " ", "#", "#", "#", " ", "#"],
        ["#", " ", " ", "#", " ", " ", "#"],
        ["#", " ", " ", " ", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "X", "#"],
    ];

    let ucol = 5;
    let urow = 6;

    do {
        for (let i = 0; i < maze.length; i++) {
            console.log(maze[i].join(" "));
        }
        const ans = await prompt("(u — вверх, d — вниз, l — влево и r — вправо) : ");

        switch (ans) {
            case 'u':
                if (maze[urow - 1][ucol] === "#") {
                    break;
                } else if (maze[urow - 1][ucol] === "o") {
                    maze[urow][ucol] = "o";
                } else {
                    maze[urow][ucol] = " ";
                    urow = urow - 1;
                    maze[urow][ucol] = "X";
                }
                break;
            case 'd':
                if (urow + 1 === 7) {
                    urow = 6;
                    ucol = ucol;
                    break;
                } else if (maze[urow + 1][ucol] === "#") {
                    break;
                } else if (maze[urow + 1][ucol] === "o") {
                    maze[urow][ucol] = "o";
                } else {
                    maze[urow][ucol] = " ";
                    urow = urow + 1;
                    maze[urow][ucol] = "X";
                }
                break;
            case 'l':
                if (maze[urow][ucol - 1] === "#") {
                    break;
                } else if (maze[urow][ucol - 1] === "o") {
                    maze[urow][ucol] = "o";
                } else {
                    maze[urow][ucol] = " ";
                    ucol = ucol - 1;
                    maze[urow][ucol] = "X";
                }
                break;
            case 'r':
                if (maze[urow][ucol + 1] === "#") {
                    break;
                } else if (maze[urow][ucol + 1] === "o") {
                    maze[urow][ucol] = "o";
                } else {
                    maze[urow][ucol] = " ";
                    ucol = ucol + 1;
                    maze[urow][ucol] = "X";
                }
                break;
            default:
                console.log("INVALID")
                break;
        }

        console.clear();

        if (maze[urow][ucol] === "o") {
            console.log("YOU WON !!!")
            break;
        }
    } while (maze[urow][ucol] !== "o");
    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
