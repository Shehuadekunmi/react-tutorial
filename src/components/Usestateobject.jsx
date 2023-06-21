import React, {useState} from 'react'

const Usestateobject = () => {
  const [person, setperson] = useState({
    name: 'adam owen',
    age: 34,
    role: 'sortware developer',
  })
  const change =()=>{
    setperson({})
  }
  return (
    <div>
        <h1>Use State Object</h1>
    </div>
  )
}

export default Usestateobject