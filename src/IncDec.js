import React, {useState} from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDec = () => {
    const [num, setnum] = useState(0);

    function addinc(){
        setnum(num+1);
    }

    function subdec(){
        if(num>0){
        setnum(num-1);
        }
        else{
            setnum(0);
        }

    }

    function del(){
        setnum(0);
    }
    return(
        <>
        <Clock />
        <div className="main_div">
            <div className="center_div">
                <h1>{num}</h1>
                <div className="btn_div">
                <Tooltip title="Add" aria-label="add">
                <Button onClick={addinc}><AddIcon/></Button>
                </Tooltip>
                <Tooltip title="Subtract">
                <Button onClick={subdec}> <RemoveIcon /></Button>
                </Tooltip>
                <Tooltip title="Delete">
                <Button onClick ={del}><DeleteIcon /></Button>
                </Tooltip>
                </div>
            </div>
        </div>
        </>
    )

}

export default IncDec;