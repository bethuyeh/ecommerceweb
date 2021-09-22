import React from 'react'
import Pasta from '../Images/Pasta.jpg';
import Pastastick from '../Images/Pastastick.jpg';
import Cilantro from '../Images/Cilantro.jpg';
import Burger from '../Images/Burger.jpg';
import './Home.css'
import Product from './Product'


const Home = () => {
    return (
        <div className='home'>
            <img className='home-image' src={Pasta} alt=''/>

            <div className='home-row'>
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={3}
                    image={Pastastick}
                />
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Burger}
                />
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Cilantro}
                />
            </div>    

            <div className='home-row'>
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Pastastick}
                />
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Burger}
                />
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Cilantro}
                />
            </div>    

            <div className='home-row'>
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Pastastick}
                />
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Burger}
                />
                <Product 
                    id="123123"
                    title='Get these babies,baby!'
                    price={5000}
                    rating={5}
                    image={Cilantro}
                />
            </div>    
        </div>
    )
}

export default Home
