import React from 'react'

function Button(props) {
    return (
        <button className='captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md'>
            {props.name}
        </button>
    )
}

export default Button
