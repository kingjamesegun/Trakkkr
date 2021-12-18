import React from 'react'

function tab() {
    return (
        <div className=''>
            <input 
                type="radio"
                id="all"
                name="products"
            />
            <label for="all">All</label>
            <div className='tab'>
                All products are here
            </div>
        </div>
    )
}

export default tab
