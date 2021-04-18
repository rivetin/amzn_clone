import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>The lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>✡</p>
                    <p>✡</p>
                    <p>✡</p>
                    <p>✡</p>
                    <p>✡</p>
                </div>

                <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="" />
                <button>Add to basket</button>

            </div>

        </div>
    )
}

export default Product
