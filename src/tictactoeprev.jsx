import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TicTacToePrev = () => {
    const [player1,setPlayer1] = useState(true)
    const [rc11,setRc11] = useState('')
    const [rc12,setRc12] = useState('')
    const [rc13,setRc13] = useState('')
    const [rc21,setRc21] = useState('')
    const [rc22,setRc22] = useState('')
    const [rc23,setRc23] = useState('')
    const [rc31,setRc31] = useState('')
    const [rc32,setRc32] = useState('')
    const [rc33,setRc33] = useState('')
    const [gameEnd,setGameEnd] = useState('')

  const gameStatusCheck = () => {
    console.log("rc32", rc32)
    if ((rc11!=''&&rc11===rc12&&rc11===rc13)||
    (rc21!=''&&rc21===rc22&&rc21===rc23)||
    (rc31!=''&&rc31===rc32&&rc31===rc33)||
    (rc11!=''&&rc11===rc21&&rc11===rc31)||
    (rc12!=''&&rc12===rc22&&rc12===rc32)||
    (rc13!=''&&rc13===rc23&&rc13===rc33)||
    (rc11!=''&&rc11===rc22&&rc11===rc33)||
    (rc13!=''&&rc31===rc22&&rc22===rc13)){
        if (player1){
            setGameEnd('player1 wins the game')
        } else {
            setGameEnd('player2 wins the game')
        }
    }
    else if (rc11!=''&&rc12!=''&&rc13!=''&&rc21!=''&&rc22!=''&&rc23!=''&&rc31!=''&&rc32!=''&&rc33!=''){
        setGameEnd('Draw Match')
    }
  }

  const resetGame = () => {
    setRc11('')
    setRc12('')
    setRc13('')
    setRc21('')
    setRc22('')
    setRc23('')
    setRc31('')
    setRc32('')
    setRc33('')
    setGameEnd('')
  }
  useEffect(
    () => {
      gameStatusCheck()
      setPlayer1(!player1)
    }, [rc11, rc12, rc13, rc21, rc22, rc23, rc31, rc32, rc33]
  )

  useEffect(
    () => {
      setPlayer1(true)
    },[gameEnd]
  )

  return (
    <>
      <button onClick={()=>{
        if (rc11===''){
            if (player1===true){
                setRc11('X')
            } else {
                setRc11('O')
            }
        }
      }}>
        {rc11}
      </button>

      <button onClick={()=>{
        if (rc12===''){
            if (player1===true){
                setRc12('X')
            } else {
                setRc12('O')
            }
        }
      }}>
        {rc12}
      </button>

      <button onClick={()=>{
        if (rc13===''){
            if (player1===true){
                setRc13('X')
            } else {
                setRc13('O')
            }
        }
      }}>
        {rc13}
      </button>


      <div>
      <button onClick={()=>{
        if (rc21===''){
            if (player1===true){
                setRc21('X')
            } else {
                setRc21('O')
            }
        }
      }}>
        {rc21}
      </button>

      <button onClick={()=>{
        if (rc22===''){
            if (player1===true){
                setRc22('X')
            } else {
                setRc22('O')
            }
        }
      }}>{rc22}</button>

      <button onClick={()=>{
        if (rc23===''){
            if (player1===true){
                setRc23('X')
            } else {
                setRc23('O')
            }
        }
      }}>
        {rc23}
      </button>
      </div>

      

      <div>
      <button onClick={()=>{
        if (rc31===''){
            if (player1===true){
                setRc31('X')
            } else {
                setRc31('O')
            }
        }
      }}>
        {rc31}
      </button>

      <button onClick={()=>{
        if (rc32===''){
            if (player1===true){
                setRc32('X')
            } else {
                setRc32('O')
            }
        }
      }}>
        {rc32}
      </button>

      <button onClick={()=>{
        if (rc33===''){
            if (player1===true){
                setRc33('X')
            } else {
                setRc33('O')
            }
        }
      }}>{rc33}
      </button>
      </div>
      
    <button onClick={resetGame}>reset</button>
      <p>gamestatus : {gameEnd}</p>
    </>
  )
}

export default TicTacToePrev
