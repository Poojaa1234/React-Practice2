import React , {useState} from 'react';

const App35 = () =>{
    const [name, setname] = useState("");
    const [fn, setfn] = useState();

    const [lname, setlname] = useState("")
    const [fullname, setfullname] = useState();

    function onSubmits(event){
        event.preventDefault();
        setfn(name)
        setfullname(lname);
        
    }
    function getFname(event){
        setname(event.target.value);
    }
    function getLname(event){
        setlname(event.target.value);
    }
    return(
    <>
    <div style={{textAlign:"center"}}>
    <form onSubmit = {onSubmits}>
        
        <h1>Hello {fn} {fullname}</h1>
        <input type="text" placeholder="Enter name here" onChange={getFname} value={name}></input> <br></br> <br></br>
        <input type="text" placeholder="Enter lastname here" onChange={getLname} value={lname}></input> <br></br> <br></br>
        <button type="submit">Submit</button>
        </form>
        </div>
    </>
    );

}

export default App35;