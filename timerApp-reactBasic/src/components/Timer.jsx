import { useState, useEffect } from "react";

export const Timer = () =>{

    const [time, setTime] = useState(0);
    







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
        <button onClick={() => setisRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <div></div>
      </div>
    );
}