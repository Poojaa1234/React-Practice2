import React , {useState }from 'react';

const App33 = () => {
    let purple ="#8e44ad";
    const [bgColor,setbgColor] = useState(purple);
    const [content,setContent] = useState("Click me");
    

    function changeContent(){
        setContent("Hello there");
        let white ="#ffffff";
        setbgColor(white);


    }
    return(
        <div style = {{backgroundColor:bgColor, height:"100vh", width : "100%"}}>
        <button onClick = {changeContent}>{content}</button>
        </div>
    )

}

export default App33;