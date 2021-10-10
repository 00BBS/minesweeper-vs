import React, {useState, useEffect} from 'react';
import createBoard from '../util/createBoard.js'

const Board = () => {
    // state is rendered initially as an empty array
    const grid = useState([]);
    const setGrid = useState([]);

    useEffect(() => {
        function newBoard(){
            // in custom mode this can be set by user
            const newBoard = createBoard(10, 10, 10)
            console.log(newBoard)
            setGrid(newBoard)
        }
        newBoard()
    }, [])

    if(!grid.board){
        return <div>Loading Board...</div>
    }
    return {
        grid.board.map(row=>{
            return <div>JSON.stringify(row)</div>
        })
    }
}

export default Board;