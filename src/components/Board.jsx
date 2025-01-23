import React, {useState} from 'react'
import { Cell } from './Cell'

export const Board = () => {
    const whiteBgm = "https://imgs.search.brave.com/bh-7XpjJgnZMUrB_TmeMFu1wKpvaU1oCMoJ5eahBtEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmxhbmstd2hp/dGUtN3NuNW8xd29v/bm1rbHgxaC5qcGc";
    const [win, setWin] = useState(false)
    const [moveCount, setMoveCount] = useState(0)
    function checkWin(tempImgArr){
        let tempArr = [...tempImgArr]
        let win = false
        if(tempArr[0] != whiteBgm && tempArr[0]==tempArr[1] && tempArr[0]== tempArr[2]){
            win = true;
        }else if(tempArr[0] != whiteBgm && tempArr[0]==tempArr[3] && tempArr[0]== tempArr[6]){
            win = true;
        }else if(tempArr[1] != whiteBgm && tempArr[1]==tempArr[4] && tempArr[1]== tempArr[7]){
            win = true;
        }else if(tempArr[2] != whiteBgm && tempArr[2]==tempArr[5] && tempArr[2]== tempArr[8]){
            win = true;
        }else if(tempArr[3] != whiteBgm && tempArr[3]==tempArr[4] && tempArr[3]== tempArr[5]){
            win = true;
        }else if(tempArr[6] != whiteBgm && tempArr[6]==tempArr[7] && tempArr[6]== tempArr[8]){
            win = true;
        }else if(tempArr[0] != whiteBgm && tempArr[0]==tempArr[4] && tempArr[0]== tempArr[8]){
            win = true;
        }else if(tempArr[2] != whiteBgm && tempArr[2]==tempArr[4] && tempArr[2]== tempArr[6]){
            win = true;
        }
        setWin(win);
        return win;
    }
    const [imgArr, setImgArr] = useState([whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm, whiteBgm])
    const [turn, setTurn] = useState('x');
    const styleBoard = {
        display: "flex",
        flexWrap: "wrap",
        width: "500px"
    }

  return (
    <>
    <div className='board' style={styleBoard}>
      {[...Array(9)].map((_, index) => (
        <Cell key={index} idNo={index} turn={turn} setTurn={setTurn} imgArr={imgArr} setImgArr={setImgArr} checkWin={checkWin} win={win} setWin={setWin} moveCount={moveCount} setMoveCount={setMoveCount}/>
    ))}
    </div>
    <div style={{width: "500px", position: "absolute", display: win ? "block" : "none" }}> {turn} win</div>
    </>
  )
}
