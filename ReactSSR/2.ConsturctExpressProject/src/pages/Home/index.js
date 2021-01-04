import React, { useState } from 'react'

export default function Home(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hello, React Component</p>
      <button onClick={ () => setCount(count + 1) }>Click, current Value: { count }</button>
    </div>
  )
}