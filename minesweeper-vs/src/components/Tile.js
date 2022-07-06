import React, {useState, useEffect, cloneElement} from 'react'

export default function Tile({TileData, flagUpdate, revealTile, mouseIn, mouseOut, spacePressed}){
    return (
        <div 
            onContextMenu={(e)=>flagUpdate(e, TileData.x, TileData.y)} 
            onClick={()=>revealTile(TileData.x, TileData.y)} 
            onMouseOver={(e) => mouseIn(e, TileData.x, TileData.y)}
            onMouseOut={(e) => mouseOut(e, TileData.x, TileData.y)}
            style={style.tileStyle}
            tabIndex="0"
            >
            {TileData.revealed ? TileData.value : ""}
        </div>
    )
}

const style = {
    tileStyle: {
        width: 55,
        height: 55,
        border: "1px solid black",
        background: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        outline: "none"
    }
}