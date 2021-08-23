import React from 'react';
import Home from './page/home';
import { useGlobalContext } from './component/context';
import './app.css';
import Loading from './component/image/loading.gif';
import {HiShoppingCart} from 'react-icons/hi';


export default function App() {
   const {cart, amount} = useGlobalContext() 

    const {loading} = useGlobalContext();
    if(loading){
        return(
            <div className='container3'>
               <div className='loading'>
                   <img src={Loading} alt="loading" />
               </div>

            </div>
            )
        }
    if(cart.length === 0){
        
        return(
            <>
            
            <section className='section1'>
                <div className='container'>
                    <header className='header'>
                        <h2 className='pageTitle'>Shopping Cart App</h2>
                       
                        <div className='cart-container'>
                            <div className='cart-figure'>
                                    <h5>{amount}</h5>
                            </div>
                            
                                <HiShoppingCart className='shopping-cart'/>
                        </div>
                    </header>
                </div>

            </section>

              <section className= 'container2 product-section'>
            <h1 className='cartBag'>Products</h1>

            <div className='emptyList'>
                <h4>There is no product on your list</h4>
            </div>

            </section>

        </>
        )
       
    }
    return (
        <div>
            <Home/>
        </div>
    )
}
