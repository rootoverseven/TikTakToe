import React, { useEffect, useState } from 'react'
import './cell.css'

export const Cell = (props) => {

    const whiteBgm = "https://imgs.search.brave.com/bh-7XpjJgnZMUrB_TmeMFu1wKpvaU1oCMoJ5eahBtEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmxhbmstd2hp/dGUtN3NuNW8xd29v/bm1rbHgxaC5qcGc";
    const cross = "https://imgs.search.brave.com/fmmIXsvQ0AAn7w4YR1i_FtLAeDNzXwUmmAtQfiHcqeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQwLzI1LzE4/LzM2MF9GXzM0MDI1/MTgwMF9MQ3dIN1Uz/TEZvN0RVbkdOYnBF/S1g1ZnJNSkpEOGE2/Si5qcGc"
    const circle = "https://imgs.search.brave.com/9CFnAvfAPrzuW_7xI86AH2GZD7dP0LGcyDhEB2u69Kw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzUwLTUwODM1/OF9jcmVhdGUtbm9z/LWRhcHAtZ3JlZW4t/eWVzLWNpcmNsZS1w/bmcucG5n"

    const cellStyle = {
        width: "32%",
        aspectRatio: "1"
    }

    function addValues(index) {
        if(props.win || props.moveCount >= 9){
            props.setImgArr([whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm])
            props.setMoveCount(0)
            props.setWin(false)
            return;
        }
        let tempImgArr = [...props.imgArr]
        let newTurn = props.turn;

        if (tempImgArr[index] !== whiteBgm) {
            // Prevent overwriting a cell that's already marked
            return;
        }
        if (props.turn == "x") {
            console.log(true)
            newTurn = "o"
            tempImgArr[index] = cross;

        } else if (props.turn == "o") {
            console.log(false)
            newTurn = "x"
            tempImgArr[index] = circle;

        }
        
        props.setImgArr([...tempImgArr])
        props.setMoveCount(props.moveCount+1)
        if(!props.checkWin(tempImgArr)){
            props.setTurn(newTurn)
        }
        
    }
    return (
        <div style={cellStyle} className="boxes" id={"box" + props.idNo} onClick={() => addValues(props.idNo)}>
            <img src={props.imgArr[props.idNo]} alt={props.turn} />
        </div>
    )
}
