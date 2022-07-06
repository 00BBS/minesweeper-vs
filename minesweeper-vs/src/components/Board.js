import React, {useState, useEffect, cloneElement} from 'react'
import createBoard from '../util/createBoard.js'
import { revealAdjacent } from '../util/reveal.js';
import Tile from './Tile.js'

var mousedOverX = null;
var mousedOverY = null;
const boardSizeX = 10;
const boardSizeY = 21;
const minesNum = 25;
const flagCount = minesNum;

export default function Board () {
    // state is rendered initially as an empty array
    const [grid, setGrid] = useState([])
    const [origGrid, setOrigGrid] = useState([])
    const [nonMineCount, setNonMineCount] = useState(0)
    const [mineLocation, setMineLocations] = useState([])

    useEffect(() => {
        function newBoard(){
            // in custom mode this can be set by user
            const newBoard = createBoard(boardSizeX, boardSizeY, minesNum)
            setMineLocations(newBoard.mineLocation)
            setNonMineCount(boardSizeX * boardSizeY - minesNum)
            setGrid(newBoard.board)
            setOrigGrid(newBoard.board)
        }
        newBoard()
    }, []);

    const mouseIn = (e, x, y) => {
        let newGrid = JSON.parse(JSON.stringify(grid))
        newGrid[x][y].mouseOver = true
        mousedOverX = x
        mousedOverY = y
        setGrid(newGrid)
    }

    const mouseOut = (e, x, y) => {
        let newGrid = JSON.parse(JSON.stringify(grid))
        newGrid[x][y].mouseOver = false
        mousedOverX = null
        mousedOverY = null
        setGrid(newGrid)
    }

    const flagUpdate = (e, x, y) => {
        e.preventDefault();
        // deep copy
        let newGrid = JSON.parse(JSON.stringify(grid))
        if(newGrid[x][y].flagged){
            newGrid[x][y].flagged = false
            console.log(origGrid[x][y])
            newGrid[x][y].value = origGrid[x][y].value
            newGrid[x][y].revealed = false
            setGrid(newGrid)
        }
        else if (!newGrid[x][y].flagged && !newGrid[x][y].revealed){
            newGrid[x][y].flagged = true
            newGrid[mousedOverX][mousedOverY].value = "Flagged"
            newGrid[mousedOverX][mousedOverY].revealed = true
            setGrid(newGrid)
        }
        //setGrid(newGrid)
        console.log(newGrid[x][y])
    }

    const spacePressed = (e) => {
        if(mousedOverX != null && mousedOverY != null && e.keyCode == 32){
            flagUpdate(e, mousedOverX, mousedOverY)
        }          
    }

    const revealTile = (x, y) => {
        let newGrid = JSON.parse(JSON.stringify(grid))
        if(newGrid[x][y].revealed == false){
            if(newGrid[x][y].value == "X"){
                alert("Game ended!")
                for(let i = 0; i < mineLocation.length; i++){
                    newGrid[mineLocation[i][0]][mineLocation[i][1]].value = "X"
                    newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true

                }
                setGrid(newGrid)
            }
            else{
                let newRevealedBoard = revealAdjacent(newGrid, x, y, boardSizeX, boardSizeY, boardSizeX*boardSizeY-minesNum)                
                setGrid(newRevealedBoard.grid)
            }

        }        
    }

    return grid.map((row, index1) => {
        return (<div style={{display: 'flex'}} key={index1} onKeyDown={(e) => spacePressed(e)} tabIndex="0">
            {row.map((block,index2) => {
                return <Tile 
                    TileData={block} 
                    flagUpdate={flagUpdate} 
                    revealTile={revealTile} 
                    mouseIn={mouseIn}
                    mouseOut={mouseOut}
                    spacePressed={spacePressed}
                    key={index2}
                />
            })}

        </div>)
    });
}
