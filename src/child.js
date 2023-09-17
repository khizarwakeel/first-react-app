import React from 'react'
import Anotherchild from './anotherchild';

function Child({name}) {
    function myName() {
        alert("Hello World!")
    }
  return (
    <div>
      <h1>Hello World from {name}</h1>
      <button onClick={myName}>Click Here</button>
      <Anotherchild name ={name} />
    </div>
  )
}

export default Child;
