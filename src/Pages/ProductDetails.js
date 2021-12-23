import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios  from 'axios';

// let { id } = useParams();

function ProductDetails(props) {
    // const id = props.match.params.productId;
    useEffect(() => {
        // axios.get(`https://trakkkr.herokuapp.com/${id}`)
    }, [])
    return (
        <div>
            Detail Page
        </div>
    )
}

export default ProductDetails
