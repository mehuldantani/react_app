import { useState } from "react"



const Counter = () => {
    const [count,setcount] = useState(5)
  return (
    <>
    <div>Counter Value : {count}</div>
    <button onClick={() => setcount(0)} >Reset Counter</button>
    <button onClick={() => setcount(count + 1)}>Increase Counter</button>
    <button onClick={() => setcount(count - 1)} >Decrease Counter</button>
    </>
  )
}

export default Counter