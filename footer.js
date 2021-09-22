import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <div className='footer'>
            <h1></h1>
            <div className='footer-top'>
                <p>Back to top</p>
            </div>
            <div className='footer-area'>
                <span> <b><Link to='/'>Let us help you</Link></b></span>
                <span> <b><Link to='/'>Get to know us</Link></b></span>
                <span> <b><Link to='/'>Make money with us</Link></b></span>
                <span> <b><Link to='/'>Investor Relations</Link></b></span>
            </div>
        </div>
    )
}

export default footer
