import React, { useState, useEffect } from 'react';
import './home.css';
import {HiShoppingCart} from 'react-icons/hi';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {RiArrowDownSLine} from 'react-icons/ri';
import { useGlobalContext } from '../component/context';

export default function Home() {
    const {fetchProduct,cart, total, clearShopCart, removeProduct, decreaseProduct, increaseProduct, amount} = useGlobalContext();
    
    
      
    return (
        <>
        <section className='section1' >
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

            

           {cart.map((singleData) => {
               {console.log(cart)}
               const {id, title, price, img, amount} = singleData;
               return(
                   <>
                  
                   <div key={id} className='product-container'>
                       <div className='img-container'>
                            <img src={img} alt={title} />
                            <div className='product-text-container'>
                                <h4>{title}</h4>
                                < h4>${price}</h4>
                                <h5 className='btn1' onClick={() => removeProduct(id)}>Remove</h5>
                            </div>

                        </div>
                       
                       <div className='item-control'>
                            <MdKeyboardArrowUp className='iconUp' onClick={() => increaseProduct(id)}/>
                            <p>{amount}</p>
                            {console.log(amount)}

                            <RiArrowDownSLine className='iconDown' onClick={() => decreaseProduct(id)}/>

                       </div>
                        
                    
                   </div>

                 
                   
                   </>
               )

               
           })}


                <hr className='line' />
             <div className='total-text-container'>
                        <h5 className='total'>Total</h5>

                        <h5 className='totalNum'>$ {total}</h5>
                   </div>

                   <div className='btn-clear' onClick={clearShopCart}><button className='btn'>Clear</button></div>
        </section>

        </>
    )
}
