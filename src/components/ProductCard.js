import React from 'react';
import '../styles/components/ProductCard.css'
import Switch from '@material-ui/core/Switch';

function ProductCard() {
    const [state, setState] = React.useState({
        checkedB: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return (
        <div className="productCard">
            <div className="product__Card"> 
                {/* <img 
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/454077/1.jpg?8703" 
                    alt="product"
                    className="product__img"
                /> */}
                <div className="productCard__title">
                    <h3>Product Name</h3>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />

                </div>
                <p>Category :</p>
                <p>Product Url :</p>

            </div>
            
        </div>
    )
}

export default ProductCard
