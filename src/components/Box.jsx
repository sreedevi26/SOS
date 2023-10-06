import React from 'react'
import './Box.css'

function Box({value,onClick}) {
    const style = value === "S" ? "box s" : "box o";
  return (
    <div>
        <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Box