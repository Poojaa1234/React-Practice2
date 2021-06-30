import React, {useState} from 'react';

// WHile clicking showing the current time
const App31 = () => {
    let curtime = new Date().toLocaleTimeString();
    const [time,setTime] = useState(curtime);

    function getTime(){
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
        console.log("Clicked")
    }
    return (
        <>
        <p>Time is : {time}</p>
        <button onClick = {getTime}>Get Time</button>
        </>
    )
}

export default App31;