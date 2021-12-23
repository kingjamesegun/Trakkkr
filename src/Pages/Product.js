import React, {useEffect, useState} from 'react'
import '../styles/Pages/Product.css';
import {Link} from 'react-router-dom';
import axios from "axios";

function Product() {

    useEffect(() => {
        async function fetchdata(){
            const response = await axios.get('https://trakkkr.herokuapp.com/', 
            {
                headers: {
                  Authorization : `Token ${localStorage.getItem('token')}`
                }
            })
            setProduct(response.data)
        }

        fetchdata()
    }, [])

    const [product, setProduct] = useState([]);

    return (
        <div>
            <div className='header text-center py-5'>
                <div className='text-center py-6 text-4xl text-white main-text'>
                    Your Jumia Tracked Products
                </div>
                <p className=' text-center text-serif text-white text-lg'>
                    Tracking the progress of your product on Jumia. Get instant notification on your email.
                </p>
                <Link to="/track-form">
                    <button className='text-center text-white bg-green-500 py-2 px-4 rounded-full hover:bg-green-300'>
                        Track Product
                    </button>
                </Link>
            </div>
            <div className='container mt-5 py-3'>
                <div className='text-sans font-md text-green-500 text-xl'>
                    24 Products
                </div>
            </div>
            <div className='container '>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 relative'>
                    {product.map(prod=>(
                    <Link to={`/products/${prod.id}`} className="text-black non-style" key={prod.id}>
                        <div className='flex flex-col p-2 relative products  rounded-xl' style={{backgroundImage : `url("${prod.item_image_url}")`}}>
                            <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-red-500"></div>
                            <div className='text-ms  absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                                {prod.item_title}
                            </div>
                        </div>
                    </Link>

                    ))}
                    <div className='flex flex-col p-2 relative products  rounded-xl'>
                        <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-red-500"></div>
                        <div className='text-ms  absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                            A shoe set of mainsnjnsflnfn
                        </div>
                    </div>
                    <div className='flex flex-col p-2 relative products2  rounded-xl'>
                        <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-green-500"></div>
                        <div className='text-ms absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                            A shoe set of mainsnjnsflnfn
                        </div>
                    </div>
                    <div className='flex flex-col p-2 relative products2  rounded-xl'>
                        <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-red-500"></div>
                        <div className='text-ms absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                            A shoe set of mainsnjnsflnfn
                        </div>
                    </div>
                    <div className='flex flex-col p-2 relative products  rounded-xl'>
                        <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-red-500"></div>
                        <div className='text-ms  absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                            A shoe set of mainsnjnsflnfn
                        </div>
                    </div>
                    <div className='flex flex-col p-2 relative products2  rounded-xl'>
                        <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-green-500"></div>
                        <div className='text-ms absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                            A shoe set of mainsnjnsflnfn
                        </div>
                    </div>
                    <div className='flex flex-col p-2 relative products2  rounded-xl'>
                        <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-red-500"></div>
                        <div className='text-ms absolute bottom-4 left-5 font-medium text-gray-700 pt-2'>
                            A shoe set of mainsnjnsflnfn
                        </div>
                    </div>
                    <div className=''>
                        dd
                    </div>
                    <div className=''>
                        dd
                    </div>
                    <div className=''>
                        dd
                    </div>
                    <div className=''>
                        dd
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
