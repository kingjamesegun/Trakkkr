import React from 'react'
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
// import '../styles/components/Product.css'
function ProductList() {
    return (
        <div className="list">
            <div className="list__image">
                <img src="" alt="listimage"/>
            </div>
            <div className="list__details">
                <div className="details__title">
                    Fashion Striped Running
                </div>
                <div className="details__price">
                    NGN7,500
                </div>
                
            </div>
            <div className="list__icon">
                <NavigateNextRoundedIcon/>
            </div>
        </div>
    )
}

export default ProductList
