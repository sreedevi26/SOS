import React from 'react'
import './ScoreBoard.css'

function ScoreBorad({scores,sPlaying}) {
    const {sScore,oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className={`scores s-score ${!sPlaying && "Inactive"}`}>S - {sScore}</span>
        <span className={`scores o-score ${sPlaying && "Inactive"}`}>O - {oScore}</span>
    </div>
  )
}

export default ScoreBorad