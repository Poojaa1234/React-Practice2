import React, {useState} from 'react';

const App39 = () =>{
    const [fullname,setFullname] = useState({
        fname:"",
        lname:"",
        email:"",
        no:""
    })

    function onSubmits(event){
        alert("Data Submitted");
    }

    function inputEvent(event){
        console.log(event.target.value);
        const value=event.target.value;
        const name=event.target.name;

        setFullname((preValue)=>{
            console.log(preValue);

            return{
                ...preValue,
                [name]:value,
            }
        })
        }

    

    return(
        <>
        <form onSubmit={onSubmits} style={{textAlign:"center"}}>
        <h1>Hello {fullname.fname}</h1>
        <input type="text" placeholder="Enter text here" name="fname" onChange={inputEvent} value={fullname.fname}></input>
        <br></br> <br></br>
        <input type="text" placeholder="Enter lastname here" name="lname" onChange={inputEvent} value={fullname.lname}></input>
        <br></br><br></br>
        <input type="email" placeholder="Enter email here" name="email" onChange={inputEvent} value={fullname.email}></input>
        <br></br> <br></br>
        <input type="number" placeholder="Enter number here" name="no" onChange={inputEvent} value={fullname.no}></input>
        <br></br> <br></br>
        <button>Submit</button>
        </form>
        </>
    );

}
export default App39;