import { useState, useEffect } from "react";


export function Timer(){


    const [time,setTime] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [isRunning,setisRunning] = useState(false);

    useEffect(()=>{
        let interval = null;
        if (isRunning && time > 0){
            interval = setInterval(()=>{
                setTime((prevTime)=>prevTime - 1);
            },1000)
        }else if (time === 0){
            setisRunning(false);
        }
        return ()=>{
            if (interval) clearInterval(interval);
        };
    },[time,isRunning])
    





    const [values, setValues] = useState({
        hour:"",
        min:"",
        sec:""
    })

    // const [finalTime,setTime] = useState(0)
    const {hour,min,sec} = values
    
    function startTimer(){
        const totalSeconds = (parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec))
        // setTime(
        //     (c) => c +  totalSeconds
        // );
        console.log(totalSeconds);

    }


    
    function handleChange(event){
        const {name,value} = event.target
        setValues((c)=>({
            ...c,[name]:value
        }));
    }

    return (
      <div className="container">
        <input
          maxLength={2}
          name="hour"
          value={hour}
          onChange={handleChange}
          type="text"
          className="hour"
        />
        Hr
        <input
          maxLength={2}
          type="text"
          name="min"
          value={min}
          onChange={handleChange}
          className="hour"
        />
        Mins
        <input
          maxLength={2}
          type="text"
          value={sec}
          name="sec"
          className="hour"
          onChange={handleChange}
        />
        Sec
        <br />
        <br />
        <button onClick={startTimer}>start</button>
        <br />
        <br />
        <div>
            Timer: {finalTime}
        </div>
      </div>
    );
}