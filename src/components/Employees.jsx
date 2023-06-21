import React from 'react'

const Employee = ({img, name, role}) => {
    return (
        <div>
<img src={img} alt={name} />
<h2>{name}</h2>
<p> Role: {role}</p>
    </div>
    ); 
};


const Employees = () => {
  return (
    <div> 
        <Employee 
        name= 'tite'
        role= 'Marketing'
        img= ''
        />
         <Employee 
        name= 'Ade'
        role= 'Frontend engineer'
        img= ''
        />
         <Employee 
        name= 'Toyosi'
        role= 'Product manager'
        img= ''
        />
         <Employee 
        name= 'Sola'
        role= 'Cyber security'
        img= "https://lifetouch.com/wp-content/uploads/2018/06/Underclass_girlwithbluebg.jpg "
        />
        

    </div>
  )
}

export default Employees