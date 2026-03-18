import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment } from './redux/counter'
import "./App.css"

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  const[num,setnum]=useState(5)

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{
      dispatch(increment())
     }}>increment</button>

      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>

      <input type="number" 
        value={num}
        onChange={(e)=>{
          setnum(e.target.value)
        }}
      />

      <button onClick={()=>{
        dispatch(increaseByAmount(Number(num)))
      }}>IncreaseByAmount</button>
    </div>
  )
}

export default App
