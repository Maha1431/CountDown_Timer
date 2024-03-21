import './App.css';
import { useState } from 'react';
import Inputform from './Inputform';
import CountDown from './CountDownTimer';

function App() {
  const[targetDateTime, setTargetDateTime] = useState('');
  const [timerRunning, setTimeRunning] = useState(false);
  

  const handleSubmit = (datetime) => {
    if(!timerRunning){
    setTargetDateTime(datetime);
    setTimeRunning(true)
    }
    else{
      setTimeRunning(false);
      setTargetDateTime('');
    }
  }
  const handleTimerEnd =() => {
    setTimeRunning(false)
  }
  return (
    <div className="App">
    <h1>CountDown Timer</h1>
    <Inputform onSubmit={handleSubmit} timeRunning={timerRunning} />
     <CountDown targetDateTime={targetDateTime} timerRunning={timerRunning} onTimerEnd={handleTimerEnd} />
    </div>
  );
}

export default App;
