import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Button = ({index,grid,setClicks}) => {
    return <button onClick = {() => {setClicks(index)}}>{grid[index]}</button>
}

const TicTacToe = () => {
    const [player1,setPlayer1] = useState(true)
    const emptyGrid = ['','','','','','','','','']
    const [grid,setGrid] = useState(emptyGrid)
    const [gameEnd,setGameEnd] = useState('')
    const gameStatusCheck = ()=>{
        if ((
            (grid[0]!=''&&grid[0] === grid[1] && grid[1] === grid[2]) ||
            (grid[3]!=''&&grid[3] === grid[4] && grid[4] === grid[5]) ||
            (grid[6]!=''&&grid[6] === grid[7] && grid[7] === grid[8]) ||
            (grid[0]!=''&&grid[0] === grid[3] && grid[3] === grid[6]) ||
            (grid[1]!=''&&grid[1] === grid[4] && grid[4] === grid[7]) ||
            (grid[2]!=''&&grid[2] === grid[5] && grid[5] === grid[8]) ||
            (grid[0]!=''&&grid[0] === grid[4] && grid[4] === grid[8]) ||
            (grid[2]!=''&&grid[2] === grid[4] && grid[4] === grid[6])
        )) {
            player1 ? setGameEnd('Player1 won the match') : setGameEnd('Player2 won the match');
        }
        else if (grid.every(elem => elem != '')){
            setGameEnd('Draw Match')
        }
    }
    const setClicks = (index) => {
        if (grid[index]===''){
        const dupGrid = [...grid]
        if (player1==true){
            dupGrid.splice(index,1,'X')
        } else {
            dupGrid.splice(index,1,'O')
        }
        setGrid(dupGrid)
        }
        else {
            alert('Cell is already taken.Please take another cell');
        }
    }
    const resetGame = () => {
        setGrid(emptyGrid)
        setGameEnd('New Match')
        alert("player1 is 'X' and player2 is 'O'")
    }
    useEffect(
        () => {
            if (grid.every(elem => elem=='')){
                setPlayer1(true)
            } else {
                gameStatusCheck()
                setPlayer1(!player1)
                if (gameEnd==='New Match'){
                    setGameEnd('Match Started')
                }
            }
        },[grid]
    )
    useEffect(
        () => {
            if(gameEnd==='Player1 won the match'||gameEnd==='Player2 won the match'||gameEnd==='Draw Match'){
                alert(gameEnd)
                resetGame()
                setPlayer1(true)
            }
        },[gameEnd]
    )
    const index = 0
  return (
    <>
    <div>
        <Button index = {0} grid = {grid} setClicks={setClicks}/>
        <Button index = {1} grid = {grid} setClicks={setClicks}/>
        <Button index = {2} grid = {grid} setClicks={setClicks}/>
    </div>
    <div>
        <Button index = {3} grid = {grid} setClicks={setClicks}/>
        <Button index = {4} grid = {grid} setClicks={setClicks}/>
        <Button index = {5} grid = {grid} setClicks={setClicks}/>
    </div>
    <div>
        <Button index = {6} grid = {grid} setClicks={setClicks}/>
        <Button index = {7} grid = {grid} setClicks={setClicks}/>
        <Button index = {8} grid = {grid} setClicks={setClicks}/>  
    </div>
    <div>
        grid : {grid}
    </div>
    gameStatus : {gameEnd}
    <div>
        <button onClick={resetGame}>reset</button>
    </div>
    </>
  )
}
export default TicTacToe
