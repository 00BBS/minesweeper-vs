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
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false,
                mouseOver: false
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
        let x = Math.floor(Math.random() * row);
        let y = Math.floor(Math.random() * col);
        // set value for mines on board and record location
        if (board[x][y].value === 0){
            board[x][y].value = "X";
            mineLocation.push([x, y])
            mineCount++;
        }

    }

    // need to set logic for numbers on board
    // iterate through each of the squares and increase the value
    for(let roww = 0; roww < row; roww++){
        for(let coll = 0; coll < col; coll++){
            // if current square is an X exit loop and continue to next iteration
            if(board[roww][coll].value === "X"){
                continue;
            }
            // check above square
            if(roww > 0 && board[roww-1][coll].value === "X"){
                board[roww][coll].value++;
            }
            
            // check top left of square
            if(roww > 0 && coll > 0 && board[roww-1][coll-1].value === "X"){
                board[roww][coll].value++;
            }

            // check top right of square
            if(roww > 0 && coll < col - 1 && board[roww-1][coll+1].value === "X"){
                board[roww][coll].value++;
            }

            // check left of square
            if(coll > 0 && board[roww][coll-1].value === "X"){
                board[roww][coll].value++;
            }

            // check right of square
            if(coll < col - 1 && board[roww][coll+1].value === "X"){
                board[roww][coll].value++;
            }

            // check below square
            if(roww < row - 1 && board[roww+1][coll].value === "X"){
                board[roww][coll].value++;
            }

            // check bottom left of square
            if(roww < row -1 && coll > 0 && board[roww+1][coll-1].value === "X"){
                board[roww][coll].value++;
            }

            // check bottom right of square
            if(roww < row - 1 && coll < col - 1 && board[roww+1][coll+1].value === "X"){
                board[roww][coll].value++;
            }
        }
    }
    return {board, mineLocation}
}