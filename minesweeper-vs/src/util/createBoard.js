// accepts three arguments which determine the size of the board and number of mines in the board
// this will be used to generate a 
export default (row, col, mines) => {
    let board = [];
    let mineLocation = [];

    for(let x = 0; x < row; x++){
        let subCol = []
        for (let y = 0; y < col; y++){
            // set data for each square
            subCol.push({
                isMine: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false
            });
        }
        // add in column by column
        board.push(subCol)
    }

    // place mines in a random spot
    let mineCount = 0;
    while(mineCount < mines){
        // select a random location on grid
        // this may need to be revised for optimal bomb placement location e.g. one always in corner/edge
        let x = Math.floor(Math.random() * row - 1);
        let y = Math.floor(Math.random() * col - 1);
        
        // set value for mines on board and record location
        if (board[x][y].isMine === 0){
            board[x][y].isMine = "X";
            mineLocation.push([x, y])
            mineCount++;
        }

    }

    // need to set logic for numbers on board
}