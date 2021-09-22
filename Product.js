import React from 'react'
import './Product.css'
import UseStateValue from './StateProvider'

const Product = ({id, title, image, price, rating}) => {

    const [{basket}, dispatch] = UseStateValue()


    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating:rating
            }}
        )

        }
    
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>&#8358;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {
                       Array(rating) 
                       .fill()
                       .map((_) => (<span>:star</span>) )
                    }
                </div>
            </div>
            <img  src={image} alt='' height='200px' width='200px'/>
            <button style={{color: 'white', fontWeight: '600'}} onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
