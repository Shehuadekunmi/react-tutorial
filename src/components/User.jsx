import React from 'react'

// respond to user interaction- event listener, event handler
// btn,addEventListener ('click', eventHandler)

const User = () => {
  // for function that do not have parametr 
  const handleClick = () => {
    console.log('user clicked');
  };
  // for function that do have parametr 
  const handleClick2 = (name) => {
    console.log(name + ' clicked');
  }
  return (
    <div>
      <h1>Responding to users Interaction</h1>
      {/* for function that do not have parametr  */}
      <button onClick={handleClick}>Click me!</button>

      {/* for function that do have parameter */}
<button onClick={() => handleClick2('Ayo')}>CLICKED AGAIN </button>


    </div>
  )
}

export default User