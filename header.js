import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logonew from '../Images/logonew.png';
import './header.css';
import {Link} from 'react-router-dom'
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import {UseStateValue} from './StateProvider'
import {auth} from './firebase'

const header = () => {

   const [{basket, loggedinuser}, dispatch] = UseStateValue();

   

   const logoutUser = () =>{
      if (loggedinuser){
         auth.signOut();
      }
   }

    return (
         <nav className='header'>
            <img className="header-logo" src={logonew} alt="logo"  />
              <div className='header-search'>
                  <input type='text' className='header-searchInput' />
                  <SearchIcon className='header-searchIcon' />
              </div>
              <div className='header-nav'>
              <Link to={!loggedinuser && '/login'} className='header-link'>
                 <div onClick={logoutUser} className="header-option">
                    <span className="header-optone">Hello, {loggedinuser?.email}</span>
                    <span className="header-opttwo">{loggedinuser ? 'Signout' : 'SignIn'}</span>
                 </div>
              </Link>

              <Link to={! loggedinuser && './login'} className='header-link'>
                 <div onClick ={logoutUser} className="header-option">
                    <span className="header-optone">Returns</span>
                    <span className="header-opttwo">and Orders</span>
                 </div>
              </Link>

            </div>
            <Link to='/checkout' className='header-link'>
                <div className='header-basket'>
                    <ShoppingBasketIcon />
                    <span className='basketcount2'>{basket?.length}</span>
                    <p style={{fontSize:'10px', color:'#D7D9B1', marginRight:'10px'}}>Proceed</p>
                </div>
                
            </Link> 
    </nav>
    )
}

export default header;
