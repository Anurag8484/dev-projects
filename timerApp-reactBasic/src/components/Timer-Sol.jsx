import { useState, useEffect } from "react";
import { formatTime, calculateTime } from "../utils/auxilaryFunctions";


export function Timer(){


    const [time,setTime] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [isRunning,setisRunning] = useState(false);
    const [editState,setEditState] = useState({ field: null, value: ''});





    useEffect(()=>{
        console.log("There's a change")
        let interval = null;
        if (isRunning && time > 0){
            interval = setInterval(()=>{
                setTime((prevTime)=>prevTime - 1);
            },1000)
        }else if (time === 0){
            setisRunning(false);
        }
        console.log(time)
        return ()=>{
            if (interval) clearInterval(interval);
        };
    },[time,isRunning])


    const handleEditField = (field) =>{

        if (editState.field === field){
            console.log("User finished the editting!")
            const newTime = {
                ...formatTime(time),[field]: editState.value.padStart(2,'0')
            };

            const calculatedTime = calculateTime(newTime.hours,newTime.minutes,newTime.seconds);
            
            setTime(calculatedTime);
            setInitialTime(calculatedTime);
            setEditState({field:null,value:''});
        } else {
            setisRunning(false);
            setEditState({ field, value : formatTime(time)[field].replace(/^0+/,'')})
        }
    }


    const handleInputChange = (event) =>{
        const value = event.target.value.replace(/\D/g,'').slice(0,2);
        setEditState((prevState)=>({...prevState,value }));
    };

    const {hours, minutes, seconds} = formatTime(time)




    return (
      <div className="container">
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
        <br />
        <br />
        <br />
        <button onClick={()=>setisRunning(!isRunning)}>{isRunning ? 'Pause' : 'Start'}</button>
        <div></div>
      </div>
    );
}