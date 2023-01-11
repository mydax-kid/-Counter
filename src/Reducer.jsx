import './App.css'
import {useReducer} from 'react';

const initialState = {
  count: 0,
  color: true,
  value: ''
}

//reducer function
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newValue':
      return { ...state, value: action.payload};
    case 'changeColor':
      return { ...state, color: !state.color};
    default:
      return state;
      // throw new Error()
  }
}

function Reducer() {

  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <main className = {state.color ? 'choice-1' : 'choice-2'}>
      
      <form>
        <input 
          type= 'text' 
          value = {state.value} 
          onChange = {(e) => dispatch({ type: 'newValue' , payload: e.target.value})}
        />
      </form>
      
      <div className= 'counter'>
        <p>{state.count}</p>
        <div className= 'btn-container'>
          <button onClick = { () => { dispatch({type: 'decrement'})} }>-</button>
          <button onClick = { () => { dispatch({type: 'changeColor'})} }>COLOR</button>
          <button onClick = { () => { dispatch({type : 'increment'})} }>+</button> 
        </div>
        <p className= 'display'>{ state.value }</p>
      </div>
      
    </main>
  )
}

export default Reducer;