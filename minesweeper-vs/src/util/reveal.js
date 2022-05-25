export const revealAdjacent = (grid, x, y, mapSizeX, mapSizeY, nonMineCount) => {

    if(grid[x][y].value === 0)
    {
        for(let i=-1; i <= 1; i++)
        for(let j=-1; j <= 1; j++)
        {
            if(checkCoords(x+i,y+j, mapSizeX, mapSizeY) && grid[x+i][y+j].revealed === false){
                nonMineCount--;
                grid[x+i][y+j].revealed = true;
                if(grid[x+i][y+j].value === 0) {        
                    revealAdjacent(grid, x+i,y+j,mapSizeX, mapSizeY, nonMineCount)
                }          
            }
        }
    }
    else {
        if(grid[x][y].revealed === false)
        {
            grid[x][y].revealed = true;
            nonMineCount--;
        }
    }
    return {grid, nonMineCount};
}

const checkCoords = (x, y, mapSizeX, mapSizeY) => {
    if(x >= 0 && x < mapSizeX && y >= 0 && y < mapSizeY){
        return true;
    }
    else{
        return false;
    }
}

// export const revealAdjacent = (arr, x, y, newNonMinesCount) => {
//     // chekc if current tile has been revealed
//     if(arr[x][y].revealed){
//         return
//     }

//     let revealed = []
//     revealed.push(arr[x][y])

//     while(revealed.length !== 0){
//         let tile = revealed.pop()
        
//         if(!tile.revealed){
//             newNonMinesCount--
//             tile.revealed=true
//         }
//         // if the value is not equal to 0, the tile should still be revealed
//         if(tile.value !== 0){
//             break
//         }

//         // top left of current tile
//         if(
//             tile.x > 0 && 
//             tile.y > 0 &&
//             arr[tile.x - 1][tile.y - 1].value === 0 &&
//             !arr[tile.x - 1][tile.y - 1].revealed
//         ){
//             revealed.push(arr[tile.x - 1][tile.y - 1])
//             // arr[tile.x - 1][tile.y - 1].revealed = true
//             // newNonMinesCount--
//         }
//         // bottom right of current tile
//         if(
//             tile.x < arr.length - 1 &&
//             tile.y < arr[0].kength - 1 &&
//             arr[tile.x + 1][tile.y + 1].value === 0 &&
//             !arr[tile.x + 1][tile.y + 1].revealed
//         ){
//             revealed.push(arr[tile.x + 1][tile.y + 1])
//             // arr[tile.x + 1][tile.y + 1].revealed = true
//             // newNonMinesCount--
//         }
//         // bottom left
//         if(
//             tile.x < arr.length - 1 &&
//             tile.y > 0 &&
//             arr[tile.x + 1][tile.y - 1].value === 0 &&
//             !arr[tile.x + 1][tile.y - 1].revealed
//         ){
//             revealed.push(arr[tile.x + 1][tile.y - 1])
//             // arr[tile.x + 1][tile.y - 1].revealed = true
//             // newNonMinesCount--
//         }
//         // top right
//         if(
//             tile.x > 0 &&
//             tile.y < arr[0].length - 1 &&
//             arr[tile.x - 1][tile.y + 1].value === 0 &&
//             !arr[tile.x - 1][tile.y + 1].revealed
//         ){
//             revealed.push(arr[tile.x - 1][tile.y + 1])
//             // arr[tile.x - 1][tile.y + 1].revealed = true
//             // newNonMinesCount--
//         }
//         // above
//         if(
//             tile.x > 0 &&
//             arr[tile.x - 1][tile.y].value === 0 &&
//             !arr[tile.x - 1][tile.y].revealed
//         ){
//             revealed.push(arr[tile.x - 1][tile.y])
//             // arr[tile.x - 1][tile.y].revealed = true
//             // newNonMinesCount--
//         }
//         // below
//         if(
//             tile.x < arr.length - 1 &&
//             arr[tile.x + 1][tile.y].value === 0 &&
//             !arr[tile.x + 1][tile.y].revealed
//         ){
//             revealed.push(arr[tile.x + 1][tile.y])
//             // arr[tile.x + 1][tile.y].revealed = true
//             // newNonMinesCount--
//         }
//         // left
//         if(
//             tile.y > 0 &&
//             arr[tile.x][tile.y - 1].value === 0 &&
//             !arr[tile.x][tile.y - 1].revealed
//         ){
//             revealed.push(arr[tile.x][tile.y - 1])
//             // arr[tile.x][tile.y - 1].revealed = true
//             // newNonMinesCount--
//         }
//         // right
//         if(
//             tile.y < arr[0].length - 1 &&
//             arr[tile.x][tile.y + 1].value === 0 &&
//             !arr[tile.x][tile.y + 1].revealed
//         ){
//             revealed.push(arr[tile.x][tile.y + 1])
//             // arr[tile.x][tile.y + 1].revealed = true
//             // newNonMinesCount--
//         }


//         // Start Revealing Items
//         if (
//             tile.x > 0 &&
//             tile.y > 0 &&
//             !arr[tile.x - 1][tile.y - 1].revealed
//         ){  
//             arr[tile.x - 1][tile.y - 1].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.y > 0 && 
//             !arr[tile.x][tile.y - 1].revealed
//         ){
//             arr[tile.x][tile.y - 1].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.x < arr.length - 1 &&
//             tile.y > 0 &&
//             !arr[tile.x + 1][tile.y - 1].revealed
//         ){
//             arr[tile.x + 1][tile.y - 1].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.x > 0 && 
//             !arr[tile.x - 1][tile.y].revealed
//         ){
//             arr[tile.x - 1][tile.y].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.x < arr.length - 1 && 
//             !arr[tile.x + 1][tile.y].revealed
//         ){
//             arr[tile.x + 1][tile.y].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.x > 0 &&
//             tile.y < arr[0].length - 1 &&
//             !arr[tile.x - 1][tile.y + 1].revealed
//         ){
//             arr[tile.x - 1][tile.y + 1].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.y < arr[0].length - 1 && 
//             !arr[tile.x][tile.y + 1].revealed
//         ){
//             arr[tile.x][tile.y + 1].revealed = true;
//             newNonMinesCount--;
//         }

//         if (
//             tile.x < arr.length - 1 &&
//             tile.y < arr[0].length - 1 &&
//             !arr[tile.x + 1][tile.y + 1].revealed
//         ) {
//             arr[tile.x + 1][tile.y + 1].revealed = true;
//             newNonMinesCount--;
//         }
//     }
//     return {arr, newNonMinesCount}
// }