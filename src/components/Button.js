import React, {useState} from 'react';
import axios from "axios";
import { Redirect } from 'react-router';

function Button(props) {
    const [redirect, setredirect] = useState(false);

    const onDeleteButton = async()=>{
        const res = await axios.delete(`https://trakkkr.herokuapp.com/${props.id}`, {
            headers: {
                Authorization : `Token ${localStorage.getItem('token')}`
            }
        })

        if(res){
            setredirect(true);
        }
    }
    
    if(redirect){
        return <Redirect to="/product"/>
    }

    return (
        <button 
            className='captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md'
            onClick={onDeleteButton}
        >
            {props.name}
        </button>
    )
}

export default Button
