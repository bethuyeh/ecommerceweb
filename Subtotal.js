import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {UseStateValue} from './StateProvider'


function Subtotal() {

    const getCartTotal = (basket) =>
        
        basket?.reduce((amount, item) => item.price + amount, 0);
    
    


    const [{basket}, dispatch] = UseStateValue();
    return (
        
        <div className='Subtotal'>
        <CurrencyFormat
        renderText={(value) => (
            <p>
                Subtotal({basket.length} items) : <strong>{ `${value}`}</strong>
            </p>
            )
        }
            decimalScale = {2}
            value={ getCartTotal (basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'N'}

        />
            <button className='checkout'>Proceed to Checkout</button>
            
        </div>
    )
    }


export default Subtotal
