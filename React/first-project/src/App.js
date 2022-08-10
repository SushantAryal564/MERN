import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [count, setCount ] = useState(0);
  const increaseCounter = ()=>{
    setCount(count+1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
}

export default App;
