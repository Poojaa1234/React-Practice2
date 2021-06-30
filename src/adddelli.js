import React, {useState} from 'react';
import TodoList from './TodoList';

const App40 = () => {
    const [li, setli] = useState("");
    const [fullli, setfullli] = useState([]);

    function addli(){
        setfullli((oldItems) => {
            return [...oldItems,li];
        });
        setli("");
    }
    
    function addcontent(event){
        setli(event.target.value);

    }
    const deleteli=(id) => {
        setfullli((oldItems) => {
            return oldItems.filter((arrElem,ind) => {
                return ind !== id;
            })
        })
    }

    return(
        <div className="main_div">
        <div className="center_div">
        <br />
        <h1>To Do List</h1>
        <br />
        <input type="text" placeholder="Add Items" onChange={addcontent} value={li} ></input>
        <button onClick={addli}> + </button>

        <ol>
            {fullli.map( (itemval, index)=>{
               return  <TodoList key={index} id={index} text={itemval}
                   onSelect ={deleteli}
               />
            })}
        </ol>

        </div>

        </div>
    );

}

export default App40;