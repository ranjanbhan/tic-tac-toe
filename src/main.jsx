import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Calculator from './calculator.jsx'
import TicTacToePrev from './tictactoeprev.jsx'
import TicTacToe from './tictactoe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Calculator /> */}
    <TicTacToe />
    {/* <TicTacToe /> */}
  </React.StrictMode>,
)
