import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './style/index.css';
import Navbar from './components/NavBar';
import Home from './components/Home'
import NarociFlart from './components/NarociFlart'
import Izdelki from './components/Izdelki.jsx'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Commerce from '@chec/commerce.js';
import Cart from './components/Cart.jsx'
import Izdelek from'./components/Izdelek.jsx'
import Onas from './components/Onas.jsx'
import Fotter from './components/Fotter.jsx'
require('dotenv').config()




const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY);



function Index() {
  const [cart, setCart] = useState([])
  const [toCartItem, setToCartItem] =useState([])
  
const removeItem  = async (itemId)  =>  {
    await commerce.cart.remove(itemId)
    fetchCart()
}

  const addItemToCart = async(itemId)=>{
    console.log(itemId);
    await commerce.cart.add(itemId);
    setToCartItem([ itemId])
  }

  const fetchCart = async () =>{
      const data =  await commerce.cart.retrieve()
      setCart(data)
    }



  useEffect(()=>{
    fetchCart()
  },[toCartItem])

 
 
  return (
          <Router>
               <Navbar cartData={cart} />
               <Route path="/" exact component={Home}></Route>
              
               <Route path="/narociFlart" exact>
                 <NarociFlart handleAddItemToCart={addItemToCart}/>
               </Route>

               <Route path='/cart' exact>  
                 <Cart cartData={cart} HandleRemoveCart={removeItem}/>
               </Route>

               <Route path="/izdelki/printi" exact handleAddItemToCart={addItemToCart} >
                 <Izdelki kategorija="flarti" handleAddItemToCart={addItemToCart} />
               </Route>
               <Route path='/izdelki/vrece' exact>
                  <Izdelki handleAddItemToCart={addItemToCart} kategorija='vrece'/>
               </Route>
               <Route path='/izdelek/majice' exact>
                  <Izdelki handleAddItemToCart={addItemToCart} kategorija='majice'/>
               </Route>

               <Route path='/izdelek/:id' exact>
                 <Izdelek handleAddItemToCart={addItemToCart}/>
               </Route>

               <Route path='/Onas' exact>
                  <Onas/>
               </Route>
               <Fotter/>
          </Router>
  )
}



ReactDOM.render(<Index /> , document.getElementById('root'));