import './App.css';
import Header from  './header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout'
import Footer from './footer'
import {auth} from './firebase'
import { useEffect } from 'react';
import {UseStateValue} from './StateProvider'




function App() {

  const [{loggedinuser}, dispatch] = UseStateValue()

    useEffect (() => {
      const unsubscribe = auth.onAuthStateChanged((userauth) => {
        if (userauth){
          dispatch({
            type: 'SET_LOGIN',
            user: userauth
          })
        }else{
          dispatch({
            type: 'SET_LOGIN',
            user: null
          })
        }
      })
      return () => {
        unsubscribe();
      }

    }, [])

    

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path='/checkout'>
                <Header />
                
                <Checkout />
            </Route>

            <Route path='/login'>
                <Header />
                <Login />
            </Route>

            <Route path='/'>
                <Header />
                <Home/>
                <Footer />
            </Route>

          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
