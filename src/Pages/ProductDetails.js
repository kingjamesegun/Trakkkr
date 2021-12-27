import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios  from 'axios';
import Button from '../components/Button';


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
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 pt-4'>
                <div className='col-span-1 border rounded-4xl'>
                    <div className=" rounded-lg" style={{backgroundImage: `url("${product.item_image_url}")`, height: "400px", width: "100%", backgroundSize: "cover"}}></div>
                    {console.log(product)}
                </div>
                <div className='col-span-2 px-6 py-0'>
                    <div className='text-3xl font-sans '>
                        {product.item_title}
                    </div>
                    <div>
                        <p className='font-serif text-base mt-1 mb-0 text-xs text-gray-400 font-semibold'>
                            Price on Jumia
                        </p>
                        <p className='font-serif text-lg mt-0'>#{product.last_price}</p>
                    </div>
                    <div className=''>
                        <p className='font-serif text-base mt-1 mb-0 text-xs text-gray-400 font-semibold'>
                            Requested Price
                        </p>
                        <p className='font-serif text-6xl mt-0'>#{product.requested_price}</p>
                    </div>
                    <div>
                        <Button name="Edit" />
                        <Button name="Delete"/><button type="submit" class="btn btn-primary"><span class="bi-search"></span> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
