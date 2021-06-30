import React, {useState} from 'react';

const App34 = () => {
    const [text, settext] = useState("");

    const [fulltext, setfulltext] = useState();
    
    function changeContent(event){
        settext(event.target.value);

    }
    function getText(){
        setfulltext(text);

    }
    return(
        <div style={{textAlign:"center"}}>
        
        <h1>Hello {fulltext}</h1>
        <input type="text" placeholder="Enter text here" onChange = {changeContent} value ={text}></input> <br></br> <br></br>
        <button onClick ={getText}>Submit</button>
        </div>
    )


}

export default App34;