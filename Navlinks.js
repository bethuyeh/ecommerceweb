import React from 'react'
import {Link} from 'react-router-dom'
import './Navlinks.css'

const Navlinks = () => {
    return (
        <div>
        <div className='Navlink'>
            <div className='first-part'>
                <p>Deliver to Nigeria</p>
            </div>
            <div className='second-part'>
                <p><Link>Todays Deals</Link></p>
                <p><Link>Customer Service</Link></p>
                <p><Link>Gift Cards</Link></p>
                <p><Link>Registry</Link></p>
                <p><Link>Sell</Link></p>
            </div>
            <div className='third-part '>
                <p>Response to COVID-19</p>
            </div>
            </div>
        </div>
    )
}

export default Navlinks
