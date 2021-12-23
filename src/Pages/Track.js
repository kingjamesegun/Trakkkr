import axios from 'axios';
import React, {useState} from 'react'
import {Redirect} from 'react-router';

function Track() {
    const [url, setUrl] = useState("");
    const [price, setPrice] = useState(0);
    const [redirect, setRedirect] = useState(false)

    const onUrlChangeHandler =(e)=>{
        setUrl(e.target.value);
    }
    const onPriceChangeHandler = (e) =>{
        setPrice(e.target.value);
    }
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        const data = {
            url,
            requested_price: price
        }

        const response = await axios.post("https://trakkkr.herokuapp.com/", data,
        {
            headers: {
              Authorization : `Token ${localStorage.getItem('token')}`
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        if(response){
          setRedirect(true);
        }
    }

    // if the product was successfully added
    if(redirect){
      return <Redirect to="/product"/>
    }

    return (
        <div className='text-center'>
        <form className="bg-white border rounded w-80 px-8 pt-6 pb-8 mb-5" onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="url" 
              type="text" 
              name='url'
              placeholder="Place Jumia URL here"
              onChange={onUrlChangeHandler}
              value={url}
            />
          </div>
          <div className="mb-6">
            <input 
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="price" 
              type="number" 
              name='price'
              placeholder="Enter your tracking price"
              value={price}
              onChange={onPriceChangeHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
            
        </div>
    )
}

export default Track
