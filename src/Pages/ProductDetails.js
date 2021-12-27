import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios  from 'axios';


function ProductDetails(props) {
    let {id} = useParams();

    useEffect(() => {
        async function fetchedproduct() {
            const res = await axios.get(`https://trakkkr.herokuapp.com/${id}`, {
                headers: {
                    Authorization : `Token ${localStorage.getItem('token')}`
                }
            })
            setProduct(res.data);
        }

        fetchedproduct();

    }, [id])

    const [product, setProduct] = useState("");

    return (
        <div className='container '>
            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1 border rounded-4xl'>
                    <div className=" rounded-lg" style={{backgroundImage: `url("${product.item_image_url}")`, height: "400px", width: "100%"}}></div>
                    {console.log(product)}
                </div>
                <div className='col-span-2'>knkdf</div>
            </div>
        </div>
    )
}

export default ProductDetails
