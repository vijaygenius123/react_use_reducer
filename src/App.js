import { useReducer } from 'react';
import './App.css';

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC': return {
      ...state,
      count: state.count + 1
    };
    case 'DEC': return {
      ...state,
      count: state.count - 1
    }

    default: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={e => dispatch({ type: 'DEC' })}>-</button>
      {state.count}
      <button onClick={e => dispatch({ type: 'INC' })}> +</button>

    </div>
  );
}

export default App;
