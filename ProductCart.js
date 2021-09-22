import React from 'react'
import './ProductCart.css'
import {UseStateValue} from './StateProvider'



const ProductCart = (props) => {

    const [{basket}, dispatch] = UseStateValue();

    const removeItem = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: props.id
        })
    }

    return (
        <div className='productcart'>
        <img className='image' src={props.image} alt='' height='200px' width='200px'/>
        <div className='product-info'>

        <p className='title'>Title: {props.title}</p>
        <p className='price'>Price: {props.price} </p>
            <div>
                {
                    Array(props.rating)
                    .fill()
                    .map((_) =>(
                        <span><p></p></span> 
                    ))
                    }
            </div>   
            <button onClick={removeItem}>Remove from cart</button> 
        </div>
        </div>
    )
}

export default ProductCart

