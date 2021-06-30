import React, {useState} from 'react';

// WHile clicking increment count by 1

const App30 =() => {
    let [count, setCount] = useState(0);

    function changeValue(){
        setCount(count+1);
        console.log("Clicked",count++);
    }  
    return(
        <>
        <h1>{count}</h1>
        <button onClick = {changeValue}>CLick me</button>
        </>
    );

}

export default App30;