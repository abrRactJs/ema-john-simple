import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock} = props.product
    return (
        <div className='product'>
            <div className='pro-img'>
                <img src={img} alt="" />
            </div>
            <div className='pro-text'>
                <h3> {name} </h3>
                <p>by <small>{seller}</small></p>
                <h4>Price : {price}</h4>
                <p> only <span>{stock}</span> product left in Stock </p>
                <button onClick={()=>props.handleAddProduct(props.product)}>Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;