import React, {useEffect} from 'react'
import '../styles/components/Trakker.css';
import '../styles/Pages/Product.css';
import axios from 'axios';
import Toogle from '../components/Toogle';
import List from '../components/ProductList';


// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// const readCookie = ()=>{
//     // read the cookie
//     const user = Cookies.get("user");
// }

function Product() {
    let headers =  {}
    
    if (sessionStorage.token) {
        headers = { 'Authorization': `Token ${sessionStorage.token}` }
    }
    useEffect(() => {
        const response = axios.get("https://trakkkr.herokuapp.com/", {
        headers: headers
    });
        console.log(response);
    }, [])
    return (
        <div className="product container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="product__title">
                        Item
                    </div>
                    <div className="product__card">
                        {/* <ImageCard/> */}
                        <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/196475/1.jpg?4221"
                            alt="Productimage"
                            className=""
                            style={{
                                width: "100%",
                                border: "1px solid black",
                                borderRadius: "10px"
                            }}
                        />
                    </div>
                    <div className="product__itemName">
                        Fashion Striped Runing
                        <span className="trackingStatus">
                            <Toogle/>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product__title">
                        All Products
                        <span>12 products</span>
                    </div>
                    <div className="product__list">
                        <List/>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="product__title">
                        Price Signal
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
