import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

  return (
    <div>
        <h1>Counter : {count}</h1>
   
<button data-testid="reduce" onClick={()=>setCount(count-1)}>Reduce</button>
<button data-testid="add" onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

export default Counter
