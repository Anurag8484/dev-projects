import { useState, useEffect } from "react";
import { calculateTime, formatTime } from "../utils/auxilaryFunctions";
import alarmSoundFile from "../assets/abra.mp3";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState({ field: null, value: "" });
  const [initialTime, setInitialTime] = useState(0);
  const alarmSound = new Audio(alarmSoundFile);


  useEffect(()=>{
    const progress = initialTime > 0 ? (time/initialTime)*100 : 0;
    document.documentElement.style.setProperty('--progress',`${progress}%`);
  },[time,initialTime])

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 ) {
        setIsRunning(false);
        alarmSound.play()
    }

    return () => {
        console.log("interval")
      if (interval) clearInterval(interval);
    };
  }, [time, isRunning]);

  const handleEditField = (field) => {
    if (editState.field === field) {
      const newTime = {
        ...formatTime(time),
        [field]: editState.value.padStart(2, "0"),
      };

      const calculatedTime = calculateTime(
        newTime.hours,
        newTime.minutes,
        newTime.seconds
      );

      setTime(calculatedTime);
      setInitialTime(calculatedTime);
      setEditState({ field: null, value: "" });
    } else {
      setEditState({
        field,
        value: formatTime(time)[field].replace(/^0+/, ""),
      });
      setIsRunning(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 2);
    setEditState((prevState) => ({ ...prevState, value }));
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="container">
      <div className="timerContainer">
        <div className="timerWrapper">
          <div className="timer">
            {editState.field === "hours" ? (
              <input
                value={editState.value}
                onChange={handleInputChange}
                type="text"
                onBlur={() => handleEditField("hours")}
                autoFocus
                className="hour"
              />
            ) : (
              <span onClick={() => handleEditField("hours")}>{hours}</span>
            )}
            :
            {editState.field === "minutes" ? (
              <input
                value={editState.value}
                onChange={handleInputChange}
                type="text"
                onBlur={() => handleEditField("minutes")}
                autoFocus
                className="minutes"
              />
            ) : (
              <span onClick={() => handleEditField("minutes")}>{minutes}</span>
            )}
            :
            {editState.field === "seconds" ? (
              <input
                value={editState.value}
                onChange={handleInputChange}
                type="text"
                onBlur={() => handleEditField("seconds")}
                autoFocus
                className="seconds"
              />
            ) : (
              <span onClick={() => handleEditField("seconds")}>{seconds}</span>
            )}
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning && time>0 ? "Pause" : "Start"}
          </button>

          <button
            onClick={() => {
              setTime(0);
              setIsRunning(false);
              setInitialTime(0)
            }}
          >
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};
