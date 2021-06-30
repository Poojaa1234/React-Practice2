import React , {useState} from 'react';

// Digital Clock
const App32 = () => {
    let curtime = new Date().toLocaleTimeString();
    const [time, settime] = useState(curtime);
    
function updateChange(){
    let newTime = new Date().toLocaleTimeString();
    settime(newTime);
};

setInterval(updateChange,1000);
    return (
        <>
        <h1 style = {{textAlign :"center"}}>{time}</h1>
        
        </>
    )

}

export default App32;
