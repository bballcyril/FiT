import React from 'react'
import ReactStopwatch from 'react-stopwatch'
const LOCAL_STORAGE_KEY ='timer'
const Timer = () =>
    (    
    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
      render={({ formatted, hours, minutes, seconds }) => {
        return (
          <div>
            <h1>
             { formatted }
            </h1>
          </div>
        );
      }}
     />
  );

export default Timer
