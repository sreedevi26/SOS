import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBorad from './components/ScoreBorad';
import ResetButton from './components/ResetButton';

function App() {
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board,setBoard] = useState(Array(9).fill(null));
  const [sPlaying,setSPlaying] = useState(true);
  const [scores,setScores] = useState({sScore:0,oScore:0})
  const [gameOver,setGameOver] = useState(false)

  const handleBoxClick = (boxIdx) =>{
    const updatedBoard = board.map((value,idx)=>{
      if(idx === boxIdx){
        return sPlaying === true ? "S" : "O"
      }else{
        return value;
      }
    })
    const winner = checkWinner(updatedBoard)
    if(winner){
      if(winner==="O"){
        let {oScore} = scores;
        oScore += 1
        setScores({...scores,oScore})
      }else{
        let {sScore} = scores;
        sScore += 1
        setScores({...scores,sScore})
      }
    }

    // console.log(scores);

    setBoard(updatedBoard)
    setSPlaying(!sPlaying)
  }

  const checkWinner = (board) => {
  for (let i = 0; i < WIN_CONDITIONS.length; i++) {
    const [x, y, z] = WIN_CONDITIONS[i];

    if (board[x] && board[x] === board[y] && board[y] === board[z]) {
      setGameOver(true)
      return board[x];
    }
  }
}

const resetBoard = () =>{
  setGameOver(false)
  setBoard(Array(9).fill(null))
}
  // const board =["S","S","S","S","S","S","S","S","S"]
  return (
    <div className="App">
      <ScoreBorad scores={scores} sPlaying = {sPlaying}/>
      <Board board={board} onClick={gameOver? resetBoard : handleBoxClick}/>      
      <ResetButton resetBoard = {resetBoard}/>
      
    </div>
  );
}

export default App;
