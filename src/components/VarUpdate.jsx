import {React, useState} from 'react'

function VarUpdate() {

  const [count,setCount] = useState(0);

  function handleDecrement(){
    
    if(count >0){

      setCount(c => c - 1);
    }
  }

  function handleIncrement(){
    setCount(c => c + 1);
  }

  function handleReset(){
    setCount(0);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>

    </div>
  )
}

export default VarUpdate
