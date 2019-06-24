import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { goodbye } from './actions';

function App(props) {
  const hello = useSelector(state => state.helloReducer);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>{hello}</h1>
      <button onClick={() => dispatch(goodbye('Siemanko'))}>Zmień</button>
    </div>
  );
}

export default App;
