import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoListAppli from './ToDoListAppli';

const ToDoListApp = () =>{
    const [li, setli] = useState();
    const [elem, setelem] = useState([]);

    function changeContent(event){
        setli(event.target.value);   
    }
    function setname(){
        setelem((oldelem)=>{
             return(
                 [...oldelem,li]
             )
        })
        setli(" ");
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h2 style={{fontSize: "60px;", marginTop: "20px"}}>To Do List</h2>
                <br />
                <input type="text" placeholder="Enter text here" onChange={changeContent} value={li}></input>
                <Button style={{borderRadius: "50%", backgroundColor : "purple", minHeight: "40px",
                width: "30px"}} onClick ={setname}><AddIcon /></Button>
                <ol>
            
                    {elem.map((value,index)=>{
                       return(
                           <ToDoListAppli id = {index} key = {index} text = {value} />
                       )
                    })}
                </ol>
            </div>
        </div>
        </>
    )

}

export default ToDoListApp;