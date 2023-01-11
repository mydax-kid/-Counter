import './App.css'
import {useState} from 'react';

function Normal() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(true)

  
  return (
    <main className = {color ? 'choice-1' : 'choice-2'}>
      
      <form>
        <input 
          type= 'text' 
          value = {value} 
          onChange = {(e) => {setValue(e.target.value)}}
        />
      </form>
      
      <div className= 'counter'>
        <p>{count}</p>
        <div className= 'btn-container'>
          <button onClick = {() => { setCount(count - 1)}}>-</button>
          <button onClick = {() => {setColor(!color)}}>COLOR</button>
          <button onClick = {() => { setCount(count + 1)}}>+</button> 
        </div>
        <p className= 'display'>{ value }</p>
      </div>
      
    </main>
  )
}

export default Normal;