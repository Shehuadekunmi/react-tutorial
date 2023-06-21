import React, {useState} from 'react'

const Usestatearray = () => {
    const data = [
        {id: 1, name: 'ADE'},
        {id:2, name: 'SOLA'},
        {id:3, name:'SOLOMON'},
        {id:4, name: 'MOFE'},
    ];

    const [people, setPeople] = useState(data)
    const removePeople = (id) => {
        const filteredpeople = people.filter((people) => people.id !== id);
        setPeople(filteredpeople)
    }
  return (
    <div>
        <h1>Use State Array</h1>
        {people.map((people) =>{
            return (
                <div key={people.id}>
                    <h2>{people.name}</h2>
                    <button onClick={()=> removePeople(people.id)}>Remove people</button>
                </div>
            )
        })}
         <button onClick={() => setPeople([])}>Clear people</button>
                    <button onClick={()=> setPeople(data)}>Get people</button>

    </div>
  )
}

export default Usestatearray