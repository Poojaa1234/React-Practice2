import React, {useState} from 'react';

const App36 = () => {
    const [fullname, setfullname] = useState({
        fname: "",
        lname: "",
        email: "",
    }
    )

    const inputEvent =(event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        const value= event.target.value;
        const name = event.target.name;

        setfullname((preValue) => {
            //console.log(preValue);
            if(name=== 'fname'){
                return{ 
                fname: value,
                lname : preValue.lname,
                email : preValue.email,
                }
            } else if(name=== 'lname'){
                return {
                    fname:preValue.lname,
                    lname:value,
                    email:preValue.email,
                }
            } 
                else if(name=== 'email'){
                    return {
                        fname:preValue.lname,
                        lname:preValue.lname,
                        email : value,
                    }
            }
        });
    }
    function onSubmits(event){
        event.preventDefault();
        alert("Data submitted")

    }
   
    return(
    <>
    <form onSubmit={onSubmits} style={{textAlign:"center"}}>
    <h1>Hello {fullname.fname} {fullname.lname} {fullname.email}</h1> 
    <input type="text" placeholder="Enter name here" onChange={inputEvent} name="fname" value={fullname.fname}></input> <br></br> <br></br>
    <input type="text" placeholder="Enter last name here" onChange={inputEvent} name="lname" value={fullname.lname}></input> <br></br> <br></br>
    <input type="text" placeholder="Enter email address here" onChange={inputEvent} name="email" value={fullname.email}></input> <br></br> <br></br>
    <button type="Submit">Submit</button>
    </form>
    </>
    );

};

export default App36;