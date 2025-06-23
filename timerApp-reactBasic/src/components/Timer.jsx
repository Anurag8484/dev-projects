import { useState, useEffect } from "react";


export function Timer(){

    const [values, setValues] = useState({
        hour:"",
        min:"",
        sec:""
    })

    const [finalTime,setTime] = useState(0)

    function startTimer(){
        const totalSeconds = (parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec))
        setTime(
          (c) => c +  totalSeconds
        );
       console.log(totalSeconds);
    }

    const {hour,min,sec} = values

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
        <button onClick={startTimer}>start</button>
      </div>
    );
}