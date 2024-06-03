const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const maze = [
        ["#", "O", "#", "#", "#", "#", "#"],
        ["#", " ", " ", " ", " ", " ", "#"],
        ["#", " ", "#", "#", "#", " ", "#"],
        ["#", " ", "#", "#", "#", " ", "#"],
        ["#", " ", " ", "#", " ", " ", "#"],
        ["#", " ", " ", " ", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "X", "#"],
    ];

    let ucol = 5;
    let urow = 6;
    let newCol = ucol;
    let newRow = urow;



    do {
        for (let i= 0; i < maze.length; i++){
            console.log(maze[i].join(" "));
        }


        const ans = await prompt("(u — up, d — down, l — left, r — right) : ");
        switch (ans){
            case 'u':
                newRow = urow - 1;
                break;
            case 'd':
                newRow = urow + 1 ;
                if (newRow >= 7){
                    newRow = 6;
                }
                break;
            case 'l':
                newCol = ucol - 1;
                break;
            case 'r':
                newCol = ucol + 1;
                break;
            default:
                console.log("INVALID INPUT")
        }
        console.log("row :" , newRow );
        console.log("col :" ,newCol );

        if (maze[newRow][newCol] === "#"){
            console.log("YOU HIT THE WALL")
        }else if (maze[newRow][newCol] === "O"){
            console.log("YOU WON !!!");
            break;
        }else if (maze[newRow][newCol] === " ") {
            maze[urow][ucol] = " ";
            urow = newRow;
            ucol = newCol;
            maze[urow][ucol] = "X"
        }
        console.clear();

    }while (true)

    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());