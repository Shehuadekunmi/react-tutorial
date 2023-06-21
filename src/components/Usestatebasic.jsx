import React from 'react'
import { useState } from 'react'

const Usestatebasic = () => { 
    const [name, setName] = useState('user')
    const [num, setNum] =useState(0)
    


const handleClick = () => {
    setName('ola')
}
const increase = () => {
    setNum(num + 1)
} 
const decrease = () => {
    setNum(num - 1)
}
const reset = () =>{
    setNum(0)
} 
const reset1 = () =>{
    setName('user')
} 
  return (
    <div>
        <h1>welcome</h1>
        <h1>{name}</h1>
        <h1>{num}</h1>
        <button onClick={handleClick}>Change name</button>
        <button onClick={reset1}>Reset Name</button> <br />
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button> 
        <button onClick={reset}>Reset</button>
        



    </div>
  )
}

export default Usestatebasic