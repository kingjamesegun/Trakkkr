import React from 'react'
import '../styles/components/Trakker.css';
import ProductImage from '../assets/product.jpg'

function Product() {
    return (
        <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-3  relative'>
                <div className='flex flex-col p-2 relative '>
                <div className="rounded full w-2 h-2 absolute right-6 top-6 bg-red-500"></div>
                    <img
                        src={ProductImage}
                        className='rounded-xl object-fit'
                        width="100%"
                        alt='product'

                    />
                    <div className='text-ms font-medium text-gray-700 pt-2'>
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
    )
}

export default Product
