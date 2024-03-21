import React, { useEffect, useState } from "react";
import "../src/CountDownTimer.css";

function CountDown({ targetDateTime, timerRunning, onTimerEnd }) {
  const maxdays = 99;
  const maxhours = 23;
  const maxminutes = 59;
  const maxseconds = 59;


  const [timeleft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownOver, setCountdownOver] = useState(false);
  const [errormsg, setErrormsg] = useState("");
 



  const CalculateTimeleft = () => {
    const difference = new Date(targetDateTime) - new Date();

    if (difference > 0) {
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / (1000 * 60)) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      if(days > maxdays)
      {
        setErrormsg("selected time is more than 100 days");
        return
      }
      if(hours > maxhours) hours = maxhours;
      if(minutes > maxminutes) minutes = maxminutes;
      if(seconds > maxseconds) seconds = maxseconds;

      setTimeleft({ days, hours, minutes, seconds });
      setErrormsg("");
      
    } else {
       setTimeleft({days:0, hours:0, minutes:0, seconds:0})
      setCountdownOver(true);
      onTimerEnd();
    }
  };

 

  useEffect(() => {
    let timer;
    if (timerRunning && targetDateTime) {
      CalculateTimeleft();
      timer = setInterval(() => {
        CalculateTimeleft();
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [targetDateTime, timerRunning, onTimerEnd]);

  
  // const { days, hours, minutes, seconds } = timeleft;
  return (
    <div>
      <div className="timer">
        {errormsg ?(
    <div className="error">{errormsg}</div>
        ):countdownOver ? (
          <div className="countdownmsg">
            "The Countdown time is over! What's next on your adventure?"
          </div>
        ) : (
          <div className="timer">
            <button className="btn">
              <span className="val">{timeleft.days}</span> Days
            </button>
            <button className="btn">
              <span className="val">{timeleft.hours}</span> Hours
            </button>
            <button className="btn">
              <span className="val">{timeleft.minutes}</span> Minutes
            </button>
            <button className="btn">
              <span className="val">{timeleft.seconds}</span> Seconds
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CountDown;
