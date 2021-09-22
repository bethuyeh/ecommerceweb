import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {UseStateValue} from './StateProvider'
import ProductCart from './ProductCart'

const checkout = () => {

    const [{basket}, dispatch] = UseStateValue();

    return(
        <div className='Checkout'>
            <div className='checkout-left'>
                {basket.length === 0? (
                    <div>
                    <h2 className='checkout-title'>Your shopping basket is empty</h2>
                    <p>Add to Cart?</p>
                </div>
                ) : (
                    <div>
                        <h2 className='shopping'>Items in the basket</h2>
                        {
                            basket.map(item =>(<ProductCart
                               id={item.id} 
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}
                            />))
                        }
                    </div>
                    )
                }
                
            </div>
            {
                basket.length > 0 && (
                    <div className='checkout-right'>
                <Subtotal />
            </div>
                )
            }
            
        </div>
    )
}

export default checkout;